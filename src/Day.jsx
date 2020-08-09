import React, { Component } from 'react';
import Hour from './Hour';
import Event from './Event'
class Day extends Component {




    render() {
 
        const { dataId, tasks, onDelete} = this.props
        let taskData = [];
        taskData = tasks.filter(({ date }) => date === dataId.split(' ')[0])
        let hours = [];
        for (let i = 0; i <= 23; i++) {
            hours.push(<Hour key={i} howHour={i} dataId={dataId.split(' ')[0]} />);
        }

        return (
            <li className='item-content' >
                {hours}
                {
                    taskData && taskData.map((item) => {

                        let myData = item.date.split('-');
                        let temp = myData[1];
                        myData[1] = myData[2];
                        myData[2] = temp;
                        let date = myData.join().replace(/,/g, "");
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
                    }
                    )
                }
            </li >
        )
    }
}
export default Day

