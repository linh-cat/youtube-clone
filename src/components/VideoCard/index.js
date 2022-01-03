import React from "react";
import styled from "styled-components";
import { Avatar } from "@material-ui/core";

function Index({ image, title, channel, views, timestamp, channelImage }) {
  console.log(image);
  return (
    <Container>
      <ThumbnailImage src={image} alt="image video" />
      <Infor>
        <Avatar className="infor__avatar" alt="" src={channelImage} />
        <div className="videoCard__text">
          <Title>{title}</Title>
          <Channel>{channel}</Channel>
          <TimestampAndView>
            {views} + {timestamp}
          </TimestampAndView>
        </div>
      </Infor>
    </Container>
  );
}

export default Index;

const Container = styled.div`
  width: 320px;
  height: 300px;
  display: flex;
  flex-direction: column;
`;

const ThumbnailImage = styled.img`
  width: 320px;
  height: 180px;
  object-fit: cover;
`;

const Infor = styled.div`
  flex: 1;
  display: flex;
  column-gap: 10px;
  padding: 10px;
`;

const Title = styled.h4`
  color: #fff;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word;
`;
const Channel = styled.p`
  color: #aaaaaa;
`;
const TimestampAndView = styled.p`
  color: #aaaaaa;
`;
