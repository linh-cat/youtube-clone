import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../../FetchAPI/axios";
import VideoCard from "../VideoCard/VideoCard";
import "./RecommendVideo.css";

function RecomendVideo() {
  const API_KEY = "AIzaSyAYdOYFZ1LfPTTB9bBitCviGR4TU-DeX5s";

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(
        `/search?part=snippet&maxResults=50&q=front%20end&key=${API_KEY}`
      );

      setVideos(request.data.items);
      console.log(request.data.items);
      return request;
    }
    fetchData();
  }, []);

  return (
    <div className="recommendVideo">
      <h2>Recommended</h2>

      <div className="recommendVideos__videos">
        {videos.map((video) => (
          <Link to={`/video/${video.id.videoId}`}>
            <VideoCard
              key={video.id.videoId && video.id.playlistId}
              title={video.snippet.title}
              views="?"
              timestamp={video.snippet.publishedAt}
              channel={video.snippet.channelTitle}
              channelImage={video.snippet.thumbnails.medium.url}
              image={video.snippet.thumbnails.high.url}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default RecomendVideo;
