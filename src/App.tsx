import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import Adventures from './pages/Adventures';
import ListingDetail from './pages/ListingDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/experience' element={<Experience />} />
        <Route path="/listing/:id" element={<ListingDetail />} />
        <Route path='/aventuri' element={<Adventures />} />
      </Routes>
    </BrowserRouter>
    );
}

export default App;
