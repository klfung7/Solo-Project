import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Hotels from './pages/Hotels';
import OurStory from './pages/OurStory';
import Photos from './pages/Photos';
import Registry from './pages/Registry';
import RSVP from './pages/RSVP';
import Navbar from './pages/NavBar.jsx';
import CreateUser from './pages/Create.jsx';
import GuestList from './pages/GuestList.jsx';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <br />
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path="/hotels" element={<Hotels />}/>
        <Route path="/ourStory" element={<OurStory />}/>
        <Route path="/create" element={<CreateUser />}/>
        <Route path="/rsvp" element={<RSVP />}/>
        <Route path="/list" element={<GuestList />}/>
        <Route path="/photos" element={<Photos />}/>
        <Route path="/registry" element={<Registry />}/>
      </Routes>
    </ BrowserRouter>

  )
}

// Link, RouterProvider, createBrowserRouter 

export default App;