// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3WbwAVi9Krzr11eDdTpPc9I2s_LE9dDo",
  authDomain: "primgallery.firebaseapp.com",
  projectId: "primgallery",
  storageBucket: "primgallery.appspot.com",
  messagingSenderId: "550993782888",
  appId: "1:550993782888:web:914f3380f90500866ab3dd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const auth = getAuth(app);