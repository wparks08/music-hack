//var app_firebase = {};
// Your web app's Firebase configuration

// var firebaseConfig = {
//   apiKey: "AIzaSyAW_2dRcGBTlzxsDlHv9jIHJ3iCt0aE3ls",
//   authDomain: "musichack-f293f.firebaseapp.com",
//   databaseURL: "https://musichack-f293f.firebaseio.com",
//   projectId: "musichack-f293f",
//   storageBucket: "musichack-f293f.appspot.com",
//   messagingSenderId: "359518173568",
//   appId: "1:359518173568:web:f3e5d3f28817d094a12965"
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

var firebaseConfig = {
    apiKey: "AIzaSyDb4F80V58mLYBnfYdR81kckDbJWoLfqLM",
    authDomain: "nivedita-950a5.firebaseapp.com",
    databaseURL: "https://nivedita-950a5.firebaseio.com",
    projectId: "nivedita-950a5",
    storageBucket: "nivedita-950a5.appspot.com",
    messagingSenderId: "133520558572",
    appId: "1:133520558572:web:ceb2d347facd07d4f358c9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var app_firebase = firebase;

const auth = firebase.auth();

(function UIConfig() {
    var ui = new firebaseui.auth.AuthUI(firebase.auth());
    var uiConfig = {
        callbacks: {
            signInSuccessWithAuthResult: function (authResult, redirectUrl) {
                // User successfully signed in.
                // Return type determines whether we continue the redirect automatically
                // or whether we leave that to developer to handle.
                console.log(authResult);
                console.log("name:", authResult.user.displayName);
                console.log("email:", authResult.user.email);
                var firstName = authResult.user.displayName.split(" ")[0];
                // create the user in the db
                //result = subject.replace(/[^A-Z0-9]+/ig, "");
                var key = authResult.user.email.split("@")[0].replace(/[^A-Z0-9]+/ig, "")
                console.log("key: ", key)
                var user = app_firebase.ref("user/" + key);
                console.log("user: ", user);

                user.once("value").then(function (snapUser) {
                    console.log("userinfo: ", snapUser);
                    var userinfo = snapUser.exists()
                    if (!userinfo) {
                        userinfo = {
                            name: authResult.user.displayName,
                            email: authResult.user.email,
                            fav: []
                        };

                        user.set(userinfo);
                    }
                })
                // .then(function(){
                //       //return true;
                // });

            },
            uiShown: function () {
                // The widget is rendered.
                // Hide the loader.
                document.getElementById("loader").style.display = "none";
            }
        },
        // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
        signInFlow: "popup",
        signInSuccessUrl: "./index.html",
        signInOptions: [
            // Leave the lines as is for the providers you want to offer your users.
            // firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            // firebase.auth.FacebookAuthProvider.PROVIDER_ID,
            // firebase.auth.TwitterAuthProvider.PROVIDER_ID,
            // firebase.auth.GithubAuthProvider.PROVIDER_ID,
            firebase.auth.EmailAuthProvider.PROVIDER_ID
            // firebase.auth.PhoneAuthProvider.PROVIDER_ID
        ],
        // Terms of service url.
        tosUrl: "index.html",
        // Privacy policy url.
        privacyPolicyUrl: "<your-privacy-policy-url>"
    };

    ui.start("#firebaseui-auth-container", uiConfig);
})();

$("#account-yes").on("click", function () {
    window.location.replace("login.html");
});

$("#account-no").on("click", function () {
    UIConfig();
    ui.start("#firebaseui-auth-container", {
        signInOptions: [
            {
                provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
                requireDisplayName: true
            }
        ]
    });
});

$("#login").on("click", function () {
    $(".modal").modal();
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

    user
        .updatePassword(newPassword)
        .then(function () {
            // Update successful.
        })
        .catch(function (error) {
            // An error happened.
        });
    var name, email, photoUrl, uid, emailVerified;

    if (user != null) {
        name = user.displayName;
        email = user.email;
        emailVerified = user.emailVerified;
        uid = user.uid; // The user's ID, unique to the Firebase project. Do NOT use
        // this value to authenticate with your backend server, if
        // you have one. Use User.getToken() instead.
    }
}

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

