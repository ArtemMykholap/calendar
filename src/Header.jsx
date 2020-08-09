import React from 'react';

const Header = ({ goNext, goPrev, returnToday, nameMonthFirstDay, nameMonthLastDay, showForm }) => {
    return (
        <>
            <div className="header">
                <div className=" navigation-container">
                    <button className="navigation create-button" onClick={showForm}>
                        <i className="fa fa-plus" aria-hidden="true">
                        </i><span className='button-text' >Create</span>
                    </button>
                    <button className="navigation today-button" onClick={returnToday}><span className='button-text'> Today</span></button>
                    <button className="navigation toggle-left" onClick={goPrev}><i className="fas fa-chevron-left"></i></button>
                    <button className="navigation toggle-right" onClick={goNext}><i className="fas fa-chevron-right"></i></button>
                    <span className="navigation text-month">
                        {nameMonthFirstDay === nameMonthLastDay
                            ? nameMonthFirstDay
                            : `${nameMonthFirstDay} - ${nameMonthLastDay}`
                        }
                    </span>
                </div>
            </div>
        </>
    )
}

export default Header
