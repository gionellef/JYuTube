import React from 'react';

// import { Video } from '../../components/Video/Video';
// import { VideoPreview } from '../../components/VideoPreview/VideoPreview';

import './Watch.scss';
import { RelatedVideos } from '../../components/RelatedVideos/RelatedVideos';

export class Watch extends React.Component {
  render() {
    return (
      <div className='watch-component'>
        <RelatedVideos />
        
      </div>
      // <div style={{maxWidth: '80%'}}>
      //   <Video id='P5ktQh3sWZk' />
      // </div>
    );
  }
}