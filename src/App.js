import logo from './logo.svg';
import './App.css';
import { NavBar } from './Componats/NavBar';
import {Banner} from './Componats/Banner'
import { Skills } from './Componats/Skills';
import { Projects } from './Componats/Projects';


import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar /> 
      <Banner/>
      <Skills/>
      <Projects/>
    </div>
  );
}

export default App;
