import React from 'react';

// instead of passing prop as an argument and const video = props.video
    // {video} is the equivalent of video = props.video
    // {video} as an argument is passing an object with the property video 
const VideoItem = ({video}) => {
  // console.log(video)
  const imageUrl = video.snippet.thumbnails.default.url;
  const title = video.snippet.title;
  return (
    <li className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl}/>
        </div>

        <div className="media-body">
          <div className="media-heading">{title}</div>
        </div>
      </div>
    </li>
  );
}

export default VideoItem;