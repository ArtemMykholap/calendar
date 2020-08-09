import React, { Component } from 'react';
import moment from 'moment';
import Header from './Header';
import Week from './Week';



class Navigation extends Component {



    render() {
        let today = moment().week('week').format('YYYY-MM-DD dddd');
        console.log(today)
        const { goNext, goPrev,
            returnToday,
            nameMonthFirstDay,
            nameMonthLastDay, days, showForm } = this.props
        return (
            <>
                <Header goNext={goNext}
                    goPrev={goPrev}
                    returnToday={returnToday}
                    nameMonthFirstDay={nameMonthFirstDay}
                    nameMonthLastDay={nameMonthLastDay}
                    showForm={showForm} />
                <ul className="table-header ">
                    < li className=' item-header-time'>
                        <span className='item-header__time'>gtp</span>
                    </li>
                    {days.map(day => {
                        const date = day.split(' ')[0].split('-')[2];
                        const weekDay = day.split(' ')[1];
                        return (
                            <li className='item-header ' key={day}>
                                <span className=' weekday' >{weekDay}</span>
                                <span className={' month-day ' + (day === today ? 'month-day-active' : '')}>{date}</span>
                            </li>
                        )
                    })}
                </ul>
            </>
        )
    }
}
export default Navigation