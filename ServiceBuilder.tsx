import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { ArrowLeft, ArrowRight, CheckCircle, Sparkles } from 'lucide-react';
import UserTypeSelector from '@/components/ServiceBuilder/UserTypeSelector';
import ServiceCategories from '@/components/ServiceBuilder/ServiceCategories';
import GamificationTracker from '@/components/ServiceBuilder/GamificationTracker';
import PricingCalculator from '@/components/ServiceBuilder/PricingCalculator';

const ServiceBuilder: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [userType, setUserType] = useState<string | null>(null);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [vulnerableGroup, setVulnerableGroup] = useState<string | null>(null);
  const [isUrbanized, setIsUrbanized] = useState(false);
  const [hasFunder, setHasFunder] = useState(false);
  const [engagements, setEngagements] = useState(0);

  const steps = [
    { id: 1, title: 'Profile', description: 'Choose your user type', emoji: '👤' },
    { id: 2, title: 'Services', description: 'Select services you need', emoji: '🛠️' },
    { id: 3, title: 'Context', description: 'Additional information', emoji: '📋' },
    { id: 4, title: 'Summary', description: 'Review and finalize', emoji: '✅' }
  ];

  const handleNext = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const handlePrev = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleServiceToggle = (serviceId: string) => {
    setSelectedServices(prev => 
      prev.includes(serviceId) 
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const handleEngagement = () => {
    setEngagements(prev => prev + 1);
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1: return userType !== null;
      case 2: return selectedServices.length > 0;
      case 3: return true;
      case 4: return true;
      default: return false;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cognitio-primary/5 via-white to-cognitio-accent/10 pt-20 pb-12">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="w-8 h-8 text-cognitio-primary" />
            <h1 className="text-4xl font-bold text-gray-900">🧩 Interactive Service Builder</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Customize your mental health service package based on your needs and context.
            <br />
            <span className="text-cognitio-primary font-medium">Your Partner in Resilience. Rooted in Culture. Powered by Technology.</span>
          </p>
        </div>

        {/* Progress Steps */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center space-x-4">
            {steps.map((step, index) => (
              <React.Fragment key={step.id}>
                <div className={`flex items-center space-x-2 ${
                  currentStep >= step.id ? 'text-cognitio-primary' : 'text-gray-400'
                }`}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium ${
                    currentStep >= step.id 
                      ? 'bg-cognitio-primary text-white' 
                      : 'bg-gray-200 text-gray-500'
                  }`}>
                    {currentStep > step.id ? <CheckCircle className="w-5 h-5" /> : step.emoji}
                  </div>
                  <div className="hidden md:block">
                    <div className="font-medium">{step.title}</div>
                    <div className="text-xs">{step.description}</div>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className={`w-12 h-0.5 ${
                    currentStep > step.id ? 'bg-cognitio-primary' : 'bg-gray-200'
                  }`} />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Card className="p-6 border-cognitio-primary/20">
              {currentStep === 1 && (
                <UserTypeSelector 
                  selectedType={userType} 
                  onSelectType={setUserType} 
                />
              )}
              
              {currentStep === 2 && userType && (
                <ServiceCategories 
                  userType={userType}
                  selectedServices={selectedServices}
                  onToggleService={handleServiceToggle}
                />
              )}
              
              {currentStep === 3 && (
                <div className="space-y-6">
                  <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">📋 Additional Context</h2>
                    <p className="text-gray-600">Help us customize your pricing and recommendations</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">🧩 Vulnerable Population Segment (Optional)</label>
                      <Select value={vulnerableGroup || ''} onValueChange={(value) => setVulnerableGroup(value || null)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select if applicable for support eligibility" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="low-income">💚 Low-Income or Economically Disadvantaged</SelectItem>
                          <SelectItem value="indigenous">🏞️ Indigenous or Ethnolinguistic Minority</SelectItem>
                          <SelectItem value="pwd">♿ Persons with Disabilities (PWDs)</SelectItem>
                          <SelectItem value="youth-underserved">🎓 Youth or Students in Underserved Areas</SelectItem>
                        </SelectContent>
                      </Select>
                      <p className="text-xs text-gray-500 mt-1">Each segment qualifies for custom support based on national standards</p>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="urbanized" 
                          checked={isUrbanized}
                          onCheckedChange={(checked) => setIsUrbanized(!!checked)}
                        />
                        <label htmlFor="urbanized" className="text-sm font-medium">
                          🏙️ Located in Highly Urbanized City
                        </label>
                      </div>
                      <p className="text-xs text-gray-500 ml-6">May apply 20% surcharge due to higher operational costs</p>
                      
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="funder" 
                          checked={hasFunder}
                          onCheckedChange={(checked) => setHasFunder(!!checked)}
                        />
                        <label htmlFor="funder" className="text-sm font-medium">
                          💼 Organization has external funding
                        </label>
                      </div>
                      <p className="text-xs text-gray-500 ml-6">May apply 10% surcharge to support cross-subsidization</p>
                    </div>
                  </div>
                </div>
              )}
              
              {currentStep === 4 && (
                <div className="space-y-6">
                  <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">✅ Service Package Summary</h2>
                    <p className="text-gray-600">Review your customized Cognitio+ mental health service package</p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-green-50 to-cognitio-accent/10 border border-green-200 rounded-lg p-6">
                    <h3 className="font-semibold text-green-800 mb-4 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5" />
                      🎉 Package Ready for Detailed Booking Request
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-green-700">
                      <div>
                        <p className="font-medium mb-2">📊 Package Details:</p>
                        <p>• {selectedServices.length} services selected</p>
                        <p>• Customized pricing applied</p>
                        <p>• Community support included</p>
                        <p>• Engagement tracking enabled</p>
                      </div>
                      <div>
                        <p className="font-medium mb-2">🎯 Next Steps:</p>
                        <p>• Schedule consultations</p>
                        <p>• Request subsidies if eligible</p>
                        <p>• Choose payment plans</p>
                        <p>• Upload required documents</p>
                      </div>
                    </div>
                    
                    <Button className="w-full mt-4 bg-cognitio-button hover:bg-cognitio-primary text-white">
                      🚀 Proceed to Detailed Booking Request
                    </Button>
                  </div>
                  
                  <div className="bg-cognitio-primary/5 border border-cognitio-primary/20 rounded-lg p-4">
                    <h4 className="font-medium text-cognitio-primary mb-2">🤝 Collaborative Measures & Support</h4>
                    <div className="text-sm text-gray-700 space-y-1">
                      <p>• Partner organizations help verify user segments</p>
                      <p>• Co-design workshops with stakeholders</p>
                      <p>• Cross-subsidization model with funders</p>
                      <p>• Referral system with LGUs, schools, and employers</p>
                      <p>• Shared dashboards for monitoring and feedback</p>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Navigation */}
              <div className="flex justify-between mt-8">
                <Button 
                  variant="outline" 
                  onClick={handlePrev}
                  disabled={currentStep === 1}
                  className="border-cognitio-primary/30 text-cognitio-primary hover:bg-cognitio-primary/10"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Previous
                </Button>
                
                <Button 
                  onClick={handleNext}
                  disabled={!canProceed() || currentStep === 4}
                  className="bg-cognitio-button hover:bg-cognitio-primary text-white"
                >
                  Next
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </Card>
          </div>
          
          {/* Sidebar */}
          <div className="space-y-6">
            <GamificationTracker 
              engagements={engagements}
              onEngagement={handleEngagement}
            />
            
            {selectedServices.length > 0 && (
              <PricingCalculator 
                selectedServices={selectedServices}
                vulnerableGroup={vulnerableGroup}
                isUrbanized={isUrbanized}
                hasFunder={hasFunder}
                engagements={engagements}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceBuilder;