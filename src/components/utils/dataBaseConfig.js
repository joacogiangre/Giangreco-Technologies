import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBJWJO6byCDqc1uI1I5RpsVoOohDBrvorU",
  authDomain: "giangreco-s-technologies.firebaseapp.com",
  projectId: "giangreco-s-technologies",
  storageBucket: "giangreco-s-technologies.appspot.com",
  messagingSenderId: "548699828727",
  appId: "1:548699828727:web:fc59baab6a9a290bd2fef2"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
