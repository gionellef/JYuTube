import React from 'react';
import { connect } from 'react-redux';

import Video from '../../../components/Video/Video';
import VideoMetadata from '../../../components/VideoMetadata/VideoMetadata';
import { VideoInfoBox } from '../../../components/VideoInfoBox/VideoInfoBox';
import { Comments } from '../../Comments/Comments';
import RelatedVideos from '../../../components/RelatedVideos/RelatedVideos';

import { getVideoById } from '../../../store/reducers/video';

import './WatchContent.scss';

class WatchContent extends React.Component<any, any> {
  render() {
    if (!this.props.videoId) {
      return <div />
    }

    return (
      <div className='watch-grid'>
        <Video className='video' id={this.props.videoId} />
        <VideoMetadata className='metadata' video={this.props.video} />
        <VideoInfoBox className='video-info-box' />
        <Comments className='comments' />
        <RelatedVideos className='relatedVideos' />
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    video: getVideoById(state, props.videoId),
  };
}

export default connect(mapStateToProps, null)(WatchContent)