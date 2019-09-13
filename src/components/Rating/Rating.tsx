import * as React from 'react';

import { Icon, Progress } from "semantic-ui-react";

import './Rating.scss';

interface RatingProps {
  likeCount?: number;
  dislikeCount?: number;
};

const Rating : React.FC<RatingProps> = (props) => {
  let progress = null;

  if (props.likeCount && props.dislikeCount) {
    const percent  = 100 * (props.likeCount / (props.likeCount + props.dislikeCount));

    progress = <Progress className='progress' percent={percent} size='tiny' />
  }
  
  return (
    <div className='rating'>
      <div className='thumbs-up'>
        <Icon name='thumbs up outline' />
        <span>{ props.likeCount }</span>
      </div>
      <div className='thumbs-down'>
        <Icon name='thumbs down outline' />
        <span>{ props.dislikeCount }</span>
      </div>
      { progress }
    </div>
  );
}

export default Rating;