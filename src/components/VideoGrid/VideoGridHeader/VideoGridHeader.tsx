import * as React from 'react';
import './VideoGridHeader.scss';

interface VideoGridHeaderProps {
  title?: string;
};

const VideoGridHeader : React.FC<VideoGridHeaderProps> = (props) => {
  return (
    <div className='video-grid-header'>
      <span className='title'>{ props.title }</span>
    </div>
  );
}

export default VideoGridHeader;