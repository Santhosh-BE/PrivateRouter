import './App.css';
import Home from './Pages/Home';
import Dashboard from './Pages/Dashboard';
import Profile from './Pages/Profile';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Protected from './Protected';
function App() {
  const [islogged, setIsLogged] = useState(false);
  return (
    <div className="Container-fluid">
      <Router>
        <ul className='topnav'>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Dashboard">About</Link>
          </li>
          <li>
            <Link to="/Profile">Profile</Link>
          </li>
          <button className='button1' onClick={() => setIsLogged(true)}>Login</button>
      <button className='button2' onClick={() => setIsLogged(false)}>Logout</button>
        </ul>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='Dashboard' element={<Dashboard />} />
          <Route element={<Protected isLogged={islogged} />}>
            <Route path='Profile' element={<Profile />} />
          </Route>
        </Routes>
      </Router>
      
      
    </div>
  );
}
export default App;