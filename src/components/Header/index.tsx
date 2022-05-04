import React from "react";
import { HeaderContainer } from "./style";
import { List, Handbag, MagnifyingGlass } from "phosphor-react";
import { LogoHeader } from "../Logo";

export function Header() {
  return (
    <HeaderContainer>
      <List size={32} />
      <LogoHeader />
      <div className="icons-header">
        <MagnifyingGlass style={{ marginRight: "2rem" }} size={40} />
        <Handbag size={32} />
      </div>
    </HeaderContainer>
  );
}
