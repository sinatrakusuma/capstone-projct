import React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Wrapper from "../Wrapper/wrapper";
import NavbarBrand from "../NavbarBrand/navbarBrand";
import NavbarLink from "../NavbarLink/navbarLink";

const KontakButton = styled(Button)({
  fontSize: "0.75rem",
  padding: "8px 24px",
  lineHeight: 1.5,
  backgroundColor: "#2E582C",
  "&:hover": {
    backgroundColor: "#2E582C",
    opacity: 0.8,
  },
  "&:active": {
    boxShadow: "none",
  },
  "&:focus": {
    boxShadow: "0 0 0 0.1rem rgba(0.0.0.0)",
  },
});

const Navbar = () => {
  return (
    // <ThemeProvider theme={theme}>
    <header>
      <Wrapper className="wrap">
        <NavbarBrand></NavbarBrand>
        <nav>
          <NavbarLink></NavbarLink>
          <KontakButton variant="contained" disableRipple>
            Kontak
          </KontakButton>
        </nav>
      </Wrapper>
    </header>
    // </ThemeProvider>
  );
};

export default Navbar;
