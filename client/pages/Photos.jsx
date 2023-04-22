import React from 'react';
import michigan1 from '..//Photos/michigan1.jpg';
import michigan2 from '../Photos/michigan2.jpg';

function Photos() {
  return (
    <div >
      <h1 id='pages' >Photos</h1>
      <div id='photos'>
        <img src={michigan1} id='mich1'  />      
        <img src={michigan2} id='mich2'  />
      </div>
    </div>    
  )
}

export default Photos;