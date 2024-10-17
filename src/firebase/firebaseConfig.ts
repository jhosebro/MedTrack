// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0XCSLKT1PlvjWmiUmJILPMEho22aXw4c",
  authDomain: "medtrack-7c8cd.firebaseapp.com",
  projectId: "medtrack-7c8cd",
  storageBucket: "medtrack-7c8cd.appspot.com",
  messagingSenderId: "901957491686",
  appId: "1:901957491686:web:e39bc7f47e3c660e1a5427",
  measurementId: "G-7ZCSY7QGET"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut};

//const analytics = getAnalytics(app);
