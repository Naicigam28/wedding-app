import {
  Button,
  Dialog,
  DialogTitle,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import {
  getAuth,
  signInWithEmailAndPassword,
  setPersistence,
  onAuthStateChanged,
  browserLocalPersistence,
} from "firebase/auth";
import { initializeApp, getApps } from "firebase/app";
import firebaseConfig from "../../Firebase/keys";
function Signin() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("k.h.dirkse78@gmail.com");
  const [password, setPassword] = useState("1208MyQueen!");
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    if (getApps().length < 1) {
      initializeApp(firebaseConfig);
      onAuthStateChanged(getAuth(), (user) => {
        setCurrentUser(user);
      });
    } else {
      setCurrentUser(getAuth().currentUser);
    }
  }, []);
  const handleLogin = () => {
    const auth = getAuth();
    setPersistence(auth, browserLocalPersistence).then(() => {
      return signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          setCurrentUser(user);
          console.log("USER", user);
          handleClose();
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log("ERROR", errorCode, errorMessage);
          // ..
        });
    });
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  return currentUser ? (
    <Typography color="inherit" textAlign="center" variant="h6">
      {currentUser.email}
    </Typography>
  ) : (
    <>
      <Button color="inherit" onClick={handleOpen}>
        Log In
      </Button>
      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle>Log in</DialogTitle>
        <Grid container justifyContent="center" spacing={5}>
          <Grid item xs={10}>
            <TextField
              autoFocus
              fullWidth
              value={email}
              label="Email Address"
              type="email"
              variant="outlined"
              onChange={handleEmail}
            />
          </Grid>
          <Grid item xs={10}>
            <TextField
              value={password}
              label="Password"
              type="password"
              variant="outlined"
              onChange={handlePassword}
              fullWidth
            />
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Button fullWidth onClick={handleLogin}>
            Log in
          </Button>
        </Grid>

        <Grid container justifyContent="center" spacing={3}>
          <Grid item xs={10}>
            <Typography textAlign="center" variant="h6">
              Or
            </Typography>
          </Grid>
        </Grid>
        <Button>Gmail Sign in</Button>
      </Dialog>
    </>
  );
}

export default Signin;
