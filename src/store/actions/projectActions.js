// Action creator. Any kind of actions for project ( deleting, editing, etc. )

export const createProject = (project) => {
    // used thunk to return a function
    return ( dispatch, getState, { getFirebase, getFirestore } ) => {
        // make async call to database

        // reference to my firestore database
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;


        firestore.collection('projects').add({
            ...project,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: authorId,
            createdAt: new Date()
        }).then( () => {
            dispatch({ type: 'CREATE_PROJECT', project })
        }).catch( err => {
            dispatch({ type: 'CREATE_PROJECT_ERROR', err })
        })
    }
};
