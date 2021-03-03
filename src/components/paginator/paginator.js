import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updatePageNumber } from '../../redux/actions/data.actions';
import './paginator.css';

const Paginator = () => {

  const dispatch = useDispatch();
  const pageNumber = useSelector(state => state.page);
  const pages = useSelector(state => state.pages);

  const isDisabled = (page) => (pages.length + 1 < page) ? true : false;

  const renderButtons = () => {
    let pageNumbers = (pageNumber <= 2) ? [1, 2, 3] : [ pageNumber - 1, pageNumber, pageNumber + 1 ];
    return pageNumbers.map((page, index) => (
        <button className={`${pageNumber === page ? 'selected' : ''}`} key={index} onClick={() => dispatch(updatePageNumber(page))} disabled={isDisabled(page)}>
          {page}
        </button>
    ));
  }

  return(
    <div className="container paginator">
      <button id="back-button" onClick={() => dispatch(updatePageNumber(pageNumber - 1))} disabled={pageNumber === 1}>Back</button>
      { renderButtons() }
      <button id="next-button" onClick={() => dispatch(updatePageNumber(pageNumber + 1))} >Next</button>
    </div>
  )
};

export default Paginator;