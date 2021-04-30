
import './App.scss';
import {useSpring, animated, config} from 'react-spring'
import Pricing from './pricing';
import React, { useState } from 'react';
import About from './About';
import Contact from './Contact';
import img1 from './images/I001.jpg';
import img2 from './images/I002.jpg';
import img3 from './images/I003.jpg';
import img4 from './images/I004.jpg';
import img5 from './images/I005.jpg';
import img6 from './images/I006.jpg';
import img7 from './images/I007.jpg';
import img8 from './images/I008.jpg';
import img9 from './images/I009.jpg';
import img10 from './images/I010.jpg';
import img11 from './images/I011.jpg';
import img12 from './images/I012.jpg';
import img13 from './images/I013.jpg';
import img14 from './images/I014.jpg';
import img15 from './images/I015.jpg';
import img16 from './images/I016.jpg';
// import faclog from './images/IMG_2036.png';

import Facesvg from './face.svg'
import {Navbar, Nav} from 'react-bootstrap'


function Basis() {


    const [slide, setSlide] = useState('0');
    const [yaxis, setyaxis] = useState({overflowY: 'visible'});
    // const [photodisplay, setdisplay] = useState({ display: 'none',});
    // const [photo, setphoto] = useState({img1});
    // const [counter, setcounter] = useState(1);

    var props =  useSpring({
        to: {left: slide + '%',
            top: '0%'
            },
        config: config.default
      })

    function click(x) {
      const el = document.querySelector('.css-slider-wrapper');
      // get scroll position in px
        setSlide(x)
        if (x !== '0') {
            el.scrollTop = 0;
            setyaxis({overflowY: 'hidden'})
        } else{
            setyaxis({overflowY: 'visible'})
        }
    }

    // function toolbarclick() {
    //   if(counter) {
    //     setyaxis({overflowY: 'hidden'});
    //     setcounter(0);
    //   }else{
    //         setyaxis({overflowY: 'visible'})
    //         setcounter(1);

    //     }
    // }


    return (
    <div className="css-slider-wrapper" style={yaxis}>
    {/* <div className='photo-display'
    //  style={photodisplay} onClick={() => displayer(false)} 
     >
        <img src={photo}></img>
    </div> */}



<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ul mr-auto">
      <Nav.Link href="#Works" onClick={() => click('0')}>Works</Nav.Link>
      <Nav.Link href="#About" onClick={() => click('-100')}>About</Nav.Link>
      <Nav.Link href="#Pricing" onClick={() => click('-200')}>Pricing</Nav.Link>
      <Nav.Link href="#Contact"  onClick={() => click('-300')}>Contact</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>

        <animated.div className='mover'  style={props}>  
        <div className="slider slide-1"> 
        <h1>REMEDIES AND TRAGEDIES</h1>
        <h2>RT FILMHOUSE</h2>
        <div className="row"> 
          <div className="column">
            <img alt = "RT Filmhouse" className = 'imagehov' 
            src={img1} 
            // onClick={() => displayer(true, img1)}
            ></img>
            <img src={img5} className = 'imagehov' alt = "RT Filmhouse"></img>
            <img src={img9} className = 'imagehov' alt = "RT Filmhouse"></img>
            <img src={img13} className = 'imagehov' alt = "RT Filmhouse"></img>
          </div>
          <div className="column">
            <img src={img2} className = 'imagehov' alt = "RT Filmhouse"></img>
            <img src={img6} className = 'imagehov' alt = "RT Filmhouse"></img>
            <img src={img10} className = 'imagehov' alt = "RT Filmhouse"></img>
            <img src={img14} className = 'imagehov' alt = "RT Filmhouse"></img>
          </div>  
          <div className="column">
            <img src={img3} className = 'imagehov' alt = "RT Filmhouse"></img>
            <img src={img7} className = 'imagehov' alt = "RT Filmhouse"></img>
            <img src={img11} className = 'imagehov' alt = "RT Filmhouse"></img>
            <img src={img15} className = 'imagehov' alt = "RT Filmhouse"></img>
          </div>
          <div className="column">
            <img src={img4} className = 'imagehov' alt = "RT Filmhouse"></img>
            <img src={img8} className = 'imagehov' alt = "RT Filmhouse"></img>
            <img src={img12} className = 'imagehov' alt = "RT Filmhouse"></img>
            <img src={img16} className = 'imagehov' alt = "RT Filmhouse"></img>
          </div>
          <div className='lastrow'>
            <h4 id='footertext'>Created and Designed by Hector J. Ramos</h4>
            <img src={Facesvg} alt="Face Logo" className='faclog' />
          </div>
        </div>
      </div>    
        <div className="slider slide-2">
                <About></About>
        </div>
        <div className="slider slide-3">
                <Pricing></Pricing>
        </div>
    
        <div className="slider slide-4">
                <Contact></Contact>
        </div>
        </animated.div>
  </div>
        
)}

export default Basis