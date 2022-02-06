import './App.css';
import { useState } from 'react';

function App() {
  const [showEvents, setShowEvents] = useState(true);
  const [name, setName] = useState('Mario');
  const [events, setEvents] = useState([
    { title: "Mario's Bday", id: 1 },
    { title: "Bowser's Bday", id: 2 },
    { title: "Luigi's Bday", id: 3 },
  ]);

  // Function for clickEvent
  const clickEvent = () => {
    setName('Luigi');
  };

  // Handle delete event click
  const handleClick = (id) => {
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => event.id !== id);
    });
  };

  return (
    <div className="App">
      <h1>My name is {name}</h1>
      <button onClick={() => setShowEvents(false)}>Hide Events</button>
      <button onClick={() => setShowEvents(true)}>Show Events</button>

      <button onClick={clickEvent}>Change Name</button>
      {showEvents &&
        events.map((event, index) => (
          <div key={event.id}>
            <h2>
              {index} - {event.title}
            </h2>
            <button onClick={() => handleClick(event.id)}>delete event</button>
          </div>
        ))}
    </div>
  );
}

export default App;
