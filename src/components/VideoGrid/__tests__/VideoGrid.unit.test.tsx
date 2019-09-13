import * as React from 'react';
import { shallow } from 'enzyme';

import VideoGrid from '../VideoGrid';

describe('VideoGrid', () => {

  test('renders VideoGrid without props', () => {
    const wrapper = shallow(<VideoGrid />);
    expect(wrapper).toMatchSnapshot();
  });

  test('renders VideoGrid with hideDivider prop false', () => {
    const wrapper = shallow(<VideoGrid hideDivider={false} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('renders VideoGrid with title', () => {
    const wrapper = shallow(<VideoGrid title='Trending' />);
    expect(wrapper).toMatchSnapshot();
  });
});