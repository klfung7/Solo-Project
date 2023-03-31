import React, { useState } from 'react';

function RSVP() {

  const [formInput, setFormInput] = useState(' ');
  const [RSVP, setRSVP] = useState(' ');

  function handleSubmit(e) {
    e.preventDefault();
    const array = formInput.split(' ');
    const firstName = array[1];
    const lastName = array[2];
    const rsvp = RSVP;
    console.log(firstName, lastName, rsvp);

    fetch(`http://localhost:3000/api/find/${firstName}/${lastName}/${rsvp}`, {
      method: 'PATCH', 
      headers: { 'Content-Type': 'application/json' },
      mode: 'cors',
    })
      .then(data => data.json())
      .then(data => console.log(`Updated rsvp for ${firstName} ${lastName}`))
      .catch(err => console.log('Error: ', err))
  }


// add an onclick to those and update the state 
// send state into params of fetch request
// onClick={() => setRSVP(true);

  return (
    <form method='patch' onSubmit={handleSubmit}>
    <div>
    {/* style={{width: 110, height: 20, borderRadius: 3, margin: 5, backgroundColor: 'mediumslateblue', padding: 10, fontSize: '1.2rem'}} */}
      <div > RSVP Below: </div>
      {/* style={{width: 250, height: 20, borderRadius: 3, margin: 10, fontSize: '1.2rem'}} */}
      <label >
        Full name: < input type='text' name='fullName' value={formInput} 
        onChange={e => { setFormInput(e.target.value) }}  
         />
         {/* style={{width: 250, height: 25, borderRadius: 4, margin: 10}} */}
      </label>
      <br />
      <br />

      <input type="radio" id="yes" name="buttons" value={RSVP} onClick={() => {setRSVP('Accept')}}/>  
      <label for="yes">See you there!</label>
      <br />
      <br />
      <input type="radio" id="no" name="buttons" value={RSVP} onClick={() => setRSVP('Decline')}/>
      <label for="no">Sadly, can't make it.</label>
      <br />
      <br />
      {/* style={{width: 100, height: 30, borderRadius: 5, margin: 5, backgroundColor: '#9e019e', color: 'silver', fontSize: '1rem'}} */}
      <button type='submit'>Submit</button>
      <br />
      <br />
    </div>
    </form>
  )
}


export default RSVP;