import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA4bMApXvESUywZMAj18G8zWTpeEgfbQAA",
  authDomain: "clone-9f632.firebaseapp.com",
  projectId: "clone-9f632",
  storageBucket: "clone-9f632.appspot.com",
  messagingSenderId: "172668494769",
  appId: "1:172668494769:web:7349e6588b8c587cd39390",
  measurementId: "G-SY0N965QF4",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
