import React, { Component } from 'react';
import moment from 'moment';


export const tasks = [
    { text: 'breakfest', done: true, id: '2020-29-07-0' },
    { text: 'run', done: false, id: '2020-27-07-8' },
    { text: 'drunk', done: true, id: '2020-29-07-5' },
    { text: 'sleep', done: true, id: '2020-31-07-9' },
]

class Event extends Component {
    render() {
        const { text, done, id } = this.props;
        const currentTime = moment().format("YYYYDDMMHH");
        const expired = Number(currentTime) > Number(id.replace(/-/g, ""));
        const classSecond = expired ? 'task task-check' : 'task'
        return (<>
            <div className={classSecond}>
                <span>{text}</span>
                <div className='time-of-task'>8-30 - 9-30</div>
            </div>
        </>
        )
    }
}
export default Event