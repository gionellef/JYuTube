import React from 'react';

import { Video } from '../../components/Video/Video';
import { VideoPreview } from '../../components/VideoPreview/VideoPreview';

import './Watch.scss';

export class Watch extends React.Component {
  render() {
    return (
      <div className='watch-component'>
        <VideoPreview />
        <VideoPreview horizontal={false} />
        <VideoPreview horizontal={true} />
        
      </div>
      // <div style={{maxWidth: '80%'}}>
      //   <Video id='P5ktQh3sWZk' />
      // </div>
    );
  }
}