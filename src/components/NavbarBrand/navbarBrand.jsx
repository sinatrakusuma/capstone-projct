import React from "react";
import logo from "../../media/logo.svg";
import { Box } from "@mui/system";

export default function NavbarBrand() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img className="logo-image" src={logo} alt="Dausagi" />
      <h1 className="logo-name">DAUSAGI</h1>
    </Box>
  );
}
