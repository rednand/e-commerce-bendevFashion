import React from "react";
import { FooterContainer } from "./styles";
import { DividingImage } from "../../pages/Home/styles";
import divide from "../../assets/images/divisor.png";

export const Footer = () => {
  return (
    <FooterContainer>
      <div>
        <p>support@bendev.bendevoficial.com </p>
        <a>+55 65 996478931</a>
        <p> 08:00 - 22:00 - Todos os dias</p>
      </div>
      <DividingImage>
        <img src={divide} alt="divisor" />
      </DividingImage>
      <div>
        <a href="/">Sobre</a>
        <a href="/contato">Contato</a>
        <a href="/blog">Blog</a>
      </div>
      <div>Copyright© Bendev Junior All Rights Reserved.</div>
    </FooterContainer>
  );
};
