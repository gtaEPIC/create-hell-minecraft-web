import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Rules from './pages/Rules';
import Guide from './pages/Guide';
import Downloads from './pages/Downloads';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/guide" element={<Guide />} />
        <Route path="/downloads" element={<Downloads />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
