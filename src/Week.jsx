import React from 'react';
import Day from './Day'

const Week = ({ days }) => {


    return (
        <>
            {days.map(day => <Day key={day} dataId={day} />)}
        </>
    )
}

export default Week

