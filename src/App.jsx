import React from 'react';
import Header from './Header';
import Navigation from './Navigation';
import Sidebar from './Sidebar';
import Week from './Week';

const App = () => {
    return (<>
        <div className="container">
            <Header  />
            <Navigation/>
            <div className="calendar">
                <ul className="table-content">
                    <li className='item-content-time'>
                        <Sidebar />
                    </li>
                    <Week />
                </ul>
            </div>
        </div>

    </>)
}
export default App