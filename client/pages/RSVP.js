import React, { useState } from 'react';

function RSVP() {

  const [formInput, setFormInput] = useState(' ');

  function handleSubmit(e) {
    // Prevent the browser from reloading the page
    e.preventDefault();
    const form = e.target;
    const array = formInput.split(' ');
    const firstName = array[0];
    const lastName = array[1];
    // const id = document.getElementById('yes') ;
    // console.log('id', id);

    
    console.log(firstName, lastName);
    // // You can pass formData as a fetch body directly:
    // if (id === 'yes'){
    //   fetch('http://localhost:3000/find', { 
    //     method: form.method, 
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({firstName: firstName, lastName: lastName, RSVP: 'yes'})   
    //   });
    // } else {
    //   fetch('http://localhost:3000/find', { 
    //     method: form.method, 
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({firstName: firstName, lastName: lastName, RSVP: 'no'})   
    //   });
    // }
  }

  const yesButton = document.getElementById('yes');
  const noButton = document.getElementById('no');
  // console.log('yesButton', yesButton, 'noButton', noButton);

  function eventListener(){
    const array = formInput.split(' ');
    const firstName = array[0];
    const lastName = array[1];
    console.log('firstName', firstName, 'lastName', lastName);
    yesButton.addEventListener('click', () => {
      console.log('yes button clicked');
      // fetch('http://localhost:3000/find', { 
      //   method: form.method, 
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({firstName: firstName, lastName: lastName, RSVP: 'yes'})   
      // });
    });
    noButton.addEventListener('click', () => {
      console.log('no button clicked');
    //   fetch('http://localhost:3000/find', { 
    //     method: form.method, 
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({firstName: firstName, lastName: lastName, RSVP: 'no'})   
    //   });
    });
  }

  return (
    <form method='patch' onSubmit={eventListener}>
    <div>
      <div style={{width: 110, height: 20, borderRadius: 3, margin: 5, backgroundColor: 'mediumslateblue', padding: 10, fontSize: '1.2rem'}}> RSVP Below: </div>
      <label style={{width: 250, height: 20, borderRadius: 3, margin: 10, fontSize: '1.2rem'}}>
        Full name: < input type='text' name='fullName' value={formInput} 
        onChange={e => { setFormInput(e.target.value) }}  
        style={{width: 250, height: 25, borderRadius: 4, margin: 10}} />
      </label>
      <br />
      <button type='submit' className="btn" id="yes" style={{width: 180, height: 30, borderRadius: 5, margin: 5, backgroundColor: '#9e019e', color: 'silver', fontSize: '1rem'}}>See you there!</button>
      <button type='submit' className="btn" id="no" style={{width: 180, height: 30, borderRadius: 5, margin: 5, backgroundColor: '#9e019e', color: 'silver', fontSize: '1rem'}}>Sadly, can't make it.</button>
      <br />
    </div>
    </form>
  )
}


export default RSVP;