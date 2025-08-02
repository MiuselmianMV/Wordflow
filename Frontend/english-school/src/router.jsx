import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NavBar from './components/NavBar';
import LoginPage from './pages/LoginPage';
import Register from './pages/Register';
import Profile from './pages/Profile';
import ProtectedRoute from './components/ProtectedRoute';
import Footer from './components/Footer'; 
export default function Router() {
  return (
    <BrowserRouter className="flex flex-col min-h-screen">
      <NavBar />
      <Routes className="flex-grow">
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={
                                          <ProtectedRoute>
                                            <Profile />
                                          </ProtectedRoute>
                                       }
         />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
