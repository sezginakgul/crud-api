import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";

const NavBar = () => {
  return (
    <AppBar position="static" color="secondary">
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <div
            width={80}
            style={{
              display: { xs: "flex" },
              mr: 1,
            }}
          >
            😎
          </div>
          <Box
            sx={{ color: "black", fontSize: "1rem", marginRight: "1rem" }}
          ></Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
