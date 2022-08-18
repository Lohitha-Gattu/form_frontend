import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import {Form} from './pages/Form';
import {Details} from './pages/Details';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Form/>}/>
      <Route path="/details" element={<Details/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
