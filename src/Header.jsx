import React,{Component} from 'react';
import moment from 'moment';



class Header extends Component  {
    state = {
        currentDate: moment().week(31),
    }


    goNext = () => {
        this.setState({
            currentDate: currentDate.add(1, 'week')
        })
    }


    render(){

    return (
        <>
            <div className="header">
                <div className=" navigation-container">
                    <button className="navigation create-button"><i className="fa fa-plus"
                        aria-hidden="true"></i><span
                            className='button-text'>Создать</span></button>
                    <button className="navigation today-button"><span className='button-text'> Сегодня</span></button>
                    <button className="navigation toggle-left" ><i className="fas fa-chevron-left"></i></button>
                    <button className="navigation toggle-right"  onClick={this.goNext}><i className="fas fa-chevron-right"></i></button>
                    <span className="navigation text-month">Янв - февр 2020</span>
                </div>
            </div>
        </>
    )}
}
export default Header
