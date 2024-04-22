
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyARl5cmZ4vwmDNU9oyIKWFQolC4CytK3q4",
  authDomain: "sign-up-login-with-fireb-e8c86.firebaseapp.com",
  projectId: "sign-up-login-with-fireb-e8c86",
  storageBucket: "sign-up-login-with-fireb-e8c86.appspot.com",
  messagingSenderId: "851038310508",
  appId: "1:851038310508:web:92c02d8e1f72d7703d8849"
};


const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);
