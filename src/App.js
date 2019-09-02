import React from 'react';

import { Grid } from '@material-ui/core';

import { SearchBar, VideoDetails, VideoList } from "./components";

import youtube from './api/youtube';

// Components can either be class based components or function-based / dummy components
class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null,
  }

  // will be run immediately after class component loads
  componentDidMount() {
    this.handleSubmit();
  }

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  }

  handleSubmit = async (searchTerm) => {
    const response = await youtube.get('search',{
      params: {
        part: 'snippet',
        maxResults: 5,
        key: 'AIzaSyDiLzOrZe5yYpGoslPMANLrspnkGoJSyPs',
        q: searchTerm
      }
    });
    
    this.setState({ videos: response.data.items, selectedVideo: response.data.items[0] });
  }

  render () {
    const { selectedVideo, videos } = this.state;
    return (
      <Grid justify="center" style={{ width: '100vw' }} container spacing={10}>
        <Grid item xs={12}>
          <Grid container spacing={10}>
            <Grid item xs={12}>
              <SearchBar onFormSubmit={this.handleSubmit} />
            </Grid>
            <Grid item xs={8}>
              <VideoDetails video={selectedVideo} />
            </Grid>
            <Grid item xs={4}>
              <VideoList videos={videos} onVideoSelect={this.onVideoSelect} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    )
  }
}

export default App;