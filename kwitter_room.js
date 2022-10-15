var firebaseConfig = {
      apiKey: "AIzaSyCTooAgyvF-ObIZiqPnTBDMntEVR_w4Uuk",
      authDomain: "kwitter-fcc53.firebaseapp.com",
      databaseURL: "https://kwitter-fcc53-default-rtdb.firebaseio.com",
      projectId: "kwitter-fcc53",
      storageBucket: "kwitter-fcc53.appspot.com",
      messagingSenderId: "990816459746",
      appId: "1:990816459746:web:a720e0b1110aad42e677bb",
      measurementId: "G-5E9RESNGEZ"
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

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";

}

