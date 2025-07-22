import React from 'react';
import { AppProvider } from '@/contexts/AppContext';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Brain, Target, Zap, Trophy } from 'lucide-react';

const Training: React.FC = () => {
  return (
    <AppProvider>
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
        <Navigation />
        
        <main className="pt-20">
          <div className="container mx-auto px-4 py-16">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Cognitive Training
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Enhance your mental performance with scientifically-backed exercises
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
                <CardHeader>
                  <Brain className="w-12 h-12 text-yellow-400 mb-4" />
                  <CardTitle>Memory Training</CardTitle>
                  <CardDescription className="text-gray-300">
                    Improve your working memory and recall abilities
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black">
                    Start Training
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
                <CardHeader>
                  <Target className="w-12 h-12 text-blue-400 mb-4" />
                  <CardTitle>Attention Focus</CardTitle>
                  <CardDescription className="text-gray-300">
                    Enhance your concentration and focus abilities
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">
                    Start Training
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
                <CardHeader>
                  <Zap className="w-12 h-12 text-green-400 mb-4" />
                  <CardTitle>Processing Speed</CardTitle>
                  <CardDescription className="text-gray-300">
                    Boost your mental processing speed and reaction time
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-green-500 hover:bg-green-600 text-white">
                    Start Training
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </AppProvider>
  );
};

export default Training;