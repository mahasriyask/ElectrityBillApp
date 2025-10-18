// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getDatabase } from "firebase/database";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAS2AiJL69Yvq8-CFnY343KCTQyEgYfszk",
  authDomain: "elec-bill-predict.firebaseapp.com",
  databaseURL: "https://elec-bill-predict-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "elec-bill-predict",
  storageBucket: "elec-bill-predict.firebasestorage.app",
  messagingSenderId: "250290980233",
  appId: "1:250290980233:web:d6f33514e421a98a5e0d58",
  measurementId: "G-CDJ7Q1KHYL",
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Auth only if it hasn’t been initialized
let auth;
try {
  auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage),
  });
} catch (err) {
  // If already initialized, fallback to getAuth()
  import("firebase/auth").then((module) => {
    auth = module.getAuth(app);
  });
}

// Initialize Realtime Database
const db = getDatabase(app);

export { app, auth, db };
