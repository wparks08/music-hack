
var app_firebase = {};
// Your web app's Firebase configuration
(function fireBaseConfig() {

    var firebaseConfig = {
        apiKey: "AIzaSyAW_2dRcGBTlzxsDlHv9jIHJ3iCt0aE3ls",
        authDomain: "musichack-f293f.firebaseapp.com",
        databaseURL: "https://musichack-f293f.firebaseio.com",
        projectId: "musichack-f293f",
        storageBucket: "musichack-f293f.appspot.com",
        messagingSenderId: "359518173568",
        appId: "1:359518173568:web:f3e5d3f28817d094a12965"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    app_firebase = firebase;

})();

function signUp() {
    var email = $("#email");
    var password = $("#password");

    const promise = auth.createUserWithEmailAndPassword(email.val(), password.val())
    promise.catch(e => alert(e.message));
    alert("Signed Up!");


}

function signIn() {
    var email = $("#email");
    var password = $("#password");

    const promise = auth.signInWithEmailAndPassword(email.val(), password.val())
    promise.catch(e => alert(e.message));
    alert("Signed In: " + email.val());


}
function signOut() {
    auth.signOut();


    alert("Signed Out: " + email.val());


}