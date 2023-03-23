import React, { useState }from 'react';

function CreateUser() {

  const [formInput, setFormInput] = useState(' ');

  function handleSubmit(e) {
    // Prevent the browser from reloading the page
    e.preventDefault();
    const array = formInput.split(' ');
    const firstName = array[0];
    const lastName = array[1];
    console.log(firstName, lastName);
    const user = {firstName: firstName, lastName: lastName, RSVP: 'TBD'};

    // You can pass formData as a fetch body directly:
    fetch('http://localhost:3000/create', { 
      method: 'POST', 
      headers: { 'Content-Type': 'application/json' },
      mode: 'no-cors',
      body: JSON.stringify(user) 
    })
    .then(data => data.json())
    .then(data => {
      console.log(data)
    })
    .catch(err => console.log('Error: ', err));
  }

  return (
    <form method='post' onSubmit={handleSubmit}>
    <div>
      <div style={{width: 195, height: 20, borderRadius: 3, margin: 5, backgroundColor: 'mediumslateblue', padding: 10, fontSize: '1.2rem'}}> Create New Guest Entry: </div>
      <br />
      {/* <label for="firstName" style={{width: 50, margin: 5}}> First Name: </label>
      <input type="text" style={{width: 170, height: 20, borderRadius: 3, margin: 5}} required/>
      <br />
      <label for="lastName" style={{margin: 6}}> Last Name: </label>
      <input type="text" style={{width: 170, height: 20, borderRadius: 3, margin: 5}} required/>
      <br /> */}
      
      <label style={{width: 250, height: 20, borderRadius: 3, margin: 10, fontSize: '1.2rem'}}>
        Full name: <input type='text' name='fullName' value={formInput} 
        onChange={e => { setFormInput(e.target.value) }}  
        style={{width: 250, height: 25, borderRadius: 4, margin: 10}} />
      </label>

      <br />
      <button type='submit' className="yes" style={{width: 180, height: 30, borderRadius: 5, margin: 5, backgroundColor: '#9e019e', color: 'silver', fontSize: '1rem'}}>Submit</button>
      <br />
      <br />
      <br />
    </div>
    </form>
  )
}


export default CreateUser;