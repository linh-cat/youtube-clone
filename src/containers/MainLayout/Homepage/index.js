import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";

import axios from "../../../service/axios";

import Loading from "../../../components/Loading";
import VideoCard from "../../../components/VideoCard";

function Index() {
  const [videos, setVideos] = useState([]);
  const [maxResults, setMaxResults] = useState(12);
  const [loading, setLoading] = useState(false);
  const listInnerRef = useRef();

  const onScroll = () => {
    if (listInnerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;
      // console.log(scrollTop, clientHeight, scrollHeight);

      if (scrollTop + clientHeight === scrollHeight) {
        setMaxResults(maxResults + 8);
      }
    }
  };

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const data = await axios({
          url: "/video/list",
          method: "GET",
          params: {
            max_results: maxResults,
          },
        });
        setVideos(data.data.items);
        setLoading(false);
      } catch (e) {
        setLoading(false);
        console.log(e);
      }
    }
    fetchData();
  }, [maxResults]);

  console.log(videos);
  return (
    <Container onScroll={onScroll} ref={listInnerRef}>
      {loading === true && <Loading />}
      {videos?.map((video, idx) => (
        <VideoCard
          key={idx}
          title={video.snippet.title}
          timestamp={video.snippet.publishedAt}
          channel={video.snippet.channelTitle}
          channelId={video.snippet.channelId}
          image={video.snippet.thumbnails.high.url}
          videoId={video.id}
        />
      ))}
    </Container>
  );
}

export default Index;

const Container = styled.div`
  padding: 20px 100px;

  display: grid;
  grid-template-columns: repeat(5, 320px);
  row-gap: 10px;
  column-gap: 20px;

  height: calc(100vh - 70px);
  overflow-y: scroll !important;
  overflow-x: hidden;
`;
