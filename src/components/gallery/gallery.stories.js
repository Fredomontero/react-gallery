import React from 'react';
import Gallery from './gallery';
import { galleries } from '../../testData';
import { Provider } from 'react-redux';
import store from '../../redux/store';

console.log(" Galleries: ", galleries)

export default {
  title: 'Gallery',
  component: Gallery
};

export const GalleryComponent = () => (
  <Provider store={store}>
    <Gallery pages={galleries.cats.pages} />
  </Provider>
)