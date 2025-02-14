import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './Pages/Home.js';
import Login from './Pages/Login.js';
import Signup from './Pages/Signup.js';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element = {<Login />} />
        <Route path='signup' element = {<Signup />} />
        <Route path='home' element = { <Home /> } />
      </Routes>
    </div>
  );
}

export default App;
