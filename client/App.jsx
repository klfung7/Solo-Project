import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Hotels from './pages/Hotels.jsx';
import OurStory from './pages/OurStory.jsx';
import Photos from './pages/Photos.jsx';
import Registry from './pages/Registry.jsx';
import RSVP from './pages/RSVP.jsx';
import CreateUser from './pages/Create.jsx';
import GuestList from './pages/GuestList.jsx';
import Navbar from './pages/NavBar.jsx';

function App() {
  return (
    <BrowserRouter>
      <header id='header'>
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path="/hotels" element={<Hotels />}/>
          <Route path="/ourStory" element={<OurStory />}/>
          <Route path="/create" element={<CreateUser />}/>
          <Route path="/rsvp" element={<RSVP />}/>
          <Route path="/list" element={<GuestList />}/>
          <Route path="/photos" element={<Photos />}/>
          <Route path="/registry" element={<Registry />}/>
        </Routes>
      </main>
    </ BrowserRouter>

  )
}

export default App;