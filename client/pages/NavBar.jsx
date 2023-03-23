import React from 'react';
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <div>
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to='/hotels'>Hotels</Link></li>
        <li><Link to='/ourStory'>Our Story</Link></li>
        <li><Link to='/photos'>Photos</Link></li>
        <li><Link to='/registry'>Registry</Link></li>
        <li><Link to='/rsvp'>RSVP</Link></li>
        <li><Link to='/create'>Create Guest</Link></li>
      </ul>
    </div>
  )
}

export default Navbar;