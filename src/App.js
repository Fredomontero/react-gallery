import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestData } from './redux/actions/data.actions';
import Header from './components/header/header';
import Gallery from './components/gallery/gallery';
import Paginator from './components/paginator/paginator';
import './App.css';

const App = () => {

  const dispatch = useDispatch();
  let pages = useSelector(state => state.pages);
  let pageNumber = useSelector(state => state.page);

  useEffect(() => {
    dispatch(requestData());
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
      dispatch(requestData());
    }
  }

  return (
    <div>
      <Header/>
      <button onClick={()=>console.log("Pages: ", pages)} >Click me</button>
      {
        (pages[pageNumber - 1]) ? (
          <Gallery pages={pages}/>
        ) : (
          <p>Loading...</p>
        )
      }
      <Paginator/>
    </div>
  );
}

export default App;
