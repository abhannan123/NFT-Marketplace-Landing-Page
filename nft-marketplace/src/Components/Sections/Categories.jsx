import React from "react";
import styled from "styled-components";

const ImgContainer = styled.div`
  color: ${(props) => props.theme.body};
  margin: 2rem 1rem;
  position: relative;

  transition: all 0.3s ease;
  &:hover {
    img {
      transform: translateY(-2rem) scale(1);
    }
  }

  position: relative;
  cursor: pointer;
  img {
    width: 100%;
    height: auto;
  }
`;
const Name = styled.h2`
  font-size: ${(props) => props.theme.fontxl};
  position: absolute;
  /* display: flex; */
  /* align-items: center; */
  /* justify-content: center; */
  text-transform: uppercase;
  top: 40%;
  left: 25%;
  border-bottom: 2px solid ${(props) => props.theme.body};
  color: ${(props) => props.theme.body};
`;
const Position = styled.h2`
  font-size: ${(props) => props.theme.fontmd};
  position: absolute;
  /* display: flex;
  align-items: center;
  justify-content: center; */
  text-transform: capitalize;
  /* margin-top: 1rem; */
  color: ${(props) => `rgba(${props.theme.textRgba},0.9)`};
  font-weight: 400;
  top: 60%;
  left: 35%;
`;

const Categories = ({
  img = "images/Nfts/bighead-2.svg",
  name = "hanna",
  description = "name",
}) => {
  return (
    <ImgContainer>
      <img src={img} />
      <Name>{name}</Name>
      <Position>{description}</Position>
    </ImgContainer>
  );
};

export default Categories;
