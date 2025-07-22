import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { User, Users, Building2, Heart, BarChart3, Shield, Brain } from 'lucide-react';

interface UserType {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  emoji: string;
}

interface UserTypeSelectorProps {
  selectedType: string | null;
  onSelectType: (typeId: string) => void;
}

const userTypes: UserType[] = [
  {
    id: 'individual',
    title: 'Individual',
    description: 'Personal mental health support and self-guided tools',
    icon: <User className="w-6 h-6" />,
    emoji: '🧠'
  },
  {
    id: 'digital-tools',
    title: 'Digital AI Tools User',
    description: 'Tech-enabled emotional resilience building',
    icon: <Brain className="w-6 h-6" />,
    emoji: '🤖'
  },
  {
    id: 'community',
    title: 'Community Group',
    description: 'LGUs, schools, and civil society organizations',
    icon: <Users className="w-6 h-6" />,
    emoji: '🏘️'
  },
  {
    id: 'resilience',
    title: 'Community Leader',
    description: 'Resilience and trauma support for peer groups',
    icon: <Heart className="w-6 h-6" />,
    emoji: '🌱'
  },
  {
    id: 'organization',
    title: 'Organization',
    description: 'Companies, institutions, NGOs seeking training',
    icon: <Building2 className="w-6 h-6" />,
    emoji: '🏢'
  },
  {
    id: 'research',
    title: 'Research Partner',
    description: 'Data-driven insights and program evaluation',
    icon: <BarChart3 className="w-6 h-6" />,
    emoji: '📊'
  },
  {
    id: 'policy',
    title: 'Policy Maker',
    description: 'Strategic advisory for mental health systems',
    icon: <Shield className="w-6 h-6" />,
    emoji: '🧭'
  }
];

const UserTypeSelector: React.FC<UserTypeSelectorProps> = ({ selectedType, onSelectType }) => {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Choose Your Profile</h2>
        <p className="text-gray-600">Select the category that best describes you or your organization</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {userTypes.map((type) => (
          <Card 
            key={type.id}
            className={`cursor-pointer transition-all duration-200 hover:shadow-lg ${
              selectedType === type.id 
                ? 'ring-2 ring-cognitio-primary bg-cognitio-primary/5 border-cognitio-primary' 
                : 'hover:border-cognitio-primary/30 border-gray-200'
            }`}
            onClick={() => onSelectType(type.id)}
          >
            <CardHeader className="pb-3">
              <div className="flex items-center space-x-3">
                <div className="text-2xl">{type.emoji}</div>
                <div className="text-cognitio-primary">{type.icon}</div>
                <CardTitle className="text-lg text-gray-900">{type.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-sm text-gray-600">
                {type.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default UserTypeSelector;