import React from 'react';
import Hour from './Hour'


const Day = () => {
    let hours = [];
    for (let i = 0; i <=23; i++) {
        hours.push(<Hour key={i} />);
    }
    return (
        < li className='item-content' >
            {hours}
        </li >

    )
}
export default Day