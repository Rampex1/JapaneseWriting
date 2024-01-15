import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './pages/home/Home';
import Learn from './pages/learn/Learn';
import Profile from './pages/profile/Profile';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route>
            <Route path='/' element={<Home />}/>
            <Route path='/profile' element={<Profile />}/>
            <Route path='/learn' element={<Learn />}/>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
