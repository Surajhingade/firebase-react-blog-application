// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
import {getAuth} from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmu1YWVj8Ci1QYX4xhWlo7_ol_wDic9gc",
  authDomain: "react-blogs-app-faf59.firebaseapp.com",
  projectId: "react-blogs-app-faf59",
  storageBucket: "react-blogs-app-faf59.appspot.com",
  messagingSenderId: "673071215984",
  appId: "1:673071215984:web:f20de5166bdc8946db8bb5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export {auth,db,storage,} ;