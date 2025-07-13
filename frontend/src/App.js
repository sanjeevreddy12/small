import Home from './pages/Home';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={}></Route>
      <Route path = '/user' element={}>
      </Route>
      <Route path= '/admin' element></Route>
    </Routes>
    </BrowserRouter>

   
  );
}

export default App; 