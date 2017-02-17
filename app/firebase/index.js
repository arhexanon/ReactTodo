import firebase from 'firebase';

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

export var firebaseRef = firebase.database().ref();
export default firebase;