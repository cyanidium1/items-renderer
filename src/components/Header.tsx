import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Navigation from "./Navigation";
import Logo from "../images/logoHorizontal.webp";

function ResponsiveAppBar() {
  const logoText = "DEV VERSION RENDERER";

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#E89F50",
        fontSize: "20px",
        boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar sx={{ justifyContent: "space-between" }} disableGutters>
          <h1 className="text-blue-900 font-extrabold">
            {logoText}
          </h1>
          <Navigation logoText={logoText} />
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
