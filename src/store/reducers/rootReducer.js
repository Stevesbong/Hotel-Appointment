import authReducer from './authReducer';
import projectReducer from './projectReducer';

import { firebaseReducer } from 'react-redux-firebase';

// sync in firestore data with my state
import { firestoreReducer } from 'redux-firestore';

// combine different reducers into single reducer
import { combineReducers } from 'redux';

// any reducers want to combine together and what do I call it
const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer,
    // authentication
    firebase: firebaseReducer,
    // database
    firestore: firestoreReducer
});

// now in our state object of the store we'll have these ( auth and project properties )
// auth reducer will update information on the auth property 
// project reducer will update information on the project property

export default rootReducer;