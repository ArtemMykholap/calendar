import React, { Component } from 'react';
import moment from 'moment';
import Header from './Header'



class Navigation extends Component {

    state = {
        currentDate: moment().week('week'),
        
    }
 

    goNext = () => {
        this.setState({
            currentDate: this.state.currentDate.add(1, 'week')
        })
    }
    goPrev = () => {
        this.setState({
            currentDate: this.state.currentDate.add(-1, 'week')
        })
    }
    returnToday = () => {
        this.setState({
            currentDate: moment().week('week')
        })
    }



    render() {
     
        let currentDate = this.state.currentDate;
        let weekStart = currentDate.clone().startOf('isoWeek');
        let days = [];
        for (let i = 0; i <= 6; i++) {
            days.push(moment(weekStart).add(i, 'days').format("DD dddd"));
        }
        let nameMonthFirstDay=days[0]
        console.log(nameMonthFirstDay)

        return (
            <>
                <Header goNext={this.goNext} goPrev={this.goPrev}  returnToday={this. returnToday}/>
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
}
export default Navigation