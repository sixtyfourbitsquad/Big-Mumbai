import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Gift, Zap, Users, Trophy } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-red-600 via-red-700 to-red-800">
      <div className="container mx-auto px-4">
        <div className="text-center text-white mb-12">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to Start Winning?
          </h2>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Join 500,000+ players who are already enjoying the excitement and winning amazing rewards every day!
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          <Card className="bg-white/10 backdrop-blur-md border-white/20 text-center hover:bg-white/20 transition-all duration-300">
            <CardContent className="p-6">
              <Gift className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <div className="text-2xl font-bold text-white mb-2">₹500</div>
              <div className="text-white/80">Welcome Bonus</div>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 backdrop-blur-md border-white/20 text-center hover:bg-white/20 transition-all duration-300">
            <CardContent className="p-6">
              <Zap className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <div className="text-2xl font-bold text-white mb-2">Instant</div>
              <div className="text-white/80">Registration</div>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 backdrop-blur-md border-white/20 text-center hover:bg-white/20 transition-all duration-300">
            <CardContent className="p-6">
              <Users className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <div className="text-2xl font-bold text-white mb-2">500K+</div>
              <div className="text-white/80">Active Players</div>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 backdrop-blur-md border-white/20 text-center hover:bg-white/20 transition-all duration-300">
            <CardContent className="p-6">
              <Trophy className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <div className="text-2xl font-bold text-white mb-2">₹10L+</div>
              <div className="text-white/80">Rewards Given</div>
            </CardContent>
          </Card>
        </div>

        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-black/20 backdrop-blur-md rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">🎁 Limited Time Offer!</h3>
            <p className="text-white/90 mb-6">
              Register now and get ₹500 welcome bonus + access to exclusive tournaments. 
              This offer is valid only for the first 1000 registrations this month!
            </p>
            <div className="text-yellow-400 font-bold text-lg">
              ⚡ Only 247 spots remaining!
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-white text-red-700 hover:bg-gray-100 font-bold py-6 px-12 text-xl shadow-2xl transform hover:scale-105 transition-all duration-300 border-0"
            >
              🎮 Register Now & Get ₹500 Bonus!
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-red-700 font-bold py-6 px-8 text-xl backdrop-blur-md transition-all duration-300"
            >
              📱 Download App
            </Button>
          </div>

          <div className="mt-8 text-white/70 text-sm">
            <p>✅ 100% Safe & Secure • ✅ Instant Withdrawal • ✅ 24/7 Support</p>
          </div>
        </div>
      </div>
    </section>
  );
}