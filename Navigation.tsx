import React from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, User } from 'lucide-react';
import { useAppContext } from '@/contexts/AppContext';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
  const { sidebarOpen, toggleSidebar } = useAppContext();

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <img 
                src="https://cognitio-plus.aiwaapp.live/cache/media_cache/08ef55d07c8d59ec240c19f45128bfc1.png?1753144452477" 
                alt="CognitionPlus" 
                className="w-8 h-8"
              />
              <span className="text-xl font-bold text-white">CognitionPlus</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="https://cognitio-plus.appimize.app" className="text-white hover:text-yellow-400 transition-colors">Home</a>
              <Link to="/service-builder" className="text-white hover:text-yellow-400 transition-colors">Service Builder</Link>
              <Link to="/training" className="text-white hover:text-yellow-400 transition-colors">Training</Link>
              <Link to="/progress" className="text-white hover:text-yellow-400 transition-colors">Progress</Link>
              <Link to="/community" className="text-white hover:text-yellow-400 transition-colors">Community</Link>
              <Link to="/about" className="text-white hover:text-yellow-400 transition-colors">About</Link>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="text-white hover:text-yellow-400">
                <User className="w-4 h-4 mr-2" />
                Login
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="md:hidden text-white"
                onClick={toggleSidebar}
              >
                {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </Button>
            </div>
          </div>
        </div>
      </nav>
      
      {sidebarOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="fixed inset-0 bg-black/50" onClick={toggleSidebar} />
          <div className="fixed top-0 right-0 h-full w-64 bg-gray-900 p-6">
            <div className="flex flex-col space-y-6 mt-16">
              <a href="https://cognitio-plus.appimize.app" className="text-white hover:text-yellow-400 transition-colors text-lg">Home</a>
              <Link to="/service-builder" className="text-white hover:text-yellow-400 transition-colors text-lg" onClick={toggleSidebar}>Service Builder</Link>
              <Link to="/training" className="text-white hover:text-yellow-400 transition-colors text-lg" onClick={toggleSidebar}>Training</Link>
              <Link to="/progress" className="text-white hover:text-yellow-400 transition-colors text-lg" onClick={toggleSidebar}>Progress</Link>
              <Link to="/community" className="text-white hover:text-yellow-400 transition-colors text-lg" onClick={toggleSidebar}>Community</Link>
              <Link to="/about" className="text-white hover:text-yellow-400 transition-colors text-lg" onClick={toggleSidebar}>About</Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;