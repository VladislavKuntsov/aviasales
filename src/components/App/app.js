import React, { useState, useEffect } from 'react';
import './app.scss';
import  logo from '../images/logo-plane.svg';
import Services from '../../Services/services';

const AviasalesServices = new Services();

function App() {

  const [ticketsData, setTicketsData] = useState(null);   

/*    const getSearchIdServices = () => {
    AviasalesServices.getSearchId().then(body => body)
  }   */

/*   const getTicketsServises = (id) => {
    AviasalesServices.getTickets(id).then(body => setTicketsData(body))
  }  */

  useEffect(() => {
    AviasalesServices.getSearchId()
      .then(body => AviasalesServices.getTickets(body.searchId).then(tickets => setTicketsData(tickets)))
  }, [])

  console.log(  ticketsData);

  return (
    <div className="root">
      <div className='logo'>
        <img className='logo-img' src={logo} alt='logo Aviasale' />
      </div>
    </div>
  )
}

export default App;