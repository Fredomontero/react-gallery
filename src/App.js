import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestData } from './redux/actions/data.actions';
import Header from './components/header/header';
import Gallery from './components/gallery/gallery';
import Paginator from './components/paginator/paginator';
import './App.css';

const App = () => {

  const dispatch = useDispatch();
  const images = useSelector(state => state.data.images);

  useEffect(() => {
    dispatch(requestData());
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    if(window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
    console.log('Fetch more items');
  }

  return (
    <div>
      <Header/>
      <Gallery images={images}/>
      <Paginator/>
    </div>
  );
}

export default App;
