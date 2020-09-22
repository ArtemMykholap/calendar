import React, { Component } from 'react';
import moment from 'moment';
import OutsideClickHandler from 'react-outside-click-handler';
import PropTypes from 'prop-types';
import './event.scss';

class Event extends Component {

    state = {
        outsideClick: false,
        disabled: PropTypes.false
    }

    onOutsideClick = () => {
        this.setState({
            outsideClick: false
        });
    }

    showDelete = (event) => {
        event.preventDefault();
        this.setState({
            outsideClick: true,
            disabled: PropTypes.true
        })
    }

    render() {
        let taskData = [];
        const { tasks, dataId, onDelete } = this.props;
        taskData = tasks.filter(({ date }) => date === `${dataId.year}-${dataId.month}-${dataId.day}`)
        return (<>{
            taskData && taskData.map((item) => {
                let myTimeStart = item.timeStart.split(':');
                let myTimeFinish = item.timeFinish.split(':');
                let top = Number(myTimeStart[0]) * 60 + Number(myTimeStart[1]);
                let myTimeFinishInMinutes = Number(myTimeFinish[0]) * 60 + Number(myTimeFinish[1]);
                let timeDiff = Math.abs(top - myTimeFinishInMinutes)
                const currentTime = moment().format("YYYYMMDDHHmm");
                const eventDate = `${item.date.replace(/-/g, "")}${item.timeStart.replace(':', "")}`;
                const expired = Number(currentTime) > Number(eventDate);
                const classSecond = expired ? 'task task-check' : 'task';

                return (<>
                    <div className={classSecond}
                        onContextMenu={this.showDelete}
                        style={{
                            height: timeDiff,
                            top: top,
                        }} >
                        <OutsideClickHandler
                            disabled={!this.state.outsideClick}
                            onOutsideClick={() => {
                                this.onOutsideClick();
                            }}
                        >
                            {this.state.outsideClick && <button
                                className='button-event-delete' onClick={() => onDelete(item.id)}>
                                <i className="fa fa-trash" aria-hidden="true"></i>
                                <span style={{ margin: "10px" }}>Delete</span>
                            </button>} </OutsideClickHandler>
                        <span>{item.title}</span>
                        <div className='time-of-task'>{`${item.timeStart} - ${item.timeFinish} `}</div>
                    </div>
                </>
                )
            })
        }
        </>
        )
    }
}








export default Event
