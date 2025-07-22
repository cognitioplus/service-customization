import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight, Mail, Sparkles } from 'lucide-react';

const CTA: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-400 rounded-full animate-bounce"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-purple-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-blue-400 rounded-full animate-ping"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <div className="p-4 bg-yellow-500/20 rounded-full">
              <Sparkles className="w-12 h-12 text-yellow-400" />
            </div>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Ready to Unlock Your
            <span className="text-yellow-400 block">Cognitive Potential?</span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Join thousands of users who have already transformed their minds. Start your journey today with our free trial.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 max-w-md mx-auto">
            <div className="relative flex-1 w-full">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="pl-10 bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-yellow-400"
              />
            </div>
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 whitespace-nowrap">
              Start Free Trial <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-2xl font-bold text-yellow-400 mb-2">✓</div>
              <p className="text-gray-300">No credit card required</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-yellow-400 mb-2">✓</div>
              <p className="text-gray-300">7-day free trial</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-yellow-400 mb-2">✓</div>
              <p className="text-gray-300">Cancel anytime</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;