import React from 'react';

import { shallow } from 'enzyme';

import { Video } from '../Video';

describe('Video', () => {
  test('renders Video on Watch without prop.id', () => {
    const wrapper = shallow(
      <Video />
    );

    expect(wrapper).toMatchSnapshot();
  });

  test('renders Video on Watch with prop.id', () => {
    const wrapper = shallow(
      <Video id='P5ktQh3sWZk'/>
    );

    expect(wrapper).toMatchSnapshot();
  });
});