import * as React from 'react';

import { shallow } from 'enzyme';

import { NextUpVideo } from '../NextUpVideo';

test('NextUpVideo', () => {
  const wrapper = shallow(
    <NextUpVideo />
  );

  expect(wrapper).toMatchSnapshot();
});