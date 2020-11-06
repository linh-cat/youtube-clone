import React, { useEffect, useState } from "react";
import axios from "../../FetchAPI/axios";

import VideoCard from "../VideoCard/VideoCard";
import "./RecommendVideo.css";

function RecomendVideo() {
  const API_KEY = "AIzaSyCxcVw8a5uDuiSvH7PA2Zr6ypmkTBZUX4w";

  const [videos, setVideos] = useState([]);

  function handleClick(id) {
    console.log(id);
  }

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(
        `/search?part=snippet&maxResults=20&q=java&key=${API_KEY}`
      );

      // console.log(request.data.items[0].id);
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
            handleClick={() => handleClick(video.id.videoId)}
          />
        ))}
      </div>
    </div>
  );
}

export default RecomendVideo;
