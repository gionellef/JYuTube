import React from 'react';

// import { VideoGridHeader } from './VideoGridHeader/VideoGridHeader';
import { Divider } from 'semantic-ui-react';
import { VideoPreview } from '../VideoPreview/VideoPreview';
import { VideoGridHeader } from './VideoGridHeader/VideoGridHeader';

import './VideoGrid.scss';

export function VideoGrid (props) {
  const divider = props.hideDivider ? null : <Divider />;

  return (
    <React.Fragment>
      <VideoGridHeader title={ props.title } />
      <div className='video-grid'>
        <VideoPreview />
        <VideoPreview />
        <VideoPreview />
        <VideoPreview />
        <VideoPreview />
        <VideoPreview />
        <VideoPreview />
        <VideoPreview />
        <VideoPreview />
        <VideoPreview />
        <VideoPreview />
        <VideoPreview />
      </div>
      { divider }
    </React.Fragment>
  );

}