import './App.css';
import { useState } from 'react';
import Title from './components/Title';
import Modal from './components/Modal';
import EventList from './components/EventList';

function App() {
  // Can only use hooks on the top level of a component (exception/customhooks)
  const [showModal, setShowModal] = useState(false);
  const [showEvents, setShowEvents] = useState(true);
  const [name, setName] = useState('Mario');
  const [events, setEvents] = useState([
    { title: "Mario's Bday", id: 1 },
    { title: "Bowser's Bday", id: 2 },
    { title: "Luigi's Bday", id: 3 },
  ]);

  // console.log(showModal);

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
        <Modal close={handleClose}>
          <h2>10% Off Coupon Code</h2>
          <p>Use the code QWERTY10 at checkout</p>
        </Modal>
      )}
    </div>
  );
}

export default App;
