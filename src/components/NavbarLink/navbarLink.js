import React from "react";
import Wrapper from "../Wrapper/wrapper";

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
    <Wrapper className="nav-right">
      {navLink.map((navigation, index) => {
        return (
          <a href={navigation.to} key={index} className="link ">
            {navigation.link}
          </a>
        );
      })}
    </Wrapper>
  );
}
