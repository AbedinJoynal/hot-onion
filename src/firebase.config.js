import { initializeApp } from 'firebase/app';
import {getAuth} from 'firebase/auth';
const firebaseConfig = {
  apiKey: 'AIzaSyArswe5iVpTBDXi1FSFnmc1stARqdYbG3g',
  authDomain: 'hot-onion-30926.firebaseapp.com',
  projectId: 'hot-onion-30926',
  storageBucket: 'hot-onion-30926.appspot.com',
  messagingSenderId: '41791051315',
  appId: '1:41791051315:web:16679f4551ef91f4993546',
};

const app = initializeApp(firebaseConfig);
export const auth= getAuth(app)
 
