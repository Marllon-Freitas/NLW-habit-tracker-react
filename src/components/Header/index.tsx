import React from "react";
import logo from "../../assets/logo.svg";
import { Plus } from "phosphor-react";

import { PageHeader } from "./styled";
function Header() {
  return (
    <PageHeader>
      {" "}
      <img src={logo} alt="logo" />
      <button type="button">
        <Plus />
        Novo Hábito
      </button>
    </PageHeader>
  );
}

export default Header;
