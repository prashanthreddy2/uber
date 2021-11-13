import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Search from './components/Search';
import Confirm from './components/Confirm';
function App() {
  return (
    <div className="App">
      <Routes>  
        <Route path="/" element={<Home />} />
        <Route path="/Search" element={<Search />} /> 
        <Route path="/Confirm/:pickup" element={<Confirm/>}/>
      </Routes>
    </div>
  );
}

export default App;
