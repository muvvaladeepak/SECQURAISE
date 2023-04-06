import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

export const getDb = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyAEeWHGbOXbOB5CRvCiL4N1t6yZ63BY8aY",
    authDomain: "secqur-aise.firebaseapp.com",
    projectId: "secqur-aise",
    storageBucket: "secqur-aise.appspot.com",
    messagingSenderId: "651070289596",
    appId: "1:651070289596:web:1c84fedc423e8d7f5dc2b9",
  };
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  let db = getFirestore(app);
  return db;
};
