import React from 'react';

import { Image, Button, Divider } from 'semantic-ui-react';

import './VideoInfoBox.scss';

export class VideoInfoBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      collapsed: true,
    };
  }

  onToggleCollapseButton = () => {
    this.setState((prevState) => {
      return {
        collapsed: !prevState.collapsed
      };
    });
  }

  render() {
    let descriptionTextClass = 'collapsed';
    let buttonTitle = 'Show More';
    if (!this.state.collapsed) {
      descriptionTextClass = 'expanded';
      buttonTitle = 'Show Less';
    }

    return (
      <div>
        <div className='video-info-box'>
          <Image className='channel-image' src='http://via.placeholder.com/48x48' circular />
          <div className='video-info'>
            <div className='channel-name'>Channel Name</div>
            <div className='video-publication-date'>Thu Oct 24, 2019</div>
          </div>
          <Button className='subscribe' color='facebook'>91.5K Subscribe</Button>
          <div className='video-description'>
            <div className={descriptionTextClass}>
              <p>Paragraph 1</p>
              <p>Paragraph 2</p>
              <p>Paragraph 3</p>
              <p>Paragraph 4</p>
              <p>Paragraph 5</p>
            </div>
            <Button compact onClick={this.onToggleCollapseButton}>{buttonTitle}</Button>
          </div>
        </div>
        <Divider />
      </div>
    );
  }
}