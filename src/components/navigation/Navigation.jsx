import React, { Component } from 'react';
import moment from 'moment';
import Sidebar from '../sidebar/Sidebar';
import Week from '../week/Week';
import Header from '../header/Header';
import './navigation.scss';

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
        let weekStart = this.state.currentDate.clone().startOf('isoWeek');
        let nameMonthFirstDay = weekStart.format("MMMM");
        let nameMonthLastDay = this.state.currentDate.clone().endOf('isoWeek').format("MMMM");
        let numbersOfWeekDays = [0, 1, 2, 3, 4, 5, 6]
        let days = numbersOfWeekDays.map((day) => {
            return {
                weekDay: moment(weekStart).add(day, 'days').format("dddd"),
                day: moment(weekStart).add(day, 'days').format("DD"),
                month: moment(weekStart).add(day, 'days').format("MM"),
                year: moment(weekStart).add(day, 'days').format("YYYY"),
            }
        })
        let today = `${moment().week('week').format('DD')}${moment().week('week').format('MM')}`;
        return (
            <>
                <Header goNext={this.goNext}
                    goPrev={this.goPrev}
                    returnToday={this.returnToday}
                    nameMonthFirstDay={nameMonthFirstDay}
                    nameMonthLastDay={nameMonthLastDay}
                    showForm={this.props.showForm} />
                <div className="table-header ">
                    < div className=' item-header-time'>
                        <span className='item-header__time'>gtp</span>
                    </div>
                    {days.map((day,index) => {
                        return (
                            <div className='item-header ' key={index}>
                                <span className=' weekday'  key={day.weekDay}>{day.weekDay}</span>
                                <span className={'month-day' + (`${day.day}${day.month}` === today ? ' active' : '')} key={day.month}>{day.day}</span>
                            </div>)
                    })}
                </div>
                <div className="calendar">
                    <div className="table-content">
                        <div className="item-content-time">
                            <Sidebar />
                        </div>
                        <Week
                        days={days}
                            tasks={this.props.tasks}
                            contextMenu={this.props.contextMenu}
                            showForm={this.props.showContextMenu}
                            onDelete={this.props.onDelete}
                        />
                    </div>
                </div>

            </>
        )
    }
}

export default Navigation
