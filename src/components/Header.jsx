import React from 'react';

const Header = ({ goNext, goPrev, returnToday, nameMonthFirstDay, nameMonthLastDay, showForm }) => {
    return (

                <div className=" header">
                    <button className="header__button_create" onClick={showForm}>
                        <i className="fa fa-plus" aria-hidden="true">
                        </i><span >Create</span>
                    </button>
                    <button className="header__button_today" onClick={returnToday}><span className='button-text'> Today</span></button>
                    <button className="header__toggle-left" onClick={goPrev}><i className="fas fa-chevron-left"></i></button>
                    <button className="header__toggle-right" onClick={goNext}><i className="fas fa-chevron-right"></i></button>
                    <span className="header__text-month">
                        {nameMonthFirstDay === nameMonthLastDay
                            ? nameMonthFirstDay
                            : `${nameMonthFirstDay} - ${nameMonthLastDay}`
                        }
                    </span>
                </div>

    )
}

export default Header
