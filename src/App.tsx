// import MoreButton from './MoreButton';
import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import DetailsPage from './pages/DetailsPage';
import TestingPage from './pages/TestingPage';
// import { compressToUTF16, decompressFromUTF16 } from 'lz-string';

export type User = {
  name: string;
  email: string;
  token: string;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage type='login'/>} />
        <Route path="/signup" element={<LoginPage type='signup'/>} />
        <Route path="/details/:id" element={<DetailsPage />} />
        <Route path="/testing" element={<TestingPage />} />
      </Routes>
    </Router>

  );
}

export default App;
