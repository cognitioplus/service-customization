import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Trophy, Star, Target, Award, Heart, Users, BookOpen, Calendar } from 'lucide-react';

interface GamificationTrackerProps {
  engagements: number;
  onEngagement: () => void;
}

const badges = [
  { id: 'mood-logger', name: '📝 Mood Logger', description: 'Log your mood 5 days in a row', icon: <Star className="w-4 h-4" /> },
  { id: 'check-in-champ', name: '✅ Check-In Champ', description: 'Complete 10 daily check-ins', icon: <Calendar className="w-4 h-4" /> },
  { id: 'resilience-rookie', name: '🌱 Resilience Rookie', description: 'Complete your first self-care module', icon: <Target className="w-4 h-4" /> },
  { id: 'growth-seeker', name: '📈 Growth Seeker', description: 'Finish 5 resilience tasks', icon: <Trophy className="w-4 h-4" /> },
  { id: 'supportive-peer', name: '🤝 Supportive Peer', description: 'Post in a peer support forum', icon: <Users className="w-4 h-4" /> },
  { id: 'circle-contributor', name: '⭕ Circle Contributor', description: 'Join a CareTalk Circle session', icon: <Heart className="w-4 h-4" /> },
  { id: 'mental-health-learner', name: '🧠 Mental Health Learner', description: 'Complete a psychoeducational course', icon: <BookOpen className="w-4 h-4" /> },
  { id: 'knowledge-advocate', name: '📚 Knowledge Advocate', description: 'Share a resource with others', icon: <Award className="w-4 h-4" /> }
];

const GamificationTracker: React.FC<GamificationTrackerProps> = ({ engagements, onEngagement }) => {
  const badgesEarned = Math.floor(engagements / 3);
  const progressToNextBadge = (engagements % 3) * 33.33;
  
  const getLevel = (badges: number) => {
    if (badges <= 1) return 'Beginner';
    if (badges <= 4) return 'Intermediate';
    return 'Advanced';
  };

  const level = getLevel(badgesEarned);
  const earnedBadgesList = badges.slice(0, badgesEarned);

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner': return 'bg-green-100 text-green-700';
      case 'Intermediate': return 'bg-cognitio-accent/20 text-cognitio-primary';
      case 'Advanced': return 'bg-cognitio-primary/20 text-cognitio-primary';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <Card className="bg-gradient-to-br from-cognitio-primary/5 to-cognitio-accent/10 border-cognitio-primary/20">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-lg flex items-center gap-2">
              <Trophy className="w-5 h-5 text-cognitio-accent" />
              🏅 Progress Tracker
            </CardTitle>
            <CardDescription>Track your engagement and earn rewards</CardDescription>
          </div>
          <Badge className={getLevelColor(level)}>
            {level}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium">Engagements: {engagements}</span>
          <span className="text-sm text-gray-600">Badges: {badgesEarned}</span>
        </div>
        
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Progress to next badge</span>
            <span>{3 - (engagements % 3)} more needed</span>
          </div>
          <Progress value={progressToNextBadge} className="h-2" />
        </div>

        {earnedBadgesList.length > 0 && (
          <div className="space-y-2">
            <h4 className="text-sm font-medium">🎯 Earned Badges</h4>
            <div className="flex flex-wrap gap-2">
              {earnedBadgesList.map((badge) => (
                <div key={badge.id} className="flex items-center gap-1 bg-cognitio-accent/20 text-cognitio-primary px-2 py-1 rounded-full text-xs font-medium">
                  {badge.icon}
                  {badge.name}
                </div>
              ))}
            </div>
          </div>
        )}

        {badgesEarned >= 10 && (
          <div className="bg-cognitio-accent/20 p-3 rounded-lg">
            <h4 className="text-sm font-medium text-cognitio-primary mb-1">🎁 Loyalty Rewards Unlocked!</h4>
            <p className="text-xs text-gray-600">You may qualify for discounts and special offers</p>
          </div>
        )}

        <button
          onClick={onEngagement}
          className="w-full bg-cognitio-button hover:bg-cognitio-primary text-white py-2 px-4 rounded-lg transition-colors text-sm font-medium"
        >
          📅 Daily Check-in (+1 Engagement)
        </button>
      </CardContent>
    </Card>
  );
};

export default GamificationTracker;