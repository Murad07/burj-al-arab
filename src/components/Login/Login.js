import React, { useContext } from 'react';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebase.config';

const Login = () => {
  firebase.initializeApp(firebaseConfig);

  const handleGoogleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        const user = result.user;
      })
      .catch(function (error) {
        console.log(error.message);
      });
  };

  return (
    <div>
      <h1>This is Login</h1>
      <button onClick={() => handleGoogleSignIn()}>Google Sign In</button>
    </div>
  );
};

export default Login;
