import * as React from 'react';

import { shallow } from 'enzyme';

import { Watch } from '../Watch';

describe('Watch', () => {
  test('renders Watch view', () => {
    const wrapper = shallow(
      <Watch />
    );

    expect(wrapper).toMatchSnapshot();
  });
});