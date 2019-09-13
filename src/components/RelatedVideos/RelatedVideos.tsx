import * as React from 'react';

import { VideoPreview } from '../VideoPreview/VideoPreview';
import { NextUpVideo } from './NextUpVideo/NextUpVideo';

import './RelatedVideos.scss';

interface Props {
  className?: string;
  horizontal?: boolean,
};

const RelatedVideos : React.FC<Props> = (props) => {
  return (
    <React.Fragment>
      <div className='related-videos'>
        <NextUpVideo />
        <VideoPreview horizontal={true} />
        <VideoPreview horizontal={true} />
        <VideoPreview horizontal={true} />
        <VideoPreview horizontal={true} />
        <VideoPreview horizontal={true} />
      </div>
    </React.Fragment>
  );
}

export default RelatedVideos;