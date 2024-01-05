// Connecting portfolio to Firebase DB

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
//import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5Fp1e2VpfUhJcGiL1zcNPrY1EPs2WyJQ",
  authDomain: "portfolio-y-c390c.firebaseapp.com",
  projectId: "portfolio-y-c390c",
  storageBucket: "portfolio-y-c390c.appspot.com",
  messagingSenderId: "234505362850",
  appId: "1:234505362850:web:53a394592fbe8a936066fb",
  measurementId: "G-MMML5RPYXR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const DataBase = getDatabase(app);

document.getElementById("submit").addEventListener('click', function(e){
    e.preventDefault();

    set(ref(DataBase, 'userFeedBack/' + document.getElementById("firstname").value + ' ' + document.getElementById("lastname").value),
    {
        FirstName: document.getElementById("firstname").value,
        LastName: document.getElementById("lastname").value,
        Email: document.getElementById("email").value,
        Subject: document.getElementById("subject").value,
        TxtMsg: document.getElementById("msgText").value
    });

    document.querySelector(".alert").style.display = "block";

    setTimeout(() => {
        document.querySelector(".alert").style.display = "none";
    }, 3000);

    document.getElementById("myForm").reset();
});