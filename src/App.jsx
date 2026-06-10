import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Cursor from './components/Cursor';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Lazy loading pages for performance optimization
const Home = lazy(() => import('./pages/Home'));
const News = lazy(() => import('./pages/News'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Welcome = lazy(() => import('./pages/Welcome'));
import './App.css';

function App() {
  return (
    <Router>
      <Cursor />
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Suspense fallback={<div className="loading-spinner">Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/news" element={<News />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/welcome" element={<Welcome />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
