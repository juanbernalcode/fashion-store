import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

import Dataprovider from './context/DataContext';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import NavBar from './components/NavBar';
import ProductDetail from './components/ProductDetail';

const App = () => {
    return (
        <Dataprovider>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/productDetail/:id" element={<ProductDetail />} />
                </Routes>
            </BrowserRouter>
        </Dataprovider>
    )
}

export default App
