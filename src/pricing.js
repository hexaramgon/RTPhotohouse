import React from 'react';
import './App.scss';

class Pricing extends React.Component {
  render() {

  return (

    <div className='pricingro' >



        <div className='pricebox'>
          <div className='toppricebox'>
            <h3>Standard Package</h3>
            <h2 className='price'>$75</h2>
          </div>
            <ul className='pricelist'>
              <li>Total of 25 photos</li>
              <li> Maximum of 2 different locations</li>
              <li>Digital Photos</li>
            </ul>
        </div>

        <div className='pricebox'>
        <div className='toppricebox'>
            <h3 >Deluxe Package</h3>
            <h2 className='price'>$150</h2>
        </div>
        <ul className='pricelist'>
              <li>Total of 50 photos</li>
              <li> Unlimited locations</li>
              <li>Digital Photos</li>
              <li>Choice of Print Photos</li>

            </ul>
        </div>

    </div>    
  );
  }
}

export default Pricing;