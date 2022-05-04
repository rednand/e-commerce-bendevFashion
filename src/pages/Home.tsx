import React from "react";
import { Header } from "../components/Header";
import ProductItem from "../components/ProductItem";
import products from "../services/products.json";

export const Home = () => {
  return (
    <>
      <Header />
      {products.map((item) => {
        return (
          <ProductItem
            src={item.src}
            key={item.titulo}
            preco={item.preco}
            titulo={item.titulo}
          />
        );
      })}
    </>
  );
};
