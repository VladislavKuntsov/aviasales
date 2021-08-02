import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import 'antd/dist/antd.css';
import { Spin as Spinner} from 'antd';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'; 
import classesTicketList from './tickets-list.module.scss';
import Ticket from '../Ticket/ticket';

function TicketsList({tickets, isLoading, numberOfTicketsDisplayed, buttonSorting, checkboxFilters}) {

  const spinner = !isLoading ? 
  <div className ={classesTicketList.spinnerContainer}>
    <Spinner size="large" />   
  </div> : 
  null;

   const allTicketsList = tickets[0].sort((first, second) => {
    if(buttonSorting === 'cheap' || buttonSorting === 'optimal') return first.price - second.price;
    if(buttonSorting === 'fast') return (first.segments[0].duration + first.segments[1].duration) - (second.segments[0].duration + second.segments[1].duration);

    return first.price - second.price;
  }) 

  const keysActiveFilter = checkboxFilters.filter(item => item.active).map(item => item.value).filter((item, pos, array) => array.indexOf(item) === pos);

  const visibleTicketsList = allTicketsList.filter(item => keysActiveFilter.indexOf(item.segments[0].stops.length) >= 0 && keysActiveFilter.indexOf(item.segments[1].stops.length) >= 0) ;
  
  const ticketsList = isLoading ? visibleTicketsList.slice(0, numberOfTicketsDisplayed).map(ticket => <div key={uuidv4()}><Ticket ticket={ticket}/></div> ) : null;

    return (
        <div className ={classesTicketList.ticketsListContainer} >
          {ticketsList}
          {spinner}
        </div>
    )
}

TicketsList.defaultProps = {
}  

TicketsList.propTypes = {
  tickets: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.array, PropTypes.bool])).isRequired,
  isLoading: PropTypes.bool.isRequired,
  numberOfTicketsDisplayed: PropTypes.number.isRequired,
  buttonSorting: PropTypes.string.isRequired,
  checkboxFilters: PropTypes.arrayOf(PropTypes.object).isRequired,
}

const mapStateToProps = (state) => ({
  tickets: state.tickets,
  isLoading: state.isLoading,
  numberOfTicketsDisplayed: state.numberOfTicketsDisplayed,
  buttonSorting: state.buttonSorting,
  checkboxFilters: state.checkboxFilters,
})

export default connect(mapStateToProps)(TicketsList);