import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { useDispatch, useSelector } from 'react-redux';

import './App.css';
import { increment, decrement, incrementByAmount } from './redux/counterSlice';

interface StateProps {
  counter: {
    count: number
  }
}

const App = () => {
  // const [count, setCount] = useState<number>(0);
  const { count } = useSelector((state: StateProps) => {
    console.log('State:', state);
    return state.counter;
  });
  const dispatch = useDispatch();

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Counter: {count}
        </p>
        <div>
          <Button variant="contained" className="mui-btn" onClick={() => dispatch(increment())}>Increment</Button>
          <Button variant="contained" className="mui-btn" onClick={() => dispatch(decrement())}>Decrement</Button>
          <Button variant="contained" className="mui-btn" onClick={() => dispatch(incrementByAmount(10))}>Increment by 10</Button>
        </div>
      </header>
    </div>
  );
}

export default App;
