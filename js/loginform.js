
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCNl7zixoWdOT4-_U3LnrqSAq4wky9AS90",
    authDomain: "e-learning-for-kids.firebaseapp.com",
    databaseURL: "https://e-learning-for-kids.firebaseio.com",
    projectId: "e-learning-for-kids",
    storageBucket: "e-learning-for-kids.appspot.com",
    messagingSenderId: "166860014630",
    appId: "1:166860014630:web:b1278477732d61f0cfd2e7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();

  function signup()
  {
    var email = document.getElementById("email");
    var password=document.getElementById("password");

    const promise = auth.createUserWithEmailandPassword(email.value, password.value);
    promise.catch(e => alert(e.message));

    alert("Signed up");
  }

  function login()
  {
    var email = document.getElementById("email");
    var password=document.getElementById("password");

    const promise = auth.signInWithEmailandPassword(email.value, password.value);
    promise.catch(e => alert(e.message));

    alert("Logged in");
  }