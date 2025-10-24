import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Clock, Users } from 'lucide-react';

interface HeroSectionProps {
  onGetStarted: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onGetStarted }) => {
  const features = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Bảo mật cao',
      description: 'Hệ thống bảo mật đa lớp, mã hóa SSL 256-bit'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Phê duyệt nhanh',
      description: 'Thời gian phê duyệt chỉ từ 15 phút'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Hỗ trợ 24/7',
      description: 'Đội ngũ chuyên gia tư vấn 24/7'
    }
  ];

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-blue-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%2300468f" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.h1 
                className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Tài chính thông minh
                <span className="block text-blue-600">cho tương lai của bạn</span>
              </motion.h1>
              
              <motion.p 
                className="text-xl text-gray-600 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Shinhan Finance mang đến các giải pháp tài chính toàn diện với lãi suất cạnh tranh, 
                thủ tục đơn giản và hỗ trợ chuyên nghiệp 24/7.
              </motion.p>
            </div>

            {/* Features */}
            <motion.div 
              className="grid sm:grid-cols-3 gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <button
                onClick={onGetStarted}
                className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center space-x-2"
              >
                <span>Bắt đầu ngay</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                Tìm hiểu thêm
              </button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div 
              className="flex items-center space-x-8 pt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">500K+</div>
                <div className="text-sm text-gray-600">Khách hàng tin tưởng</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">15 phút</div>
                <div className="text-sm text-gray-600">Phê duyệt nhanh</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">99.9%</div>
                <div className="text-sm text-gray-600">Uptime hệ thống</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Hero Image/Animation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
              {/* Mock Dashboard Preview */}
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-gray-900">Dashboard của bạn</h3>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="text-sm text-gray-600">Số dư hiện tại</div>
                    <div className="text-2xl font-bold text-blue-600">50,000,000 VND</div>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="text-sm text-gray-600">Khoản vay</div>
                    <div className="text-2xl font-bold text-green-600">30,000,000 VND</div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm text-gray-600">Thanh toán tiếp theo</span>
                    <span className="font-semibold">2,500,000 VND</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm text-gray-600">Ngày thanh toán</span>
                    <span className="font-semibold">15/02/2024</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 5, 0]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -top-4 -right-4 bg-yellow-400 text-white p-3 rounded-full shadow-lg"
            >
              <Shield className="w-6 h-6" />
            </motion.div>
            
            <motion.div
              animate={{ 
                y: [0, 10, 0],
                rotate: [0, -5, 0]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
              className="absolute -bottom-4 -left-4 bg-green-500 text-white p-3 rounded-full shadow-lg"
            >
              <Clock className="w-6 h-6" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
