import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './store/reducers/rootReducer';

// react-redux is binding layer 
// help us to bind redux with react app
// surround our app and pass the store into the application
// so that application has access to the store
import { Provider } from 'react-redux';

// redux middleware
// halt dispatch, inside action creator create asynchronous function
import thunk from 'redux-thunk';

// redux firebase and firestore middleware
import { createFirestoreInstance, reduxFirestore, getFirestore } from 'redux-firestore';
import { ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase';

import firebase from './config/fbConfig';
import 'firebase/firestore';

// firestore collection config
const rrfConfig = { 
  userProfile: 'projects',
  useFirestoreForProfile: true
}


// Create Redux central store
/**
 * @param { reducer } 
 * @param { middleware } middleware take list of store enhancers
 */
const store = createStore(rootReducer, 
  compose(
    // first store enhancer
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    // second store enhancer
    reduxFirestore(firebase)
  )
);

// ReactReduxFirebaseProvider HOC props
const rffProps = {
  firebase,
  useFirestoreForProfile: true,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rffProps}>
        <App />
      </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);