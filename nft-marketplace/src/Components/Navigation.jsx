import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../Assets/Button";
import WhiteButton from "../Assets/WhiteButton";
import Logo from "../Assets/Logo";
import { LOGIN_MODAL } from "../Store/actions/actionTypees";
import { getCookie, removeCookie } from "../cookies/Cookies";
import { useDispatch, useSelector } from "react-redux";
import { loginModal, logoutUser, SignupModal } from "../Store/actions/models";
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
    .mobile {
      display: none;
    }
    @media (max-width: 64em) {
      .dekstop {
        display: none;
      }
      .mobile {
        display: flex;
        flex-direction: column;
        div {
          margin-bottom: 20px;
        }
        /* justify-content: space-between; */
      }
    }
  `;
  const Menu = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    @media (max-width: 64em) {
      /*1024px*/

      position: fixed;
      top: ${(props) => props.theme.navHeight};
      /* top: 2rem; */
      left: 0;
      right: 0;
      bottom: 0;
      width: 100vw;
      height: ${(props) => `calc(100vh-${props.theme.navHeight})`};
      z-index: 50;
      background: ${(props) => `rgba(${props.theme.bodyRgba},0.85)`};
      flex-direction: column;
      justify-content: center;
      transform: ${(props) =>
        props.open ? "translateY(0)" : "translateY(1000%)"};
      transition: all 0.3s ease;
      backdrop-filter: blur(2px);
    }
  `;
  const MenuItem = styled.li`
    margin: 0 1rem;
    color: ${(props) => props.theme.text};
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
    @media (max-width: 64em) {
      margin: 1rem 0;
      &::after {
        display: none;
      }
    }
  `;
  const HumburgerMenu = styled.span`
    width: ${(props) => (props.open ? "2rem" : "1.5rem")};
    height: 2px;
    background: ${(props) => props.theme.text};
    position: absolute;
    top: 2rem;
    left: 50%;
    transform: ${(props) =>
      props.open
        ? "translateX(-50%) rotate(90deg)"
        : "translateX(-50%) rotate(0)"};
    display: none;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 0.3s ease;
    &::after,
    &:before {
      content: " ";
      width: ${(props) => (props.open ? "1rem" : "1.5rem")};
      height: 2px;
      transition: all 0.3s ease;
      position: absolute;
      background: ${(props) => props.theme.text};
      right: ${(props) => (props.open ? "-2px" : "0px")};
    }
    &::after {
      top: ${(props) => (props.open ? "0.3rem" : "0.5rem")};
      transform: ${(props) => (props.open ? "rotate(-40deg)" : "rotate(0)")};
    }
    &::before {
      bottom: ${(props) => (props.open ? "0.3rem" : "0.5rem")};
      transform: ${(props) => (props.open ? "rotate(40deg)" : "rotate(0)")};
    }
    @media (max-width: 64em) {
      /*1024px*/
      display: flex;
    }
  `;
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const user = getCookie("user") && JSON.parse(getCookie("user"));
  console.log({ user });
  const { isLoginOpen, isSignUpOpen, isLogout } = useSelector((state) => state);

  const handleLoginToggle = () => {
    dispatch(loginModal(!isLoginOpen));

    //handleCustomMenuClose()
  };
  const handleSignUpToogle = () => {
    dispatch(SignupModal(!isSignUpOpen));
  };
  const handleLogout = () => {
    dispatch(logoutUser(true));
    removeCookie("user");
    Navigate("/");
    dispatch(logoutUser(false));
  };

  return (
    <Section>
      <NavBar>
        <Logo />
        <HumburgerMenu onClick={() => setOpen(!open)} open={open}>
          &nbsp;
        </HumburgerMenu>
        <Menu open={open}>
          <Link to="/">
            {" "}
            <MenuItem>Home</MenuItem>
          </Link>
          <Link to="/about">
            {" "}
            <MenuItem>About</MenuItem>
          </Link>
          <Link to="/categories">
            <MenuItem>Categories</MenuItem>
          </Link>
          <Link to="/cart">
            <MenuItem>Cart</MenuItem>
          </Link>
          <MenuItem>
            <div className="mobile">
              {" "}
              {user ? (
                <>
                  <Button text="Signout"></Button>
                </>
              ) : (
                <>
                  <WhiteButton text="Login" onClick={handleLoginToggle} />
                  <Button text="Register" onClick={handleSignUpToogle}></Button>
                </>
              )}
            </div>
          </MenuItem>
        </Menu>
        <div className="dekstop">
          {" "}
          {user ? (
            <>
              <Button text="Signout" onClick={handleLogout}></Button>
            </>
          ) : (
            <>
              <WhiteButton text="Login" onClick={handleLoginToggle} />
              <Button text="Register" onClick={handleSignUpToogle}></Button>
            </>
          )}{" "}
        </div>
      </NavBar>
    </Section>
  );
};

export default Navigation;
