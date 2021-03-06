import * as React from 'react';

import { Divider } from 'semantic-ui-react';
import { VideoPreview } from '../VideoPreview/VideoPreview';
import VideoGridHeader from './VideoGridHeader/VideoGridHeader';

import './VideoGrid.scss';

interface VideoGridProps {
  hideDivider?: boolean,
  title?: string,
  videos: any,
};

const VideoGrid : React.FC<VideoGridProps> = (props) => {
  
  if (!props.videos || !props.videos.length) {
    return <div />
  }

  const gridItems = props.videos.map(video => {
    return (
      <VideoPreview video={video} key={video.id} 
                    pathname='/watch' search={`?v=${video.id}`} />
    )
  });
  
  const divider = props.hideDivider ? null : <Divider />;

  return (
    <React.Fragment>
      <VideoGridHeader title={ props.title } />
      <div className='video-grid'>
        { gridItems }
      </div>
      { divider }
    </React.Fragment>
  );
}

export default VideoGrid;