var firebaseConfig = {
    apiKey: "AIzaSyBNWCdF1KfecgtAqZ2kDja9-zanr0L1oyQ",
    authDomain: "kashtops-1035c.firebaseapp.com",
    databaseURL: "https://kashtops-1035c-default-rtdb.firebaseio.com",
    projectId: "kashtops-1035c",
    storageBucket: "kashtops-1035c.appspot.com",
    messagingSenderId: "109361039373",
    appId: "1:109361039373:web:a132da0c6a848ee20fad44",
    measurementId: "G-FFQE81J8XR"
  };
  firebase.initializeApp(firebaseConfig);
  
  var storageRef = firebase.storage().ref();
  var pdfDatabaseRef = firebase.database().ref("pdfs");
  
  var form = document.querySelector("form");
  var pdfNameInput = document.querySelector("#pdfName");
  var pdfFileInput = document.querySelector("#pdfFile");
  
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    var pdfName = pdfNameInput.value;
    var pdfFile = pdfFileInput.files[0];
    storageRef.child("pdfs/" + pdfName).put(pdfFile).then(function(snapshot) {
      snapshot.ref.getDownloadURL().then(function(downloadURL) {
        pdfDatabaseRef.child(pdfName).set({
          name: pdfName,
          url: downloadURL
        });
        console.log("PDF uploaded and URL stored in database.");
      });
    }).catch(function(error) {
      console.error("Error uploading PDF:", error);
    });
  });
  