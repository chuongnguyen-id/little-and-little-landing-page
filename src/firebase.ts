// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDEATH1mq_vrRb_4xxrynIaOxXqbSi_F9U",
  authDomain: "little-and-little-channel.firebaseapp.com",
  projectId: "little-and-little-channel",
  storageBucket: "little-and-little-channel.appspot.com",
  messagingSenderId: "974629100791",
  appId: "1:974629100791:web:fc5a39164a14040decc7f2",
  measurementId: "G-8CNBG95D0H",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
