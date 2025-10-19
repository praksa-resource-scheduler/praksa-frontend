import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXUuqGwp8tpvC_9UyUVJAKi0Hi4z0SdY0",
  authDomain: "resourcescheduling-c8e3c.firebaseapp.com",
  projectId: "resourcescheduling-c8e3c",
  storageBucket: "resourcescheduling-c8e3c.firebasestorage.app",
  messagingSenderId: "387655384115",
  appId: "1:387655384115:web:40b0d3eb61fc92e2657746",
  measurementId: "G-CD7XZWJZ4T",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
