// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrACCZVDt7ZMucyc69mdzAwwuedHl_MQk",
  authDomain: "taskwizard-c6e48.firebaseapp.com",
  databaseURL: "https://taskwizard-c6e48-default-rtdb.firebaseio.com",
  projectId: "taskwizard-c6e48",
  storageBucket: "taskwizard-c6e48.appspot.com",
  messagingSenderId: "193723409071",
  appId: "1:193723409071:web:d8e7d0fef2adeb6c28aa5a",
  measurementId: "G-3TLYGZ8YZS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export default app;
