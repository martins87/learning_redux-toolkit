import React, { useState } from 'react';
import Button from '@material-ui/core/Button';

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
          <Button variant="contained" className="mui-btn" onClick={() => {setCounter(counter + 1)}}>Increment</Button>
          <Button variant="contained" className="mui-btn" onClick={() => {setCounter(counter - 1)}}>Decrement</Button>
        </div>
      </header>
    </div>
  );
}

export default App;
