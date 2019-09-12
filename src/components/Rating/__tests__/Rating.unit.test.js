import React from 'react';

import { shallow } from 'enzyme';

import { Rating } from '../Rating';

describe('Rating', () => {
  test('renders Rating without props', () => {
    const wrapper = shallow(
      <Rating />
    );

    expect(wrapper).toMatchSnapshot();
  });

  test('renders Rating with props likes and dislikes', () => {
    const wrapper = shallow(
      <Rating likeCount={1000} dislikeCount={100} />
    );

    expect(wrapper).toMatchSnapshot();
  });
});