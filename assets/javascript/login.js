const auth = firebase.auth();


(function UIConfig() {

    var ui = new firebaseui.auth.AuthUI(firebase.auth());
    var uiConfig = {
        callbacks: {
            signInSuccessWithAuthResult: function (authResult, redirectUrl) {
                // User successfully signed in.
                // Return type determines whether we continue the redirect automatically
                // or whether we leave that to developer to handle.
                return true;
            },
            uiShown: function () {
                // The widget is rendered.
                // Hide the loader.
                document.getElementById('loader').style.display = 'none';
            }
        },
        // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
        signInFlow: 'popup',
        signInSuccessUrl: 'index.html',
        signInOptions: [
            // Leave the lines as is for the providers you want to offer your users.
            // firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            // firebase.auth.FacebookAuthProvider.PROVIDER_ID,
            // firebase.auth.TwitterAuthProvider.PROVIDER_ID,
            // firebase.auth.GithubAuthProvider.PROVIDER_ID,
            firebase.auth.EmailAuthProvider.PROVIDER_ID,
            // firebase.auth.PhoneAuthProvider.PROVIDER_ID
        ],
        // Terms of service url.
        tosUrl: 'index.html',
        // Privacy policy url.
        privacyPolicyUrl: '<your-privacy-policy-url>'
    };

    ui.start('#firebaseui-auth-container', uiConfig);

})();



$("#account-yes").on("click", function () {
    window.location.replace("login.html");

});

$("#account-no").on("click", function () {
    UIConfig();
    ui.start('#firebaseui-auth-container', {
        signInOptions: [
            {
                provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
                requireDisplayName: true
            }
        ]
    });
});




$("#login").on("click", function () {
    $('.modal').modal();
});


// var mainApp = {};
// (function userOption() {
//     var uid = null;
//     firebase.auth().onAuthStateChanged(function (user) {
//         if (user) {
//             // User is signed in.
//             uid = user.uid
//         }
//         else {
//             uid = null;
//         }
//     });
// });


function createAccount() {

    var user = firebase.auth().currentUser;

    //user can set a password
    var newPassword = getASecureRandomPassword();

    user.updatePassword(newPassword).then(function () {
        // Update successful.
    }).catch(function (error) {
        // An error happened.
    });
    var name, email, photoUrl, uid, emailVerified;

    if (user != null) {
        name = user.displayName;
        email = user.email;
        photoUrl = user.photoURL;
        emailVerified = user.emailVerified;
        uid = user.uid;  // The user's ID, unique to the Firebase project. Do NOT use
        // this value to authenticate with your backend server, if
        // you have one. Use User.getToken() instead.
    }


};

// function signIn() {
//     var email = $("#email");
//     var password = $("#password");

//     const promise = auth.signInWithEmailAndPassword(email.val(), password.val())
//     promise.catch(e => alert(e.message));
//     alert("Signed In: " + email.val());


// }
// function signOut() {

//     firebase.auth().signOut().then(function () {
//         // Sign-out successful.
//     }).catch(function (error) {
//         // An error happened.
//     });

//     console.log("sign out worked")


// }