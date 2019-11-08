// dom queries

const chatList = document.querySelector(".chat-list");

const chatUI = new ChatUI(chatList);
// chat class instance
const chatroom_instance = new Chatroom("general", "shaun");

console.log(chatroom_instance);
//get chats and render
chatroom_instance.getChats(data => {
  console.log(data);
  chatUI.render(data);
});
