import React from 'react';
import PropTypes from 'prop-types'; 
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../Store/actions';

import moduleFilter from './filter.module.scss';

function Filter({ filteringTickets, checkboxFilters}) {

     const onFilterChange = ({ target: { checked: active, dataset: { name } } }) => {
        const  newCheckboxFilters = checkboxFilters.map(item => [ item.name, 'transfersAll' ].includes(name) ? { ...item, active } : item);
        const isAll = newCheckboxFilters.filter(item  => item.name !== 'transfersAll').every(item => item.active);
        newCheckboxFilters.find(item  => item.name === 'transfersAll').active = isAll;

        filteringTickets(newCheckboxFilters);
    } 

    const findCheckedStatus = (data) => checkboxFilters.find(item => item.name === data).active;

    return (
        <div className={moduleFilter.transfers}>
            <h3>Колличество пересадок</h3>
            <FilterInputAll checkboxFilters={checkboxFilters} findCheckedStatus={findCheckedStatus} onFilterChange={onFilterChange}/>
        </div>
    )
}

const FilterInputAll = ({checkboxFilters, findCheckedStatus, onFilterChange}) => (
    checkboxFilters.map( ({name, text, id}) => (
        <label className={moduleFilter.name} key={id}>
            <input type="checkbox" checked={findCheckedStatus(name)} data-name={name} onChange={onFilterChange}/>
            <span>{text}</span>
        </label>    
    ))
)

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