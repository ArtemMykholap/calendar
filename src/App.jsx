import React, { Component } from 'react';
import Navigation from './components/navigation/Navigation';
import ModalForm from './components/modalForm/ModalForm'
import { createTask, fetchTasksList, deleteTask } from './gateway/eventGateway';


class App extends Component {
    state = {
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
    render() {
        return (<>
            <div className="container">
                <Navigation
                    tasks={this.state.tasks}
                    isOpen={this.state.isOpen}
                    showForm={this.showForm}
                    onDelete={this.handleEventDelete} />
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
