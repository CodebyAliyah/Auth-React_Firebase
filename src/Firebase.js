import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAeuo1gnTQBxWzjoes84RwML2dRHGQ9YnA",
  authDomain: "fir-first-app-56d0e.firebaseapp.com",
  projectId: "fir-first-app-56d0e",
  storageBucket: "fir-first-app-56d0e.appspot.com",
  messagingSenderId: "841289640522",
  appId: "1:841289640522:web:f1eac20498a49a501d14b3",
  measurementId: "G-992NRQT0NE",
  databaseURL: "https://fir-first-app-56d0e-default-rtdb.firebaseio.com/"
};

export const app = initializeApp(firebaseConfig);