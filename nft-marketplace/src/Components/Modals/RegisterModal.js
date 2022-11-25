<<<<<<< Updated upstream
=======
import React, { useState } from "react";
import Modal from "react-modal";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { loginModal, SignupModal } from "../../Store/actions/models";
import { toast } from "react-toastify";
import { Navigate } from "react-router-dom";
import axios from "axios";
const RegisterModal = () => {
  const { isLoginOpen, isSignUpOpen } = useSelector((state) => state);

  const dispatch = useDispatch();
  const handleSignUpToogle = () => {
    dispatch(SignupModal(!isSignUpOpen));
  };
  const handleLoginToogle = () => {
    handleSignUpToogle();
    dispatch(loginModal(!isLoginOpen));
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
      padding: 20px 15px;
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
  const signUp = async (data) => {
    const order = {
      email: data?.email,
      password: data?.password,
      password_confirmation: data?.confirmpassword,
    };

    try {
      const response = axios
        .post("https://ecommercetestproject.herokuapp.com/users", order)
        .then((response) => {
          // toast.success(data?.data?.message);
          if (response?.status == 200) {
            toast.success("Your Account created");
            handleLoginToogle();
            // Navigate("/");
          } else {
            toast.error(response?.data?.title);
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = (data) => {
    signUp(data);
  };
  return (
    <Section>
      <Modal
        isOpen={isSignUpOpen}
        onRequestClose={handleSignUpToogle}
        contentLabel="LOGIN"
        style={customStyles}
      >
        <FormConatiner>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormName>SignUp</FormName>
            <div className="email">
              <span>Email</span>
              <input
                type="email"
                {...register("email", {
                  required: true,
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
              {errors.password && <p>confirm Password is required.</p>}
            </div>
            <div className="password">
              <span>
                Confirm
                <br />
                Password
              </span>
              <input
                type="password"
                {...register("confirmpassword", { required: true })}
              />
              {errors.confirmpassword && <p>Password is required.</p>}
            </div>
            <CartButton onClick={handleSubmit}>SignUp</CartButton>
          </form>
          <CartButton2 onClick={handleLoginToogle}>Login</CartButton2>
        </FormConatiner>
      </Modal>
    </Section>
  );
};

export default RegisterModal;
>>>>>>> Stashed changes
