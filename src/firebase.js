import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBib7NMj_hhlk1h03okOOSENZZSHQeG_hM",
  authDomain: "chat-me-5e9ee.firebaseapp.com",
  projectId: "chat-me-5e9ee",
  storageBucket: "chat-me-5e9ee.appspot.com",
  messagingSenderId: "36204601610",
  appId: "1:36204601610:web:9b5fe77e5a8e438f051af3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore(app);