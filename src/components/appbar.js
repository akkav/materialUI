import { Divider, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const appbar = () => {

  return (
    <>
      <Toolbar>
        <IconButton color="inherit">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Blogging website
          </Typography>
        <IconButton>
          <AccountCircleIcon />
        </IconButton>
      </Toolbar>
      <Divider />
      <Toolbar style={{
        fontSize: "1.5rem",
        textTransform: "uppercase",
        justifyContent: "center",
        fontFamily: "Montserrat",

      }}>
        Express Your Views Here...
      </Toolbar>
    </>
  );
};

export default appbar;
