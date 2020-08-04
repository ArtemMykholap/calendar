import React, { Component } from 'react';
import moment from 'moment';



class Event extends Component {


    render() {
        
        const { top, height,title,date,timeStart,timeFinish } = this.props;
        const currentTime = moment().format("YYYYDDMMHHmm");
        const eventDate=`${date.replace(/-/g, "")}${timeStart.replace(':', "")}`;
        const expired = Number(currentTime) > Number(eventDate);
        const classSecond = expired ? 'task task-check' : 'task';
        return (<>
            <div className={classSecond} style={{
                height: height,
                top: top,
            }} >
                <span>{title}</span>
                <div className='time-of-task'>{`${timeStart} - ${timeFinish} `}</div>
            </div>
        </>
        )
    }
}
export default Event