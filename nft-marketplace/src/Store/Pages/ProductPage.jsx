import React from "react";
import styled from "styled-components";
import Product from "../../Assets/Product";
const Container = styled.div`
  width: 75%;
  margin: 2rem auto;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  /* grid-template-rows: repeat(2, 1fr); */
  gap: 30px;
  /* display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap; */
  @media (max-width: 64em) {
    grid-template-columns: repeat(3, 1fr);

    width: 90%;
  }
  @media (max-width: 48em) {
    width: 100%;
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 30em) {
    width: 100%;
    grid-template-columns: repeat(1, 1fr);
  }
`;
const ProductPage = () => {
  return (
    <Container>
      <Product />
    </Container>
  );
};

export default ProductPage;