import React from 'react';
import { DAYS } from './constants/days'
import Day from './Day'



const Week = () => {


    return (<>
        {DAYS.map(day => <Day key={day} />)}
    </>
    )
}
export default Week

