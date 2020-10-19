// Action creator. Any kind of actions for project ( deleting, editing, etc. )

export const createProject = (project) => {
    // used thunk to return a function
    return ( dispatch, getState, { getFirebase, getFirestore } ) => {
        // make async call to database

        // reference to my firestore database
        const firestore = getFirestore();

        firestore.collection('projects').add({
            ...project,
            authorFirstName: 'stevetest',
            authorLastName: 'parktest',
            authorId: 12345,
            createdAt: new Date()
        }).then( () => {
            dispatch({ type: 'CREATE_PROJECT', project })
        }).catch( err => {
            dispatch({ type: 'CREATE_PROJECT_ERROR', err })
        })
    }
};
