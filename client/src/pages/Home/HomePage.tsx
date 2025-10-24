import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

// Components
import HeroSection from './components/HeroSection';
import LoanCalculator from './components/LoanCalculator';
import ServicesOverview from './components/ServicesOverview';
import TestimonialsSection from './components/TestimonialsSection';
import StatsSection from './components/StatsSection';
import CTASection from './components/CTASection';
import NewsSection from './components/NewsSection';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/loan-application');
  };

  return (
    <>
      <Helmet>
        <title>Shinhan Finance Vietnam - Dịch vụ tài chính uy tín</title>
        <meta 
          name="description" 
          content="Shinhan Finance cung cấp các sản phẩm tài chính đa dạng: vay tín chấp, vay thế chấp, vay mua nhà, vay mua xe với lãi suất cạnh tranh và thủ tục đơn giản." 
        />
        <meta name="keywords" content="Shinhan Finance, vay tín chấp, vay thế chấp, vay mua nhà, vay mua xe, tài chính, ngân hàng" />
        <meta property="og:title" content="Shinhan Finance Vietnam - Dịch vụ tài chính uy tín" />
        <meta property="og:description" content="Shinhan Finance cung cấp các sản phẩm tài chính đa dạng với lãi suất cạnh tranh và thủ tục đơn giản." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://shinhanfinance.com.vn" />
      </Helmet>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen"
      >
        {/* Hero Section */}
        <HeroSection onGetStarted={handleGetStarted} />

        {/* Loan Calculator */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <LoanCalculator />
            </motion.div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <ServicesOverview />
            </motion.div>
          </div>
        </section>

        {/* Statistics */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <StatsSection />
            </motion.div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <TestimonialsSection />
            </motion.div>
          </div>
        </section>

        {/* News & Updates */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <NewsSection />
            </motion.div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <CTASection onGetStarted={handleGetStarted} />
            </motion.div>
          </div>
        </section>
      </motion.div>
    </>
  );
};

export default HomePage;
