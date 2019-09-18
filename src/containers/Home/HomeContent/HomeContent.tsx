import React from 'react';
import { connect } from 'react-redux';

import VideoGrid from '../../../components/VideoGrid/VideoGrid';
import { getMostPopularVideos } from '../../../store/reducers/video';

import './HomeContent.scss';

const NUMBER_TRENDING_VIDEOS = 12;

export class HomeContent extends React.Component<any, any> {
  render() {
    const trendingVideos = this.getTrendingVideos();

    return (
      <div className='home-content'>
        <div className="responsive-video-grid-container">
          <VideoGrid title='Trending' videos={trendingVideos} />
        </div>
      </div>
    );
  }

  getTrendingVideos() {
    return this.props.mostPopularVideos.slice(0, NUMBER_TRENDING_VIDEOS);
  }
}

function mapStateToProps(state) {
  return {
    mostPopularVideos: getMostPopularVideos(state)
  };
}

export default connect(mapStateToProps, null)(HomeContent);