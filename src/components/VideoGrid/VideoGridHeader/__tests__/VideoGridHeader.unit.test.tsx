import * as React from 'react';
import { shallow } from 'enzyme';

import VideoGridHeader from '../VideoGridHeader';

describe('VideoGridHeader', () => {

  test('renders VideoGridHeader without title', () => {
    const wrapper=shallow(<VideoGridHeader />);
    expect(wrapper).toMatchSnapshot();
  });

  test('renders VideoGridHeader with empty title', () => {
    const wrapper = shallow(<VideoGridHeader title='' />);
    expect(wrapper).toMatchSnapshot();
  });

  test('renders VideoGridHeader with title', () => {
    const wrapper = shallow(<VideoGridHeader title='Trending' />);
    expect(wrapper).toMatchSnapshot();
  });
});