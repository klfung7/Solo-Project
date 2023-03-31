import React from 'react';
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <div>
      <ul id='navbar'>
        <Link to="/">Home</Link>
        <Link to='/hotels'>Hotels</Link>
        <Link to='/ourStory'>Our Story</Link>
        <Link to='/create'>Create Guest</Link>
        <Link to='/rsvp'>RSVP</Link>
        <Link to='/list'>Guest List</Link>
        <Link to='/photos'>Photos</Link>
        <Link to='/registry'>Registry</Link>
      </ul>
    </div>
  )
}

export default Navbar;