import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updatePageNumber } from '../../redux/actions/data.actions';
import { Link, useLocation } from "react-router-dom";
import queryString from 'query-string';
import './paginator.css';

const Paginator = () => {

  let location = useLocation();
  let parsed = queryString.parse(location.search);
  let galleryID = location.pathname.split("/")[2];

  const dispatch = useDispatch();
  const pageNumber = useSelector(state => state.page);
  const pages = useSelector(state => state.pages);

  const isDisabled = (page) => (pages.length + 1 < page) ? true : false;

  const renderButtons = () => {
    let pageNumbers = (pageNumber <= 2) ? [1, 2, 3] : [ pageNumber - 1, pageNumber, pageNumber + 1 ];
    return pageNumbers.map((page, index) => (
      <Link key={index} to={`/gallery/${galleryID}/?count=${parsed.count}&page=${page}`}>
        <button className={`${pageNumber === page ? 'selected' : ''}`} onClick={() => dispatch(updatePageNumber(page))} disabled={isDisabled(page)}>
          {page}
        </button>
      </Link>
    ));
  }

  return(
    <div className="container paginator">
      <Link to={`/gallery/${galleryID}/?count=${parsed.count}&page=${pageNumber - 1}`}>
        <button id="back-button" onClick={() => dispatch(updatePageNumber(pageNumber - 1))} disabled={pageNumber === 1}>Back</button>
      </Link>
      { renderButtons() }
      <Link to={`/gallery/${galleryID}/?count=${parsed.count}&page=${pageNumber + 1}`}>
        <button id="next-button" onClick={() => dispatch(updatePageNumber(pageNumber + 1))} >Next</button>
      </Link>
    </div>
  )
};

export default Paginator;