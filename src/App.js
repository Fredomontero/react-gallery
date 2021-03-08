import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestData } from './redux/actions/data.actions';
import Header from './components/header/header';
import Gallery from './components/gallery/gallery';
import Paginator from './components/paginator/paginator';
import { Route, useLocation } from "react-router-dom";
import queryString from 'query-string';
import './App.css';

const App = () => {

  const dispatch = useDispatch();
  let pages = useSelector(state => state.pages);
  let pageNumber = useSelector(state => state.page);

  let location = useLocation();
  let parsed = queryString.parse(location.search) ?? { count: 10, page: 1 };
  let galleryID = location.pathname.split("/")[2];

  useEffect(() => {
    dispatch(requestData({galleryId: galleryID, count: parsed.count, page: parsed.page}));
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pages, pageNumber]);

  const handleScroll = () => {
    if(window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
    if(pages.length <= pageNumber){
      console.log('Fetching Data');
      console.log("Current pages: ", pages);
      dispatch(requestData({galleryId: galleryID, count: parsed.count, page: pageNumber + 1}));
    }
  }

  return (
    <div>
      <Header/>
      {
        (pages[pageNumber - 1]) ? (
          <Route path="/gallery/:galleryID" render={()=><Gallery pages={pages}/>} />
        ) : (
          <p>Loading...</p>
        )
      }
      <Paginator/>
    </div>
  );
}

export default App;
