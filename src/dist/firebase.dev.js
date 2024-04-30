"use strict";

var _app = require("firebase/app");

var _firestore = require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyCsZvX6oPGtOvj_f4Z1p7gxIA-CeOVXcqw",
  authDomain: "edueteen.firebaseapp.com",
  projectId: "edueteen",
  storageBucket: "edueteen.appspot.com",
  messagingSenderId: "163241046894",
  appId: "1:163241046894:web:1a5cf217658efea4af077f"
}; // Initialize Firebase

var app = (0, _app.initializeApp)(firebaseConfig);
var firestore = (0, _firestore.getFirestore)(app);
//# sourceMappingURL=firebase.dev.js.map
