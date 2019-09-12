import React from 'react';

import { shallow } from 'enzyme';

import { VideoMetadata } from '../VideoMetadata';

describe('VideoMetadata', () => {
  test('renders VideoMetadata without props.viewCount', () => {
    const wrapper = shallow (
      <VideoMetadata />
    );

    expect(wrapper).toMatchSnapshot();
  });

  test('renders VideoMetadata with props.viewCount', () => {
    const wrapper = shallow(
      <VideoMetadata viewCount={1000}/>
    );

    expect(wrapper).toMatchSnapshot();
  });
});