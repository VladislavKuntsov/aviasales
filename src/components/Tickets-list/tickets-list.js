import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import 'antd/dist/antd.css';
import { Spin as Spinner} from 'antd';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'; 
import classesTicketList from './tickets-list.module.scss';
import Ticket from '../Ticket/ticket';

function TicketsList({tickets, isLoading, visibleTickets, buttonSorting}) {
  console.log(buttonSorting)
  const spinner = !isLoading ? 
  <div className ={classesTicketList.spinnerContainer}>
    <Spinner size="large" />   
  </div> : 
  null;

   const visibleTicketsList = tickets[0].sort((aa, bb) => {
    switch (buttonSorting) {
      case 'cheap':
        return aa.price - bb.price;
      case 'fast':
        return aa.segments[0].duration - bb.segments[0].duration;
      default:
        return '';
    }
  }) 

  const ticketsList = isLoading ? visibleTicketsList.slice(0, visibleTickets).map(ticket => <Ticket key={uuidv4()} ticket={ticket} />) : null;



    return (
        <div className ={classesTicketList.ticketsListContainer}>
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
  visibleTickets: PropTypes.number.isRequired,
  buttonSorting: PropTypes.string.isRequired,
}

const mapStateToProps = (state) => ({
  tickets: state.tickets,
  isLoading: state.isLoading,
  visibleTickets: state.visibleTickets,
  buttonSorting: state.buttonSorting,
})

export default connect(mapStateToProps)(TicketsList);