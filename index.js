// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB01ldBrVJNzO9zvhmgfhIr1c0QvuYe7oc",
  authDomain: "js-quiz-57869.firebaseapp.com",
  projectId: "js-quiz-57869",
  storageBucket: "js-quiz-57869.appspot.com",
  messagingSenderId: "252936004356",
  appId: "1:252936004356:web:600d585980efeecf41a651",
  measurementId: "G-GGFHH31HC4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);