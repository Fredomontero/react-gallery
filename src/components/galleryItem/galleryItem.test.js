import React from 'react';
import { mount } from 'enzyme';
import GalleryItem from './galleryItem';
import { pages } from '../../testData';


describe('Gallery Item', () => {

  it('render an item with "horizontal" when recieves and image with greater width than height', () => {
    
    let image = {
      id: "hj",
      src: "https://cdn2.thecatapi.com/images/hj.png",
      width: 1024,
      height: 768
    };
      
    let wrapper = mount(<GalleryItem item={image} orientation="horizontal"/> );
    const items = wrapper.find('.horizontal');
    expect(items).toHaveLength(1);
  });

  it('render an item with "sqaure" class when recieves and image with equal height and width', () => {
    
    let image = {
      id: "9gp",
      src: "https://cdn2.thecatapi.com/images/9gp.jpg",
      width: 600,
      height: 600
    };

    let wrapper = mount(<GalleryItem item={image} orientation="square"/> );
    const items = wrapper.find('.square');
    expect(items).toHaveLength(1);
  });

  it('render an item with "vertical" when recieves and image with greater height than width', () => {
    
    let image = {
      id: "76k",
      src: "https://cdn2.thecatapi.com/images/76k.jpg",
      width: 333,
      height: 500
    };

    let wrapper = mount(<GalleryItem item={image} orientation="vertical"/> );
    const items = wrapper.find('.vertical');
    expect(items).toHaveLength(1);
  });

});