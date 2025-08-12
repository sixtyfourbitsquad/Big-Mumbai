'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Play, Users, Trophy, Clock } from 'lucide-react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 7,
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        if (prevTime.seconds > 0) {
          return { ...prevTime, seconds: prevTime.seconds - 1 };
        } else if (prevTime.minutes > 0) {
          return { ...prevTime, minutes: prevTime.minutes - 1, seconds: 59 };
        } else if (prevTime.hours > 0) {
          return { ...prevTime, hours: prevTime.hours - 1, minutes: 59, seconds: 59 };
        } else if (prevTime.days > 0) {
          return { ...prevTime, days: prevTime.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prevTime;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg"
          alt="Gaming atmosphere"
          fill
          className="object-cover opacity-20"
          priority
          quality={90}
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <span className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-sm font-bold px-4 py-2 rounded-full mb-4">
                🎮 India's #1 Gaming Platform
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Big Mumbai:
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                {' '}A Unique Play & Connect Experience
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Enjoy Fun, Challenges & Exciting Rewards – Anytime, Anywhere
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-600 rounded-full mx-auto mb-2">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-white">500K+</div>
                <div className="text-sm text-gray-400">Active Players</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-green-600 rounded-full mx-auto mb-2">
                  <Play className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-white">100+</div>
                <div className="text-sm text-gray-400">Games</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-yellow-600 rounded-full mx-auto mb-2">
                  <Trophy className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-white">₹10L+</div>
                <div className="text-sm text-gray-400">Rewards Given</div>
              </div>
            </div>

            {/* Countdown Timer */}
            <div className="bg-black/30 backdrop-blur-md rounded-2xl p-6 mb-8">
              <div className="flex items-center justify-center mb-4">
                <Clock className="w-5 h-5 text-yellow-400 mr-2" />
                <span className="text-yellow-400 font-semibold">Limited Time Offer!</span>
              </div>
              <div className="grid grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold text-white">{timeLeft.days}</div>
                  <div className="text-xs text-gray-400 uppercase tracking-wide">Days</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">{timeLeft.hours}</div>
                  <div className="text-xs text-gray-400 uppercase tracking-wide">Hours</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">{timeLeft.minutes}</div>
                  <div className="text-xs text-gray-400 uppercase tracking-wide">Minutes</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">{timeLeft.seconds}</div>
                  <div className="text-xs text-gray-400 uppercase tracking-wide">Seconds</div>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-4 px-8 text-lg shadow-2xl transform hover:scale-105 transition-all duration-300 border-0"
              >
                🎮 Register Now & Get ₹500 Bonus!
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-green-500 text-green-400 hover:bg-green-500 hover:text-white font-semibold py-4 px-8 text-lg backdrop-blur-md transition-all duration-300"
              >
                Login
              </Button>
            </div>
          </div>

          {/* Right Column - Hero Image */}
          <div className="relative">
            <div className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.pexels.com/photos/3945313/pexels-photo-3945313.jpeg"
                alt="Exciting gaming experience"
                fill
                className="object-cover"
                quality={90}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              
              {/* Floating Elements */}
              <div className="absolute top-4 right-4 bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold animate-pulse">
                🔥 Trending
              </div>
              <div className="absolute bottom-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                ✅ Verified Safe
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Register Button for Mobile */}
      <div className="fixed bottom-4 left-4 right-4 z-50 lg:hidden">
        <Button 
          size="lg" 
          className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-4 text-lg shadow-2xl transform hover:scale-105 transition-all duration-300 border-0"
        >
          🎮 Register Now & Get ₹500 Bonus!
        </Button>
      </div>
    </section>
  );
}