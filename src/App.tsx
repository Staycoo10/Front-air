import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Adventures from './pages/Adventures';
import ListingDetail from './pages/ListingDetail';
import SignUp from './pages/SingUp';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listing/:id" element={<ListingDetail />} />
        <Route path='/aventuri' element={<Adventures />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </BrowserRouter>
    );
}

export default App;
