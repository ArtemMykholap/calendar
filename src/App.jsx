import React, { Component } from 'react';
import Navigation from './Navigation';
import Sidebar from './Sidebar';
import Week from './Week';
import moment from 'moment';
import ModalForm from './ModalForm'
import { createTask, fetchTasksList, deleteTask } from './eventGateway';


class App extends Component {
    state = {
        currentDate: moment().week('week'),
        isOpen: false,
        tasks: []
    }
    componentDidMount() {
        this.fetchTasks();
    }

    fetchTasks = () => {
        fetchTasksList()
            .then(tasksList =>
                this.setState({
                    tasks: tasksList,
                })
            );
    }

    createTask = (value, e) => {
        e.preventDefault();
        const newTask = {
            title: value.title,
            description: value.description,
            timeStart: value.timeStart,
            timeFinish: value.timeFinish,
            date: value.date,
        }

        createTask(newTask)
            .then(() => this.fetchTasks());

        this.hideForm()
    }

    handleEventDelete = (id) => {
        deleteTask(id).then(() => this.fetchTasks())
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
        let currentDate = this.state.currentDate;
        let weekStart = currentDate.clone().startOf('isoWeek');
        let days = [];
        for (let i = 0; i <= 6; i++) {
            days.push(moment(weekStart).add(i, 'days').format("YYYY-MM-DD dddd"));
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
                        <li className="item-content-time">
                            <Sidebar />
                        </li>
                        <Week
                            days={days} tasks={this.state.tasks}
                            contextMenu={this.state.contextMenu}
                            showForm={this.showContextMenu}
                            onDelete={this.handleEventDelete} />
                    </ul>
                </div>
                <ModalForm isOpen={this.state.isOpen}
                    onClose={this.hideForm}
                    tasks={this.state.tasks}
                    createTask={this.createTask}
                />
            </div>
        </>
        )
    }
}
export default App
