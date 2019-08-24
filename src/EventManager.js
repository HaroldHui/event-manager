import React, { Component } from 'react';
import axios from 'axios';
import AddEvent from './AddEvent';
import Events from './Events';
import Enrollments from './Enrollments';
import { tsConstructorType } from '@babel/types';
import eventService from './services/eventService';
import { async } from 'q';

const ORGANIZER_ROLE = 0

class EventManager extends Component {

  constructor(props) {
    super(props);
    // Assign state itself, and a default value for items
    this.state = {
      events: [],
    }
  }
  async componentDidMount() {
    await this.fetchEvents();
  }

  fetchEvents = async () => {
    const res = await eventService.fetchEvents();
    this.setState({
      events: res.data.data.events,
    });
  }

  addEvent = async (event) => {
    await eventService.createEvent(event, this.props.user.id);
    await this.fetchEvents();
  }

  deleteEvent = async (id) => {
    await eventService.deleteEvent(id);
    await this.fetchEvents();
  }
  enrollEvent = async (userId, eventId) => {
    await eventService.enrollEvent(userId, eventId);
    await this.fetchEvents();
  }

  render() {
    console.log(this.props.user)

    return this.props.user.privilegeLevel === ORGANIZER_ROLE ? (
      <div className="event-manager container">
        <React.Fragment>
          <Events enrollEvent={this.enrollEvent} deleteEvent={this.deleteEvent}
            events={this.state.events} user={this.props.user} />
          <AddEvent addEvent={this.addEvent} />
        </React.Fragment>
      </div>
    ) : (
        <div className="event-manager container">
          <Events enrollEvent={this.enrollEvent} deleteEvent={this.deleteEvent}
            events={this.state.events} user={this.props.user} />
        </div>
      )
  }



}


export default EventManager;
