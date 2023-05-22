import { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <MovieCount></MovieCount>
    </div>
  );
}


function MovieCount() {
  const [count, setCount] = useState(5);
  const HandleClick = () => setCount(count + 1);
  const HandleClick2 = () => setCount(count - 1);
  return (
    <div>
      <h3>Total movie : {count}</h3>
      <button onClick={HandleClick}>Add Movie</button>
      <button onClick={HandleClick2}> Remove Movie</button>
    </div>
  )
}

export default App;
