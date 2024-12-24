const unsubscribe = onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/auth/web/manage-users
    const uid = user.uid;
    console.log("User logged in with UID:", uid);
    // ...
  } else {
    // User is signed out
    console.log("User signed out");
    // ...
  }
});

// unsubscribe from onAuthStateChanged to prevent memory leaks
// ... some code

// forgot to call unsubscribe()
