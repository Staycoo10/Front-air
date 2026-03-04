import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import Adventures from './pages/Adventures';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/experience' element={<Experience />} />
        <Route path='/aventuri' element={<Adventures />} />
      </Routes>
    </BrowserRouter>
    );
}

export default App;
