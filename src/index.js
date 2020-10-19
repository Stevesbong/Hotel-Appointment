import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './store/reducers/rootReducer';

// react-redux is binding layer 
// help us to bind redux with react app
import { Provider } from 'react-redux';

// redux middleware
// halt dispatch, inside action creator create asynchronous function
import thunk from 'redux-thunk';

// surround our app and pass the store into the application
// so that application has access to the store


// Create Redux central store
/**
 * @param { reducer } 
 * @param { middleware } middleware take list of store enhancers
 */
const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);