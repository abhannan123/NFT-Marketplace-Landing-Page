import React from "react";
import styled from "styled-components";
const Product = () => {
  const ProductContainer = styled.div`
    img {
      width: 100%;
      height: 200px;
      object-fit: cover;
      border-radius: 21px;
    }
    border: 1px solid ${(props) => props.theme.text};
    border-radius: 15px;
    @media (max-width: 64em) {
      margin: 0 auto;
    }
    /* margin: 10px auto; */
  `;
  const ProductDescription = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    margin-left: 20px;
    margin-right: 20px;
  `;
  const ProductTitle = styled.p`
  font-size:${(props) => props.theme.fontsm}
  text-transform: capitalize;
  color: ${(props) => props.theme.text};
  `;
  const ProductPrice = styled.p`
    color: ${(props) => props.theme.text};
    font-size: ${(props) => props.theme.fontsm};
    margin-top: 5px;
  `;
  const CartButton = styled.button`
    display: inline-block;

    background-color: ${(props) => props.theme.text};
    color: ${(props) => props.theme.body};
    width: 80%;

    outline: none;
    border: 2px solid ${(props) => props.theme.text};
    font-size: ${(props) => props.theme.fontsm};
    padding: 20px 20px;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.2s ease;
    &:hover {
      transform: scale(0.9);
    }
    &::after {
      content: " ";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) scale(0);
      border: 2px solid ${(props) => props.theme.text};
      width: 100%;
      height: 100%;
      border-radius: 50px;
      transition: all 0.2s ease;
    }
    &:hover::after {
      transform: translate(-50%, -50%) scale(1);
      padding: 0.3rem;
    }
    margin-top: 20px;
    margin-left: 26px;
    margin-bottom: 20px;
    @media (max-width: 64em) {
      padding: 5px 5px;
      margin-top: 5px;
      margin-bottom: 5px;
    }
  `;
  const images = [
    "images/download.jpeg",
    "images/download.jpeg",
    "images/download.jpeg",
    "images/download.jpeg",
    "images/download.jpeg",
  ];

  return (
    <>
      {images.map((item) => {
        return (
          <ProductContainer>
            <img src={item} />
            <ProductDescription>
              <ProductTitle>Product title</ProductTitle>
              <ProductPrice>$40</ProductPrice>
            </ProductDescription>
            <CartButton>Add To Cart</CartButton>
          </ProductContainer>
        );
      })}
    </>
  );
};

export default Product;
