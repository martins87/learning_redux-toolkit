import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [counter, setCounter] = useState<number>(0);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Counter: {counter}
        </p>
        <div>
          <button className="btn" onClick={() => setCounter(counter + 1)}>Increment</button>
          <button className="btn" onClick={() => setCounter(counter - 1)}>Decrement</button>
        </div>
      </header>
    </div>
  );
}

export default App;
