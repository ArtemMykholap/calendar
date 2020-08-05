import React, { Component } from 'react';
import Navigation from './Navigation';
import Sidebar from './Sidebar';
import Week from './Week';
import moment from 'moment';
import ModalForm from './ModalForm'



class App extends Component {

    state = {
        currentDate: moment().week('week'),
        isOpen: false,
        tasks: [
            { title: 'breakfest', description: 'breakfestbreakfest', timeStart: '12:30', timeFinish: '14:00', date: '2020-29-07' },
            { title: 'dinner', description: 'breakfestbreakfest', timeStart: '11:30', timeFinish: '12:00', date: '2020-10-08' },
            { title: 'supper', description: 'breakfestbreakfest', timeStart: '12:30', timeFinish: '14:00', date: '2020-03-08' }
        ]
    }


    handleSubmit = (e) => {
        console.log(e)
        debugger
        this.setState(state => {
            let tasks = state.tasks.push({
                title: e.target.title,
                description: e.target.description,
                timeStart: e.target.timeStart,
                timeFinish: e.target.timeFinish,
                date: e.target.date
            })

            return {
                tasks,
            };
        });

        onClose()
        event.preventDefault();
    }

    hideForm = () => {
        this.setState({
            isOpen: false
        })
    }

    showForm = () => {
        this.setState({
            isOpen: true
        })
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
        console.log(this.state.tasks)

        let currentDate = this.state.currentDate;
        let weekStart = currentDate.clone().startOf('isoWeek');
        let days = [];
        for (let i = 0; i <= 6; i++) {
            days.push(moment(weekStart).add(i, 'days').format("YYYY-DD-MM dddd"));
        }
        let nameMonthFirstDay = weekStart.format("MMMM");
        let nameMonthLastDay = currentDate.clone().endOf('isoWeek').format("MMMM");


        return (<>
            <div className="container">
                <Navigation goNext={this.goNext}
                    goPrev={this.goPrev}
                    returnToday={this.returnToday}
                    nameMonthFirstDay={nameMonthFirstDay}
                    nameMonthLastDay={nameMonthLastDay}
                    days={days}
                    isOpen={this.state.isOpen}
                    showForm={this.showForm} />
                <div className="calendar">
                    <ul className="table-content">
                        <li className='item-content-time'>
                            <Sidebar />
                        </li>
                        <Week
                            days={days} tasks={this.state.tasks} />
                    </ul>
                </div>
                <ModalForm isOpen={this.state.isOpen}
                    onClose={this.hideForm}
                    tasks={this.state.tasks}
                    handleSubmit={(e) => this.handleSubmit(e)}
                />
            </div>

        </>
        )
    }
}
export default App