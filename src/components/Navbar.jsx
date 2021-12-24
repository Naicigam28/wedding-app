import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import React from "react";

import Signin from "./Signin/Signin";

function NavBar() {
  
  

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h3" sx={{ flexGrow: 1, textAlign: "left" }}>
            Keanu & Nerissa
          </Typography>
          <Signin/>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;
