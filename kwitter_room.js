var firebaseConfig = {
    apiKey: "AIzaSyAPYdqExzGJYiU95doJUsCJNRxJB9nRraU",
    authDomain: "class-test-projects.firebaseapp.com",
    databaseURL: "https://class-test-projects-default-rtdb.firebaseio.com",
    projectId: "class-test-projects",
    storageBucket: "class-test-projects.appspot.com",
    messagingSenderId: "390621470540",
    appId: "1:390621470540:web:ea5c84b13521c7136cb9e9",
    measurementId: "G-7X6FRRYGT5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
    //Start code
    console.log("Room Names - "+Room_names);
    row = "<div class='room_name' id='"+Room_names+"' onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
    document.getElementById("output").innerHTML+= row;
    //End code
});});}
getData();
function addRoom(){
  name_room = document.getElementById("room_name").value;

  firebase.database().ref("/").child(name_room).update({
    purpose : "adding room name"
  });

  localStorage.setItem("Room Name", name_room);
  window.location = "kwitter_page.html";
}
function update(){
  val = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML = "Welcome "+val;
}
function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("Room Name", name);
  // window.location = "kwitter_page.html";
}
function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("Room Name");
  window.location = "index.html";
}
