var Firebase = require('firebase');
var dataRef = new Firebase('https://myprojectname.firebaseIO-demo.com/');
dataRef.set("hello world!");


<script src="https://www.gstatic.com/firebasejs/4.1.2/firebase.js">

  var config = {
    apiKey: "AIzaSyAaBAJ6HCCDnVElucvl7FmNvHYxPckOrFE",
    authDomain: "dbfoody.firebaseapp.com",
    databaseURL: "https://dbfoody.firebaseio.com",
    projectId: "dbfoody",
    storageBucket: "dbfoody.appspot.com",
    messagingSenderId: "658698439367"
  
  firebase.initializeApp(config);