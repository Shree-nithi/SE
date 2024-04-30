
import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCsZvX6oPGtOvj_f4Z1p7gxIA-CeOVXcqw",
  authDomain: "edueteen.firebaseapp.com",
  projectId: "edueteen",
  storageBucket: "edueteen.appspot.com",
  messagingSenderId: "163241046894",
  appId: "1:163241046894:web:1a5cf217658efea4af077f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
