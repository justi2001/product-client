
// import { getApps, initializeApp } from 'firebase/app';
// import { getAuth } from 'firebase/auth';
// import { getStorage } from 'firebase/storage';

// const firebaseConfig = {
// 	apiKey: process.env.NEXT_PUBLIC_apiKey,
// 	authDomain: process.env.NEXT_PUBLIC_authDomain,
// 	projectId: process.env.NEXT_PUBLIC_projectId,
// 	storageBucket: process.env.NEXT_PUBLIC_storageBucket,
// 	messagingSenderId: process.env.NEXT_PUBLIC_messagingSenderId,
// 	appId: process.env.NEXT_PUBLIC_appId,

// };

// const app = initializeApp(firebaseConfig);
// export const auth = getAuth();
// export const storage = getStorage();
// auth.languageCode = 'vi';



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyCziw80jTSy9OjIty5_QQ9r1MZOoswD-NA",
	authDomain: "project-shoping-28740.firebaseapp.com",
	projectId: "project-shoping-28740",
	storageBucket: "project-shoping-28740.firebasestorage.app",
	messagingSenderId: "892196597684",
	appId: "1:892196597684:web:81d5d96f79d75feb994ce1",
	measurementId: "G-HQKWN4HBWD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
auth.languageCode = 'vi';
