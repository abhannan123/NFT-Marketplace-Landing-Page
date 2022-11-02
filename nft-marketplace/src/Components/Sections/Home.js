import React from "react";
import styled from "styled-components";
import CoverVideo from "../../Assets/CoverVideo";
import FeaturedTypeWrite from "../../Assets/FeaturedTypeWrite";
import TypeWriterText from "../../Assets/TypeWriterText";

const Home = () => {
  const Section = styled.section`
    min-height: ${(props) => `calc(100vh-${props.theme.navHeight})`};
    width: 100vw;
    position: relative;
    background-color: ${(props) => props.theme.body};
  `;
  const Container = styled.div`
    width: 75%;
    min-height: 80vh;
    margin: 0 auto;
    /* background-color: lightblue; */
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  const Box = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  `;
  const FeatureBox = styled.div`
    width: 40%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  `;
  const ProductBox = styled.div`
    width: 60%;
    height: 100%;
    display: grid;
    /* flex-direction: column; */
    grid-template-columns: repeat(3, 1fr);
    /* grid-template-rows:repeat(2, 1fr) */

    gap: 30px;
    align-items: center;
    margin-top: 70px;
  `;
  const ProductContainer = styled.div`
    width: 300px;
    height: 500px;
    img {
      width: 100%;
      height: 300px;
      object-fit: cover;
    }
    border: 1px solid ${(props) => props.theme.text};
    border-radius: 15px;
  `;
  const ProductDescription = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 40px;
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
    padding: 0.9rem 2.3rem;
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
    margin-top: 50px;
    margin-left: 26px;
  `;
  const images = [
    "images/download.jpeg",
    "images/download.jpeg",
    "images/download.jpeg",
    "images/download.jpeg",
    "images/download.jpeg",
  ];
  return (
    <Section>
      <Container>
        <Box>
          <TypeWriterText />
        </Box>

        <Box>
          <CoverVideo />
        </Box>
      </Container>
      <Container>
        <FeatureBox>
          <FeaturedTypeWrite />
        </FeatureBox>

        <ProductBox>
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
        </ProductBox>
      </Container>
    </Section>
  );
};

export default Home;
