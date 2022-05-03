import React from "react";
import { HeaderContainer, DivCenter } from "./style";
import { List, Handbag, MagnifyingGlass } from "phosphor-react";

export function Header() {
  return (
    <HeaderContainer>
      <List size={32} />
      <DivCenter />
      <div>
        <MagnifyingGlass style={{ marginRight: "2rem" }} size={40} />
        <Handbag size={32} />
      </div>
    </HeaderContainer>
  );
}
