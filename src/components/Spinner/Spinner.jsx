import { Backdrop, CircularProgress } from "@mui/material";
import React from "react";

function Spinner({ text }) {
  return (
    <Backdrop sx={{ color: "#fff", zIndex: 999999 }} open={true}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
}
export default Spinner;
