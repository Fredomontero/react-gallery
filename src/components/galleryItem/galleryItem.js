import React from 'react';
import './galleryItem.css';

const GalleryItem = ({item, index}) => {
  return(
    <div 
      className={ `gallery-item  div-${index}` }
      style={{ backgroundImage: `url(${item.url})` }}
    >
    </div>
  )
};

export default GalleryItem;