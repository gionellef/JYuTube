import * as React from 'react';

import { shallow } from 'enzyme';

import CommentsHeader from '../CommentsHeader';

describe('CommentsHeader', () => {

  test('CommentsHeader renders with props.numberOfComments = 0', () => {
    const wrapper = shallow(
      <CommentsHeader numberOfComments={634} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});