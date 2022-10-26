import React from "react";
import styled from "styled-components";
import HomePic from "./GIF.gif";

const CoverVideo = () => {
  const VideoContainer = styled.div`
    width: 100%;
    video {
      width: 100%;
      height: auto;
    }
  `;
  return (
    <VideoContainer>
      <video src={HomePic} typeof="video/mp4" autoPlay muted loop></video>
    </VideoContainer>
  );
};

export default CoverVideo;
