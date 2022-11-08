import React from "react";
import styled from "styled-components";

const CoverVideo = () => {
  const VideoContainer = styled.div`
    width: 50%;
    img {
      width: 100%;
      height: auto;
    }
    @media (max-width: 64em) {
      min-width: 40vh;
    }
  `;

  return (
    <VideoContainer>
      <img src="images/Home GIF.gif" />
    </VideoContainer>
  );
};

export default CoverVideo;
