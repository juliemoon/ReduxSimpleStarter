import React from 'react';

// instead of passing prop as an argument and const video = props.video
    // {video} is the equivalent of video = props.video
    // {video} as an argument is passing an object with the property video 
const VideoItem = ({video, onVideoSelect}) => {
  /* Same thing as saying:
  Const video = props.video
  Const onVideoSelect = props.onVideoSelect
  onVideoSelect is a function that was passed down --> onVideoSelect={(selectedVideo) => this.setState({selectedVideo})}
   */
  // const video = (props.video) because props will have a video property attached to obj
  // console.log(video)
  const imageUrl = video.snippet.thumbnails.default.url;
  const title = video.snippet.title;
  return (
    // whenever user clicks on a video run the onVideoSelect function
    <li onClick={() => onVideoSelect(video)} className="list-group-item">
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