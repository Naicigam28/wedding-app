import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import React from "react";

function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography sx={{ flexGrow: 1 ,textAlign:"left"}} >Keanu & Nerissa</Typography>
          <Button color="inherit" >Login</Button>
        </Toolbar>
        
      </AppBar>
    </Box>
  );
}

export default NavBar;
