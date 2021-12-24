import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import UploadDialog from "./UploadDialog";

function Gallery() {
  return (
    <>
      <Grid container>
        <Grid item xs={10}>
          <Typography variant="h4">Gallery</Typography>
        </Grid>
        <Grid item xs={2} ><UploadDialog/></Grid>
      </Grid>
    </>
  );
}
export default Gallery;
