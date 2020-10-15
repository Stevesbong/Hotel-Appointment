import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavbarContainer from './components/layout/NavbarContainer'

function App() {
  return (
    <Router>
      <div className="App">
        <NavbarContainer />
      </div>
    </Router>
  );
}

export default App;
