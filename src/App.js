import './App.scss';
import Pic from './temppic.png'
import Insta from './insta.png'

function App() {
  return (
    <div className="Background">
      <header className="Navbar">
        <div className="Namelogo">
          <h1>REMEDIES & TRAGEDIES</h1>
          <p>Photography based in Sacramento, California</p>
        </div>
        <div className="Router"> 
          <h5>Works</h5>
          <h5>About</h5>
          <h5>Pricing</h5>
          <h5>Contact</h5>
        </div>
      </header>
      <span className="Horzline"></span>
      {/* <div className="Container"> */}
      <div className="tempcont"> 
      <div className = "tempsubcont">
        <h3>Currently Under Construction</h3>
        <div className="tempcontv2">
          <h4>In the meantime, find me on Instagram @eddfromtarget</h4>
          <a href='https://www.instagram.com/eddfromtarget/'><img src={Insta} className='instatemp'></img></a>
        </div>
      </div>
        <img src={Pic} className="pic"></img>
        {/* <section className="PictureA"></section>
        <section className="PictureB"></section>
        <section className="PictureC"></section>
        <section className="PictureD"></section> */}
      </div>
    </div>
  );
}

export default App;
