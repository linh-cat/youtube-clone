import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "../../service/axios";

import VideoCard from "../VideoCard";

function Index() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await axios({
          url: "/video/list",
          method: "GET",
          params: {
            max_results: 12,
          },
        });
        setVideos(data.data.items);
      } catch (e) {
        console.log(e);
      }
    }
    fetchData();
  }, []);

  return (
    <Container>
      {videos?.map((video, idx) => (
        <VideoCard
          key={idx}
          title={video.snippet.title}
          views="?"
          timestamp={video.snippet.publishedAt}
          channel={video.snippet.channelTitle}
          channelImage={video.snippet.thumbnails.medium.url}
          image={video.snippet.thumbnails.high.url}
        />
      ))}
    </Container>
  );
}

export default Index;

const Container = styled.div`
  flex: 1;

  padding: 10px 100px;

  display: grid;
  grid-template-columns: repeat(4, 320px);
  row-gap: 10px;
  column-gap: 20px;

  height: calc(100vh - 70px);
  overflow-y: scroll !important;
`;
