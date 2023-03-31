import React from 'react';

function Hotels() {
  return (
    <div >
      <h1 id='pages' >Hotels</h1>
      <div id='hotels'>
        <div id='omni'>
        <h3>Omni William Penn Hotel</h3>
        <p>530 WILLIAM PENN PL, PITTSBURGH, PA 15219</p>
        <p>(412) 281-7100</p>
        <p>Check-In: Thursday, September 28, 2023 | Check-Out: Sunday, October 1, 2023 </p>
        <p>Book by August 29th to secure the rates listed.</p>
        <a href='https://www.omnihotels.com/hotels/pittsburgh-william-penn/weddings/fung-schau-wedding-block-09252023'>Omni William Penn Hotel</a>
        </div>
        {/* <p> */}
        <div id='joinery'>

        <h3>Joinery Hotel</h3>
        <p>453 BOULEVARD OF THE ALLIES, PITTSBURGH, PA 15219</p>
        <p>(412) 339-1870</p>
        <p>Check-In: Friday, September 29, 2023 | Check-Out: Sunday, October 1, 2023</p>
        <p>Book by August 16th to secure the rates listed. If you would like to book for dates outside of this range, they will honor the rates listed but you will need to call the hotel directly. Rates currently listed are based on the assumption that there is a home Steelers game that weekend. If it is an away game, rates will be lowered by $40 per night per room.</p>
        <a href='https://group.curiocollection.com/witw9d'>The Joinery Hotel</a>
        </div>
      </div>

    </div>
  )
}

export default Hotels;