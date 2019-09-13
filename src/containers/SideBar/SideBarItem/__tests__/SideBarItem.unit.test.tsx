import * as React from 'react';

import { shallow } from 'enzyme';
import SideBarItem from '../SideBarItem';

describe('SideBarItem', () => {
  test('renders highlighted SideBarItem that navigates to /feed/trending', () => {
    const wrapper = shallow(
      <SideBarItem highlight={true} icon='fire' label='Trending' />
    );

    expect(wrapper).toMatchSnapshot();
  });

  test('renders non-highlighted SideBarItem that navigates to /feed/trending', () => {
    const wrapper = shallow(
      <SideBarItem icon='fire' label='Trending' />
    );

    expect(wrapper).toMatchSnapshot();
  });

  test('renders highlighted SideBarItem with no navigation', () => {
    const wrapper = shallow(
      <SideBarItem highlight={true} icon='fire' label='Trending' />
    );

    expect(wrapper).toMatchSnapshot();
  });
});