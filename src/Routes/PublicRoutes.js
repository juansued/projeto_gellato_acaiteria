import { Routes, Route } from 'react-router-dom';

import HomePage from '../components/screens/Home_Page/HomePage';
import LoginPage from '../components/screens/Login_Page/Login_Page';
import RegisterPage from '../components/screens/Register_Page/RegisterPage';
import Cart from '../components/shared/Cart';

const PublicRoutes = () => (
  <Routes>
    <Route path="/home" element={<HomePage />} />
    <Route path="/sign-in" element={<LoginPage />} />
    <Route path="/sign-up" element={<RegisterPage />} />
    <Route path="/" element={<Cart />} />
  </Routes>
);

export default PublicRoutes;
