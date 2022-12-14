import React from "react";
import styled, { ThemeProvider } from "styled-components";
import Carosel from "../../Assets/Carosel";
import WhiteButton from "../../Assets/WhiteButton";

const About = () => {
  const Section = styled.section`
    min-height: ${(props) => `calc(100vh-${props.theme.navHeight})`};
    width: 100vw;
    position: relative;
    background-color: ${(props) => props.theme.text};
    /* color: ${(props) => props.theme.body}; */
    margin-top: 25px;
  `;
  const Container = styled.div`
    width: 75%;
    min-height: 80vh;
    margin: 0 auto;
    /* background-color: lightblue; */
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 70em) {
      width: 85%;
    }
    @media (max-width: 64em) {
      width: 100%;
      flex-direction: column;
      & > *:last-child {
        width: 80%;
      }
      button {
        width: 100%;
        margin: 0 auto;
      }
    }
    @media (max-width: 40em) {
      & > *:last-child {
        width: 90%;
      }
    }
  `;
  const Box = styled.div`
    width: 50%;
    height: 100%;
    min-height: 60vh;
    display: flex;
    flex-direction: column;

    align-items: center;
    @media (max-width: 40em) {
      min-height: 50vh;
    }
    button {
      margin-right: auto;
      margin-left: 55px;
    }
  `;

  const Title = styled.h2`
    font-size: ${(props) => props.theme.fontxxl};
    text-transform: capitalize;
    width: 80%;
    line-height: 1.5;

    color: ${(props) => props.theme.body};
    align-self: flex-start;
    margin: 1rem auto;
    font-weight: 400;
    letter-spacing: 3px;

    @media (max-width: 64em) {
      width: 100%;
      text-align: center;
    }
    @media (max-width: 40em) {
      font-size: ${(props) => props.theme.fontxl};
    }
    @media (max-width: 30em) {
      font-size: ${(props) => props.theme.fontlg};
    }
  `;
  const SubText = styled.p`
    font-size: ${(props) => props.theme.fontlg};
    text-transform: capitalize;
    width: 80%;
    letter-spacing: 2px;

    line-height: 2.5;
    color: ${(props) => props.theme.body};
    align-self: flex-start;
    margin: 1rem auto;
    @media (max-width: 64em) {
      width: 100%;
      text-align: center;
      font-size: ${(props) => props.theme.fontmd};
    }
    @media (max-width: 40em) {
      font-size: ${(props) => props.theme.fontmd};
    }
    @media (max-width: 30em) {
      font-size: ${(props) => props.theme.fontsm};
    }
  `;
  const SubTextLight = styled.p`
    font-size: ${(props) => props.theme.fontlg};
    text-transform: capitalize;
    width: 80%;
    letter-spacing: 2px;

    color: ${(props) => `rgba(${props.theme.bodyRgba},0.6)`};
    align-self: flex-start;
    line-height: 2.5;
    margin: 1rem auto;
    @media (max-width: 64em) {
      width: 100%;
      text-align: center;
      font-size: ${(props) => props.theme.fontsm};
    }
    @media (max-width: 40em) {
      font-size: ${(props) => props.theme.fontsm};
    }
    @media (max-width: 30em) {
      font-size: ${(props) => props.theme.fontxs};
    }
  `;
  return (
    <Section id="about">
      <Container>
        <Box>
          <Carosel />
        </Box>
        <Box>
          <Title>Welcome to the Weirdos Club</Title>
          <SubText>
            The WEIRDOS CLUB is a private collection of NFTs???unique digital
            collectibles. The Weirdos are stored as ERC-721 tokens on the
            Ethereum blockchain and hosted on IPFS.
          </SubText>
          <SubTextLight>
            With more than 200+ hand drawn traits, each NFT is unique and comes
            with a membership to an exclusive group of successful investors.
            Join an ambitious ever-growing community with multiple benefits and
            utilities.
          </SubTextLight>
          <WhiteButton text="Join Our Discord" />
        </Box>
      </Container>
    </Section>
  );
};

export default About;
