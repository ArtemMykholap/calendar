import React from 'react';
import Hour from '../hour/Hour';
import Event from '../event/Event'



const Day = ({ dataId, tasks, onDelete }) => {
    let taskData = [];
    taskData = tasks.filter(({ date }) => date === `${dataId.year}-${dataId.month}-${dataId.day}`)
    let hours =  Array(24).fill().map(el =>(<Hour key={el} howHour={el}  dataId={dataId}/>))

    return (
        <div className='item-content' >
            {hours}
            {
                taskData && taskData.map((item) => {
                    let myTimeStart = item.timeStart.split(':');
                    let myTimeFinish = item.timeFinish.split(':');
                    let myTimeStartInMinutes = Number(myTimeStart[0]) * 60 + Number(myTimeStart[1]);
                    let myTimeFinishInMinutes = Number(myTimeFinish[0]) * 60 + Number(myTimeFinish[1]);
                    let timeDiff = Math.abs(myTimeStartInMinutes - myTimeFinishInMinutes)
                    return (
                        <Event key={`${item.title}${item.description}`} height={timeDiff}
                            top={myTimeStartInMinutes}
                            title={item.title}
                            date={item.date}
                            timeStart={item.timeStart}
                            timeFinish={item.timeFinish}
                            onDelete={onDelete}
                            id={item.id}
                        />
                    );
                })
            }
        </div>
    )
}

export default Day

