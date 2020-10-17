import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { createStore } from 'redux';
import rootReducer from './store/reducers/rootReducer';

// react-redux is binding layer 
// help us to bind redux with react app
import { Provider } from 'react-redux';

// surround our app and pass the store into the application
// so that application has access to the store


// Create Redux central store
const store = createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);