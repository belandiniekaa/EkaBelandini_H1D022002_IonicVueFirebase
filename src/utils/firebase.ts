// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAW8UN562LwTtgWqOqfp2UtolcRZuiGgHo",
  authDomain: "vue-firebase-61ca1.firebaseapp.com",
  projectId: "vue-firebase-61ca1",
  storageBucket: "vue-firebase-61ca1.firebasestorage.app",
  messagingSenderId: "859117900097",
  appId: "1:859117900097:web:9400524e0827288ec4d1c0",
  measurementId: "G-TH0ES8ENR4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const firebase = initializeApp(firebaseConfig);
const auth = getAuth(firebase);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };