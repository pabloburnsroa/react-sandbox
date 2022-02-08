import './App.css';
import { useState } from 'react';
import Title from './components/Title';
import Modal from './components/Modal';
import EventList from './components/EventList';
import NewEventForm from './components/NewEventForm';

function App() {
  // Can only use hooks on the top level of a component (exception/customhooks)
  const [showModal, setShowModal] = useState(false);
  const [showEvents, setShowEvents] = useState(true);
  const [name, setName] = useState('Mario');
  const [events, setEvents] = useState([]);
  

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

  // Handle modal
  const handleOpen = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  // Add event
  const addEvent = (event) => {
    setEvents((prevEvents) => {
      return [...prevEvents, event];
    });
    setShowModal(false);
  };

  // Passing props to child components
  const subtitle = 'All the latest events in Marioland';

  return (
    <div className="App">
      <Title title="Events in Your Area" subtitle={subtitle} />

      <h1>My name is {name}</h1>

      <button onClick={clickEvent}>Change Name</button>
      <button onClick={handleOpen}>Show Modal</button>
      {showEvents && (
        <button onClick={() => setShowEvents(false)}>Hide Events</button>
      )}
      {!showEvents && (
        <button onClick={() => setShowEvents(true)}>Show Events</button>
      )}

      {showEvents && <EventList handleClick={handleClick} events={events} />}

      {showModal && (
        <Modal close={handleClose} isSalesModal={false}>
          <NewEventForm addEvent={addEvent} />
        </Modal>
      )}
    </div>
  );
}

export default App;
