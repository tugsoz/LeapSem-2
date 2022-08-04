import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBDny3qXTmTrBk2rbsLsfAJimH5JfThGtY",
  authDomain: "sem-2-9f64c.firebaseapp.com",
  projectId: "sem-2-9f64c",
  storageBucket: "sem-2-9f64c.appspot.com",
  messagingSenderId: "1081510042543",
  appId: "1:1081510042543:web:ee062ccd2fc0a7afaded5a",
  measurementId: "G-1TQ64S3EVC"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


import { collection, addDoc } from "firebase/firestore"; 

try {
  const docRef = await addDoc(collection(db, "users"), {
    first: "Ada",
    last: "Lovelace",
    born: 1815
  });
  console.log("Document written with ID: ", docRef.id);
} catch (e) {
  console.error("Error adding document: ", e);
}

try {
  const docRef = await addDoc(collection(db, "users"), {
    first: "Alan",
    middle: "Mathison",
    last: "Turing",
    born: 1912
  });

  console.log("Document written with ID: ", docRef.id);
} catch (e) {
  console.error("Error adding document: ", e);
}