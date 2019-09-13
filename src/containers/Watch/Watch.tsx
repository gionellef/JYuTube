import * as React from 'react';

import Video from '../../components/Video/Video';
import RelatedVideos from '../../components/RelatedVideos/RelatedVideos';
import VideoMetadata from '../../components/VideoMetadata/VideoMetadata';
import { VideoInfoBox } from '../../components/VideoInfoBox/VideoInfoBox';

import './Watch.scss';
import { Comments } from '../Comments/Comments';

export class Watch extends React.Component {
  render() {
    return (
      <div className='watch-grid'>
        <Video className='video' id='P5ktQh3sWZk' />
        <VideoMetadata className='metadata' viewCount={1000} />
        <VideoInfoBox className='video-info-box' />
        <Comments className='comments' numberOfComments={52374} />
        <RelatedVideos className='related-videos' />
      </div>

    );
  }
}