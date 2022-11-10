import React from "react";
import styled, { keyframes } from "styled-components";

const Section = styled.section`
  width: 100%;
  min-height: 100vh;
  background-color: ${(props) => props.theme.text};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  /* margin-top: 40px; */
  & > *:first-child {
    animation-duration: 20s;
    @media (max-width: 30em) {
      animation-duration: 15s;
    }
  }

  & > *:last-child {
    animation-duration: 15s;
    @media (max-width: 30em) {
      animation-duration: 10s;
    }
  }
`;
const move = keyframes`
0%{transform:translateX(100%)
};
100%{
    transform:translateX(-100%)
}
`;
const Row = styled.div`
  /* background-color: lightblue; */
  white-space: nowrap;
  box-sizing: content-box;
  margin: 2rem 0;
  display: flex;
  animation: ${move} 20s linear infinite ${(props) => props.direction};
  div {
    width: 5rem;
    height: 5rem;
    margin: 2rem;
    /* background-color: yellow; */
  }
`;
const ImgContainer = styled.div`
  width: 25rem;
  margin: 0 auto;
  background-color: ${(props) => props.theme.body};
  border-radius: 20px;
  cursor: pointer;
  @media (max-width: 48em) {
    width: 12rem;
  }
  @media (max-width: 30em) {
    width: 10rem;
  }
  img {
    width: 100%;
    height: auto;
  }
`;

const NftItem = ({ img, number = 0, price = 0 }) => {
  return (
    <ImgContainer>
      <img src={img} />
    </ImgContainer>
  );
};
const ShowCase = () => {
  return (
    <Section id="showcase">
      <Row direction="none">
        <NftItem img="images/Nfts/bighead-1.svg" />
        <NftItem img="images/Nfts/bighead-2.svg" />
        <NftItem img="images/Nfts/bighead-3.svg" />
        <NftItem img="images/Nfts/bighead-4.svg" />
        <NftItem img="images/Nfts/bighead-5.svg" />
        <NftItem img="images/Nfts/bighead-6.svg" />
        <NftItem img="images/Nfts/bighead-7.svg" />
        <NftItem img="images/Nfts/bighead-8.svg" />
        <NftItem img="images/Nfts/bighead-9.svg" />
        <NftItem img="images/Nfts/bighead-10.svg" />
      </Row>
      <Row direction="reverse">
        <NftItem img="images/Nfts/bighead-1.svg" />
        <NftItem img="images/Nfts/bighead-2.svg" />
        <NftItem img="images/Nfts/bighead-3.svg" />
        <NftItem img="images/Nfts/bighead-4.svg" />
        <NftItem img="images/Nfts/bighead-5.svg" />
        <NftItem img="images/Nfts/bighead-6.svg" />
        <NftItem img="images/Nfts/bighead-7.svg" />
        <NftItem img="images/Nfts/bighead-8.svg" />
        <NftItem img="images/Nfts/bighead-9.svg" />
        <NftItem img="images/Nfts/bighead-10.svg" />
      </Row>
    </Section>
  );
};

export default ShowCase;
