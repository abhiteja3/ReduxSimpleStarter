import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import _ from 'lodash';

import reducers from './reducers';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const createStoreWithMiddleware = applyMiddleware()(createStore);
const API_KEY = 'AIzaSyAt52r0x7CAWFfxJppkhcix9hVwtRSd5og';

class Ytube extends Component {
  constructor(props){
    super(props);
    
    this.state = {
      videos: [], 
      selectedVideo: null
    };
    this.videoSearch('cricket');
  }
  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({ 
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }
  render(){
    const videoSearch = _.debounce((term) => { this.videoSearch(term) } , 300);
    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch}/>
        <VideoDetail  video={this.state.selectedVideo}/>
        <VideoList onVideoSelect={selectedVideo => this.setState({selectedVideo}) } videos={this.state.videos}/>
      </div>
    );
  }
}

ReactDOM.render(<Ytube />, document.querySelector('.container'));
