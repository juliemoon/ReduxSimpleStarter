import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/searchBar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/videoList';
import VideoDetail from './components/videoDetail';

/* function videoSearch takes in a request and searchs for the video
   that's why it makes sense to wrap the api request (YTSearch) inside of the videoSearch func
 */
const API_KEY = "AIzaSyDyPe_ll_u6l6pgkSwanqTniOLTXTWXowU";

class App extends Component {
  // constructor always gets props
  constructor(props) {
    super(props)
    this.state = {
      videos: [],
      selectedVideo: null
    };
    // set inital search inside of constructor
    this.videoSearch('slime')
  }
     // videoSearch function: second arg inside YTSearch is callback, taking object of videos(the data returned and destructure it. pass in {} and videos: videos)
     videoSearch(term) {
      YTSearch({ key: API_KEY, term: term }, (videos) => {
        this.setState({
          videos: videos,
          selectedVideo: videos[0]
        });
      });
    }

  // pass callback as prop into videoList and from videoList to VideoItem. Passing in onVideoSelect function into videoList
  render() {
    return (
      <div>
        <SearchBar onSearchTermChange={term => this.videoSearch(term)}/>
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList 
          onVideoSelect={(selectedVideo) => this.setState({selectedVideo})}
          videos={this.state.videos} />
        {/* {console.log('this is the state: ',this.state)} */}
      </div>
    )
  }
}

ReactDOM.render(<App />,
  document.getElementById("root")
);