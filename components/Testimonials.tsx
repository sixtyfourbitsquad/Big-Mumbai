'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import Image from 'next/image';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Rahul Sharma',
      location: 'Mumbai, Maharashtra',
      rating: 5,
      comment: 'Big Mumbai Game has completely changed my gaming experience! The variety of games and the community interaction is amazing. I\'ve made so many friends here and won some great prizes too!',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
      achievement: 'Won ₹15,000 in tournaments'
    },
    {
      name: 'Priya Patel',
      location: 'Ahmedabad, Gujarat',
      rating: 5,
      comment: 'As a working professional, I love how I can quickly jump into games during my break time. The platform is so smooth and the rewards system keeps me motivated to play daily.',
      image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg',
      achievement: 'Daily player for 8 months'
    },
    {
      name: 'Amit Kumar',
      location: 'Delhi, India',
      rating: 5,
      comment: 'The best gaming platform I\'ve ever used! The customer support is excellent, games are fair, and the community is so welcoming. Highly recommend to all gaming enthusiasts.',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg',
      achievement: 'Top 10 player nationwide'
    },
    {
      name: 'Sneha Reddy',
      location: 'Hyderabad, Telangana',
      rating: 5,
      comment: 'I was skeptical at first, but Big Mumbai Game has exceeded all my expectations. The games are engaging, the rewards are real, and I\'ve actually improved my strategic thinking skills!',
      image: 'https://images.pexels.com/photos/3211476/pexels-photo-3211476.jpeg',
      achievement: 'Won 50+ daily challenges'
    },
    {
      name: 'Vikram Singh',
      location: 'Jaipur, Rajasthan',
      rating: 5,
      comment: 'This platform brings back the joy of gaming! Clean interface, no ads interrupting gameplay, and the community features make it feel like playing with friends. Absolutely love it!',
      image: 'https://images.pexels.com/photos/2741701/pexels-photo-2741701.jpeg',
      achievement: 'Community leader & mentor'
    },
    {
      name: 'Kavya Nair',
      location: 'Kochi, Kerala',
      rating: 5,
      comment: 'Big Mumbai Game is not just a gaming platform, it\'s a stress-buster for me. After long work hours, spending time here helps me unwind completely. The variety keeps it fresh!',
      image: 'https://images.pexels.com/photos/3212806/pexels-photo-3212806.jpeg',
      achievement: 'Stress-free gaming expert'
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-purple-600 font-semibold text-lg">💬 Player Reviews</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
            What Our Players Say About Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what thousands of satisfied players 
            across India have to say about their Big Mumbai Game experience.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial Card */}
          <Card className="shadow-2xl border-0 overflow-hidden">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-3 gap-0">
                {/* Image Section */}
                <div className="relative lg:h-auto h-64">
                  <Image
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold inline-block mb-2">
                      {testimonials[currentIndex].achievement}
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="lg:col-span-2 p-8 lg:p-12">
                  <div className="flex items-center mb-6">
                    <Quote className="w-8 h-8 text-purple-600 mr-3" />
                    <div className="flex">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                      ))}
                    </div>
                  </div>
                  
                  <blockquote className="text-lg lg:text-xl text-gray-700 mb-8 leading-relaxed italic">
                    "{testimonials[currentIndex].comment}"
                  </blockquote>
                  
                  <div className="border-t pt-6">
                    <div className="font-bold text-xl text-gray-900">
                      {testimonials[currentIndex].name}
                    </div>
                    <div className="text-gray-600">
                      {testimonials[currentIndex].location}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Arrows */}
          <Button
            variant="outline"
            size="icon"
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full shadow-lg bg-white hover:bg-gray-50 border-2"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full shadow-lg bg-white hover:bg-gray-50 border-2"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-purple-600 w-8' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl lg:text-4xl font-bold text-purple-600 mb-2">4.9/5</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div>
            <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">50,000+</div>
            <div className="text-gray-600">Reviews</div>
          </div>
          <div>
            <div className="text-3xl lg:text-4xl font-bold text-green-600 mb-2">500K+</div>
            <div className="text-gray-600">Happy Players</div>
          </div>
          <div>
            <div className="text-3xl lg:text-4xl font-bold text-red-600 mb-2">98%</div>
            <div className="text-gray-600">Satisfaction Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
}