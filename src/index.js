import _ from 'lodash';
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
    // set inital search inside of constructor, invoking function inside of the constructor
    this.videoSearch('slime')
    //initially had YTSearch method inside of the constructor
  }
  // You can't put methods inside of the constructor function 
  //    videoSearch function: second arg inside YTSearch is callback, taking object of videos(the data returned and destructure it. pass in {} and videos: videos)

     videoSearch(term) {
      YTSearch({ key: API_KEY, term: term }, (videos) => {
        this.setState({
          // what I get back is an array of 5 objects, how come it's not a nested array?
          videos: videos,
          selectedVideo: videos[0]
        });
      });
    }
 
  // pass callback as prop into videoList and from videoList to VideoItem. Passing in onVideoSelect function into videoList
  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) },300);
  
    return (
      <div>
        {/* <SearchBar onSearchTermChange={term => this.videoSearch(term)}/> */}
        <SearchBar onSearchTermChange={videoSearch}/>
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