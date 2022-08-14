// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {getAuth} from 'firebase/auth'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLsdphAwiFAsfOAqy1Gyg-lRdNAIMg6Rg",
  authDomain: "fir-chat-6d429.firebaseapp.com",
  projectId: "fir-chat-6d429",
  storageBucket: "fir-chat-6d429.appspot.com",
  messagingSenderId: "1022961753205",
  appId: "1:1022961753205:web:5f2ec5d0f5a41093172c3c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth(app);

export const db=getFirestore(app)