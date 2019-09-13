import * as React from 'react';

import { shallow } from 'enzyme';

import { Comments } from '../Comments';

describe('Comments', () => {

  test('renders without numberOfComments', () => {
    const wrapper = shallow(
      <Comments numberOfComments={86923} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});