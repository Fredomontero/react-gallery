import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import { createContainer } from '../../domManipulators';
import { Provider } from 'react-redux';
import { mount, shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import Paginator from './paginator';
import App from '../../App';

const middlewares = [];
const mockStore = configureStore(middlewares);

describe('Paginator', () => {

  beforeEach(() => {
    
  });

  it('renders back button', () => {
    const store = mockStore({
      pages: [{page: 1}, {page: 2}, {page: 3}, {page: 4}],
      page: 3
    });
    const getWrapper = () => mount(
      <Provider store={store}>
        <Paginator/>
      </Provider>
    );
    const wrapper = getWrapper();
    console.log(wrapper.debug());
    const backButton = wrapper.find('#back-button');
    expect(backButton).toHaveLength(1);
  });
});