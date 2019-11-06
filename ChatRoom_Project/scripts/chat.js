class Chatroom {
  constructor(room, username) {
    this.room = room;
    this.username = username;
    this.chats = db.collection("chats");
  }

  async addChat(message) {
    const now = new Date();
    const chat = {
      message,
      username: this.username,
      room: this.room,
      created_at: firebase.firestore.Timestamp.fromDate(now)
    };

    const response = await this.chats.add(chat);
    return response;
  }

  getChats(callback) {
    this.chats.onSnapshot(snapshot => {
      snapshot.docChanges().forEach(change => {
        if (change.type === "added") {
          callback(change.doc.data());
        }
      });
    });
  }
}

const chatroom_instance = new Chatroom("gaming", "shaun");
console.log(chatroom_instance);

// chatroom_instance
//   .addChat("hello everyone")
//   .then(() => console.log("chat added"))
//   .catch(err => console.log(err));

chatroom_instance.getChats(data => {
  console.log(data);
});
