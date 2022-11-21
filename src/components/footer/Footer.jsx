import { styled, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import NavbarBrand from "../NavbarBrand/navbarBrand";
import {
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTelegram,
  FaWhatsapp,
} from "react-icons/fa";

// import fbIcon from "../../media/fbicon.png";
// import twitterIcon from "../../media/twittericon.png";
// import linkedinIcon from "../../media/linkedinicon.png";

const Footer = () => {
  const TextWithIcon = styled("div")(() => ({
    fontFamily: "manrope",
    fontWeight: "300",
    fontSize: "14px",
    color: "#E7E7E7",
  }));

  const FooterTextLink = styled("p")(() => ({
    fontWeight: 300,
    fontSize: "14px",
  }));

  return (
    <Container
      sx={{
        width: "100%",
        backgroundColor: "#172D15",
        color: "#FFFFFF",
        padding: {
          xs: "24px",
          md: "40px",
        },
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        gap: "24px",
      }}
    >
      <Box>
        <NavbarBrand />
        <FooterTextLink
          sx={{
            fontFamily: "manrope",
            fontWeight: "300",
            fontSize: "14px",
            color: "#E7E7E7",
          }}
        >
          DAUSAGI merupakan Platform Bank sampah digital untuk membantu dan
          memudahkan masyarakat dalam pengelolaan sampah.
        </FooterTextLink>
        <TextWithIcon
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <FaMapMarkerAlt />
          <FooterTextLink>Jl. Soerkarno Hatta, No.12</FooterTextLink>
        </TextWithIcon>
        <TextWithIcon
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <FaMapMarkerAlt />
          <FooterTextLink>Jam 08.00 - 17.00</FooterTextLink>
        </TextWithIcon>
      </Box>
      <Box>
        <Typography
          xs={{
            marginBottom: "12px",
            fontSize: "20px",
          }}
        >
          Link
        </Typography>
        <FooterTextLink>Beranda</FooterTextLink>
        <FooterTextLink>Bank Sampah</FooterTextLink>
        <FooterTextLink>Daur Ulang</FooterTextLink>
        <FooterTextLink>Layanan</FooterTextLink>
        <FooterTextLink>Tentang Kami</FooterTextLink>
      </Box>
      <Box>
        <Typography>Temukan Kami</Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <FooterTextLink>
            <FaFacebook size={24} />
          </FooterTextLink>
          <FooterTextLink>
            <FaInstagram size={24} />
          </FooterTextLink>
          <FooterTextLink>
            <FaYoutube size={24} />
          </FooterTextLink>
          <FooterTextLink>
            <FaTelegram size={24} />
          </FooterTextLink>
          <FooterTextLink>
            <FaWhatsapp size={24} />
          </FooterTextLink>
        </Box>
      </Box>
    </Container>
  );
};

export default Footer;
