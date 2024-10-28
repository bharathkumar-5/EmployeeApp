// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNNdQIG-IExAdlaafoAIFQtVUTYMnyFKA",
  authDomain: "empcheck-app.firebaseapp.com",
  projectId: "empcheck-app",
  storageBucket: "empcheck-app.appspot.com",
  messagingSenderId: "1046613161958",
  appId: "1:1046613161958:web:427f21b83401aa88aa0827",
  measurementId: "G-F7B9YVCJMS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);