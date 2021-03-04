import React from 'react';
import { Provider } from 'react-redux';
import { mount, shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import Gallery from './gallery';
import { pages } from '../../testData';

const middlewares = [];
const mockStore = configureStore(middlewares);

describe('Gallery', () => {

  let wrapper;

  const store = mockStore({
    pages: pages,
    page: 1
  });

  const getWrapper = () => mount(
    <Provider store={store}>
      <Gallery pages={pages} />
    </Provider>
  );

  beforeEach(() => {
    wrapper = getWrapper();
  });

  it('render a galleryItem for each image', () => {
    const items = wrapper.find('.g-item');
    expect(items).toHaveLength(10);
  });

  it('renders 3 images with classname "square"', () => {
    const items = wrapper.find('.square');
    expect(items).toHaveLength(3);
  });

  it('renders 5 images with classname "horizontal"', () => {
    const items = wrapper.find('.horizontal');
    expect(items).toHaveLength(5);
  });

  it('renders 2 images with classname "vertical"', () => {
    const items = wrapper.find('.vertical');
    expect(items).toHaveLength(2);
  });

});