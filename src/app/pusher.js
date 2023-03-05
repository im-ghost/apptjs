import Pusher from "pusher-js"

const pusher = new Pusher({
  appId:"1561747",
  key:"d39f6a1c95de4cac8e63",
  secret:"4e622dd82513145f34fa",
  cluster:"mt1",
  useTLS:true
});
const sendMessage = (userId,doctorId,message) =>{
// Subscribe to a private channel for the current user and the target user
const currentUserChannel = pusher.subscribe(`private-user-${userid}`);
const targetUserChannel = pusher.subscribe(`private-user-${doctorid}`);

// Bind to events on both channels
currentUserChannel.bind('message', function(data) {
  // Handle the message from the current user
  console.log(`Received message from user ${currentUser.id}: ${data.message}`);
});

targetUserChannel.bind('message', function(data) {
  // Handle the message from the target user
  console.log(`Received message from user ${targetUser.id}: ${data.message}`);
});

// Send a message from the current user to the target user
function sendMes(message) {
  // Publish the message on the target user's channel
  targetUserChannel.trigger('message', { message, sender: currentUser.id });
}
sendMes(message)
}