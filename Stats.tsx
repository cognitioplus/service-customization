import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { TrendingUp, Users, Award, Clock } from 'lucide-react';

const Stats: React.FC = () => {
  const stats = [
    {
      icon: <Users className="w-8 h-8 text-blue-500" />,
      number: "500K+",
      label: "Active Users",
      description: "Join our growing community"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-green-500" />,
      number: "89%",
      label: "Improvement Rate",
      description: "Users see cognitive gains"
    },
    {
      icon: <Award className="w-8 h-8 text-purple-500" />,
      number: "2M+",
      label: "Exercises Completed",
      description: "Daily brain training sessions"
    },
    {
      icon: <Clock className="w-8 h-8 text-orange-500" />,
      number: "15 min",
      label: "Daily Average",
      description: "Optimal training duration"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Proven Results
          </h2>
          <p className="text-xl text-purple-100 max-w-2xl mx-auto">
            Join thousands of users who have transformed their cognitive abilities
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-purple-100 mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-purple-200">
                  {stat.description}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;