import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBFUJjCkkdIIa5sZynIqlUZ9f4qnlv5FV8",
    authDomain: "fir-react-69253.firebaseapp.com",
    projectId: "fir-react-69253",
    storageBucket: "fir-react-69253.appspot.com",
    messagingSenderId: "368839465358",
    appId: "1:368839465358:web:77d2d910c4799577102cdf",
    measurementId: "G-M4GFLN7DTR"
  };    

  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app);