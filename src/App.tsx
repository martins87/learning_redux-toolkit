import Button from '@material-ui/core/Button';
// import { useDispatch, useSelector } from 'react-redux';

import './App.css';
import { increment, decrement, incrementByAmount } from './state/counterSlice';
import { useAppDispatch, useAppSelector } from './hooks';

// interface StateProps {
//   counter: {
//     count: number
//   }
// }

const App = () => {
  // const { count } = useSelector((state: StateProps) => {
  // No need for state props type anymore
  const { count } = useAppSelector((state) => {
    console.log('State:', state);
    return state.counter;
  });
  // const dispatch = useDispatch();
  const dispatch = useAppDispatch();

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Counter: <span style={{color:"yellow"}}>{count}</span>
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
