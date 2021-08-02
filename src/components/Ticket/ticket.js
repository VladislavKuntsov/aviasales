import React from 'react';
import PropTypes from 'prop-types'; 
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';
import classesTicket from './ticket.module.scss';

function Ticket({ticket}) {

    const {price, carrier, segments } = ticket;

    const newPrice = `${String(price).substr(0, 2)} ${String(price).substr(2)}`;

    const informationRoutesData = segments.map(item => {

    const {origin, destination, date, stops, duration} = item;

    const timeStart = new Date(date).toLocaleString('en-GB', { hour: 'numeric', minute: 'numeric', timeZone: 'UTC'});
    const timeEnd = new Date(moment(date).add(duration, 'm').toDate()).toLocaleString('en-GB', { hour: 'numeric', minute: 'numeric', timeZone: 'UTC'});
    const timeTravel = `${Math.floor(duration/60)} ч - ${Math.ceil(duration % 60)} мин`; 

    const numberTransfers = (number) => {
        switch (number) {
            case 1:
                return <span>1 ПЕРЕСАДКА</span>
            case 2:
                return <span>2 ПЕРЕСАДКИ</span>
            case 3:
                return <span>3 ПЕРЕСАДКИ</span>
            default:
                return <span>БЕЗ ПЕРЕСАДОК</span>;
        }
    }

    const transfersAirport  = (number) => {
        switch (number) {
            case 1:
                return `${stops[0]}`;
            case 2:
                return `${stops[0]}, ${stops[1]}`;
            case 3:
                return `${stops[0]}, ${stops[1]}, ${stops[2]}`;
            default:
                return '';
        }
    }

    return (
        <div className={classesTicket['information__routes-data']} key={uuidv4()}>
            <div className={classesTicket['origin-destination-time']}>
                <div>
                    {origin} - {destination}
                </div>
                <div>
                    {timeStart} - {timeEnd}
                </div>
            </div>
            <div className={classesTicket.duration}>
                <div>
                    <span>В ПУТИ</span> 
                </div>
                <div>
                    {timeTravel}
                </div>
            </div>
            <div className={classesTicket.transfers}>
                <div>
                    {numberTransfers(stops.length)}
                </div>
                <div>
                {transfersAirport(stops.length)}
                </div>
            </div>
    </div>
    )
})

    return (
        <div className={classesTicket.information} key={uuidv4()}>
            <div className={classesTicket['information__price-logo']}>
                <div className={classesTicket.price}>
                    <span>
                        {`${newPrice} Р`}     
                    </span>
                </div>
                <div className={classesTicket.logo}>
                <img src={`http://pics.avs.io/99/36/${carrier}.png`} alt='logoAirline ' />
                </div>
            </div>
            {informationRoutesData}
        </div>
    )
}

Ticket.defaultProps = {
}

Ticket.propTypes = {
    ticket: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array])).isRequired,
}

export default Ticket;
