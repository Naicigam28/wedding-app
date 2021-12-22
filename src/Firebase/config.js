// Import the functions you need from the SDKs you need

import * as firebase from "firebase"
import app from "firebase/app"
import { getAnalytics } from "firebase/analytics";
import firebaseConfig from "./keys";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


// Initialize Firebase
const App = app.initializeApp(firebaseConfig);
const Auth=App.auth()
const analytics = getAnalytics(app);
export {App, Auth };