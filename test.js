import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  // ...
  storageBucket: 'gs://sem-2-9f64c.appspot.com'
};

const app = initializeApp(firebaseConfig);

const storage = getStorage(app);
