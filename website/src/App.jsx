
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HomePage from '@/pages/HomePage';
import JobDetailsPage from '@/pages/JobDetailsPage';
import AboutPage from '@/pages/AboutPage';
import ContactPage from '@/pages/ContactPage';
import PrivacyPolicyPage from '@/pages/PrivacyPolicyPage';
import TermsPage from '@/pages/TermsPage';
import DisclaimerPage from '@/pages/DisclaimerPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white">
        <Helmet>
          <title>JobHub - Find Your Dream Job</title>
          <meta name="description" content="Discover thousands of job opportunities across various industries. Find your perfect career match with JobHub - the leading job search platform." />
          <meta name="keywords" content="jobs, careers, employment, job search, hiring, recruitment" />
          <meta name="author" content="JobHub" />
          <meta property="og:title" content="JobHub - Find Your Dream Job" />
          <meta property="og:description" content="Discover thousands of job opportunities across various industries." />
          <meta property="og:type" content="website" />
          <link rel="canonical" href="https://jobhub.com" />
        </Helmet>
        
        <Header />
        
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/job/:id" element={<JobDetailsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/disclaimer" element={<DisclaimerPage />} />
          </Routes>
        </main>
        
        <Footer />
        <Toaster />
      </div>
    </Router>
  );
}

export default App;
