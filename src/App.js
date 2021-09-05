import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Rout} from 'react-router-dom';
import Navbar from './components/navegacion/navbar'
function App() {
  
  return (
    
    <div className="App">
      
      <Router>
        <Navbar/>
        </Router>
    </div>
  );
}

export default App;
