import React from 'react';
import { useSelector } from 'react-redux';
import GalleryItem from '../galleryItem/galleryItem';
import './gallery.css';

const Gallery = ({ pages }) => {

  const pageNumber = useSelector(state => state.page);

  const orientation = (height, width) => {
    let proprotion = height - width;
    return (proprotion === 0) ? 'square' : ( proprotion > 0) ? 'vertical' : 'horizontal';
  }

  return(
    <div className="gallery container" >
      {
        pages[pageNumber - 1].images.map((item, index) => (
          <GalleryItem className="g-item" key={item.id} index={index} item={item} orientation={orientation(item.height, item.width)} />
        ))
      }
    </div>
  )
};

export default Gallery;