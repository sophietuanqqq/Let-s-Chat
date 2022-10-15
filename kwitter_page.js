//YOUR FIREBASE LINKS
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

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");
function send() {
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,like:0
      });
      document.getElementById("msg").value="";

}