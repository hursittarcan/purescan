import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SplashScreen from './components/SplashScreen';
import Home from './pages/Home';
import ScannerPage from './pages/ScannerPage';

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<SplashScreen />} />
                <Route path="/home" element={<Home />} />
                <Route path="/scanner" element={<ScannerPage />} />
            </Routes>
        </Router>
    );
};

export default App;
