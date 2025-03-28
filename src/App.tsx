import { Route, BrowserRouter as Router, Routes } from "react-router";
import "./App.scss";
import DetailsPage from "./pages/DetailsPage";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage type="login" />} />
        <Route path="/signup" element={<LoginPage type="signup" />} />
        <Route path="/details/:id" element={<DetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
