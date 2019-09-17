import * as React from 'react';
import App from '../App';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';

import { configureStore } from '../store/configureStore';

const store = configureStore();

describe('App', () => {
  test('renders App', () => {
    const wrapper = shallow(<Provider store={store}><App /></Provider>);

    expect(wrapper).toMatchSnapshot();
  });
});