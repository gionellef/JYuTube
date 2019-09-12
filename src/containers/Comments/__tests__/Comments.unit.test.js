import React from 'react';

import { shallow } from 'enzyme';

import { Comments } from '../Comments';

describe('Comments', () => {
  test('renders without props', () => {
    const wrapper = shallow(
      <Comments />
    );
    expect(wrapper).toMatchSnapshot();
  });

  test('renders without numberOfComments', () => {
    const wrapper = shallow(
      <Comments numberOfComments={86923} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});