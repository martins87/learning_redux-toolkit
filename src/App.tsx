import Button from '@material-ui/core/Button';
import { makeStyles, Theme } from '@material-ui/core/styles';
// import { useDispatch, useSelector } from 'react-redux';

import './App.css';
import { increment, decrement, incrementByAmount } from './state/counterSlice';
import { useAppDispatch, useAppSelector } from './hooks';

// We can also create a separate file (e.g. theme.ts) and have every styles in there
const useStyles = makeStyles((theme: Theme) => ({
  count: {
    color: 'yellow'
  },
  app: {
    textAlign: 'center'
  },
  button: {
    margin: '4px !important'
  }
}));

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
  const classes = useStyles();

  return (
    <div className={classes.app}>
      <header className="App-header">
        <p>
          Counter: <span className={classes.count}>{count}</span>
        </p>
        <div>
          <Button variant="contained" className={classes.button} onClick={() => dispatch(increment())}>Increment</Button>
          <Button variant="contained" className={classes.button} onClick={() => dispatch(decrement())}>Decrement</Button>
          <Button variant="contained" className={classes.button} onClick={() => dispatch(incrementByAmount(10))}>Increment by 10</Button>
        </div>
      </header>
    </div>
  );
}

export default App;
