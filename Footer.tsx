import React from 'react';
import { Twitter, Facebook, Instagram, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="https://cognitio-plus.aiwaapp.live/cache/media_cache/08ef55d07c8d59ec240c19f45128bfc1.png?1753144452477" 
                alt="CognitionPlus" 
                className="w-8 h-8"
              />
              <span className="text-2xl font-bold">CognitionPlus</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Comprehensive mental health services and solutions platform. Empowering communities through personalized care.
            </p>
            <div className="flex space-x-4">
              <Twitter className="w-6 h-6 text-gray-400 hover:text-yellow-400 cursor-pointer transition-colors" />
              <Facebook className="w-6 h-6 text-gray-400 hover:text-yellow-400 cursor-pointer transition-colors" />
              <Instagram className="w-6 h-6 text-gray-400 hover:text-yellow-400 cursor-pointer transition-colors" />
              <Linkedin className="w-6 h-6 text-gray-400 hover:text-yellow-400 cursor-pointer transition-colors" />
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="https://cognitio-plus.appimize.app" className="text-gray-400 hover:text-yellow-400 transition-colors">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Service Builder</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Training</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Progress</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Community</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">About</a></li>
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="https://cognitioplus.github.io/helpdesk" className="text-gray-400 hover:text-yellow-400 transition-colors">Help Center</a></li>
              <li><a href="https://cognitio-plus.appimize.app/contact" className="text-gray-400 hover:text-yellow-400 transition-colors">Contact Us</a></li>
              <li><a href="https://cognitio-plus.appimize.app/privacy-policy" className="text-gray-400 hover:text-yellow-400 transition-colors">Privacy Policy</a></li>
              <li><a href="https://cognitio-plus.appimize.app/terms-of-service" className="text-gray-400 hover:text-yellow-400 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 CognitionPlus. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <Mail className="w-4 h-4 text-gray-400" />
            <span className="text-gray-400 text-sm">hello@cognitio-plus.com</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;