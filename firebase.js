// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import { getAnalytics} from "firebase/analytics";
import {getAuth} from "@firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyBjvvtghj1PjNDwucruPrTq5lb3EuZkiWw",
    authDomain: "voicerecorder-app-27662.firebaseapp.com",
    projectId: "voicerecorder-app-27662",
    storageBucket: "voicerecorder-app-27662.appspot.com",
    messagingSenderId: "433786306388",
    appId: "1:433786306388:web:c2a02e9fa10c7d727652c1"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export {auth}
