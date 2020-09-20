import React from 'react';
import Day from '../day/Day'

const Week = ({ days, tasks, onDelete, id }) => {
    return (
        <>
            {days.map(day => <Day key={day} dataId={day} tasks={tasks} onDelete={onDelete} id={id} />)}
        </>
    )
}
export default Week

