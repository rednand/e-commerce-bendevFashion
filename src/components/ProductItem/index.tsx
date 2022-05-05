import React from "react";
import { ProductItemContainer } from "./styles";

interface ProductsProps {
  titulo: string;
  preco: string;
  src: string;
}

function ProductItem({ titulo, preco, src }: ProductsProps) {
  return (
    <ProductItemContainer>
      <img src={require("../../assets/images/" + src)} alt={titulo} />
      <h2>{titulo}</h2>
      <h3>{preco}</h3>
    </ProductItemContainer>
  );
}

export default ProductItem;
