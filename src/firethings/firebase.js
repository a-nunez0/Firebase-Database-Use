// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import{ getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCW_fUm5e6Cry1FtBPCo1FtMA2QL18dpUA",
  authDomain: "fir-try-13b37.firebaseapp.com",
  projectId: "fir-try-13b37",
  storageBucket: "fir-try-13b37.appspot.com",
  messagingSenderId: "555234708635",
  appId: "1:555234708635:web:b31b951edb21df1f238a3e",
  measurementId: "G-QMD8B76KRW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);