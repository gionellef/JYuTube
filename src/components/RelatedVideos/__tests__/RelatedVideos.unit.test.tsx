import * as React from 'react';

import { shallow } from 'enzyme';

import RelatedVideos from '../RelatedVideos';

test('RelatedVideos', () => {
  const wrapper = shallow (
    <RelatedVideos />
  );

  expect(wrapper).toMatchSnapshot();
});