import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SquadBuilder from './components/SquadBuilder';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/squad" element={<SquadBuilder />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
