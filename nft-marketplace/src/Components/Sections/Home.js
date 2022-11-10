import React from "react";
import styled from "styled-components";
import CoverVideo from "../../Assets/CoverVideo";
import FeaturedTypeWrite from "../../Assets/FeaturedTypeWrite";
import Product from "../../Assets/Product";
import TypeWriterText from "../../Assets/TypeWriterText";
import About from "./About";
import ShowCase from "./ShowCase";
import useWindowSize from "react-use/lib/useWindowSize";

import Confetti from "react-confetti";

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
    margin-bottom: 50px;
    @media (max-width: 64em) {
      width: 85%;
    }
    @media (max-width: 48em) {
      flex-direction: column-reverse;
      & > *:first-child {
        width: 100%;
        margin-top: 2rem;
      }
    }
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
    /* height: 100%; */
    display: grid;
    /* flex-direction: column; */
    grid-template-columns: repeat(2, 1fr);
    /* grid-template-rows:repeat(2, 1fr) */

    gap: 30px;
    align-items: center;
    margin-top: 70px;
    @media (max-width: 64em) {
      grid-template-columns: repeat(3, 1fr);
      width: 100%;
    }
    @media (max-width: 30em) {
      grid-template-columns: repeat(1, 1fr);
      width: 100%;
    }
  `;
  const { width, height } = useWindowSize();

  return (
    <Section id="Home">
      <Confetti width={width} height={height} gravity={0.1}></Confetti>
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
          <Product />
        </ProductBox>
      </Container>

      <div>
        <About />
        {/* <ShowCase /> */}
      </div>
    </Section>
  );
};

export default Home;
