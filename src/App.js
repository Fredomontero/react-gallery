import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestData } from './redux/actions/data.actions';
import Gallery from './components/gallery/gallery';
import Header from './components/header/header';
import './App.css';

const App = () => {

  const dispatch = useDispatch();
  const images = useSelector(state => state.data.images);

  useEffect(() => {
    dispatch(requestData());
  }, []);

  return (
    <div>
      <Header/>
      <Gallery images={images}/>
    </div>
  );
}

export default App;
