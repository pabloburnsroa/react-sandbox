import './App.css';
import { useState } from 'react';

function App() {
  const [name, setName] = useState('Mario');
  const clickEvent = () => {
    setName('Luigi');
  };
  return (
    <div className="App">
      <h1>My name is {name}</h1>
      <button onClick={clickEvent}>Change Name</button>
    </div>
  );
}

export default App;
