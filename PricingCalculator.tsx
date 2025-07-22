import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Calculator, Percent, Users, MapPin, Gift } from 'lucide-react';

interface PricingCalculatorProps {
  selectedServices: string[];
  vulnerableGroup: string | null;
  isUrbanized: boolean;
  hasFunder: boolean;
  engagements: number;
}

const servicesPricing: Record<string, number> = {
  'ai-assessment': 2500,
  'teletherapy': 5000,
  'self-help': 1500,
  'gamified-learning': 2000,
  'resilience-navigator': 3000,
  'emotional-tracker': 2000,
  'behavior-designer': 2500,
  'mindfulness-oasis': 1800,
  'stress-manager': 2200,
  'caring-carers': 8000,
  'caretalk-circles': 6000,
  'indigenous-wellness': 7000,
  'substance-abuse': 9000,
  'katatagan-workshops': 12000,
  'peer-support': 8000,
  'trauma-care': 15000,
  'pfa-certification': 18000,
  'first-response': 15000,
  'mhpss-integration': 25000,
  'policy-support': 30000,
  'case-management': 20000,
  'cultural-competence': 12000,
  'burnout-prevention': 10000,
  'data-collection': 35000,
  'risk-mapping': 28000,
  'behavioral-segmentation': 32000,
  'impact-assessment': 25000,
  'ai-dashboards': 40000,
  'systems-audit': 45000,
  'data-planning': 38000,
  'policy-codesign': 50000,
  'insights-dashboard': 35000
};

const PricingCalculator: React.FC<PricingCalculatorProps> = ({
  selectedServices,
  vulnerableGroup,
  isUrbanized,
  hasFunder,
  engagements
}) => {
  const baseTotal = selectedServices.reduce((sum, serviceId) => {
    return sum + (servicesPricing[serviceId] || 0);
  }, 0);

  let finalTotal = baseTotal;
  const adjustments: Array<{ label: string; amount: number; type: 'discount' | 'surcharge' }> = [];

  // Vulnerable group discount
  if (vulnerableGroup) {
    const discountMap: Record<string, { rate: number; label: string }> = {
      'low-income': { rate: 0.30, label: 'Low-Income Support' },
      'indigenous': { rate: 0.25, label: 'Indigenous Community Support' },
      'pwd': { rate: 0.20, label: 'PWD Accessibility Support' },
      'youth-underserved': { rate: 0.35, label: 'Youth Underserved Support' }
    };
    const discount = discountMap[vulnerableGroup];
    if (discount) {
      const discountAmount = baseTotal * discount.rate;
      finalTotal -= discountAmount;
      adjustments.push({
        label: `${discount.label} (${Math.round(discount.rate * 100)}% off)`,
        amount: -discountAmount,
        type: 'discount'
      });
    }
  }

  // Urbanization surcharge
  if (isUrbanized) {
    const surcharge = baseTotal * 0.20;
    finalTotal += surcharge;
    adjustments.push({
      label: 'Highly Urbanized City Surcharge (20%)',
      amount: surcharge,
      type: 'surcharge'
    });
  }

  // Funder surcharge
  if (hasFunder) {
    const surcharge = baseTotal * 0.10;
    finalTotal += surcharge;
    adjustments.push({
      label: 'External Funding Surcharge (10%)',
      amount: surcharge,
      type: 'surcharge'
    });
  }

  // Engagement loyalty discount
  const badgesEarned = Math.floor(engagements / 3);
  if (badgesEarned >= 10) {
    const loyaltyDiscount = baseTotal * 0.15;
    finalTotal -= loyaltyDiscount;
    adjustments.push({
      label: '🏆 High Engagement Loyalty Discount (15%)',
      amount: -loyaltyDiscount,
      type: 'discount'
    });
  }

  // Value creation suggestions
  const getValueCreationSuggestions = () => {
    const suggestions = [];
    if (vulnerableGroup) {
      suggestions.push('📊 Data sharing partnership for community insights');
      suggestions.push('📢 Joint outreach campaigns');
    }
    if (badgesEarned >= 5) {
      suggestions.push('🎓 Peer mentorship opportunities');
      suggestions.push('📝 Testimonial and case study collaboration');
    }
    return suggestions;
  };

  const valueSuggestions = getValueCreationSuggestions();

  return (
    <Card className="bg-gradient-to-br from-cognitio-primary/5 to-cognitio-accent/10 border-cognitio-primary/20">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calculator className="w-5 h-5 text-cognitio-primary" />
          💰 Pricing Estimate
        </CardTitle>
        <CardDescription>Transparent pricing based on your profile and context</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium">Base Services Total</span>
            <span className="font-semibold">₱{baseTotal.toLocaleString()}</span>
          </div>
          
          {adjustments.length > 0 && (
            <>
              <Separator />
              <div className="space-y-2">
                {adjustments.map((adj, index) => (
                  <div key={index} className="flex justify-between items-center text-sm">
                    <span className={adj.type === 'discount' ? 'text-green-600' : 'text-orange-600'}>
                      {adj.label}
                    </span>
                    <span className={adj.type === 'discount' ? 'text-green-600' : 'text-orange-600'}>
                      {adj.amount > 0 ? '+' : ''}₱{Math.abs(adj.amount).toLocaleString()}
                    </span>
                  </div>
                ))}
              </div>
              <Separator />
            </>
          )}
          
          <div className="flex justify-between items-center text-lg font-bold">
            <span>Final Total</span>
            <span className="text-cognitio-primary">₱{Math.max(0, finalTotal).toLocaleString()}</span>
          </div>
        </div>

        <div className="bg-white p-3 rounded-lg border border-cognitio-primary/20">
          <h4 className="text-sm font-medium mb-2 flex items-center gap-1">
            <Users className="w-4 h-4" />
            📋 Package Inclusions
          </h4>
          <div className="space-y-1 text-xs text-gray-600">
            <p>• Access to {selectedServices.length} selected services</p>
            <p>• Engagement tools and gamification tracker</p>
            <p>• Community support and peer connections</p>
            <p>• Progress monitoring and feedback systems</p>
            {vulnerableGroup && <p>• Eligible for additional support programs</p>}
            {badgesEarned >= 10 && <p>• Premium loyalty member benefits</p>}
          </div>
        </div>

        {valueSuggestions.length > 0 && (
          <div className="bg-cognitio-accent/10 p-3 rounded-lg border border-cognitio-accent/30">
            <h4 className="text-sm font-medium mb-2 flex items-center gap-1 text-cognitio-primary">
              <Gift className="w-4 h-4" />
              🤝 Value Creation Opportunities
            </h4>
            <div className="space-y-1 text-xs text-gray-700">
              {valueSuggestions.map((suggestion, index) => (
                <p key={index}>• {suggestion}</p>
              ))}
            </div>
          </div>
        )}

        <div className="bg-gray-50 p-3 rounded-lg border">
          <h4 className="text-sm font-medium mb-2 text-gray-700">⚠️ Service Exclusions</h4>
          <div className="space-y-1 text-xs text-gray-600">
            <p>• Emergency psychiatric care and hospitalization</p>
            <p>• External medical services and prescriptions</p>
            <p>• Third-party referral costs</p>
          </div>
        </div>

        {selectedServices.length > 0 && (
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline" className="text-xs">
              <MapPin className="w-3 h-3 mr-1" />
              {isUrbanized ? '🏙️ Urban' : '🏘️ Rural'} Area
            </Badge>
            {vulnerableGroup && (
              <Badge className="text-xs bg-green-100 text-green-700">
                <Percent className="w-3 h-3 mr-1" />
                💚 Support Eligible
              </Badge>
            )}
            {badgesEarned >= 10 && (
              <Badge className="text-xs bg-cognitio-primary text-white">
                🏆 Loyalty Member
              </Badge>
            )}
            {hasFunder && (
              <Badge variant="secondary" className="text-xs">
                💼 Funded Org
              </Badge>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default PricingCalculator;