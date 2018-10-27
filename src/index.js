import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducers from './reducers/rootReducer'
import './index.css';
import App from './App';
import {BrowserRouter, Route} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

const initialState = {};

const store = createStore(
  rootReducers,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
  <BrowserRouter>
  <Provider store={store}>
  <Route component={App} />
  </Provider>
  </BrowserRouter>,
  document.getElementById('root'));
registerServiceWorker();
