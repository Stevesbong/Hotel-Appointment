import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavbarContainer from './components/layout/NavbarContainer';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/project/ProjectDetails';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';

function App() {
  return (
    <Router>
      <div className="App">
      
        {/* Main Navbar */}
        <NavbarContainer />

        <Switch>
          <Route exact path='/' component={ Dashboard } />
          <Route path='/project/:id' component={ ProjectDetails } />

          {/* SignIn and SignUp component */}
          <Route path='/signin' component={ SignIn } />
          <Route path='/signup' component={ SignUp } />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
