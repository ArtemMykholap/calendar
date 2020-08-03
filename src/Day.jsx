import React from 'react';
import Hour from './Hour'


const Day = ({dataId}) => {
    let hours = [];
    for (let i = 0; i <=23; i++) {
        hours.push(<Hour key={i} dataId={dataId.split(' ')[0]} howHour={i}/>);
    }
    return (
        < li className='item-content' >
            {hours}
        </li >

    )
}
export default Day

