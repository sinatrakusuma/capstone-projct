import React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import NavbarBrand from "../NavbarBrand/navbarBrand";
import NavbarLink from "../NavbarLink/navbarLink";
import { AppBar, Box } from "@mui/material";

const KontakButton = styled(Button)({
  fontSize: "0.75rem",
  padding: "12px 24px",
  minWidth: "120px",
  minHeight: "44px",
  lineHeight: 1.5,
  backgroundColor: "#2E582C",
  transition: "all .3s ease-in-out",
  "&:hover": {
    backgroundColor: "#2E582C",
    opacity: 0.9,
  },
});

const Navbar = () => {
  return (
    // <ThemeProvider theme={theme}>
    <AppBar
      position="sticky"
      sx={{
        width: "100%",
        padding: "16px 40px",
        backgroundColor: "#FFFFFF",
        boxShadow: "0px 4px 4px rgba(0,0,0,0.05)",
        margin: "0 auto",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <NavbarBrand></NavbarBrand>
        <nav>
          <NavbarLink></NavbarLink>
          <KontakButton variant="contained" disableRipple>
            Kontak
          </KontakButton>
        </nav>
      </Box>
    </AppBar>
    // </ThemeProvider>
  );
};

export default Navbar;
