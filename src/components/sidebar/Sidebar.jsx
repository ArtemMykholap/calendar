import React from 'react';

const Sidebar = () => {
    let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]
    let hours = arr.map(el => <div className="item-time-first-column" key={el}>
        <div className='time-in-column'>
            {`${el}-00`}
        </div></div>)
    return hours
}
export default Sidebar