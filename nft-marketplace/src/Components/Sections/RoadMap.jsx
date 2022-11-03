import React from "react";
import styled from "styled-components";
import DrawSvg from "../../Assets/DrawSvg";

const RoadMap = () => {
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
  `;
  const Container = styled.div`
    width: 70%;
    height: 200vh;
    background-color: ${(props) => props.theme.body};
    margin: 0, auto;
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
  `;
  const SvgContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  const Items = styled.ul`
    list-style: none;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: lightblue;
  `;
  return (
    <Section>
      <Title>Roadmap</Title>
      <Container>
        <SvgContainer>
          <DrawSvg />
        </SvgContainer>
        <Items>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
        </Items>
      </Container>
    </Section>
  );
};

export default RoadMap;
