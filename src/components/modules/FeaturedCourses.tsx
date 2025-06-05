import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Course } from '../../types';
import { CourseList } from '../CourseList';

interface FeaturedCoursesProps {
  courses: Course[];
}

export const FeaturedCourses: React.FC<FeaturedCoursesProps> = ({ courses }) => {
  const featuredCourses = courses.filter(course => course.isFeatured);
  
  if (featuredCourses.length === 0) return null;
  
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Featured Courses</h2>
          <Link 
            to="/courses" 
            className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
          >
            View all courses
            <ChevronRight size={16} className="ml-1" />
          </Link>
        </div>
        
        <CourseList courses={featuredCourses} />
      </div>
    </section>
  );
};