// Connecting portfolio to Firebase DB

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getStorage, ref, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";

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
const DataStorage = getStorage(app);
export default DataStorage;
const docRef = ref(DataStorage, 'Portfolio-SSLY18/Likhith_Resume.pdf');

// Initialize variables
let clickCounter = 0;
document.getElementById("getResume").addEventListener('click', function(e){
    clickCounter++;
    e.preventDefault();

    if (clickCounter === 1) {
        // First click action: Get the PDF view
        getDownloadURL(docRef).then((url) => {
            console.log(url);
            const pdf = document.getElementById('pdfViewer');
            pdf.setAttribute('src',url);
        }).catch((error) => {
                    switch (error.code) {
                        case 'storage/object-not-found':
                            // File doesn't exist
                            break;
                        case 'storage/unauthorized':
                            // User doesn't have permission to access the object
                            break;
                        case 'storage/canceled':
                            // User canceled the upload
                            break;
                        case 'storage/unknown':
                            // Unknown error occurred, inspect the server response
                            break;
                        case 'storage/bucket-not-found':
                            // No bucket is configured for Cloud Storage
                            break;
                        case 'storage/project-not-found':
                            // No project is configured for Cloud Storage
                            break;
                        case 'storage/quota-exceeded':
                            // Quota on your Cloud Storage bucket has been exceeded.
                            break;
                        case 'storage/unauthenticated':
                            // User is unauthenticated, please authenticate and try again.
                            break;
                        case 'storage/retry-limit-exceeded':
                            // The maximum time limit on an operation (upload, download, delete, etc.) has been excceded. Try uploading again.
                            break;
                        case 'storage/invalid-checksum':	
                            // File on the client does not match the checksum of the file received by the server. Try uploading again.
                            break;    
                        case 'storage/server-file-wrong-size':
                            // File on the client does not match the size of the file recieved by the server. Try uploading again.
                            break;
                        case 'storage/cannot-slice-blob':
                            // Commonly occurs when the local file has changed (deleted, saved again, etc.). Try uploading again after verifying that the file hasn't changed.
                            break;
                        case 'storage/invalid-event-name':
                            // Invalid event name provided. Must be one of [`running`, `progress`, `pause`]
                            break;    
                        case 'storage/no-default-bucket':
                            // No bucket has been set in your config's storageBucket property.
                            break;
                        case 'storage/invalid-url':
                            // Invalid URL provided to refFromURL().
                            break;    
                        case 'storage/invalid-argument':
                            // The argument passed to put() must be `File`, `Blob`, or `UInt8` Array. The argument passed to putString() must be a raw, `Base64`, or `Base64URL` string.
                            break;
                    }
        });

        document.querySelector('.pdf-box').style.display = "block";

        setTimeout(() => {
            document.querySelector('.pdf-box').style.display = "none";
        }, 300000);

    }
    else if (clickCounter === 2) {
        document.querySelector('.pdf-box').style.display = "none";
        clickCounter = 0;        
    }
    else{
        clickCounter = 0;
    }
});
