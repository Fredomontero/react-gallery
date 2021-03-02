import React from 'react';
import './galleryItem.css';

const GalleryItem = ({item, index, orientation}) => {
  return(
    <div 
      className={ `gallery-item ${orientation}` }
      style={{ backgroundImage: `url(${item.url})` }}
    >
    </div>
  )
};

export default GalleryItem;