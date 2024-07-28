import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCu2hu3wKt6a5Rhl5VuEnctVjqESE_poQw",
  authDomain: "next-blog-68cf1.firebaseapp.com",
  projectId: "next-blog-68cf1",
  storageBucket: "next-blog-68cf1.appspot.com",
  messagingSenderId: "805583045919",
  appId: "1:805583045919:web:17271f1758cd432fa25c2a",
  measurementId: "G-LC2VYQPR1V",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getFirestore(app);

export { storage, db };
