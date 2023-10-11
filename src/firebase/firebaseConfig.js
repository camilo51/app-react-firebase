// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAmJ7sxvJ_LTo9wDcnc_Qx5PYbt8K4CaNw',
  authDomain: 'curso-react-firebase-app-5e112.firebaseapp.com',
  projectId: 'curso-react-firebase-app-5e112',
  storageBucket: 'curso-react-firebase-app-5e112.appspot.com',
  messagingSenderId: '164266179283',
  appId: '1:164266179283:web:5967b39947c19891d37226'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

export default db;
