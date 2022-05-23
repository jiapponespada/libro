// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBcU64Wt1mGxzqu9Wz8APGolTkpEa5NP80",
  authDomain: "libro-5d78c.firebaseapp.com",
  projectId: "libro-5d78c",
  storageBucket: "libro-5d78c.appspot.com",
  messagingSenderId: "947819978202",
  appId: "1:947819978202:web:b2d1ec79bb5c41e43ab4e3",
  measurementId: "G-FR6EGTY5FC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export default app

