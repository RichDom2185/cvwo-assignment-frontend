import MoreButton from './MoreButton';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import DetailsPage from './pages/DetailsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/details" element={<DetailsPage />} />
      </Routes>
    </Router>
    // <div className="App">
    //   <Header />
    //   <MoreButton />
    //   <header className="App-header">
    //     <img src="https://source.unsplash.com/random" className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save this file to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

  );
}

export default App;
