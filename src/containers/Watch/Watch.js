import React from 'react';

import { Video } from '../../components/Video/Video';
import { RelatedVideos } from '../../components/RelatedVideos/RelatedVideos';

import './Watch.scss';

export class Watch extends React.Component {
  render() {
    return (
      <div className='watch-grid'>
        <Video className='videoPlayer' id='P5ktQh3sWZk' />
        <div className='metadata' style={{ width: '100%', height: '100px', background: '#F91112' }} >Metadata</div>
        <div className='video-info-box' style={{ width: '100%', height: '100px', background: '#BD10E0' }} >Video Info Box</div>
        <div className='comments' style={{ width: '100%', height: '100px', background: '#9013FE' }} >Comments</div>
        <RelatedVideos className='relatedVideos' />
      </div>

    );
  }
}