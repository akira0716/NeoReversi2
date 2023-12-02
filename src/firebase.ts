import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAS2zoRzplTaQJiF0x2dCjisZM3n7Q1ViY",
  authDomain: "test-74f2f.firebaseapp.com",
  databaseURL:
    "https://test-74f2f-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "test-74f2f",
  storageBucket: "test-74f2f.appspot.com",
  messagingSenderId: "511466088175",
  appId: "1:511466088175:web:4aa84072b943debdcc5d1a",
  measurementId: "G-CNG4J2XEQR",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
