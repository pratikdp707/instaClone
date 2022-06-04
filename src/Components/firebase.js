import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// import firebase from 'firebase/app'
// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9VXlkF_PSoZyPU__1eHdxHTuEAesOVAo",
  authDomain: "instaclone-b6ad8.firebaseapp.com",
  projectId: "instaclone-b6ad8",
  storageBucket: "instaclone-b6ad8.appspot.com",
  messagingSenderId: "536103783020",
  appId: "1:536103783020:web:945e217d89e2a412306649",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);

export { storage, auth };
