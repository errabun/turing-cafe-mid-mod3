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

  postReservation = (resyDetails) => {
    fetch('http://localhost:3001/api/v1/reservations', {
      method: 'POST',
      body: JSON.stringify(resyDetails),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => response.json())
      .then(resy => this.setState({ reservations: [...this.state.reservations, resy] }))
      .catch(error => console.log(error))
  }

  addResy = (newResy) => {
    this.setState({ reservations: [...this.state.reservations, newResy] })
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
