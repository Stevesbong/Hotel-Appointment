import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavbarContainer from './components/layout/NavbarContainer';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/project/ProjectDetails';
import CreateProject from './components/project/CreateProject';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import EditProject from './components/project/EditProject';

function App() {
  return (
    <Router>
      <div className="App">
      
        {/* Main Navbar */}
        <NavbarContainer />

        <Switch>
          <Route exact path='/' component={ Dashboard } />

          {/* Project related component */}
          <Route exact path='/project/edit/:id' component={ EditProject } />
          <Route path='/project/:id' component={ ProjectDetails } />
          <Route path='/create' component={ CreateProject } />

          {/* SignIn and SignUp component */}
          <Route path='/signin' component={ SignIn } />
          <Route path='/signup' component={ SignUp } />
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
