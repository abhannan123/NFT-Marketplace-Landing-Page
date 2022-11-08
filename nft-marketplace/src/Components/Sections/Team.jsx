import React from "react";
import styled from "styled-components";

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  position: relative;
  background-color: ${(props) => props.theme.body};
  /* color: ${(props) => props.theme.body}; */
  margin-top: 25px;
`;
const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;

  color: ${(props) => props.theme.text};

  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;
  border-bottom: 2px solid ${(props) => props.theme.text};
  width: fit-content;
  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontxl};
  }
`;
const Container = styled.div`
  width: 75%;
  margin: 2rem auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  @media (max-width: 64em) {
    width: 80%;
  }
  @media (max-width: 48em) {
    width: 90%;
    justify-content: center;
  }
`;
const Item = styled.div`
  width: calc(20rem-4vw);
  padding: 1rem 0;
  color: ${(props) => props.theme.body};
  margin: 2rem 1rem;
  position: relative;
  border: 2px solid ${(props) => props.theme.text};
  border-radius: 20px;
  transition: all 0.3s ease;
  &:hover {
    img {
      transform: translateY(-2rem) scale(1.2);
    }
  }
  @media (max-width: 64em) {
    width: 70vw;
  }
`;
const ImgContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  background-color: ${(props) => props.theme.carouselColor};
  border: 1px solid ${(props) => props.theme.text};
  padding: 1rem;
  border-radius: 20px;
  cursor: pointer;
  img {
    width: 100%;
    height: auto;
  }
`;
const Name = styled.h2`
  font-size: ${(props) => props.theme.fontlg};
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  margin-top: 1rem;
  color: ${(props) => props.theme.text};
`;
const Position = styled.h2`
  font-size: ${(props) => props.theme.fontmd};
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: capitalize;
  margin-top: 1rem;
  color: ${(props) => `rgba(${props.theme.textRgba},0.9)`};
  font-weight: 400;
`;
const MemberComponent = ({ img, name = "", position = "" }) => {
  return (
    <Item>
      <ImgContainer>
        <img src={img} />
      </ImgContainer>
      <Name>{name}</Name>
      <Position>{position}</Position>
    </Item>
  );
};

const Team = () => {
  return (
    <Section id="team">
      <Title>Team</Title>
      <Container>
        <MemberComponent
          img="images/Nfts/bighead-1.svg"
          position="Founder"
          name="weirdo"
        />
        <MemberComponent
          img="images/Nfts/bighead-2.svg"
          position="Founder"
          name="weirdo"
        />
        <MemberComponent
          img="images/Nfts/bighead-3.svg"
          position="Founder"
          name="weirdo"
        />
        <MemberComponent
          img="images/Nfts/bighead-4.svg"
          position="Founder"
          name="weirdo"
        />
        <MemberComponent
          img="images/Nfts/bighead-5.svg"
          position="Founder"
          name="weirdo"
        />
        <MemberComponent
          img="images/Nfts/bighead-6.svg"
          position="Founder"
          name="weirdo"
        />
        <MemberComponent
          img="images/Nfts/bighead-7.svg"
          position="Founder"
          name="weirdo"
        />
        <MemberComponent
          img="images/Nfts/bighead-8.svg"
          position="Founder"
          name="weirdo"
        />
        <MemberComponent
          img="images/Nfts/bighead-9.svg"
          position="Founder"
          name="weirdo"
        />
      </Container>
    </Section>
  );
};

export default Team;
