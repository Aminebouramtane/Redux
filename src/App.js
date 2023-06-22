import './App.css';
import { useDispatch,useSelector } from 'react-redux';
import { Action,increment,decrement } from './Redux/Action/Action';


function App() {
  const my_val  = useSelector(state=>state.value);
  const my_val_counter  = useSelector(state=>state.counter);
  console.log(my_val_counter);
  console.log(my_val);
  const dispatch = useDispatch();

  const AddChar = ()=>{
    dispatch(
      {
        type:Action
      }
    )
  }
  const AddOne = ()=>{
    dispatch(
      {
        type:increment
      }
    )
  }
  const MinsOne = ()=>{
    dispatch(
      {
        type:decrement
      }
    )
  }
  return (
    <div className="App">
      <h1>{my_val}</h1>
      <button onClick={AddChar}>Dispatch</button>
      <hr/>
      <h1>{my_val_counter}</h1>
      <button onClick={AddOne}>+</button>
      <button onClick={MinsOne}>-</button>
    </div>
  );
}

export default App;
