// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBA2SzhHX7J-rbFHSk0qQywFr7Y_CIClmY",
    authDomain: "medium-clone-33347.firebaseapp.com",
    projectId: "medium-clone-33347",
    storageBucket: "medium-clone-33347.appspot.com",
    messagingSenderId: "801863783252",
    appId: "1:801863783252:web:2f4ae0422f42037571eec1"
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
export const storage = getStorage();
export const db = getFirestore(app);