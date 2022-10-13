var firebaseConfig = {
      apiKey: "AIzaSyCTA4O4XTsccK2F-b519giSOwzD1jAmZGg",
      authDomain: "let-s-chat-app-4d348.firebaseapp.com",
      databaseURL: "https://let-s-chat-app-4d348-default-rtdb.firebaseio.com",
      projectId: "let-s-chat-app-4d348",
      storageBucket: "let-s-chat-app-4d348.appspot.com",
      messagingSenderId: "496807875228",
      appId: "1:496807875228:web:efb20535a7429064e09359"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "addingroomname"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";

}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log("Room Name - " + Room_names); 
                  row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>"; 
                  document.getElementById("output").innerHTML += row;
                  //End code
            });
      });
}
getData();

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
      
}