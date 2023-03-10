
var firebaseConfig = {
    apiKey: "AIzaSyAUwtDPrF4OA9PxbHwE-zmhE1jIQav9I5I",
    authDomain: "social-website-95111.firebaseapp.com",
    databaseURL: "https://social-website-95111-default-rtdb.firebaseio.com",
    projectId: "social-website-95111",
    storageBucket: "social-website-95111.appspot.com",
    messagingSenderId: "818677184592",
    appId: "1:818677184592:web:17235f059ae6ceab5e3955",
    measurementId: "G-8JPDK8Q7J6"
  };
  firebase.initializeApp(firebaseConfig);
  room_name = localStorage.getItem("Roomname")
  user_name = localStorage.getItem("Username")
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();

function logout(){
    localStorage.removeItem("Username");
    localStorage.removeItem("Roomname");
    window.location = "index.html";
    }

    
    function send()
    {
          msg = document.getElementById("msg").value ;
          firebase.database().ref(room_name).push({
                name:user_name,
                message:msg,
                like:0
          });

          document.getElementById("msg").value = "";
    }