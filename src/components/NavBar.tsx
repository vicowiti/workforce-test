import { AppBar, Container, Stack, Toolbar, Typography } from "@mui/material";
import React from "react";
import Logo from "../assets/logo.png";
const NavBar = () => {
  return (
    <AppBar position="static">
      <Container>
        <Stack direction="row" alignItems="center" gap="1rem">
          <img
            src={Logo}
            alt="logo"
            style={{ width: "50px", height: "100%" }}
          />
          <Typography
            component="h2"
            sx={{
              fontWeight: "600",
              fontSize: "1.5rem",
            }}
          >
            Workforce Jobs
          </Typography>
        </Stack>
      </Container>
    </AppBar>
  );
};

export default NavBar;
