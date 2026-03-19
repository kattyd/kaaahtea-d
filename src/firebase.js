// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDqijkhJzLiBAqMjqnbseGQHSWEKB1zVQQ",
  authDomain: "katrina-blog.firebaseapp.com",
  projectId: "katrina-blog",
  storageBucket: "katrina-blog.firebasestorage.app",
  messagingSenderId: "56430975460",
  appId: "1:56430975460:web:5a95d39437dfd694848ff1",
  measurementId: "G-KP2LC7KBM0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);