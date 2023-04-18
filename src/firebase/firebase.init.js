// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: "AIzaSyBB0GoacjR3NCerjh9ZrmtzMH4QQh7qU80",
  // authDomain: "genus-car-45181.firebaseapp.com",
  // projectId: "genus-car-45181",
  // storageBucket: "genus-car-45181.appspot.com",
  // messagingSenderId: "455724018968",
  // appId: "1:455724018968:web:d4c6cbdf173fb1886c426d"
  apiKey:process.env.REACT_app_apiKey,
  authDomain:process.env.REACT_app_authDomain,
  projectId:process.env.REACT_app_projectId,
  storageBucket:process.env.REACT_app_storageBucket,
  messagingSenderId:process.env.REACT_app_messagingSenderId,
  appId:process.env.REACT_app_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;