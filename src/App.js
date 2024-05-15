import logo from './logo.svg';
import './App.css';
import { NavBar } from './Componats/NavBar';
import {Banner} from './Componats/Banner'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar /> 
      <Banner/>
    </div>
  );
}

export default App;
