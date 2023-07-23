var firebaseConfig = {
  apiKey: "AIzaSyCBOu2NukPMhGXr46EO7aY8R-IIbReW31c",
  authDomain: "memoria-web-51384.firebaseapp.com",
  projectId: "memoria-web-51384",
  storageBucket: "memoria-web-51384.appspot.com",
  messagingSenderId: "887978552785",
  appId: "1:887978552785:web:bb074f05fef446a45544f0",
  measurementId: "G-S7EL6RSHGE"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

document.getElementById('signup-form').addEventListener('submit', function(event) {
  event.preventDefault();
  var email = document.getElementById('signup-email').value;
  var password = document.getElementById('signup-password').value;

  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // The user has been signed up and is signed in.
      var user = userCredential.user;
      console.log('User signed up:', user);
    })
    .catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.error('Error signing up:', errorCode, errorMessage);
    });
});
