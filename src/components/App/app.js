import React, { useEffect } from 'react';
import { Alert } from 'antd';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types'; 
import { connect } from 'react-redux';
import * as actions from '../../actions';
import classesApp from './app.module.scss';

import logoAviasale from '../images/logo-plane.svg';
import Switch from '../Switch/switch';
import Filter from '../Filter/filter';
import TicketsList from '../Tickets-list/tickets-list';
import Serviсes from '../../Services/services';
import AddTickets from '../Button/addTickets';


const AviasalesDBService = new Serviсes;

function App({setSearchId, setTickets, setIsLoading, searchId, tickets, isLoading, checkboxFilters}) {

  const stop = tickets[1];
  const ButtonAddTickets = isLoading ? <AddTickets /> : null;
  const isCheckboxActive = checkboxFilters.filter(item => item.active).length;

  useEffect(() => {
    AviasalesDBService.getSearchId().then(body => setSearchId(body.searchId))
  }, [setSearchId])

  useEffect(() => {
    if(searchId && !stop) {
      AviasalesDBService.getTickets(searchId).then(body => setTickets(body))
    }
    if(stop) setIsLoading(true) 
  }, [setTickets, setIsLoading, searchId, stop, tickets])

  const styleAlert = {
    'margin-top': '36px',
    'font-size': '20px',
    'width': '502px',
    'text-align': "center",
  }

  return (
    <div>
      <div className={classesApp.logo}>
        <img className={classesApp['logo-img']} src={logoAviasale} alt='logo Aviasale' />
      </div>
      <div className={classesApp.content}>
        <div>
          <Filter/>  
        </div>
        <div>
          <Switch/>
          <TicketsList/>
          {isCheckboxActive === 0 ? <Alert message="Для успешного поиска выберите колличество пересадок" type="info" style={styleAlert}/> : ButtonAddTickets}
        </div> 
      </div>
    </div> 
  )
}

App.defaultProps = {
  searchId: null,
}

App.propTypes = {
  setSearchId: PropTypes.func.isRequired,
  setTickets: PropTypes.func.isRequired,
  setIsLoading: PropTypes.func.isRequired,
  searchId: PropTypes.string,
  tickets: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.array, PropTypes.bool])).isRequired,
  isLoading: PropTypes.bool.isRequired,
  checkboxFilters: PropTypes.arrayOf(PropTypes.object).isRequired,
}

const mapStateToProps = (state) => ({
  tickets: state.tickets,
  searchId: state.searchId,
  isLoading: state.isLoading,
  checkboxFilters: state.checkboxFilters,
})

const mapDispatchToProps = (dispatch) => {
  const {setSearchId, setTickets, setIsLoading} = bindActionCreators(actions, dispatch);

  return {
    setSearchId: (payload) => setSearchId(payload),
    setTickets: (payload) => setTickets(payload),
    setIsLoading: (payload) => setIsLoading(payload),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);