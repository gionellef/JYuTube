import * as React from 'react';

import { Icon, Progress } from "semantic-ui-react";
import { getShortNumberString } from '../../services/number/number-format';

import './Rating.scss';

interface RatingProps {
  likeCount?: number;
  dislikeCount?: number;
};

const Rating : React.FC<RatingProps> = (props) => {
  let rating = null;
  let likeCount = props.likeCount !== 0 ? props.likeCount : null;
  let dislikeCount = null;

  if (props.likeCount && props.dislikeCount) {
    const amountLikes = props.likeCount;
    const amountDislikes = props.dislikeCount;
    const percentagePositiveRatings = 100.0 * (amountLikes / (amountLikes + amountDislikes));

    // Now that we have calculated the percentage, we bring the numbers into a better readable format
    likeCount = getShortNumberString(amountLikes);
    dislikeCount = getShortNumberString(amountDislikes);
    rating = <Progress percent={percentagePositiveRatings} size='tiny' />;
  }
  
  return (
    <div className='rating'>
      <div className='thumbs-up'>
        <Icon name='thumbs up outline' />
        <span>{ likeCount }</span>
      </div>
      <div className='thumbs-down'>
        <Icon name='thumbs down outline' />
        <span>{ dislikeCount }</span>
      </div>
      { rating }
    </div>
  );
}

export default Rating;