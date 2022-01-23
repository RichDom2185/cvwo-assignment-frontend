import MoreButton from './MoreButton';
import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import DetailsPage from './pages/DetailsPage';
import TestingPage from './pages/TestingPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/details" element={<DetailsPage />} />
        <Route path="/testing" element={<TestingPage />} />
      </Routes>
    </Router>

  );
}

export default App;
