import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './paginator.css';

const Paginator = () => {

  const dispatch = useDispatch();
  const pageNumber = useSelector(state => state.page);
  const pages = useSelector(state => state.pages);

  const isDisabled = (page) => (pages.length + 1 < page) ? true : false;

  const renderButtons = () => {
    let pageNumbers = (pageNumber <= 2) ? [1, 2, 3] : [ pageNumber - 1, pageNumber, pageNumber + 1 ];
    return pageNumbers.map((page, index) => (
        <button key={index} onClick={() => console.log(page)} disabled={isDisabled(page)}>
          {page}
        </button>
    ));
  }

  return(
    <div className="container paginator">
      <button>Back</button>
      { renderButtons() }
      <button>Next</button>
    </div>
  )
};

export default Paginator;