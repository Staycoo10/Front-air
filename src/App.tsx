import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Experience from './pages/Experience';
import ListingDetail from './pages/ListingDetail';
import SignUp from './pages/SingUp';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listing/:id" element={<ListingDetail />} />
        <Route path='/experience' element={<Experience />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </BrowserRouter>
    );
}

export default App;
