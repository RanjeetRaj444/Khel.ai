import React from 'react';
import ReactPlayer from 'react-player';
import '../styles/VideoPlayer.css';

const VideoPlayer = ({ videoUrl }) => {
  return (
    <div className="video-player-container">
      <div className="video-wrapper">
        <ReactPlayer 
          url={videoUrl}
          className="react-player"
          controls
          width="100%"
          height="100%"
          playing={false}
          light={false}
        />
      </div>
    </div>
  );
};

export default VideoPlayer;
