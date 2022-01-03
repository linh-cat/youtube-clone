import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import VideoRow from "../VideoRow/VideoRow";
import TuneIcon from "@material-ui/icons/Tune";
import "./SearchPage.css";
import axios from "../../FetchAPI/axios";

function SearchPage() {
  const [videos, setVideos] = useState([]);

  let { searchQuery } = useParams();

  useEffect(() => {
    async function fetchData() {
      const API_KEY = "AIzaSyAYdOYFZ1LfPTTB9bBitCviGR4TU-DeX5s";

      const request = await axios(
        `/search?part=snippet&maxResults=20&q=${searchQuery}&key=${API_KEY}`
      );
      setVideos(request.data.items);
      return request;
    }
    fetchData();
  }, [searchQuery]);
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneIcon />
        <h2>FILTER</h2>
      </div>
      <hr />
      {videos.map((video) => (
        <Link to={`/video/${video.id.videoId} `}>
          <VideoRow
            key={video.id.videoId && video.id.channelId}
            image={video.snippet.thumbnails.high.url}
            title={video.snippet.title}
            channel={video.channel}
            subs="155k"
            views="4.3M"
            timestamp={video.snippet.publishedAt}
            description={video.snippet.description}
          />
        </Link>
      ))}
    </div>
  );
}

export default SearchPage;
