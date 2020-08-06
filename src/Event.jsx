import React, { Component } from 'react';
import moment from 'moment';
import OutsideClickHandler from 'react-outside-click-handler';
import PropTypes from 'prop-types';



class Event extends Component {

    state = {
        isOpen: false,
    disabled:PropTypes.false
    }

    onOutsideClick = () => {
        this.setState({
            isOpen: false


        });
    }

    showDelete = (event) => {
        event.preventDefault();
        this.setState({
            isOpen: true,
            disabled:PropTypes.true
           
        })
    }

    render() {
        const { top, height, title, date, timeStart, timeFinish } = this.props;
        const currentTime = moment().format("YYYYMMDDHHmm");
        const eventDate = `${date.replace(/-/g, "")}${timeStart.replace(':', "")}`;
        const expired = Number(currentTime) > Number(eventDate);
        const classSecond = expired ? 'task task-check' : 'task';
        return (<>
            <div className={classSecond}
                onContextMenu={this.showDelete}
                style={{
                    height: height,
                    top: top,
                }} >

                <OutsideClickHandler
                disabled={!this.state.isOpen}
                    onOutsideClick={() => {
                        this.onOutsideClick(); console.log('1');
                    }}
                >
                    {this.state.isOpen && <button
                        className='button-event-delete'>
                        <i className="fa fa-trash" aria-hidden="true"></i>
                        <span style={{ margin: "10px" }}>Delete</span>
                    </button>} </OutsideClickHandler>
                <span>{title}</span>
                <div className='time-of-task'>{`${timeStart} - ${timeFinish} `}</div>
            </div>
        </>
        )
    }
}
export default Event
