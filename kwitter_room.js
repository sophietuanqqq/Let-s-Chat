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

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
