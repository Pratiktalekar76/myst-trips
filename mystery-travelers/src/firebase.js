import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC41q5bvULjC39HbS6p14eTsJkoGrdgj2o",
  authDomain: "mysterytravelers-dc0c4.firebaseapp.com",
  projectId: "mysterytravelers-dc0c4",
  storageBucket: "mysterytravelers-dc0c4.firebasestorage.app",
  messagingSenderId: "868917827103",
  appId: "1:868917827103:web:8ebfa1cfe775edc57f272a"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
