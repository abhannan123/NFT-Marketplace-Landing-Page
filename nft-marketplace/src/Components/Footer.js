import React from "react";
import Banner from "./Sections/Banner";
import styled from "styled-components";
import Logo from "../Assets/Logo";
import Facebook from "../Icons/Facebook";
import Instagram from "../Icons/Instagram";
import LinkedIn from "../Icons/LinkedIn";
import Twitter from "../Icons/Twitter";

const Section = styled.section`
  width: 100vw;
  min-height:100vh;
  position: relative;
Color:${(props) => props.theme.text}
  background-color: ${(props) => props.theme.body};
  display: flex;

  flex-direction: column;
  /* overflow: hidden; */
`;
const Container = styled.div`
  width: 75%;
  margin: 2rem auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${(props) => props.theme.text};
  @media (max-width: 48em) {
    width: 90%;
  }
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 48em) {
    width: 100%;
  }
`;
const IconList = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  & > * {
    padding-right: 0.5rem;
    transition: all 0.2s ease;
    &:hover {
      transform: scale(1.2);
    }
  }
`;
const MenuItems = styled.ul`
  list-style: none;
  width: 50%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 1rem;
  @media (max-width: 48em) {
    display: none;
  }
`;
const Item = styled.li`
  width: fit-content;
  cursor: pointer;
  &:after {
    content: "";
    display: block;
    width: 0%;
    height: 2px;
    background-color: ${(props) => props.theme.text};
    transition: width 0.3s ease;
  }
  &:hover:after {
    width: 100%;
  }
`;
const Bottom = styled.div`
  width: 75%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    text-decoration: underline;
  }
  @media (max-width: 48em) {
    flex-direction: column;
    width: 100%;
    span {
      margin-bottom: 1rem;
    }
  }
`;

const Footer = () => {
  return (
    <Section>
      {" "}
      <Banner />
      <Container>
        <Left>
          <Logo />
          <IconList>
            <a href="http://facebook.com" target="blank" rel="noopener">
              <Facebook />
            </a>
            <a href="https://www.instagram.com/" target="blank" rel="noopener">
              <Instagram />
            </a>
            <a href="https://www.linkedin.com/" target="blank" rel="noopener">
              <LinkedIn />
            </a>
            <a
              href="https://twitter.com/i/flow/login"
              target="blank"
              rel="noopener"
            >
              <Twitter />
            </a>
          </IconList>
        </Left>
        <MenuItems>
          <Item>Home</Item>
          <Item>About</Item>
          <Item>Roadmap</Item>
          <Item>Showcase</Item>
          <Item>Team</Item>
        </MenuItems>
      </Container>
      <Bottom>
        <span>
          &copy;{new Date().getFullYear()} Weirdos Club.All rights Reserved
        </span>
      </Bottom>
    </Section>
  );
};

export default Footer;
