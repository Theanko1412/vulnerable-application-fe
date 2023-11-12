import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import BankUsers from './components/BankUsers';
import GoogleSearch from './components/GoogleSearch';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Header />
      </div>
      <div style={{ paddingBottom: '80px' }}>
        <Routes>
          <Route path="/sde" element={<BankUsers />} />
          <Route path="/xss" element={<GoogleSearch />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
