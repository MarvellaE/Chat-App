// Your web app's Firebase configuration
const firebaseConfig = {
     apiKey: "AIzaSyDS0fIqqDcAIf4fYL8Wl2Bwy4aw063xxi8",
  authDomain: "chat-app-fdb27.firebaseapp.com",
  databaseURL: "https://chat-app-fdb27-default-rtdb.firebaseio.com",
  projectId: "chat-app-fdb27",
  storageBucket: "chat-app-fdb27.appspot.com",
  messagingSenderId: "1067989929837",
  appId: "1:1067989929837:web:a7ec157db9f74a59341464",
  measurementId: "G-C95PSQGQ9B"
  };

  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "Chat_Page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) {
    document.getElementById("output").innerHTML = "";
    snapshot.forEach(function(childSnapshot) {
       childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}
getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "Chat_Page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}
