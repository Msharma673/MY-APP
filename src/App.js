import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import CoursePage from './pages/CoursePage/CoursePage';
import HomePage from './pages/HomePage/HomePage';
import BlogPostPage from './pages/BlogPostPage/BlogPostPage';
import LoginPage from './pages/LoginPage/LoginPage';
import AboutUsPage from './pages/AboutUsPage/AboutUsPage';
import TeachWithUsFullPage from './pages/TeachWithUsFullPage/TeachWithUsFullPage';
import CourseinnerPage from './pages/CourseInnerPage/CourseinnerPage';
import Loader from './components/Loader/Loader';
import './App.css';
import ScrollToTop from './components/ScrollToTop';
import Maintainance from './components/Maintainance/Maintainance';
import SiteMap from './components/SiteMap/SiteMap';
import QuickLinksPage from './pages/QuickLinksPage/QuickLinksPage';
import { warmupContactBackend } from './utils/contactApi';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    warmupContactBackend();
  }, []);

  useEffect(() => {
      setTimeout(() => {
          setLoading(false);
      }, 1000); 
  }, []);

  return (
    <div className="App">
      {loading ? <div className='loader'><Loader /></div> : (
        <Router>
          <ScrollToTop />
          <Routes>
            <Route exact path='/' element={<HomePage />} />
            <Route path='/courses' element={ <CoursePage />} />
            <Route path='/coursesdata/:courseId' element={ <CourseinnerPage />} />
            <Route path='/blogs' element={<BlogPostPage />} />
            <Route path='/register' element={<LoginPage />} />
            <Route path='/about' element={<AboutUsPage />} />
            <Route path='/career' element={<TeachWithUsFullPage />} />
            <Route path='/maintainance' element={<Maintainance />} />
            <Route path='/sitemap' element={<SiteMap />} />
            <Route path='/quicklinks' element={<QuickLinksPage />} />
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;
