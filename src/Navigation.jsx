import React from 'react';
import moment from 'moment';



const Navigation = () => {

    let currentDate = moment().week(31);
    let weekStart = currentDate.clone().startOf('isoWeek');
    let days = [];
    for (let i = 0; i <= 6; i++) {
        days.push(moment(weekStart).add(i, 'days').format("DD dddd"));
    }


    return (
        <>
            <ul className="table-header ">
                < li className=' item-header-time'>
                    <span className='item-header__time'>gtp</span>
                </li>
                {days.map(day => {
                    const date = day.split(' ')[0];
                    const weekDay = day.split(' ')[1];
                    return (
                        <li className='item-header' key={day}>
                            <span className=' weekday' >{weekDay}</span>
                            <span className=' month-day'>{date}</span>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}
export default Navigation