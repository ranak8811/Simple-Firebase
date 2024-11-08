// Danger: don't share config publicly

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzQ0dcYxcYOWIczZfcDVg5pNjOvbKkQ2w",
  authDomain: "simple-firebase2-9e214.firebaseapp.com",
  projectId: "simple-firebase2-9e214",
  storageBucket: "simple-firebase2-9e214.firebasestorage.app",
  messagingSenderId: "450713859846",
  appId: "1:450713859846:web:a721cba758a0d458f49087",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

//----------------------------------------------------------------
// have done it in first time

// // do not store config on the client side

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAb8W3TwOdVMTNhqx2yigkh-HWfbcNliKk",
//   authDomain: "simple-firebase-33cd5.firebaseapp.com",
//   projectId: "simple-firebase-33cd5",
//   storageBucket: "simple-firebase-33cd5.firebasestorage.app",
//   messagingSenderId: "374357440658",
//   appId: "1:374357440658:web:b5abfe3c2387011ff38e4b",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// const auth = getAuth(app);

// export default auth;
