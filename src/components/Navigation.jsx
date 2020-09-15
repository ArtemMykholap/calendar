import React from 'react';
import moment from 'moment';
import Header from './Header';

const Navigation = ({ goNext, goPrev, returnToday, nameMonthFirstDay, nameMonthLastDay, days, showForm }) => {
    let today = moment().week('week').format('DD');
    // let today = moment().week('week').format('YYYY-MM-DD dddd');
    let dayWeek =
    [{
        dayType: 'Mon',
        dayNumber: null
    },
    {
        dayType: 'Tue',
        dayNumber: null
    },
    {
        dayType: 'Wed',
        dayNumber:  null
    },
    {
        dayType: 'Thu',
        dayNumber: null
    },
    {
        dayType: 'Fri',
        dayNumber: null
    },
    {
        dayType: 'Sat',
        dayNumber:  null
    },
    {
        dayType: 'Sun',
        dayNumber: null
    }
    ]
    days.forEach((day, i) => {
        dayWeek[i].dayNumber = day;
      });
    return (
        <>
            <Header goNext={goNext}
                goPrev={goPrev}
                returnToday={returnToday}
                nameMonthFirstDay={nameMonthFirstDay}
                nameMonthLastDay={nameMonthLastDay}
                showForm={showForm} />
            <div className="table-header ">
                < div className=' item-header-time'>
                    <span className='item-header__time'>gtp</span>
                </div>
                {  dayWeek.map(day => {
                    return (
                        <div className='item-header ' >
                            <span className=' weekday' >{day.dayType}</span>
                            <span className={'month-day' + (day.dayNumber === today ? ' active' : '')}>{day.dayNumber}</span>
                        </div>)
                })}
            </div>
        </>
    )
}

export default Navigation