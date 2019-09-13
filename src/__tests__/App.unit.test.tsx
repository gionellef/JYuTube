import * as React from 'react';
import App from '../App';
import { shallow } from 'enzyme';

describe('App', () => {
  test('renders App', () => {
    const wrapper = shallow(<App />);

    expect(wrapper).toMatchSnapshot();
  });
});