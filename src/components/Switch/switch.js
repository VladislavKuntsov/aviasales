import React from 'react';
import PropTypes from 'prop-types';   
import {connect} from 'react-redux' /* функция высшего порядка, создает обертку компонента */
import {bindActionCreators} from 'redux';
import * as actions from '../../actions';
import classesSwitch from './switch.module.scss';

function Switch({sortingTickets, buttonSorting}) {

    return (
        <div className={classesSwitch.button} >
            <div className={`${classesSwitch.button__cheap} ${buttonSorting === 'cheap' ? classesSwitch.active : null}`} onClick={() => sortingTickets("cheap")} role="presentation">
                <span>Самый дешевый</span>
            </div>
            <div className={`${classesSwitch.button__fast} ${buttonSorting === 'fast' ? classesSwitch.active : null}`} onClick={() => sortingTickets('fast')} role="presentation">
                <span>Самый быстрый</span>
            </div>
            <div className={`${classesSwitch.button__optimal} ${buttonSorting === 'optimal' ? classesSwitch.active : null}`} onClick={ () => sortingTickets('optimal')} role="presentation">
                   <span>Оптимальный</span>
            </div>
        </div>
    )
}

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