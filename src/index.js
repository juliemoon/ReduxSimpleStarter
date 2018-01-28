import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/searchBar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/videoList';
import VideoDetail from './components/videoDetail';

const API_KEY = "AIzaSyDyPe_ll_u6l6pgkSwanqTniOLTXTWXowU";

class App extends Component {
  // constructor always gets props
  constructor(props) {
    super(props)
    this.state = { videos: [] };

    YTSearch({ key: API_KEY, term: 'surfboards' }, (videos) => this.setState({ videos }));
  }
  render() {
    return (
      <div>
        <SearchBar/>
        <VideoDetail video={this.state.videos[0]}/>
        <VideoList videos={this.state.videos}/>
        {/* {console.log('this is the state: ',this.state)} */}
      </div>
    ) 
  }
}

ReactDOM.render(<App/>,
  document.getElementById("root")
);