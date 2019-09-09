import React from 'react';

import { Icon, Image, Menu } from 'semantic-ui-react';

import './Subscription.scss';


export function Subscription(props) {
  
  let live = null;
  const { broadcasting, amountNewVideos } = props;
  
  if (broadcasting) {
    live = <Icon name='signal' />
  } else if (amountNewVideos) {
    live = <span className='new-videos-count'>{ amountNewVideos }</span>
  }

  return (
    <Menu.Item>
      <div className='subscription'>
        <div>
          <Image src='http://via.placeholder.com/28x28' avatar />
          <span>{ props.label }</span>
        </div>
        { live }
      </div>
    </Menu.Item>
  );
}