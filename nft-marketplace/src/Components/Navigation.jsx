import React from "react";
import styled from "styled-components";
import Button from "../Assets/Button";
import Logo from "../Assets/Logo";
const Navigation = () => {
  const Section = styled.section`
    width: 100vw;
    background-color: ${(props) => props.theme.body};
  `;
  const NavBar = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 85%;
    height: ${(props) => props.theme.navHeight};
    margin: auto;
  `;
  const Menu = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
  `;
  const MenuItem = styled.li`
    margin: 0 1rem;
    color: ${(props) => props.theme.text};
    cursor: pointer;
    & ::after {
      content: "";
      display: block;
      width: 0%;
      height: 2px;
      background-color: ${(props) => props.theme.text};
      transition: width 0.3s ease;
    }
    &:hover::after {
      width: 100%;
    }
  `;
  return (
    <Section>
      <NavBar>
        <Logo />
        <Menu>
          <MenuItem>Home</MenuItem>
          <MenuItem>About</MenuItem>
          <MenuItem>Roadmap</MenuItem>
          <MenuItem>Showcase</MenuItem>
          <MenuItem>Team</MenuItem>
          <MenuItem>Faq</MenuItem>
        </Menu>
        <Button link={"http://google.com"} text="Connect Wallet" />
      </NavBar>
    </Section>
  );
};

export default Navigation;
