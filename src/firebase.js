import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAa7WrwhvO9weY8pVs6EnZFwfJUeI094fg",
    authDomain: "ideas-generater.firebaseapp.com",
    projectId: "ideas-generater",
    storageBucket: "ideas-generater.appspot.com", // Fixed typo in storageBucket
    messagingSenderId: "843119319496",
    appId: "1:843119319496:web:5b5602f1067e2a046cc8fd",
    measurementId: "G-NC3VH566JN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
