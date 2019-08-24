import React from 'react';
import Dropdown from './Dropdown';

const Events = ({ events, deleteEvent, enrollEvent, user }) => {
  const eventList = events.length ? (
    events.map(event => {
      const users = event.enrollments.map(enrollment => enrollment.user);
      return (
        <div className="collection-item" key={event.id}>
          <span>Name: {event.eventName}</span>
          <span>EventInfo: {event.category}</span>
          <span>Date: {event.eventDate}</span>
          <span>EventInfo: {event.eventInfo}</span>
          <span>Date: {event.cost}</span>
          {user.privilegeLevel === 0 ? (

            <React.Fragment>
              <button onClick={() => { deleteEvent(event.id) }}>Delete event</button>
              <Dropdown users={users} onClickUser={() => { }} />
            </React.Fragment>
          ) : users.map(eventUser => eventUser.id).includes(user.id) ? (<label>Joined!</label>) : (
            <button onClick={() => { enrollEvent(user.id, event.id) }}>Join event</button>
          )}

        </div>
      );

    })
  ) : (
      <p>You have no events left.</p>
    )
  return (
    <div className="events collection">
      {eventList}
    </div>
  )
}

export default Events

