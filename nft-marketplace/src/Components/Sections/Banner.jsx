import React from "react";
import styled from "styled-components";
import Button from "../../Assets/Button";
import WhiteButton from "../../Assets/WhiteButton";

const Section = styled.section`
  width: 100vw;
  height: 25rem;
  position: relative;
  border-top: 2px solid ${(props) => props.theme.text};
  border-top: 2px solid ${(props) => props.theme.text};
  background-color: ${(props) => `rgba(${props.theme.textRgba},0.9)`};
  display: flex;
  justify-content: center;
  align-items: center;
  /* flex-direction: column; */
  overflow: hidden;
  @media (max-width: 48em) {
    height: 15rem;
    flex-direction: column;
  }
`;
const ImgContainer = styled.div`
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.2;
  img {
    width: 15rem;
    height: auto;
  }
  @media (max-width: 48em) {
    img {
      width: 10rem;
      height: auto;
    }
  }
`;
const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxxl};
  color: ${(props) => props.theme.body};
  z-index: 20;
  width: 35%;
  padding: 1rem 2rem;
  @media (max-width: 64em) {
    font-size: ${(props) => props.theme.fontxxl};
    text-align: center;
    width: 40%;
  }
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};
    padding: 2rem 0;

    width: 100%;
  }
`;
const BtnContainer = styled.div`
  width: 35%;
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
  @media (max-width: 48em) {
    justify-content: center;

    width: 100%;
  }
`;
const Banner = () => {
  return (
    <Section>
      <ImgContainer>
        <img src="images/Nfts/bighead-1.svg" alt="" />
        <img src="images/Nfts/bighead-2.svg" alt="" />
        <img src="images/Nfts/bighead-3.svg" alt="" />
        <img src="images/Nfts/bighead-4.svg" alt="" />
        <img src="images/Nfts/bighead-5.svg" alt="" />
        <img src="images/Nfts/bighead-6.svg" alt="" />
        <img src="images/Nfts/bighead-7.svg" alt="" />
      </ImgContainer>
      <Title>
        Join the <br /> weirdos Club
      </Title>
      <BtnContainer>
        <WhiteButton text="Join now" link="#" />
      </BtnContainer>
    </Section>
  );
};

export default Banner;
