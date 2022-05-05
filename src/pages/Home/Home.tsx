import React from "react";
import {
  ArrowRight,
  TwitterLogo,
  InstagramLogo,
  YoutubeLogo,
} from "phosphor-react";
import { Header } from "../../components/Header";
import ProductItem from "../../components/ProductItem";
import products from "../../services/products.json";
import {
  ContainerHome,
  ProductsContainer,
  Landing,
  Categories,
  ExploreButton,
  DividingImage,
  DivIcons,
} from "./styles";
import imgBg from "../../assets/images/backgroundHome.png";
import divide from "../../assets/images/divisor.png";
import { Footer } from "../../components/Footer";

export const Home = () => {
  return (
    <ContainerHome>
      <Header />
      <Landing style={{ backgroundImage: `url(${imgBg})` }}>
        <div>
          <p>LUXURY</p> <p>FASHION</p> <p>& ACCESSORIES</p>
        </div>
      </Landing>
      <DividingImage>
        <img src={divide} alt="divisor" />
      </DividingImage>
      <Categories>
        <a>Todos</a>
        <a>Cate 2</a>
        <a>Cate 3</a>
        <a>Cate 4</a>
        <a>Cate 5</a>
      </Categories>
      <ProductsContainer>
        {products.map((item, index) => {
          return (
            <ProductItem
              src={item.src}
              key={index}
              preco={item.preco}
              titulo={item.titulo}
            />
          );
        })}
      </ProductsContainer>
      <ExploreButton>
        Explore mais <ArrowRight className="arrow" size={20} />
      </ExploreButton>

      <DivIcons>
        <TwitterLogo size={25} weight="fill" />
        <InstagramLogo size={25} weight="fill" />
        <YoutubeLogo size={25} weight="fill" />
      </DivIcons>
      <DividingImage>
        <img src={divide} alt="divisor" />
      </DividingImage>
      <Footer />
      <DividingImage>
        <img src={divide} alt="divisor" />
      </DividingImage>
    </ContainerHome>
  );
};
