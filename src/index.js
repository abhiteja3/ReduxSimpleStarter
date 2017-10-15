import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/app';
import reducers from './reducers';

import SearchBar from './components/search_bar';

const createStoreWithMiddleware = applyMiddleware()(createStore);
const API_KEY = 'AIzaSyAt52r0x7CAWFfxJppkhcix9hVwtRSd5og';

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <SearchBar />
  </Provider>
  , document.querySelector('.container'));
