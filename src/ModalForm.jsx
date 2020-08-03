import React, { Component } from 'react';
import { tasks } from './Event.jsx';

class ModalForm extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            description: '',
            time: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        alert(` shos take ${this.state.title} a takoj ${this.state.description} a takkkoj ${this.state.time}`);
        event.preventDefault();

    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    render() {
        const { isOpen, onClose } = this.props
        if (!isOpen) { return null }

        return (
            <form onSubmit={this.handleSubmit} className="modal-form">
                <button className='modal-from__button-close'
                    onClick={onClose}>
                    <i className="fa fa-times" aria-hidden="true"></i>
                </button>
                <input autoComplete="off"
                    value={this.state.value}
                    onChange={this.handleChange}
                    type='text' name='title'
                    className='modal-form__title' />
                <div className='modal-form__line'></div>
                <label className='data'>
                    <i className="fa fa-clock-o" aria-hidden="true"></i>
                    <input type="date" 
                    />
                    <input onChange={this.handleChange}
                        time={this.state.time} 
                        type="time" id="time" />
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
                <input type='submit' value='Сохранить' className='button-save' />
            </form>
        )
    }
}
export default ModalForm



