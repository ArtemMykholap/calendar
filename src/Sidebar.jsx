import React from 'react';

const Sidebar = () => {
    let hours = [];
    for (let i = 1; i <= 24; i++) {
        hours.push(<div className="item-time-first-column" key={i}> <div className='time-in-column'>{`${i}-00`}</div></div>);
    }
    return hours
}
export default Sidebar