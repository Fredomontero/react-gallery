import React from 'react';
import GalleryItem from './galleryItem';
import './styles.css';

const itemHorizontal = {
  src: 'https://pbs.twimg.com/media/BfCP6rqCAAAeBdx.jpg'
};

const itemVertical = {
  src: 'https://pm1.narvii.com/7572/282b6de2345ebb49a2d656d54e0bad5bb40b1001r1-478-592v2_hq.jpg'
};

const item = {
  src: 'https://i.pinimg.com/236x/5f/dd/51/5fdd5112eaa26bdd136d030721650baf.jpg'
};

export default {
  title: 'GalleryItem',
  component: GalleryItem
};

export const HorizontalImage = () => (
  <div className="gallery container">
    <GalleryItem className="gallery-item" key={1} index={1} item={itemHorizontal} orientation={'horizontal'} />
    <div className="grid-item-test" ><p>3</p></div>
    <div className="grid-item-test" ><p>4</p></div>
  </div>
);

export const VerticalImage = () => (
  <div className="gallery container">
    <GalleryItem className="gallery-item" key={1} index={1} item={itemVertical} orientation={'vertical'} />
    <div className="grid-item-test" ><p>3</p></div>
    <div className="grid-item-test" ><p>4</p></div>
  </div>
);

export const SquareImage = () => (
  <div className="gallery container">
    <GalleryItem className="gallery-item" key={1} index={1} item={item} orientation={'square'} />
    <div className="grid-item-test" ><p>2</p></div>
    <div className="grid-item-test" ><p>3</p></div>
    <div className="grid-item-test" ><p>4</p></div>
  </div>
);