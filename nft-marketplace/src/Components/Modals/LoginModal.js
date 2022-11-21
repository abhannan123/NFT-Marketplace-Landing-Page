import React, { useState } from "react";
import Modal from "react-modal";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { LOGIN_MODAL } from "../../Store/actions/actionTypees";
import { loginModal, SignupModal } from "../../Store/actions/models";
import { useForm } from "react-hook-form";
import axios from "axios";
const LoginModal = () => {
  const { isLoginOpen, isSignUpOpen } = useSelector((state) => state);

  const dispatch = useDispatch();
  const handleLoginToogle = () => {
    dispatch(loginModal(!isLoginOpen));
  };
  const handleSignUpToogle = () => {
    handleLoginToogle();
    dispatch(SignupModal(!isSignUpOpen));
  };
  const Section = styled.section`
    width: 100%;
    height: 100%;
  `;
  const FormConatiner = styled.div`
    width: 100%;
    height: 100%;
    input {
      width: 220px;
      height: 30px;
      /* margin-right: 50px; */
      border-radius: 10px;
    }
    span {
      margin-right: 50px;
      text-transform: capitalize;
    }
    .password {
      margin-top: 20px;
      span {
        margin-right: 20px;
      }
    }
  `;
  const FormName = styled.div`
    display: flex;
    justify-content: center;
    font-size: ${(props) => props.theme.fontxl};
    font-weight: 600;
    line-height: 3rem;
    letter-spacing: 3px;
  `;
  const CartButton = styled.button`
    display: inline-block;

    background-color: ${(props) => props.theme.text};
    color: ${(props) => props.theme.body};
    width: 80%;

    outline: none;
    border: 2px solid ${(props) => props.theme.text};
    font-size: ${(props) => props.theme.fontsm};
    padding: 20px 20px;
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
    margin-top: 20px;
    margin-left: 26px;
    margin-bottom: 20px;
    @media (max-width: 64em) {
      padding: 5px 5px;
      margin-top: 5px;
      margin-bottom: 5px;
    }
    @media (max-width: 30em) {
      margin-left: 0;
      font-size: ${(props) => props.theme.fontxs};
      width: 100%;
    }
  `;
  const CartButton2 = styled.button`
    display: inline-block;

    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.text};
    width: 80%;

    outline: none;
    border: 2px solid ${(props) => props.theme.text};
    font-size: ${(props) => props.theme.fontsm};
    padding: 20px 20px;
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

    margin-left: 26px;
    margin-bottom: 20px;
    @media (max-width: 64em) {
      padding: 5px 5px;
      margin-top: 5px;
      margin-bottom: 5px;
    }
    @media (max-width: 30em) {
      margin-left: 0;
      font-size: ${(props) => props.theme.fontxs};
      width: 100%;
    }
  `;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  const signIn = async (data) => {
    const order = {
      email: data?.email,
      password: data?.password,
      grant_type: "password",
    };

    try {
      const response = axios
        .post("https://ecommercetestproject.herokuapp.com/oauth/token", order)
        .then((data) => {
          // toast.success(data?.data?.message);
          console.log(data);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = (data) => {
    signIn(data);
  };
  return (
    <Section>
      <Modal
        isOpen={isLoginOpen}
        onRequestClose={handleLoginToogle}
        contentLabel="LOGIN"
        style={customStyles}
      >
        <FormConatiner>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormName>Login</FormName>
            <div className="email">
              <span>Email</span>
              <input
                type="email"
                {...register("email", {
                  required: true,
                  maxLength: 20,
                })}
              />
              {errors.email && <p>Email is required.</p>}
            </div>
            <div className="password">
              <span>Password</span>
              <input
                type="password"
                {...register("password", { required: true })}
              />
              {errors.password && <p>Password is required.</p>}
            </div>
            <CartButton onClick={handleSubmit}>Login</CartButton>
          </form>
          <CartButton2 onClick={handleSignUpToogle}>SignUp</CartButton2>
        </FormConatiner>
      </Modal>
    </Section>
  );
};

export default LoginModal;
