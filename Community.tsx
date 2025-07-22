import React from 'react';
import { AppProvider } from '@/contexts/AppContext';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, MessageCircle, Trophy, Star } from 'lucide-react';

const Community: React.FC = () => {
  return (
    <AppProvider>
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
        <Navigation />
        
        <main className="pt-20">
          <div className="container mx-auto px-4 py-16">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Community
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Connect with fellow learners and share your cognitive training journey
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
                <CardHeader>
                  <Users className="w-12 h-12 text-blue-400 mb-4" />
                  <CardTitle>Discussion Forums</CardTitle>
                  <CardDescription className="text-gray-300">
                    Join conversations about cognitive training techniques
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">
                    Join Discussions
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
                <CardHeader>
                  <Trophy className="w-12 h-12 text-yellow-400 mb-4" />
                  <CardTitle>Leaderboards</CardTitle>
                  <CardDescription className="text-gray-300">
                    See how you rank against other community members
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black">
                    View Rankings
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
                <CardHeader>
                  <MessageCircle className="w-12 h-12 text-green-400 mb-4" />
                  <CardTitle>Study Groups</CardTitle>
                  <CardDescription className="text-gray-300">
                    Form or join study groups for collaborative learning
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-green-500 hover:bg-green-600 text-white">
                    Find Groups
                  </Button>
                </CardContent>
              </Card>
            </div>
            
            <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
              <CardHeader>
                <CardTitle>Recent Community Activity</CardTitle>
                <CardDescription className="text-gray-300">
                  Latest posts and achievements from the community
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-lg">
                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                      <Users className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-medium">Sarah M. completed Memory Master challenge</p>
                      <p className="text-sm text-gray-400">2 hours ago</p>
                    </div>
                    <Star className="w-5 h-5 text-yellow-400 ml-auto" />
                  </div>
                  
                  <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-lg">
                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                      <Trophy className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-medium">Alex R. reached 30-day training streak</p>
                      <p className="text-sm text-gray-400">4 hours ago</p>
                    </div>
                    <Star className="w-5 h-5 text-yellow-400 ml-auto" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
        
        <Footer />
      </div>
    </AppProvider>
  );
};

export default Community;