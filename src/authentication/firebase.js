// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA84ETv5SwAX4SO7t2WYhXytwiFQAYZSEE",
  authDomain: "movies-page-project-dts2022.firebaseapp.com",
  projectId: "movies-page-project-dts2022",
  storageBucket: "movies-page-project-dts2022.appspot.com",
  messagingSenderId: "141617795995",
  appId: "1:141617795995:web:d76bd1c0152439ec3f873e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//initialize Firebase Authentication
const auth = getAuth(app);

//fungsi untuk melakukan registrasi dengan email dan password
const registrasiDenganEmaildanPassword = async (email, sandi) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      sandi
    );

    //Aturan Firebase Authentication
    //Setelah user selesai registrasi
    //Maka secara auto dia akan langsung login (Sign In)
  } catch (err) {}
};

//fungsi untuk melakukan login
const signInDenganEmaildanPassword = async (email, sandi) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, sandi);
  } catch (err) {}
};

//fungsi untuk melakukan reset password
const resetPasswordAkun = async (email) => {
  try {
    const userCredential = sendPasswordResetEmail(auth, email);
  } catch (err) {}
};

//fungsi untuk melakukan sign out
const signOutdariAkun = async () => {
  try {
    await signOut(auth);
  } catch (err) {}
};

export {
  auth,
  registrasiDenganEmaildanPassword,
  signInDenganEmaildanPassword,
  resetPasswordAkun,
  signOutdariAkun,
};
