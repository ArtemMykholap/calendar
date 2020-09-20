import React from 'react';
import moment from 'moment';
import Header from '../header/Header';

const Navigation = ({ goNext, goPrev, returnToday, nameMonthFirstDay, nameMonthLastDay, days, showForm }) => {
    let today = `${moment().week('week').format('DD')}${moment().week('week').format('MM')}`;
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
                {  days.map(day => {
                    return (
                        <div className='item-header ' >
                            <span className=' weekday' >{day.weekDay}</span>
                            <span className={'month-day' + (`${day.day}${day.month}` === today ? ' active' : '')}>{day.day}</span>
                        </div>)
                })}
            </div>
        </>
    )
}

export default Navigation
