import React from 'react';
import {tasks}from './Event.jsx';
import Event from './Event';


const Hour = ({dataId,howHour}) => {
   const taskData=tasks.find(({id})=>id===`${dataId}-${howHour}`)
    return (
           <div className="item-time" data-id={`${dataId}-${howHour}`}>
               {taskData && <Event {...taskData}/>}
           </div>
    )
}
export default  Hour