import React, { Component } from 'react';
import Day from './Day'

class Week extends Component{

render(){

const { days,tasks }=this.props
    return (
        <>
            {days.map(day => <Day key={day} dataId={day} tasks={tasks}/>)}
        </>
    )
}}

export default Week

