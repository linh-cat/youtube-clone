import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import axios from "../../service/axios";

import { Avatar } from "@material-ui/core";

function Index({
  image,
  title,
  channel,
  views,
  timestamp,
  channelId,
  videoId,
}) {
  let history = useHistory();

  const [imageChannel, setImageChannel] = useState({});
  async function fetchChannelById() {
    try {
      const data = await axios({
        url: `/channel/${channelId}`,
        method: "GET",
      });
      setImageChannel(data.data.items[0].snippet.thumbnails.default.url);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    fetchChannelById();
  }, []);

  const publishedAt = new Date(timestamp);

  return (
    <Container onClick={() => history.push(`/watch/v/${videoId}/${channelId}`)}>
      <ThumbnailImage src={image} alt="image video" />
      <Infor>
        <Avatar alt="channelImage" src={imageChannel} />
        <VideoCardText>
          <Title>{title}</Title>
          <Channel>{channel}</Channel>
          <TimestampAndView>
            <Time>{publishedAt.toDateString()}</Time>
          </TimestampAndView>
        </VideoCardText>
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
  cursor: pointer;
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
  margin-top: 5px;
`;
const TimestampAndView = styled.div`
  color: #aaaaaa;
  margin-top: 5px;
`;
const VideoCardText = styled.div``;

const Time = styled.div``;
