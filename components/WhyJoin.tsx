import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Star, TrendingUp, Heart, Zap, Gift, Users } from 'lucide-react';

export default function WhyJoin() {
  const benefits = [
    {
      icon: Star,
      title: 'Premium Gaming Experience',
      description: 'High-quality games with smooth gameplay and stunning graphics.',
      color: 'bg-yellow-500'
    },
    {
      icon: TrendingUp,
      title: 'Skill Development',
      description: 'Improve your strategic thinking and problem-solving skills.',
      color: 'bg-blue-500'
    },
    {
      icon: Heart,
      title: 'Stress Relief',
      description: 'Unwind and relax with entertaining games after a busy day.',
      color: 'bg-red-500'
    },
    {
      icon: Zap,
      title: 'Instant Entertainment',
      description: 'Jump into games immediately without any waiting or downloads.',
      color: 'bg-green-500'
    },
    {
      icon: Gift,
      title: 'Daily Rewards',
      description: 'Earn points, bonuses, and prizes just by playing regularly.',
      color: 'bg-purple-500'
    },
    {
      icon: Users,
      title: 'Social Connection',
      description: 'Meet like-minded players and build lasting friendships.',
      color: 'bg-indigo-500'
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-lg">🌟 Member Benefits</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
            Why Join Our Gaming Community?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the amazing benefits that await you as a Big Mumbai Game member. 
            From exclusive rewards to lasting friendships, here's what you'll gain.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 ${benefit.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Success Stories Section */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Success Stories from Our Community
            </h3>
            <p className="text-xl text-gray-600">
              Real players, real wins, real friendships formed on our platform.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">₹25,000</div>
              <div className="text-gray-600 mb-2">Highest Single Win</div>
              <div className="text-sm text-gray-500">Rajesh K. from Mumbai</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">1,200+</div>
              <div className="text-gray-600 mb-2">Games Won This Month</div>
              <div className="text-sm text-gray-500">Priya S. from Delhi</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">150+</div>
              <div className="text-gray-600 mb-2">Friends Made</div>
              <div className="text-sm text-gray-500">Amit P. from Bangalore</div>
            </div>
          </div>

          <div className="text-center">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-4 px-12 text-lg shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              🚀 Start Your Success Story Today!
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}