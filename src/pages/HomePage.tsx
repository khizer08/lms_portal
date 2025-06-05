import React from 'react';
import { HeroSection } from '../components/modules/HeroSection';
import { FeaturedCourses } from '../components/modules/FeaturedCourses';
import { courses } from '../data/mockData';

export const HomePage: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <FeaturedCourses courses={courses} />
      
      {/* Categories section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Browse Categories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our diverse range of course categories to find the perfect learning path for your goals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Web Development', icon: '💻', count: 240 },
              { name: 'Data Science', icon: '📊', count: 185 },
              { name: 'Design', icon: '🎨', count: 163 },
              { name: 'Marketing', icon: '📱', count: 142 },
              { name: 'Business', icon: '📈', count: 157 },
              { name: 'Photography', icon: '📷', count: 89 },
              { name: 'Music', icon: '🎵', count: 72 },
              { name: 'Health & Fitness', icon: '💪', count: 118 }
            ].map((category) => (
              <div 
                key={category.name}
                className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
              >
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="font-semibold text-lg mb-2">{category.name}</h3>
                <p className="text-gray-500">{category.count} courses</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Students Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear from learners who have achieved their goals with our courses.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Johnson',
                role: 'Frontend Developer',
                avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100',
                quote: 'The React course completely transformed my career. I landed a job as a frontend developer within 3 months of completing it.',
              },
              {
                name: 'Michael Chen',
                role: 'UX Designer',
                avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100',
                quote: 'The UX Design Principles course gave me a solid foundation. The instructor\'s feedback was invaluable for my portfolio.',
              },
              {
                name: 'Emma Rodriguez',
                role: 'Marketing Specialist',
                avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100',
                quote: 'I\'ve taken several marketing courses here, and each one has provided practical skills I use daily in my job.',
              }
            ].map((testimonial) => (
              <div 
                key={testimonial.name}
                className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm"
              >
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Start Your Learning Journey Today</h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-8">
            Join thousands of students and gain the skills you need to advance your career or pursue your passions.
          </p>
          <div>
            <button className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-full hover:bg-blue-50 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};