import React from 'react';
import './app.scss';
import  logo from '../images/logo-plane.svg'

function App() {

  return (
    <div className="root">
      <div className='logo'>
        <img className='logo-img' src={logo} alt='logo Aviasale' />
      </div>
    </div>
  );
}

export default App;