import {
    Alert,
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  Grid,
  Snackbar,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
function Register() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const [errorOnRegister, setErrorOnRegister] = useState(false);
  const [error, setError] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleRegister = () => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        //const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode,errorMessage)
        setErrorOnRegister(errorMessage);
        // ..
      });
  };

  return (
    <>
      <Snackbar
        open={errorOnRegister ? true : false}
        message={errorOnRegister}
        autoHideDuration={6000}
      >
        <Alert onClose={()=>{setErrorOnRegister(false)}} severity="error" sx={{ width: "100%" }}>
          {errorOnRegister}
        </Alert>
      </Snackbar>
      <Button color="inherit" onClick={handleOpen}>
        Register
      </Button>
      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle>Register</DialogTitle>
        <Grid
          container
          justifyContent="center"
          spacing={2}
          style={{ padding: "5px" }}
        >
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="First Name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Last Name"
              value={surname}
              onChange={(e) => {
                setSurname(e.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Password"
              value={password}
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              error={error}
              label="Retype Password"
              type="password"
              value={password2}
              helperText={error ? "Passwords Must match" : ""}
              onChange={(e) => {
                if (password !== e.target.value) {
                  setError(true);
                } else {
                  setError(false);
                }
                setPassword2(e.target.value);
              }}
            />
          </Grid>
        </Grid>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button disabled={error} onClick={handleRegister}>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default Register;
