import React from 'react';
import Day from '../day/Day';


const Week = ({ days, tasks, onDelete, id }) => {
    return (
        <>
            {days.map((day,index) => <Day key={index} dataId={day} tasks={tasks} onDelete={onDelete} id={id} />)}
        </>
    )
}
export default Week

