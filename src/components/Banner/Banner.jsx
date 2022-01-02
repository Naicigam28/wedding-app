import { Grid, Typography } from "@mui/material";
import React from "react";
import "./Banner.css";
function Banner() {
  return (
    <Grid container >
      <Grid item md={6}>
        <div className="Banner">
          <img
            className="BannerImg"
            src="/Banner1.png"
            alt="Banner goes here"
          />
        </div>
      </Grid>
      <Grid item md={6}>
        <div className="Banner-Text">
          <Typography variant="body1" >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
            </Typography>
        </div>
      </Grid>
    </Grid>
  );
}
export default Banner;
