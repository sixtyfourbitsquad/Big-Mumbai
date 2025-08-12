import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Gamepad2, MessageCircle, Trophy, Zap, Shield, Users, Clock, Gift } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Gamepad2,
      title: 'Interactive Play Modes',
      description: 'Choose from 100+ exciting games including puzzles, strategy, and action-packed challenges.',
      color: 'bg-blue-100 text-blue-600',
    },
    {
      icon: MessageCircle,
      title: 'Real-Time Community Chat',
      description: 'Connect with players nationwide. Share strategies, make friends, and build your gaming network.',
      color: 'bg-green-100 text-green-600',
    },
    {
      icon: Trophy,
      title: 'Amazing Rewards & Prizes',
      description: 'Win daily prizes, seasonal tournaments, and exclusive rewards worth lakhs of rupees.',
      color: 'bg-yellow-100 text-yellow-600',
    },
    {
      icon: Zap,
      title: 'Instant Play Technology',
      description: 'No downloads required. Play instantly on any device with our optimized web platform.',
      color: 'bg-purple-100 text-purple-600',
    },
    {
      icon: Shield,
      title: '100% Safe & Secure',
      description: 'Your data and transactions are protected with bank-level security and encryption.',
      color: 'bg-red-100 text-red-600',
    },
    {
      icon: Users,
      title: 'Active Gaming Community',
      description: 'Join 500K+ active players from across India in our vibrant gaming ecosystem.',
      color: 'bg-indigo-100 text-indigo-600',
    },
    {
      icon: Clock,
      title: '24/7 Available',
      description: 'Play anytime, anywhere. Our platform is always ready for your gaming sessions.',
      color: 'bg-teal-100 text-teal-600',
    },
    {
      icon: Gift,
      title: 'Daily Bonuses',
      description: 'Get daily login bonuses, special event rewards, and exclusive member benefits.',
      color: 'bg-orange-100 text-orange-600',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-red-600 font-semibold text-lg">✨ Platform Features</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
            Why Choose Big Mumbai Game?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the ultimate gaming platform designed for Indian players. 
            Here's what makes us the #1 choice for online entertainment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className="h-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-0 shadow-lg"
              >
                <CardHeader>
                  <div className={`w-16 h-16 rounded-2xl ${feature.color} flex items-center justify-center mb-4`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Feature Highlights */}
        <div className="mt-20">
          <div className="bg-gradient-to-r from-blue-900 to-purple-900 rounded-3xl p-8 md:p-12 text-white">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold mb-6">
                  Ready to Start Your Gaming Journey?
                </h3>
                <p className="text-xl text-blue-100 mb-8">
                  Join thousands of players who are already enjoying the excitement, 
                  building friendships, and winning amazing rewards every day.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-3xl font-bold text-yellow-400">500K+</div>
                    <div className="text-blue-200">Happy Players</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-yellow-400">₹10L+</div>
                    <div className="text-blue-200">Rewards Given</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-yellow-400">100+</div>
                    <div className="text-blue-200">Games Available</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-yellow-400">24/7</div>
                    <div className="text-blue-200">Support</div>
                  </div>
                </div>
              </div>
              <div className="text-center lg:text-right">
                <div className="inline-block bg-white/10 backdrop-blur-md rounded-2xl p-8">
                  <h4 className="text-2xl font-bold mb-4">Special Launch Offer!</h4>
                  <div className="text-4xl font-bold text-yellow-400 mb-2">₹500</div>
                  <div className="text-blue-200 mb-6">Welcome Bonus for New Players</div>
                  <div className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-3 px-6 rounded-xl cursor-pointer transition-all duration-300 inline-block">
                    Claim Your Bonus Now! 🎁
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}