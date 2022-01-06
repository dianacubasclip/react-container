import React from 'react';
import './App.css';
import Router from './Router';
import { NavLink, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <h1>Testing MFEs</h1>
          <nav>
            <div className="nav-header">
              <ul>
                <NavLink to="/">Home</NavLink>
              </ul>
              <ul>
                <NavLink to="/loans">Loans</NavLink>
              </ul>
              <ul>
                <NavLink to="/logistics">Logistics</NavLink>
              </ul>
              <ul>
                <NavLink to="/dashboard">Dashboard</NavLink>
              </ul>
            </div>
          </nav>
        </header>
        <Router />
      </div>
    </BrowserRouter>
  );
}

export default App;