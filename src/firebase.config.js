import { initializeApp } from 'firebase/app';
import {getAuth} from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyByYrVCY2ZnclL1UsCZXNoEwNl-8hkdA3I",
  authDomain: "hot-onion-2a8f6.firebaseapp.com",
  projectId: "hot-onion-2a8f6",
  storageBucket: "hot-onion-2a8f6.appspot.com",
  messagingSenderId: "1068057804698",
  appId: "1:1068057804698:web:8be94e17b59c86cb890423"
};
const app = initializeApp(firebaseConfig);
export const auth =getAuth(app);
