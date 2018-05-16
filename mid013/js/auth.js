
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDEJnLMsroHMDcXxuQ5E0sebsI3rNL7yqY",
    authDomain: "iweather-d3fca.firebaseapp.com",
    databaseURL: "https://iweather-d3fca.firebaseio.com",
    projectId: "iweather-d3fca",
    storageBucket: "iweather-d3fca.appspot.com",
    messagingSenderId: "377128520443"
  };
  firebase.initializeApp(config);


function handleSignUp() {
    //step 1 : Get the email/ password entered by users
    var email = document.getElementById('form-email').value;
    var password = document.getElementById('form-password').value;
    //step 2 : Validate
    if (email.length < 4) {
        alert("Please enter a valid email address");
        return;
    }
    if (password.length < 4) {
        alert("Please use a stronger password");
        return;
    }
    //Step 3 : Create 
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(
            //success
            function() {
                alert("user created");
            }
        )
        .catch(
            function(error) {
                alert(error.message);
            }


        )
}
//step 2 : signed in
function handleSignIn() {
    var email = document.getElementById('form-email').value;
    var password = document.getElementById('form-password').value;

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(
            function() {
                alert("signed in")
            }
        )
        .catch(
            function(error) {
                alert(error.message)

            }
        )
}

function handleSignOut() {
    firebase.auth().signOut()
        .then(
            function() {
                alert("signed out")
            }
        )
        .catch(
            function(error) {
                alert(error.message)

            }
        )
}

function handleFBLogin() {
    if (!firebase.auth().currentUser) {
        var provider = new firebase.auth.FacebookAuthProvider();
		firebase.auth().signInWithPopup(provider)
            .then(function(result) {
                var token = result.credential.accessToken;
                var user = result.user;
                console.log(user);
                window.open('https://www.facebook.com/')
				
            })
            .catch(
                function(error) {
                    alert(error.message)

                });
    } else {
        handleSignOut();
    }
}

function handlegoogleLogin() {
    if (!firebase.auth().currentUser) {
        var provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(provider)
            .then(function(result) {
                var token = result.credential.accessToken;
                var user = result.user;
                console.log(user);
                window.open('https://www.google.com/')
            })
            .catch(
                function(error) {
                    alert(error.message)

                });
    } else {
        handleSignOut();
    }
}
