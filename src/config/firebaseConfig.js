import firebaseApp from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";


var firebaseConfig = {
    apiKey: "AIzaSyA1sUvTZ0ivyYoMYf0VBBPx5Qf0mst_mV4",
    authDomain: "bmj-cheetay.firebaseapp.com",
    databaseURL: "https://bmj-cheetay.firebaseio.com",
    projectId: "bmj-cheetay",
    storageBucket: "bmj-cheetay.appspot.com",
    messagingSenderId: "297829068298",
    appId: "1:297829068298:web:139ca59282648cf2e6f9f3",
    measurementId: "G-BP6QVF1RVC"
  };
  // Initialize Firebase
  firebaseApp.initializeApp(firebaseConfig);

  export const auth = firebaseApp.auth()
  export const database  = firebaseApp.database();
  export const storage  = firebaseApp.storage();
