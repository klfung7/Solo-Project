import React from 'react';
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <div>
      <ul>
        <li style={{margin: '2px'}}><Link to="/home">Home</Link></li>
        <li style={{margin: '2px'}}><Link to='/hotels'>Hotels</Link></li>
        <li style={{margin: '2px'}}><Link to='/ourStory'>Our Story</Link></li>
        <li style={{margin: '2px'}}><Link to='/create'>Create Guest</Link></li>
        <li style={{margin: '2px'}}><Link to='/rsvp'>RSVP</Link></li>
        <li style={{margin: '2px'}}><Link to='/list'>Guest List</Link></li>
        <li style={{margin: '2px'}}><Link to='/photos'>Photos</Link></li>
        <li style={{margin: '2px'}}><Link to='/registry'>Registry</Link></li>
      </ul>
    </div>
  )
}

export default Navbar;