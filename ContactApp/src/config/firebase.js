// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABnOMkSin7ruRcNc1xYtOJLvKa88VBOQk",
  authDomain: "vite-contactapp-9620b.firebaseapp.com",
  projectId: "vite-contactapp-9620b",
  storageBucket: "vite-contactapp-9620b.appspot.com",
  messagingSenderId: "340691472999",
  appId: "1:340691472999:web:a83bbe2ae247623c5a3ac2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)