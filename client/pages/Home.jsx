import React from 'react';

function Home() {
  return (
    <div>
      <h1 id='title'>Krystal & Thaddeus</h1>
      <h3 id='date'>September 30, 2023</h3>
        
      <div class="details">
        <h2 id='weddingDay'>Wedding Day</h2>
        <div class="innerDetails">
          <div>
            <h4>Ceremony: 2:00pm</h4>
            <p>Saint Paul Cathedral</p>
            <p>108 North Dithridge Street</p>
            <p>Pittsburgh, PA 15213</p>
          </div>
          <div>
            <h4>Reception: 4:30pm</h4>
            <p>The Rivers Club</p>
            <p>301 Grant Street, One Oxford Centre</p>
            <p>Pittsburgh, PA 15219</p>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>
  )
};

export default Home;