import React from 'react';

import { shallow } from 'enzyme';
import { Subscription } from '../Subscription';

describe('Subscription', () => {
  test('renders empty Subscription', () => {
    const wrapper = shallow(
      <Subscription />
    );

    expect(wrapper).toMatchSnapshot();
  });

  test('renders Subscription that is recently live', () => {
    const wrapper = shallow(
      <Subscription label='exurb1a' broadcasting />
    );

    expect(wrapper).toMatchSnapshot();
  });

  test('renders Subscription with new videos and not recently live', () => {
    const wrapper = shallow(
      <Subscription label='exurb1a' amountNewVideos={15} />
    );

    expect(wrapper).toMatchSnapshot();
  });

  test('renders Subscription with new videos and recently live', () => {
    const wrapper = shallow(
      <Subscription label='exurb1a' broadcasting amountNewVideos={3} />
    );

    expect(wrapper).toMatchSnapshot();
  });
});