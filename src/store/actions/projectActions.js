// Action creator. Any kind of actions for project ( deleting, editing, etc. )

export const createProject = (project) => {
    return ( dispatch, getState ) => {
        // make async call to database
        dispatch({ type: 'CREATE_PROJECT', project })
    }
};
