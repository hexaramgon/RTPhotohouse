import React from 'react';
import './App.scss';
import img_prof from './images/IMG_PROFILE.png';


class About extends React.Component {
  render() {

  return (

    

    <div className='aboutrow' >

        <img src={img_prof}  alt = "Edward Zavala" className ='profpic' id="othertest"></img>

        <div className='about_col'>
            <h3> I think we need to talk about our divorce...
              </h3>
              <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.14.0/css/all.css"></link>
              <ul className='spacer ulsub'>
                <li className ='test lisub'>
                  <a href="https://www.tiktok.com/@eddathan?lang=en"  target="_blank" rel="noreferrer" className='asub betterspace'>
                  <i className="fab fa-tiktok icon isub"></i>   </a>
                </li >
                <li className ='test lisub'>
                  <a href="https://twitter.com/edfrompenn"  target="_blank" rel="noreferrer" className='asub betterspace'><i className="fab fa-twitter icon isub"></i></a>
                </li>
                <li className ='test lisub'>
                  <a href="https://www.instagram.com/eddfromtarget/"  target="_blank" rel="noreferrer" className='asub betterspace'><i className="fab fa-instagram icon isub"></i></a></li>
                <li className ='test lisub'>
                  <a href="https://www.snapchat.com/add/edward_za"  target="_blank" rel="noreferrer" className='asub betterspace'><i className="fab fa-snapchat-ghost icon isub" ></i></a></li>
              </ul>
        </div>

    </div>    
  );
  }
}

export default About;