import React, { Component } from 'react';
import App from './App'

// +задать пустой стейт для инпутов
// +Передать данные инпутов в объект сабмитом
// +Добавить в массив объектов событий
// перерендерить отрисовку событий

class ModalForm extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            description: '',
            timeStart: '',
            timeFinish: '',
            date: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    render() {

        const { isOpen, onClose, handleSubmit } = this.props
        if (!isOpen) { return null }
        return (<>
            <form onSubmit={(e) => this.handleSubmit(e)} className="modal-form">
                <button className='modal-from__button-close'
                    onClick={onClose}>
                    <i className="fa fa-times" aria-hidden="true"></i>
                </button>
                <input autoComplete="off"
                    value={this.state.value}
                    onSelect={this.handleChange}
                    type='text' name='title'
                    className='modal-form__title' />
                <div className='modal-form__line'></div>
                <label className='data'>
                    <i className="fa fa-clock-o" aria-hidden="true"></i>
                    <input onChange={this.handleChange}
                        value={this.state.value}
                        type="date" id="date" name='date' />
                    <input onChange={this.handleChange}
                        value={this.state.value}
                        type="time" id="timeStart" name='timeStart' />
                    <input onChange={this.handleChange}
                        value={this.state.value}
                        type="time" id="'timeFinish" name='timeFinish' />
                </label>
                <label className='description'>
                    <i className="fa fa-bars" aria-hidden="true"></i>
                    <textarea
                        className='text-modal'
                        name='description'
                        placeholder="Дополнительное описание"
                        onChange={this.handleChange}
                        description={this.state.description}>
                    </textarea>
                </label>
                <input
                    type='submit'
                    value='Сохранить'
                    className='button-save'
                />

            </form>
            <App />
        </>


        )
    }
}
export default ModalForm



