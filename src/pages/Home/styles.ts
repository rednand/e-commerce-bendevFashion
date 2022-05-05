import styled from "styled-components";

const ContainerHome = styled.div`
  font-family: "Tenor Sans";
`;
const Landing = styled.div`
  height: 150vh;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  div {
    font-family: "Bodoni Moda";
    position: absolute;
    top: 40%;
    left: 10%;
    color: #333333;
    font-size: 55px;
    line-height: 55px;
    font-style: italic;
    font-weight: 700;
    letter-spacing: 1.2px;
    opacity: 0.7;

    p:nth-child(2) {
      margin-left: 8%;
    }
  }
`;

const DividingImage = styled.div`
  width: 100%;
  margin: 15% auto 0;
  display: flex;
  justify-content: center;

  img {
    width: 125px;
    height: 10px;
  }
`;

const Categories = styled.div`
  padding: 2rem 0 1rem;
  display: flex;
  justify-content: space-around;
  font-size: 14px;
  line-height: 106%;
  text-align: center;
  letter-spacing: 1px;
`;

const ProductsContainer = styled.div`
  padding: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
`;

const ExploreButton = styled.button`
  display: flex;
  justify-content: center;
  border: none;
  background-color: transparent;
  align-items: center;
  margin: 10% auto;
  width: 90%;
  font-size: 16px;
  line-height: 24px;
  color: #000000;

  .arrow {
    padding-left: 10px;
  }
`;

const DivIcons = styled.div`
  width: 50%;
  padding: 0 25% 0 25%;
  display: flex;
  justify-content: space-around;
`;

export {
  DivIcons,
  ContainerHome,
  Landing,
  DividingImage,
  Categories,
  ProductsContainer,
  ExploreButton,
};
