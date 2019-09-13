import * as React from 'react';

import { Divider } from 'semantic-ui-react';
import { VideoPreview } from '../VideoPreview/VideoPreview';
import VideoGridHeader from './VideoGridHeader/VideoGridHeader';

import './VideoGrid.scss';

interface VideoGridProps {
  hideDivider?: boolean,
  title?: string,
};

const VideoGrid : React.FC<VideoGridProps> = (props) => {
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

export default VideoGrid;