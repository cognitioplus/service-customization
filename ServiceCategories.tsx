import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Brain, Bot, Users, Heart, Building2, BarChart3, Shield } from 'lucide-react';

interface Service {
  id: string;
  name: string;
  price: number;
}

interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  services: Service[];
  userTypes: string[];
}

interface ServiceCategoriesProps {
  userType: string;
  selectedServices: string[];
  onToggleService: (serviceId: string) => void;
}

const serviceCategories: ServiceCategory[] = [
  {
    id: 'individual',
    title: '🧠 Online & Individual Solutions',
    description: 'Personal mental health support and self-guided tools',
    icon: <Brain className="w-5 h-5" />,
    userTypes: ['individual'],
    services: [
      { id: 'ai-assessment', name: 'AI-Powered Mental Health Assessments', price: 2500 },
      { id: 'teletherapy', name: 'Teletherapy and E-Counseling Services', price: 5000 },
      { id: 'self-help', name: 'Self-Help Resources and Psychoeducation', price: 1500 },
      { id: 'gamified-learning', name: 'Gamified Learning Modules (for youth and students)', price: 2000 }
    ]
  },
  {
    id: 'digital-tools',
    title: '🤖 Digital AI Resilience Tools',
    description: 'Tech-enabled emotional resilience building',
    icon: <Bot className="w-5 h-5" />,
    userTypes: ['individual', 'digital-tools'],
    services: [
      { id: 'resilience-navigator', name: 'Resilience Navigator', price: 3000 },
      { id: 'emotional-tracker', name: 'SMART Emotional Tracker and Journal', price: 2000 },
      { id: 'behavior-designer', name: 'Resilient Behavior Designer', price: 2500 },
      { id: 'mindfulness-oasis', name: 'Oasis: Mindfulness Sanctuary', price: 1800 },
      { id: 'stress-manager', name: 'Well-Be: Stress Manager App', price: 2200 }
    ]
  },
  {
    id: 'community-programs',
    title: '🏘️ Community-Based Mental Health Programs',
    description: 'For LGUs, schools, and civil society groups',
    icon: <Users className="w-5 h-5" />,
    userTypes: ['community'],
    services: [
      { id: 'caring-carers', name: 'Caring for the Carers (C4C)', price: 8000 },
      { id: 'caretalk-circles', name: 'CareTalk Circles', price: 6000 },
      { id: 'indigenous-wellness', name: 'Indigenous Mental Wellness Dialogues', price: 7000 },
      { id: 'substance-abuse', name: 'Substance Abuse Prevention and Recovery Support', price: 9000 }
    ]
  },
  {
    id: 'resilience-program',
    title: '🌱 Community Resilience Program',
    description: 'Resilience and trauma support for peer groups',
    icon: <Heart className="w-5 h-5" />,
    userTypes: ['resilience'],
    services: [
      { id: 'katatagan-workshops', name: 'Katatagan Framework Workshops', price: 12000 },
      { id: 'peer-support', name: 'Peer-Led Support Group Models', price: 8000 },
      { id: 'trauma-care', name: 'Trauma-Informed Care & Psychological First Aid (PFA) Training', price: 15000 }
    ]
  },
  {
    id: 'organizational',
    title: '🏢 Organizational Trainings & Consultancy',
    description: 'Mental health integration and policy support',
    icon: <Building2 className="w-5 h-5" />,
    userTypes: ['organization'],
    services: [
      { id: 'pfa-certification', name: 'Psychological First Aid (PFA) Certification', price: 18000 },
      { id: 'first-response', name: 'Mental Health First Response Training', price: 15000 },
      { id: 'mhpss-integration', name: 'MHPSS Integration into Health & Emergency Plans', price: 25000 },
      { id: 'policy-support', name: 'Mental Health Policy Co-Design & Compliance Support', price: 30000 },
      { id: 'case-management', name: 'Case Management & Referral Systems', price: 20000 },
      { id: 'cultural-competence', name: 'Cultural Competence in Mental Health Delivery', price: 12000 },
      { id: 'burnout-prevention', name: 'Burnout Prevention & Emotional Resilience Workshops', price: 10000 }
    ]
  },
  {
    id: 'research',
    title: '📊 Research & Data Analytics Services',
    description: 'Data-driven insights and program evaluation',
    icon: <BarChart3 className="w-5 h-5" />,
    userTypes: ['research'],
    services: [
      { id: 'data-collection', name: 'Mental Health Data Collection & Monitoring', price: 35000 },
      { id: 'risk-mapping', name: 'Psychosocial Risk Mapping', price: 28000 },
      { id: 'behavioral-segmentation', name: 'Behavioral Segmentation (by gender, location, SES)', price: 32000 },
      { id: 'impact-assessment', name: 'Impact Assessment of Programs', price: 25000 },
      { id: 'ai-dashboards', name: 'Ethical AI Dashboards for Feedback & Improvement', price: 40000 }
    ]
  },
  {
    id: 'policy',
    title: '🧭 Policy & Strategic Advisory Services',
    description: 'Strategic advisory for mental health systems',
    icon: <Shield className="w-5 h-5" />,
    userTypes: ['policy'],
    services: [
      { id: 'systems-audit', name: 'Mental Health Systems Audits', price: 45000 },
      { id: 'data-planning', name: 'Data-Driven Planning & Budgeting', price: 38000 },
      { id: 'policy-codesign', name: 'Policy Co-Design & Implementation Planning', price: 50000 },
      { id: 'insights-dashboard', name: 'Cognitio+ Insights Dashboard', price: 35000 }
    ]
  }
];

const ServiceCategories: React.FC<ServiceCategoriesProps> = ({ userType, selectedServices, onToggleService }) => {
  const relevantCategories = serviceCategories.filter(category => 
    category.userTypes.includes(userType)
  );

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Select Services</h2>
        <p className="text-gray-600">Choose the services that match your needs</p>
      </div>
      
      <div className="space-y-6">
        {relevantCategories.map((category) => (
          <Card key={category.id} className="border-2 hover:border-cognitio-primary/30 transition-colors">
            <CardHeader className="pb-4">
              <div className="flex items-center space-x-3">
                <div className="text-cognitio-primary">{category.icon}</div>
                <div>
                  <CardTitle className="text-lg text-cognitio-primary">{category.title}</CardTitle>
                  <CardDescription className="text-gray-600">{category.description}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {category.services.map((service) => (
                  <div key={service.id} className="flex items-start space-x-3 p-3 rounded-lg border hover:bg-cognitio-accent/10 transition-colors">
                    <Checkbox
                      id={service.id}
                      checked={selectedServices.includes(service.id)}
                      onCheckedChange={() => onToggleService(service.id)}
                      className="mt-1"
                    />
                    <div className="flex-1">
                      <label htmlFor={service.id} className="text-sm font-medium cursor-pointer leading-tight">
                        {service.name}
                      </label>
                      <p className="text-xs text-gray-500 mt-1">₱{service.price.toLocaleString()}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ServiceCategories;