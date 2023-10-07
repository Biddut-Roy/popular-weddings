// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxQNIqNbt_pIqeeWm3mTglVPE877YMdUY",
  authDomain: "wedding-event--management.firebaseapp.com",
  projectId: "wedding-event--management",
  storageBucket: "wedding-event--management.appspot.com",
  messagingSenderId: "278787067551",
  appId: "1:278787067551:web:da3e448ef63116916d9caa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth ;

