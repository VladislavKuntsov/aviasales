import React from 'react';
import PropTypes from 'prop-types';   
import {connect} from 'react-redux' /* функция высшего порядка, создает обертку компонента */
import {bindActionCreators} from 'redux';
import * as actions from '../../Store/actions';
import classesSwitch from './switch.module.scss';

function Switch({sortingTickets, buttonSorting}) {

    const switchButtons = [
        {className: 'cheap' , text: 'Самый дешевый', active: buttonSorting === 'cheap' ? 'active' : 'null', id: 11 },
        {className: 'fast' , text: 'Самый быстрый', active: buttonSorting === 'fast' ? 'active' : 'null', id: 22 },
        {className: 'optimal' , text: 'Оптимальный', active: buttonSorting === 'optimal' ? 'active' : 'null', id: 33 },
    ]

    return (
        <div className={classesSwitch.button} >
            <SwitchButtonAll switchButtons={switchButtons} sortingTickets={sortingTickets} buttonSorting={buttonSorting} />
        </div>
    )
}

const SwitchButtonAll = ({sortingTickets, switchButtons}) => (
    switchButtons.map(({className, text, active, id}) => (
        <div className={`${classesSwitch[`button__${className}`]} ${classesSwitch[active]}`} key={id} onClick={() => sortingTickets(className)} role="presentation">
            <span>{text}</span>
        </div>    
    ))
)

Switch.defaultProps = {
    sortingTickets: () => {},
}

Switch.propTypes = {
    sortingTickets: PropTypes.func,
    buttonSorting: PropTypes.string.isRequired,
} 

const mapStateToProps = (state) => ({buttonSorting: state.buttonSorting})

const mapDispatchToProps = (dispatch) => {
    const {sortingTickets} = bindActionCreators(actions, dispatch);

    return {
        sortingTickets: (payload) => sortingTickets(payload)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Switch);