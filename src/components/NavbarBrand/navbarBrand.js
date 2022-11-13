import React from "react";
import logo from "../../media/logo.svg";
import Wrapper from "../Wrapper/wrapper";

export default function NavbarBrand() {
  return (
    <Wrapper className="brand">
      <img src={logo} alt="" />
      <h1>DAUSAGI</h1>
    </Wrapper>
  );
}
