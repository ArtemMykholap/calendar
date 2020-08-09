import React, { Component } from 'react';
import Day from './Day'

class Week extends Component {

    render() {

        const { days, tasks,onDelete,id } = this.props
        return (
            <>
                {days.map(day => <Day key={day}  dataId={day} tasks={tasks} onDelete={onDelete} id={id}/>)}
            </>
        )
    }
}

export default Week

