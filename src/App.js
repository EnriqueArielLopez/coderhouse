import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Counter from './components/Counter'

const App = () => {
  const [count, setCount] = useState(0);


  return (
    <div className="App">
      <header>
        <Navbar valor={count} />


      </header>

      <Counter valor = {count} funcion={setCount}/>

    </div>

  );

}
export default App;
