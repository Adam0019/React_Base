import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";

function App() {
  //const [count, setCount] = useState(0)
  let [counter, setCount] = useState(0);
  //let counter = 0;
  const ADD_value = () => {
    if (counter < 20) {
      setCount(counter + 1);
    }
  };
  const REMOVE_value = () => {
    if (counter > 0) {
      setCount(counter - 1);
    }
  };

  return (
    <>
      <h1>Ani code</h1>
      <h2>counter value: {counter}</h2>

      <button onClick={ADD_value}>ADD VALUE {counter} </button>
      <br />
      <button onClick={REMOVE_value}>REMOVE VALUE {counter} </button>
    </>
  );
}

export default App;
