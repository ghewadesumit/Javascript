// dom queries

const chatList = document.querySelector(".chat-list");
const chatForm  = document.querySelector(".new-chat");
const nameForm = document.querySelector(".new-name");
const updateMessage = document.querySelector('.update-mssg');
const rooms =  document.querySelector('.chat-rooms');


chatForm.addEventListener('submit', e => {
  e.preventDefault();
  const message = chatForm.message.value.trim();
  chatroomInstance.addChat(message)
              .then(()=> form.reset())
              .catch(err => console.log(err));

})

//update usename
nameForm.addEventListener('submit', e =>{
  e.preventDefault();
  const name = nameForm.name.value.trim();
  chatroomInstance.updateName(name);
  nameForm.reset();
  //show and hide for few seconds
  updateMessage.innerText=` your name was updated to ${name}`;
  setTimeout(()=>{
    updateMessage.innerText="";
  },2000);

})

// update the chat room

rooms.addEventListener('click', e => {
  if(e.target.tagName === "BUTTON"){
    chatUI.clear();
    chatroomInstance.updateRoom(e.target.getAttribute('id'));
    chatroomInstance.getChats(chat => chatUI.render(chat))
  }

})
//check local storage for name
const username = localStorage.username ? localStorage.username  : 'anonymous'; 
const chatUI = new ChatUI(chatList);
// chat class instance
const chatroomInstance = new Chatroom("general", "shaun");

console.log(chatroomInstance);
//get chats and render
chatroomInstance.getChats(data => {
  console.log(data);
  chatUI.render(data);
});
