// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJWJO6byCDqc1uI1I5RpsVoOohDBrvorU",
  authDomain: "giangreco-s-technologies.firebaseapp.com",
  projectId: "giangreco-s-technologies",
  storageBucket: "giangreco-s-technologies.appspot.com",
  messagingSenderId: "548699828727",
  appId: "1:548699828727:web:fc59baab6a9a290bd2fef2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
