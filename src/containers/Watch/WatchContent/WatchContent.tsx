import React from 'react';
import Video from '../../../components/Video/Video';
import VideoMetadata from '../../../components/VideoMetadata/VideoMetadata';
import { VideoInfoBox } from '../../../components/VideoInfoBox/VideoInfoBox';
import { Comments } from '../../Comments/Comments';
import RelatedVideos from '../../../components/RelatedVideos/RelatedVideos';
import './WatchContent.scss';

class WatchContent extends React.Component<any, any> {
  render() {
    if (!this.props.videoId) {
      return <div />
    }

    return (
      <div className='watch-grid'>
        <Video className='video' id={this.props.videoId} />
        <VideoMetadata className='metadata' viewCount={1000} />
        <VideoInfoBox className='video-info-box' />
        <Comments className='comments' />
        <RelatedVideos className='relatedVideos' />
      </div>
    );
  }
}

export default WatchContent