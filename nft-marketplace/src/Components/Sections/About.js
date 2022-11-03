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
  `;
  const Box = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  `;

  const Title = styled.h2`
    font-size: ${(props) => props.theme.fontxxl};
    text-transform: capitalize;
    width: 80%;
    color: ${(props) => props.theme.body};
    align-self: flex-start;
    margin: 1rem auto;
    font-weight: 400;
  `;
  const SubText = styled.p`
    font-size: ${(props) => props.theme.fontlg};
  Line 70:11:  img elements must have an alt prop, either with meaningful text, or an empty string for decorative images  jsx-a11y/alt-text
  Line 74:11:  img elements must have an alt prop, either with meaningful text, or an empty string for decorative images  jsx-a11y/alt-text
  Line 77:11:  img elements must have an alt prop, either with meaningful text, or an empty string for decorative images  jsx-a11y/alt-text
  Line 80:11:  img elements must have an alt prop, either with meaningful text, or an empty string for decorative images  jsx-a11y/alt-text
  Line 83:11:  img elements must have an alt prop, either with meaningful text, or an empty string for decorative images  jsx-a11y/alt-text
  Line 86:11:  img elements must have an alt prop, either with meaningful text, or an empty string for decorative images  jsx-a11y/alt-text
    text-transform: capitalize;
    width: 80%;
    color: ${(props) => props.theme.body};
    align-self: flex-start;
    margin: 1rem auto;
  `;
  const SubTextLight = styled.p`
    font-size: ${(props) => props.theme.fontlg};
    text-transform: capitalize;
    width: 80%;
    color: ${(props) => `rgba(${props.theme.bodyRgba},0.6)`};
    align-self: flex-start;
    margin: 1rem auto;
  `;
  return (
    <Section>
      <Container>
        <Box>
          <Carosel />
        </Box>
        <Box>
          <Title>Welcome to the Weirdos Club</Title>
          <SubText>
            The WEIRDOS CLUB is a private collection of NFTs—unique digital
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
