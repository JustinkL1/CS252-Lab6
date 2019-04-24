import * as firebase from 'firebase'

const config = {
    apiKey: "AIzaSyAds6N5pOwi-0KdoK6L1P8Bbxb33VesK7c",
    authDomain: "cs252-lab6-ef3ff.firebaseapp.com",
    databaseURL: "https://cs252-lab6-ef3ff.firebaseio.com",
    projectId: "cs252-lab6-ef3ff",
    storageBucket: "cs252-lab6-ef3ff.appspot.com",
    messagingSenderId: "947179146273"
  };
var fire = firebase.initializeApp(config);
// function check(){
//     var email = document.getElementById('userinput').value;
//     var password = document.getElementById('userpassword').value;
//     var database = firebase.database()
//     var isSuccessful = true;
//     firebase.auth().signInWithEmailAndPassword(email, password)
//       .then(function(firebaseUser){
//         alert("success!");
//         window.location.href="index.html";
//       })
//       .catch(function(error) {
//         // Handle Errors here.
//         isSuccessful = false;
//         var errorCode = error.code;
//         var errorMessage = error.message;
//         if(errorCode){
//           alert(errorMessage);
//         }
//       });
// }
// function passInfoDB(){
//   var email = document.getElementById('userinput').value;
//   var password = document.getElementById('userpassword').value;
//   var database = firebase.database()
//   var isSuccessful = true;
//   firebase.auth().createUserWithEmailAndPassword(email, password)
//     .then(function(firebaseUser){
//       alert("success!");
//       window.location.href="login.html";
//     })
//     .catch(function(error) {
//       // Handle Errors here.
//       isSuccessful = false;
//       var errorCode = error.code;
//       var errorMessage = error.message;
//       if(errorCode){
//         alert(errorMessage);
//       }
//     // ...
//   });
// }

export default fire;
