import './App.css';
import {
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'

import Home from './pages/Home';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Navigate to='/signin' />} />
      <Route path='/:type' element={<Home />} />
    </Routes>
    

     
    </>
  );
}


export default App;
