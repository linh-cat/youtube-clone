import React, { useState, useEffect } from "react";
import VideoCard from "../VideoCard/VideoCard";
import "./RecommendVideo.css";
import requests from "../../FetchAPI/requests";

import axios from "../../FetchAPI/axios";

function RecomendVideo() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchingAllVideoById);

      console.log(request.data.items[0].id);
      setVideos(request.data.items);

      return request;
    }
    fetchData();
  }, []);

  return (
    <div className="recommendVideo">
      <h2>Recommended</h2>

      <div className="recommendVideos__videos">
        {videos.map((video) => (
          <VideoCard
            key={video.id.videoId}
            title={video.snippet.title}
            views="2.3M Views"
            timestamp="3 days ago"
            channel={video.snippet.channelTitle}
            channelImage={video.snippet.thumbnails.medium.url}
            image={video.snippet.thumbnails.high.url}
          />
        ))}
      </div>
    </div>
  );
}

export default RecomendVideo;
