import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import { Home } from './pages/Home';
import { Hotels } from './pages/Hotels';
import { OurStory } from './pages/OurStory';
import { Photos } from './pages/Photos';
import { Registry } from './pages/Registry';
import { RSVP } from './pages/RSVP';

function App() {
    return (
      <>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to='/hotels'>Hotels</Link></li>
          <li><Link to='/ourStory'>Our Story</Link></li>
          <li><Link to='/photos'>Photos</Link></li>
          <li><Link to='/registry'>Registry</Link></li>
          <li><Link to='/rsvp'>RSVP</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/hotels" element={<Hotels />}/>
        <Route path="/ourStory" element={<OurStory />}/>
        <Route path="/photos" element={<Photos />}/>
        <Route path="/registry" element={<Registry />}/>
        <Route path="/rsvp" element={<RSVP />}/>

      </Routes>
      </>
    )
  }

export default App;