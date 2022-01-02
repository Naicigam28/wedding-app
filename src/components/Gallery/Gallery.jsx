import { Grid, Typography } from "@mui/material";
import React from "react";
import SlideShow from "./SlideShow";
import UploadDialog from "./UploadDialog";

function Gallery() {
  return (
    <>
      <Grid container>
        <Grid item md={10}>
          <Typography variant="h4">Gallery</Typography>
        </Grid>
        <Grid item md={2}>
          <UploadDialog />
        </Grid>
      </Grid>
      <SlideShow />
    </>
  );
}
export default Gallery;
