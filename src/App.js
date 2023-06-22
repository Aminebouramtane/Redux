import './App.css';
import { useDispatch,useSelector } from 'react-redux';
import { Action } from './Redux/Action/Action';


function App() {
  const my_val  = useSelector(state=>state.value);
  console.log(my_val);
  return (
    <div className="App">

    </div>
  );
}

export default App;
