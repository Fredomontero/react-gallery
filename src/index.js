import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter, Redirect } from "react-router-dom";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Redirect exact from="/" to={`/gallery/cats/?count=10&page=1`}/>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);