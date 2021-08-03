import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types'; 
import * as actions from '../../Store/actions';
import classesAddTickets from './addTickets.module.scss';

const AddTickets = ({numberOfTicketsDisplayed, setNumberOfTicketsDisplayed, tickets}) => {

    const addNumberOfTicketsDisplayed = (data) => {
        if (data <= tickets[0].length) {
        const newNumberOfTicketsDisplayed = data + 5;
        setNumberOfTicketsDisplayed(newNumberOfTicketsDisplayed);            
        }
    }

    return (
        <div className ={classesAddTickets.addTickets} onClick={() => addNumberOfTicketsDisplayed(numberOfTicketsDisplayed)} role='presentation'>
            <span>Показать еще 5 билетов</span>
        </div>    
    )
}

AddTickets.defaultProps = { 
}

AddTickets.propTypes = {
    numberOfTicketsDisplayed: PropTypes.number.isRequired,
    setNumberOfTicketsDisplayed: PropTypes.func.isRequired,
    tickets: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.array, PropTypes.bool])).isRequired,
}

const mapDispatchToProps = (dispatch) => {
    const {setNumberOfTicketsDisplayed} = bindActionCreators(actions, dispatch);
  
    return {
        setNumberOfTicketsDisplayed: (payload) => setNumberOfTicketsDisplayed(payload),
    }
}

const mapStateToProps = (state) => ({
    numberOfTicketsDisplayed: state.numberOfTicketsDisplayed,
    tickets: state.tickets,
})

export default connect(mapStateToProps, mapDispatchToProps)(AddTickets);


