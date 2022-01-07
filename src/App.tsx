import MoreButton from './MoreButton';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
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
