import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Brain, Gamepad2, BarChart3, Users, Trophy, Clock } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8 text-purple-500" />,
      title: "Memory Enhancement",
      description: "Advanced exercises to boost working memory and recall abilities",
      badge: "Popular",
      color: "bg-purple-50 border-purple-200"
    },
    {
      icon: <Gamepad2 className="w-8 h-8 text-blue-500" />,
      title: "Interactive Games",
      description: "Engaging brain games that make learning fun and addictive",
      badge: "New",
      color: "bg-blue-50 border-blue-200"
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-green-500" />,
      title: "Progress Tracking",
      description: "Detailed analytics and insights into your cognitive development",
      badge: "Pro",
      color: "bg-green-50 border-green-200"
    },
    {
      icon: <Users className="w-8 h-8 text-orange-500" />,
      title: "Social Learning",
      description: "Connect with others and compete in cognitive challenges",
      badge: "Community",
      color: "bg-orange-50 border-orange-200"
    },
    {
      icon: <Trophy className="w-8 h-8 text-yellow-500" />,
      title: "Achievements",
      description: "Unlock rewards and badges as you reach new milestones",
      badge: "Gamified",
      color: "bg-yellow-50 border-yellow-200"
    },
    {
      icon: <Clock className="w-8 h-8 text-red-500" />,
      title: "Daily Challenges",
      description: "Fresh content every day to keep your mind sharp",
      badge: "Daily",
      color: "bg-red-50 border-red-200"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Powerful Features for Your <span className="text-purple-600">Mind</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover a comprehensive suite of cognitive training tools designed to enhance your mental performance
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className={`${feature.color} hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}>
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  {feature.icon}
                  <Badge variant="secondary" className="text-xs">{feature.badge}</Badge>
                </div>
                <CardTitle className="text-xl text-gray-900">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-4">
                  {feature.description}
                </CardDescription>
                <Button variant="outline" size="sm" className="w-full">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;