import React from 'react';

export default function EventList({ events, handleClick }) {
  return events.map((event, index) => (
    <div key={event.id}>
      <h2>
        {index} - {event.title}
        <button onClick={() => handleClick(event.id)}>Delete</button>
      </h2>
    </div>
  ));
}
