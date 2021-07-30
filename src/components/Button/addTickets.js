import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types'; 
import * as actions from '../../actions';
import classesAddTickets from './addTickets.module.scss';

const AddTickets = ({visibleTickets, setVisibleTickets, tickets}) => {

    const addVisibleTickets = (data) => {

        if (data <= tickets[0].length) {
        const newData = data + 5;
        setVisibleTickets(newData);            
        }
    }

    return (
        <div className ={classesAddTickets.addTickets} onClick={() => addVisibleTickets(visibleTickets)} role='presentation'>
            <span>Показать еще 5 билетов</span>
        </div>    
    )
}


AddTickets.defaultProps = { 
}

AddTickets.propTypes = {
    visibleTickets: PropTypes.number.isRequired,
    setVisibleTickets: PropTypes.func.isRequired,
    tickets: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.array, PropTypes.bool])).isRequired,
}

const mapDispatchToProps = (dispatch) => {
    const {setVisibleTickets} = bindActionCreators(actions, dispatch);
  
    return {
      setVisibleTickets: (payload) => setVisibleTickets(payload),
    }
}

const mapStateToProps = (state) => ({
    visibleTickets: state.visibleTickets,
    tickets: state.tickets,
})

export default connect(mapStateToProps, mapDispatchToProps)(AddTickets);


