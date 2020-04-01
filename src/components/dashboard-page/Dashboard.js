import React, { useState, useEffect } from "react";
import styled from "styled-components";
import messages from "../../assets/messagesIcon.png";
import photos from "../../assets/photosIcon.png";
import stories from "../../assets/storiesIcon.png";
import profile from "../../assets/profileIcon.png";
import videos from "../../assets/videosIcon.png";
import posts from "../../assets/postsIcon.png";
import Icon from "./Icon";

const Dashboard = () => {
  let [images, setImages] = useState("");

  useEffect(() => {
    getImages();
  }, [images]);

  const getImages = () => {
    let tempImages = [];
    tempImages.push(messages, photos, stories, profile, videos, posts);
    setImages(tempImages);
  };

  return (
    <DashboardWrapper>
      {images &&
        images.map((img, index) => {
          return <Icon key={index} img={img} />;
        })}
    </DashboardWrapper>
  );
};

const DashboardWrapper = styled.div`
  margin: auto;
  width: 60vw;
  display: grid;
  grid-template-columns: repeat(3, 200px);
  grid-gap: 10px;
  margin-top: 50px;
`;

export default Dashboard;
