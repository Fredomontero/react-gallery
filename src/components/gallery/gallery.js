import React from 'react';
import { useSelector } from 'react-redux';
import GalleryItem from '../galleryItem/galleryItem';
import './gallery.css';

const Gallery = ({ pages }) => {

  const pageNumber = useSelector(state => state.page);

  return(
    <div className="gallery container" >
      {
        pages[pageNumber - 1].images.map((item, index) => (
          <GalleryItem className="g-item" key={item.id} index={index} item={item} />
        ))
      }
    </div>
  )
};

export default Gallery;