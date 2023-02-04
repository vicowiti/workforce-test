import { AppBar, Stack, Typography } from "@mui/material";

import Logo from "../assets/logo.png";
const NavBar = () => {
  return (
    <AppBar position="static">
      <Stack direction="row" ml={2} alignItems="center" gap="1rem">
        <img src={Logo} alt="logo" style={{ width: "45px", height: "100%" }} />
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
    </AppBar>
  );
};

export default NavBar;
