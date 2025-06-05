import React from 'react';
import { Search } from 'lucide-react';
import { Button } from '../ui/Button';

export const HeroSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Expand Your Knowledge with Online Courses
          </h1>
          <p className="text-xl mb-8 text-blue-100">
            Discover thousands of courses taught by expert instructors to help you achieve your goals.
          </p>
          
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="What do you want to learn today?"
              className="w-full pl-12 pr-4 py-4 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 shadow-lg"
            />
            <Button 
              className="absolute right-2 top-1/2 transform -translate-y-1/2 rounded-full"
              size="lg"
            >
              Search
            </Button>
          </div>
          
          <div className="mt-12 flex flex-wrap justify-center items-center gap-4 text-sm">
            <span className="text-blue-200">Popular topics:</span>
            <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
              Web Development
            </Button>
            <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
              Data Science
            </Button>
            <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
              UI/UX Design
            </Button>
            <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
              Marketing
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};