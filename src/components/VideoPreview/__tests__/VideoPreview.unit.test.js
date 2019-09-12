import React from 'react';

import { shallow } from 'enzyme';
import { VideoPreview } from '../VideoPreview';


describe('VideoPreview', () => {
  test('renders VideoPreview vertical / default', () => {
    const wrapper=shallow(<VideoPreview />);
    expect(wrapper).toMatchSnapshot();
  });

  test('renders VideoPreview horizontal', () => {
    const wrapper = shallow(<VideoPreview hoizontal={true}/>);
    expect(wrapper).toMatchSnapshot();
  });

});