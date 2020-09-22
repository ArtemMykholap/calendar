import React from 'react';
import Hour from '../hour/Hour';
import Event from '../event/Event'
import './day.scss';


const Day = ({ dataId, tasks, onDelete }) => {
    let hours = Array(24).fill().map((el, index) => (<Hour key={index} howHour={el} dataId={dataId} />))
    return (
        <div className='item-content' >
            {hours}
                <Event
                    tasks={tasks}
                    dataId={dataId}
                    onDelete={onDelete}
                />
        </div>
    )
}

export default Day

