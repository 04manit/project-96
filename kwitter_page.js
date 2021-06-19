var firebaseConfig = {
    apiKey: "AIzaSyAPSntXOWgXcjhIbi2D19YWiqQoj2kws-I",
    authDomain: "class-test-da4bb.firebaseapp.com",
    databaseURL: "https://class-test-da4bb-default-rtdb.firebaseio.com",
    projectId: "class-test-da4bb",
    storageBucket: "class-test-da4bb.appspot.com",
    messagingSenderId: "679376957836",
    appId: "1:679376957836:web:13423293ba9040785f66a9",
    measurementId: "G-Z8PFFQXXHB"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
room_name = localStorage.getItem("Room Name");

username = localStorage.getItem("user_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
    //Start code
    console.log(firebase_message_id);
    console.log(message_data);
    name_1 = message_data['room_name'];
    message = message_data['message'];
    like = message_data['like'];
    name_with_tag = "<h4>"+username+"<img style='width: 20px;' class='user_tick' src='tick.png'></h4>";
    message_with_tag = "<h4 style='padding-left: 5px; color: grey;' class='message_h4'>"+message+"</h4>";
    like_button = "<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
    span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like:"+like+"</span></button>";
    row = name_with_tag + message_with_tag + like_button + span_with_tag;
    document.getElementById("output").innerHTML+=row;
    //End code
 } });  }); }
getData();
function send(){
    message = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        room_name:username,
        message:message,
        like:0
    });
    document.getElementById("msg").value = "";
}
function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("Room Name");
    window.location = "index.html";
}
function updateLike(message_id){
    console.log("Clicked on like button : "+message_id);
    button_id = message_id;
    likes = document.getElementById(button_id).value;
    updatedLikes = Number(likes) + 1;
    firebase.database().ref(room_name).child(message_id).update({
        like: updatedLikes
    });
}