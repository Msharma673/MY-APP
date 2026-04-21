import React from 'react';
import LoginSignup from '../../components/LoginSignup/LoginSignup';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';

const LoginPage = () => {
  return (
    <div className="blog-page">
      <NavBar />
      <LoginSignup />
      <Footer />
      
    </div>
  );
};

export default LoginPage;