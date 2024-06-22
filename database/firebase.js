import firebase from "firebase";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyAelkIPX1KWP1ZDYqeYfNib8ZEozUdf_v4",
  authDomain: "dustin-lic.firebaseapp.com",
  projectId: "dustin-lic",
  storageBucket: "dustin-lic.appspot.com",
  messagingSenderId: "328205222159",
  appId: "1:328205222159:web:27b5cf029d814cabf8fe7a"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default {
  firebase,
  db
};
