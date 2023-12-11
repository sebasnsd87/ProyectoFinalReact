import React from 'react'
import { createRoot } from 'react-dom/client';
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAZib9GNRrpQ1AYKzOWUlIP6cfdGaL5SmU",
  authDomain: "ecommerceferre.firebaseapp.com",
  projectId: "ecommerceferre",
  storageBucket: "ecommerceferre.appspot.com",
  messagingSenderId: "19102013083",
  appId: "1:19102013083:web:d79447f6c1215e1771583e"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);