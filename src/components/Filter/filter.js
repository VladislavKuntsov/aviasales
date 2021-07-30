import React from 'react';
import PropTypes from 'prop-types'; 
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions';

import moduleFilter from './filter.module.scss';

function Filter({ filteringTickets, checkboxFilters}) {

     const onFilterChange = ({ target: { checked: active, dataset: { value } } }) => {
        const  newCheckboxFilters = checkboxFilters.map(item => [ item.value, 'transfersAll' ].includes(value) ? { ...item, active } : item);
        const isAll = newCheckboxFilters.filter(item  => item.value !== 'transfersAll').every(item => item.active);
        newCheckboxFilters.find(item  => item.value === 'transfersAll').active = isAll;

        filteringTickets(newCheckboxFilters);
    } 

    const findCheckedStatus = (name) => checkboxFilters.find(item => item.value === name).active;

    return (
        <div className={moduleFilter.transfers}>
            <h3>Колличество пересадок</h3>
            <label className={moduleFilter.transfers__all} >
                <input type="checkbox" checked={findCheckedStatus('transfersAll')} data-value='transfersAll' onChange={onFilterChange}/>
                <span>Все</span>
            </label>
            <label className={moduleFilter.transfers__without} >
                <input type="checkbox" checked={findCheckedStatus('transfersWithout')} data-value='transfersWithout' onChange={onFilterChange}/>
                <span>Без пересадок</span>
            </label>
            <label className={moduleFilter.transfers__one}>
                <input type="checkbox" checked={findCheckedStatus('transfersOne')} data-value='transfersOne' onChange={onFilterChange}/>
                <span>1 пересадка</span>
            </label>
            <label className={moduleFilter.transfers__two} >
                <input type="checkbox" checked={findCheckedStatus('transfersTwo')} data-value='transfersTwo' onChange={onFilterChange}/>
                <span>2 пересадки</span>
            </label>
            <label className={moduleFilter.transfers__three} >
                <input type="checkbox" checked={findCheckedStatus('transfersThree')} data-value='transfersThree' onChange={onFilterChange}/>
                <span>3 пересадки</span>
            </label>
        </div>
    )
}

Filter.defaultProps = {
    filteringTickets: () => {},
}

Filter.propTypes = {
    filteringTickets: PropTypes.func,
    checkboxFilters: PropTypes.arrayOf(PropTypes.object).isRequired,
}

const mapStateToProps = (state) => ({checkboxFilters: state.checkboxFilters})


const mapDispatchToProps = (dispatch) => {
    const {filteringTickets} = bindActionCreators(actions, dispatch);

    return {
        filteringTickets: (payload) => filteringTickets(payload),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);