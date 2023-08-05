import { useState } from "react";

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import { useCollectionData } from "react-firebase-hooks/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAPJi8-6VmeAGozHUCCN8NSrx1vemwizCM",
  authDomain: "phirse-desktop.firebaseapp.com",
  projectId: "phirse-desktop",
  storageBucket: "phirse-desktop.appspot.com",
  messagingSenderId: "9191279295",
  appId: "1:9191279295:web:fa271664168b6ffccc540a",
  measurementId: "G-WQB8MJ0G7Q"
};

const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app);



function App() {
  return <></>;
}

export default App;
