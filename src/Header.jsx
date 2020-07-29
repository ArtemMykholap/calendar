import React, { Component } from 'react';
import moment from 'moment';



const Header = ({ goNext, goPrev, returnToday }) => {


    return (
        <>
            <div className="header">
                <div className=" navigation-container">
                    <button className="navigation create-button"><i className="fa fa-plus"
                        aria-hidden="true"></i><span
                            className='button-text'>Создать</span></button>
                    <button className="navigation today-button" onClick={returnToday}><span className='button-text'> Сегодня</span></button>
                    <button className="navigation toggle-left" onClick={goPrev}><i className="fas fa-chevron-left"></i></button>
                    <button className="navigation toggle-right" onClick={goNext}><i className="fas fa-chevron-right"></i></button>
                    <span className="navigation text-month">Янв - февр</span>
                </div>
            </div>
        </>
    )
}

export default Header
