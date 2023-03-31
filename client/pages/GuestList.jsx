import React, { useState, useEffect } from 'react';

function GuestList() {
  const [guestList, setGuestList] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/list')
      .then(data => data.json())
      .then(data => {
        setGuestList(data);
      })
      .catch(err => console.log('Error: ', err));
  }, []);

  return (
    <div>
      <h1 id='pages' >Guest List</h1>
      {guestList.map((guest, index) => (
        <div key={index}>
           {/* style={{color: 'rgb(219, 219, 219)', fontSize: 20}} */}
          <p>Name: {guest.firstName} {guest.lastName} --- RSVP: {guest.RSVP} </p>
        </div>
      ))}
    </div>
  );
}

export default GuestList;
