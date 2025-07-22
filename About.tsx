import React from 'react';
import { AppProvider } from '@/contexts/AppContext';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Brain, Target, Users, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <AppProvider>
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
        <Navigation />
        
        <main className="pt-20">
          <div className="container mx-auto px-4 py-16">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                About Cognitio+
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Empowering minds through AI-powered cognitive training
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
                <CardHeader>
                  <Brain className="w-12 h-12 text-yellow-400 mb-4" />
                  <CardTitle>Our Mission</CardTitle>
                  <CardDescription className="text-gray-300">
                    To make cognitive enhancement accessible to everyone through scientifically-backed training programs.
                  </CardDescription>
                </CardHeader>
              </Card>
              
              <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
                <CardHeader>
                  <Target className="w-12 h-12 text-blue-400 mb-4" />
                  <CardTitle>Our Vision</CardTitle>
                  <CardDescription className="text-gray-300">
                    A world where everyone can unlock their cognitive potential and achieve peak mental performance.
                  </CardDescription>
                </CardHeader>
              </Card>
              
              <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
                <CardHeader>
                  <Users className="w-12 h-12 text-green-400 mb-4" />
                  <CardTitle>Community Driven</CardTitle>
                  <CardDescription className="text-gray-300">
                    Built by researchers, educators, and cognitive scientists who believe in the power of mental training.
                  </CardDescription>
                </CardHeader>
              </Card>
              
              <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
                <CardHeader>
                  <Award className="w-12 h-12 text-purple-400 mb-4" />
                  <CardTitle>Proven Results</CardTitle>
                  <CardDescription className="text-gray-300">
                    Our methods are backed by peer-reviewed research and validated by thousands of users worldwide.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
            
            <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
              <CardHeader>
                <CardTitle>The Science Behind Cognitio+</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 leading-relaxed">
                  Cognitio+ is built on decades of neuroscience research demonstrating that targeted cognitive training can improve mental performance. Our exercises are designed to challenge specific cognitive domains including working memory, attention, processing speed, and executive function. Through adaptive algorithms and personalized training programs, we help users achieve measurable improvements in their cognitive abilities.
                </p>
              </CardContent>
            </Card>
          </div>
        </main>
        
        <Footer />
      </div>
    </AppProvider>
  );
};

export default About;