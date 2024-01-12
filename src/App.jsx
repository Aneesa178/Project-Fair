
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Project from './pages/Project';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Auth from './pages/Auth';
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Auth />}/>
        <Route path='/register' element={<Auth register={"register"}/>}/>
        <Route path='/project' element={<Project />}/>
        <Route path='/dashboard' element={<Dashboard />}/>
        
          
      </Routes>

      <Footer />


    </div>
  );
}

export default App;
