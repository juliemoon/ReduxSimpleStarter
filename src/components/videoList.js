import React from 'react';
import VideoItem from './videoItem';

// VideoList gets props called videos from App, gets video data: an array of video objects
const VideoList = (props) => {

  const videoItems = props.videos.map((video) => {
    // console.log(video)
    // passing video down as a prop to VideoItem
    return <VideoItem key={video.etag} video={video}/>
  });

  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
};

export default VideoList;