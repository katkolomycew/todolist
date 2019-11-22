import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA9qP_zkwcA1IbMTw87m9VOjaxV2eNSHxw",
  authDomain: "todolist-30967.firebaseapp.com",
  databaseURL: "https://todolist-30967.firebaseio.com",
  projectId: "todolist-30967",
  storageBucket: "todolist-30967.appspot.com",
  messagingSenderId: "540818791621",
  appId: "1:540818791621:web:bbf34e9687521137e024ac",
  measurementId: "G-0ZJF7R1CPM"
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

export const provider = new firebase.auth.GoogleAuthProvider();

export default firebase;
