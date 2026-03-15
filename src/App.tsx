import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Experience from './pages/Experience';
import ListingDetail from './pages/ListingDetail';
import Login from './pages/Login';
import Servicii from './pages/Servicii';
import Contact from './pages/Contact';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listing/:id" element={<ListingDetail />} />
        <Route path='/experience' element={<Experience />} />
        <Route path='/servicii' element={<Servicii />} />
        <Route path='/login' element={<Login />} />
        <Route path='/contact' element={<Contact />} />  
      </Routes>
    </BrowserRouter>
    );
}

export default App;
