import React from 'react';
import michigan1 from '..//Photos/michigan1.jpg';
import michigan2 from '../Photos/michigan2.jpg';

function Photos() {
  return (
    <div >
      <h1 id='pages' >Photos</h1>
      <div id='photos'>
        <img src={michigan1} style={{height: '300px', margin: '20px'}} />      
        <img src={michigan2} style={{height: '500px', margin: '20px'}} />
      </div>
    </div>    
  )
}

export default Photos;