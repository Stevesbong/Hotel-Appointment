import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavbarContainer from './components/layout/NavbarContainer';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/project/ProjectDetails';

function App() {
  return (
    <Router>
      <div className="App">
      
        {/* Main Navbar */}
        <NavbarContainer />

        <Switch>
          <Route exact path='/' component={ Dashboard } />
          <Route path='/project/:id' component={ ProjectDetails } />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
