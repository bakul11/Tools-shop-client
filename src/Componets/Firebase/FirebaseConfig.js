import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDHpBtOYYdXdwQopW4zhX2wRsCQ4u2S9pc",
    authDomain: "tools-shop-1d0df.firebaseapp.com",
    projectId: "tools-shop-1d0df",
    storageBucket: "tools-shop-1d0df.appspot.com",
    messagingSenderId: "991896241693",
    appId: "1:991896241693:web:1ee1722bc4939977df68f4"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;