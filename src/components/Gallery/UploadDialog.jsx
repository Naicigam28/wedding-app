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

function UploadDialog() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
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
            <TextField fullWidth multiline rows={4} />
          </Grid>

          <Grid item xs={12}>
            <Typography>Add an Image:</Typography>
            <input type="file" accept="image/*" id="file-input" />
          </Grid>
        </Grid>
        <DialogActions>
          <Button>Submit</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default UploadDialog;
