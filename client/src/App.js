import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './Components/Form/Login';
import Signup from './Components/Form/Signup';
import Navbar from './Components/Navbar/Navbar';


function App() {
  return (
    <div className="container">
        <BrowserRouter>
            <Routes>
              <Route path='/' element={<Login/>}/>
              <Route path='/signup' element={<Signup/>}/>
              <Route path='/Navbar' element={<Navbar/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
