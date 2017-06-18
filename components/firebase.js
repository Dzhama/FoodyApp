const firebase = require("firebase");

const config = {
	apiKey: "AIzaSyAaBAJ6HCCDnVElucvl7FmNvHYxPckOrFE",
	authDomain: "dbfoody.firebaseapp.com",
	databaseURL: "https://dbfoody.firebaseio.com",
	projectId: "dbfoody",
	storageBucket: "dbfoody.appspot.com",
	messagingSenderId: "658698439367"
  };

firebase.initializeApp(config)


function writeUserData(password, email,userId) {
const newPostKey = firebase.database().ref().push().key;
  
  firebase.database().ref('users/' ).push({
    password: password,
    email: email,
    userId: newPostKey,
  });
}

 const ref = firebase.database().ref()
 const firebaseAuth = firebase.auth
