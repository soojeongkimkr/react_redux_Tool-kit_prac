import './App.css';

import {useDispatch, useSelector} from 'react-redux';
// import {changeName} from './redux/modules/cat'
import {changeName} from './redux/modules/catSlice'

function App() {
  const cat = useSelector(state => state.cat)
  console.log(cat)
  const dispatch = useDispatch();

  return (
    <div className="App">
      <p>name::::{cat.name}</p>
      <button onClick={()=>{
         dispatch(changeName('루비'))
      }}>이름바꾸기</button>
    </div>
  );
}

export default App;
