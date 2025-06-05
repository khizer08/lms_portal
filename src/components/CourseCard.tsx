import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Clock, Star, Users } from 'lucide-react';
import { Course } from '../types';
import { Avatar } from './ui/Avatar';
import { Badge } from './ui/Badge';
import { Card, CardContent } from './ui/Card';
import { truncateText } from '../lib/utils';

interface CourseCardProps {
  course: Course;
  className?: string;
}

const levelColors = {
  beginner: 'primary',
  intermediate: 'secondary',
  advanced: 'error',
} as const;

export const CourseCard: React.FC<CourseCardProps> = ({ course, className }) => {
  return (
    <Link to={`/courses/${course.id}`} className="block group">
      <Card className={`h-full transition-all duration-300 hover:shadow-md ${className}`} noPadding>
        <div className="relative aspect-video w-full overflow-hidden">
          <img
            src={course.thumbnail}
            alt={course.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {course.isFeatured && (
            <Badge
              variant="primary"
              className="absolute top-2 right-2"
            >
              Featured
            </Badge>
          )}
        </div>
        <CardContent className="p-4">
          <div className="flex items-center gap-2 mb-2">
            <Badge
              variant={levelColors[course.level]}
              size="sm"
            >
              {course.level.charAt(0).toUpperCase() + course.level.slice(1)}
            </Badge>
            <div className="flex items-center text-yellow-500 text-sm">
              <Star size={14} className="fill-yellow-500 mr-1" />
              <span>{course.rating}</span>
              <span className="text-gray-500 ml-1">({course.totalRatings})</span>
            </div>
          </div>
          
          <h3 className="font-semibold text-lg mb-2 group-hover:text-blue-600 transition-colors duration-200">
            {course.title}
          </h3>
          
          <p className="text-gray-600 text-sm mb-3">
            {truncateText(course.description, 100)}
          </p>
          
          <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
            <div className="flex items-center gap-2">
              <Avatar src={course.instructorAvatar} name={course.instructor} size="xs" />
              <span className="text-sm text-gray-600">{course.instructor}</span>
            </div>
            
            <div className="flex items-center gap-3 text-sm text-gray-500">
              <div className="flex items-center">
                <Clock size={14} className="mr-1" />
                {course.duration}
              </div>
              <div className="flex items-center">
                <Users size={14} className="mr-1" />
                {course.enrolledStudents}
              </div>
            </div>
          </div>
          
          <div className="mt-3 flex items-center justify-between">
            <div className="font-bold text-lg">${course.price.toFixed(2)}</div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};