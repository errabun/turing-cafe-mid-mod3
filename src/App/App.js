import React, { Component } from 'react';
import Reservations from '../Reservations/Reservations'
import Form from '../Form/Form'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      reservations: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/v1/reservations')
      .then(response => response.json())
      .then(reservations => this.setState({ reservations: reservations }))
      .catch(error => console.log(error))
  }

  addResy = (newResy) => {
    fetch('http://localhost:3001/api/v1/reservations', {
      method: 'POST',
      body: JSON.stringify(newResy),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => response.json())
      .then(resy => this.setState({ reservations: [...this.state.reservations, newResy] }))
      .catch(error => console.log(error))
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form addResy={this.addResy} />
        </div>
        <div className='resy-container'>
          <Reservations reservations={this.state.reservations} />
        </div>
      </div>
    )
  }
}

export default App;
