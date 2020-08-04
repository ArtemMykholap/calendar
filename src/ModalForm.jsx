import React, { Component } from 'react';
import App from './App'

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
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        this.props.onClose()
        // this.props.tasks.push({
        //     text: this.state.title,
        //     description: this.state.description,
        //     timeStart: this.state.timeStart,
        //     timeFinish: this.state.timeFinish,
        //     date: this.state.date
        // })

        event.preventDefault();
    }


    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    render() {
        const { isOpen, onClose } = this.props
        if (!isOpen) { return null }

        return (<>
            <form onSubmit={this.handleSubmit} className="modal-form">
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
            <App  />
        </>


        )
    }
}
export default ModalForm



