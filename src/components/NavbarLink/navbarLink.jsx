import React from "react";
import { Box } from "@mui/material";

export default function NavbarLink() {
  const navLink = [
    {
      link: "Beranda",
      to: "/",
    },
    {
      link: "Bank Sampah",
      to: "/",
    },
    {
      link: "Daur Ulang",
      to: "/",
    },
    {
      link: "Layanan",
      to: "/",
    },
    {
      link: "Tentang Kami",
      to: "/",
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: {
          xs: "column",
          md: "row",
        },
        gap: "4px",
        position: {
          xs: "absolute",
          md: "static",
        },
        top: "100%",
        right: 0,
        zIndex: 100,
        backgroundColor: "#FFFFFF",
        width: "100%",
        padding: {
          xs: "24px",
          md: 0,
        },
        boxShadow: {
          xs: "-1px 10px 12px -2px rgba(0,0,0,0.08)",
          md: 0,
        },
        margin: {
          xs: "24 auto",
          md: 0,
        },
      }}
    >
      {navLink.map((navigation, index) => {
        return (
          <a href={navigation.to} key={index} className="link ">
            {navigation.link}
          </a>
        );
      })}
    </Box>
  );
}
