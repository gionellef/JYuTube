import * as React from 'react';

import { shallow } from 'enzyme';
import SideBarHeader from '../SideBarHeader';

describe('SideBarHeader', () => {
  test('renders SideBarHeader with props.title=\'\'', () => {
    const wrapper = shallow(
      <SideBarHeader title='' />
    );
    expect(wrapper).toMatchSnapshot();
  });

  test('renders SideBarHeader with props.title=Sample Title', () => {
    const wrapper = shallow(
      <SideBarHeader title='Sample Title' />
    );

    expect(wrapper).toMatchSnapshot();
  });
});