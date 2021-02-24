import React from 'react';
import GalleryItem from '../galleryItem/galleryItem';
import './gallery.css';

const Gallery = ({ images }) => {

  return(
    <div className="gallery container" >
      {
        images.map((item, index) => (
          <GalleryItem className="g-item" key={item.id} index={index} item={item} />
        ))
      }
    </div>
  )
};

export default Gallery;