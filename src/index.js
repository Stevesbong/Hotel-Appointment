import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './store/reducers/rootReducer';
import Loading from './components/layout/Loading';

// react-redux is binding layer 
// help us to bind redux with react app
// surround our app and pass the store into the application
// so that application has access to the store
import { Provider, useSelector } from 'react-redux';

// redux middleware
// halt dispatch, inside action creator create asynchronous function
import thunk from 'redux-thunk';

// redux firebase and firestore middleware
import { createFirestoreInstance, reduxFirestore, getFirestore } from 'redux-firestore';
import { ReactReduxFirebaseProvider, getFirebase, isLoaded } from 'react-redux-firebase';

import fbConfig from './config/fbConfig';
import firebase from 'firebase/app';




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
    reduxFirestore(firebase, fbConfig)
  )
);

// firestore collection config
const profileSpecificProps = {
  userProfile: 'users',
  useFirestoreForProfile: true,
  enableRedirectHandling: false,
  resetBeforeLogin: false,
  fbConfig: fbConfig
}


// ReactReduxFirebaseProvider HOC props
const rffProps = {
  firebase,
  config: profileSpecificProps,
  dispatch: store.dispatch,
  createFirestoreInstance,
  attachAuthIsReady: true
}

function AuthIsLoaded({ children }) {
  const auth = useSelector( (state ) => state.firebase.auth);
  if(!isLoaded(auth)) return <Loading />;
    return children
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rffProps}>
        <AuthIsLoaded>
          <App />
        </AuthIsLoaded>
      </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);