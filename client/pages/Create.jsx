import React, { useState }from 'react';

function CreateUser() {

  const [formInput, setFormInput] = useState(' ');

  function handleSubmit(e) {
    e.preventDefault();
    const array = formInput.split(' ');
    const firstName = array[1];
    const lastName = array[2];

    fetch(`http://localhost:3000/api/create/${firstName}/${lastName}`, { 
      method: 'POST', 
      headers: { 'Content-Type': 'Application/JSON' },
      mode: 'no-cors',
      body: {} 
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
    {/* style={{width: 195, height: 20, borderRadius: 3, margin: 5, backgroundColor: 'mediumslateblue', padding: 10, fontSize: '1.2rem'}} */}
      <div> Create New Guest Entry: </div>
      <br />
      {/* style={{width: 250, height: 20, borderRadius: 3, margin: 10, fontSize: '1.2rem'}} */}
      <label>
        Full name: <input type='text' name='fullName' value={formInput} 
        onChange={e => { setFormInput(e.target.value) }}  
        />
        {/* style={{width: 250, height: 25, borderRadius: 4, margin: 10}}  */}
      </label>

      <br />
      {/* style={{width: 180, height: 30, borderRadius: 5, margin: 5, backgroundColor: '#9e019e', color: 'silver', fontSize: '1rem'}} */}
      <button type='submit' >Submit</button>
      <br />
      <br />
      <br />
    </div>
    </form>
  )
}


export default CreateUser;