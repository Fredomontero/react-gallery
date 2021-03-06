import React from 'react';
import './galleryItem.css';

const GalleryItem = ({item, orientation}) => {
  return(
    <div 
      className={ `gallery-item ${orientation}` }
      style={{ backgroundImage: `url(${item.src})` }}
    >
    </div>
  )
};

export default GalleryItem;