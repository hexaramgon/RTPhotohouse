import React from 'react';
import './App.scss';
import Basis from './Basis';




class App extends React.Component {

  authenticate(){
    return new Promise(resolve => setTimeout(resolve, 2000)) // 2 seconds
  }

  componentDidMount(){
    this.authenticate().then(() => {
      const ele = document.getElementById('ipl-progress-indicator')
      if(ele){
        // fade out
        ele.classList.add('available')
        setTimeout(() => {
          // remove from DOM
          ele.outerHTML = ''
        }, 2000)
      }
    })
  }

  render() { 
  return (
  <div className = 'Background'>
      <Basis></Basis>
  </div>
  );
  }
}

export default App;
