import firebase from "firebase";

// Initialize Firebase


try {
    var config = {
        apiKey: "AIzaSyBMRDAaXWzl736XYNx4NQdXjnnZ_3HVeTA",
        authDomain: "arhexanon-todo-app.firebaseapp.com",
        databaseURL: "https://arhexanon-todo-app.firebaseio.com",
        storageBucket: "arhexanon-todo-app.appspot.com",
        messagingSenderId: "845420083455"
    };
    firebase.initializeApp(config);
} catch (e) {

}


var firebaseRef = firebase.database().ref();

firebaseRef.set({
    appName: "Tofdodd App",
    isRunnig: true,
    user: {
        nane: "ar",
        age: 25
    }
});
console.log("sdfsf");
firebaseRef.child('user').set({
    nane: "arw"
}).then( () => {
    console.log("Set worked");
}, (e) => {
    console.log (e.message);
});