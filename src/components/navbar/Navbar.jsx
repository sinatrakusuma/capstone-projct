import React from "react";
import "./navbar.scss";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
// import CustomButton from '../CustomButton/CustomButton'

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
      <div className="wrap">
        <div className="brand">
          <h1>DAUSAGI</h1>
        </div>
        <nav>
          <div className="nav-right">
            <a href="" className="link active">
              Beranda
            </a>
            <a href="" className="link">
              Bank Sampah
            </a>
            <a href="" className="link">
              Daur Ulang
            </a>
            <a href="" className="link">
              Layanan
            </a>
            <a href="" className="link">
              Tentang Kami
            </a>
            <KontakButton variant="contained" disableRipple>
              Kontak
            </KontakButton>
            {/* <CustomButton
          backgroundColor='#2E582C'
          color='#ffffff'
          textButton='KONTAK'
          moreBtn={true}
          /> */}
            {/* <Button variant="contained" sx={{ bgcolor: (theme) => theme.palette.secondary.main,':hover' : bgcolor}} >Kontak</Button> */}
            {/* <a href="" className="button">Kontak</a> */}
          </div>
        </nav>
      </div>
    </header>
    // </ThemeProvider>
  );
};

export default Navbar;
