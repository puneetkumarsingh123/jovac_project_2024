import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import FrontPage from './pages/frontpage/frontpage';
import Login from './pages/frontpage/login';
import SignUp from './pages/frontpage/signup';
import HomePage from './pages/home/homepage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
