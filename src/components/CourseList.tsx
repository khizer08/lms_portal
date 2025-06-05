import React from 'react';
import { CourseCard } from './CourseCard';
import { Course } from '../types';

interface CourseListProps {
  courses: Course[];
  emptyMessage?: string;
  className?: string;
}

export const CourseList: React.FC<CourseListProps> = ({ 
  courses, 
  emptyMessage = "No courses found",
  className 
}) => {
  if (courses.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${className}`}>
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
};