import React, { Component } from 'react'
import './Form.css'

class Form extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      date: '',
      time: '',
      number: null
    }
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  makeReservation = event => {
    event.preventDefault()
    const newResy = {
      id: Date.now(),
      ...this.state
    }
    this.props.addResy(newResy)
    this.clearInputs()
  }

  clearInputs = () => {
    this.setState({
      name: '',
      date: '',
      time: '',
      number: null
    })
  }

  render() {
    return (
      <>
        <input
          type='text'
          name='name'
          placeholder='Name'
          value={this.state.name}
          onChange={event => this.handleChange(event)}
        />

        <input
          type='text'
          name='date'
          placeholder='Date'
          value={this.state.date}
          onChange={event => this.handleChange(event)}
        />

        <input
          type='text'
          name='time'
          placeholder='Time'
          value={this.state.time}
          onChange={event => this.handleChange(event)}
        />

        <input
          type='number'
          name='number'
          placeholder='Number of Guests'
          value={this.state.number}
          onChange={event => this.handleChange(event)}
        />

        <button onClick={event => this.makeReservation(event)}>Make Reservation</button>
      </>
    )
  }
}

export default Form
