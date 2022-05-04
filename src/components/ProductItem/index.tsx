import React from "react";
interface ProductsProps {
  titulo: string;
  preco: string;
  src: string;
}

function ProductItem({ titulo, preco, src }: ProductsProps) {
  return (
    <div>
      <img src={src} alt={titulo} />
      <h2>{titulo}</h2>
      <h3>{preco}</h3>
    </div>
  );
}

export default ProductItem;
