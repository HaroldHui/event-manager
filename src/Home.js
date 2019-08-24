import React, { Component } from 'react';
import axios from 'axios';
import Dropdown from './Dropdown';
import { BrowserRouter as Router } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import AddEvent from './AddEvent';
import Events from './Events';
import Enrollments from './Enrollments';
import EventManager from './EventManager';
import userService from './services/userService';


class Home extends Component {

  async componentDidMount() {
    const res = await userService.fetchUers();
    this.setState({
      users: res.data.data.users,
    });
  }

  state = {
    isUserSelected: false,
  }

  // getEvents = _ => {
  //   fetch('http://localhost:4000/product')
  //   .then(response => response.json())
  //   .then(response => this.setState({ events: response.data}))
  //   .catch(err => console.error(err))
  // }

  onClickUser = (id) => {
    const user = this.state.users.filter(user => {
      return user.id === id;
    })[0];
    this.setState({
      user: user
    })
    this.setState({ isUserSelected: true });
  }
  render() {
    return (
      <div className="event-manager container">
        <h1 className="center blue-text">Event Manager!</h1>
        <Dropdown users={this.state.users} onClickUser={this.onClickUser} />
        {this.state.isUserSelected ? (
          <EventManager user={this.state.user} />
        ) : (
            null
          )}
      </div>
    )
  }
}

export default Home;
