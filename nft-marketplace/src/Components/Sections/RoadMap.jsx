import React from "react";
import styled from "styled-components";
import DrawSvg from "../../Assets/DrawSvg";
import { useRef } from "react";
import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
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
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};
  }
`;

const Container = styled.div`
  width: 70%;
  height: 200vh;
  background-color: ${(props) => props.theme.body};
  margin: 0 auto;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  @media (max-width: 64em) {
    width: 80%;
  }
  @media (max-width: 48em) {
    width: 90%;
  }
`;
const SvgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ItemContainer = styled.div`
  width: 40%;
  height: fit-content;
  padding: 1rem;
  border: 3px solid ${(props) => props.theme.text};
  @media (max-width: 48em) {
    width: 70%;
  }
`;
const Box = styled.p`
  height: fit-content;
  background-color: ${(props) => props.theme.carouselColor};
  color: ${(props) => props.theme.text};
  padding: 1rem;
  position: relative;
  border: 1px solid ${(props) => props.theme.text};
`;
const SubTitle = styled.span`
  display: block;
  font-size: ${(props) => props.theme.fontxl};
  text-transform: capitalize;
  color: ${(props) => props.theme.text};
  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontlg};
    font-weight: 600;
  }
`;
const Text = styled.span`
  display: block;
  font-size: ${(props) => props.theme.fontsm};
  text-transform: capitalize;
  color: ${(props) => props.theme.text};
  font-weight: 400;
  margin: 0.5rem 0;
  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontxs};
  }
`;

const Items = styled.ul`
  list-style: none;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 48em) {
    width: 90%;
  }

  & > *:nth-of-type(2n + 1) {
    justify-content: start;
    @media (max-width: 48em) {
      justify-content: center;
    }
    div {
      border-radius: 50px 0 50px 0;
      text-align: right;
    }

    p {
      border-radius: 40px 0 40px 0;
    }
  }
  & > *:nth-of-type(2n) {
    margin-left: 120%;
    @media (max-width: 48em) {
      justify-content: center;
      margin-left: 0;
      div {
        border-radius: 50px 0 50px 0;
        text-align: right;
      }
      p {
        border-radius: 40px 0 40px 0;
      }
    }

    div {
      border-radius: 0 50px 0 50px;
      text-align: left;
    }
    p {
      border-radius: 0 40px 0 40px;
      text-align: left;
    }
  }
`;
const Item = styled.li`
width:100%;
height:100%:
display:flex;
justify-content:center;

@media (max-width: 48em) {
    justify-content:flex-end !important;
  }
`;

const RoadMapItem = ({ title, subText, addToRef }) => {
  return (
    <Item ref={addToRef}>
      <ItemContainer>
        <Box>
          <SubTitle>{title}</SubTitle>
          <Text>{subText}</Text>
        </Box>
      </ItemContainer>
    </Item>
  );
};

const RoadMap = () => {
  const revealRefs = useRef([]);
  revealRefs.current = [];
  gsap.registerPlugin(ScrollTrigger);
  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  useLayoutEffect(() => {
    let t1 = gsap.timeline();
    revealRefs.current.forEach((el, index) => {
      t1.fromTo(
        el.childNodes[0],
        {
          y: "0",
        },
        {
          y: "-30%",
          scrollTrigger: {
            id: `section-${index + 1}`,
            trigger: el,
            start: "top center+=200px",
            end: "bottom-center",
            scrub: true,
            //markers: true,
          },
        }
      );
    });
    return () => {};
  }, []);

  return (
    <Section id="roadmap">
      <Title>Roadmap</Title>
      <Container>
        <SvgContainer>
          <DrawSvg />
        </SvgContainer>
        <Items>
          <Item>&nbsp;</Item>
          <RoadMapItem
            addToRef={addToRefs}
            title="Grand Opening"
            subText="Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. At Repellat Placeat, Adipisicing Elit. At Repellat Placeat."
          />
          <RoadMapItem
            addToRef={addToRefs}
            title=" Great Benefits"
            subText="Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. At Repellat Placeat, Adipisicing Elit. At Repellat Placeat."
          />
          <RoadMapItem
            addToRef={addToRefs}
            title="Early Access"
            subText="Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. At Repellat Placeat, Adipisicing Elit. At Repellat Placeat."
          />
          <RoadMapItem
            addToRef={addToRefs}
            title="New Merch"
            subText="Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. At Repellat Placeat, Adipisicing Elit. At Repellat Placeat."
          />
          <RoadMapItem
            addToRef={addToRefs}
            title="Holders Ranking"
            subText="Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. At Repellat Placeat, Adipisicing Elit. At Repellat Placeat."
          />
        </Items>
      </Container>
    </Section>
  );
};

export default RoadMap;
