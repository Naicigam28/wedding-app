import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { writeMessage } from "../../Firebase/RealtimeDB";
import { uploadFile } from "../../Firebase/storage";
import Spinner from "../Spinner/Spinner";

function UploadDialog() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState();

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleFile = (e) => {
    setFile(e.target.files[0]);
  };
  const handlePost = (e) => {
    setLoading(true);
    uploadFile(file)
      .then((res) => {
        writeMessage(message,title, res.metadata.fullPath);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };
  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  return (
    <>
      {loading && <Spinner />}
      <Button onClick={handleOpen}>Add A picture</Button>
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="md"
        handleOpen
        fullWidth
      >
        <DialogTitle>Add a message</DialogTitle>
        <Grid
          container
          spacing={3}
          style={{ padding: "5px" }}
          justifyContent="center"
          justifyItems="center"
          alignItems="center"
          alignContent="center"
        >
          <Grid item xs={12}>
            <TextField
              value={title}
              onChange={handleTitle}
              fullWidth
              label="Title"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Message"
              value={message}
              onChange={handleMessage}
              fullWidth
              multiline
              rows={4}
            />
          </Grid>

          <Grid item xs={12}>
            <Typography>Add an Image:</Typography>
            <input
              onChange={handleFile}
              type="file"
              accept="image/*"
              id="file-input"
            />
          </Grid>
        </Grid>
        <DialogActions>
          <Button onClick={handlePost}>Submit</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default UploadDialog;
