import React from 'react';
import { Link } from 'react-router-dom';
import { Course, Enrollment } from '../../types';
import { Card, CardContent } from '../ui/Card';
import { ProgressBar } from '../ui/ProgressBar';
import { formatDistance } from 'date-fns';

interface EnrolledCoursesListProps {
  courses: Course[];
  enrollments: Enrollment[];
  emptyMessage?: string;
}

export const EnrolledCoursesList: React.FC<EnrolledCoursesListProps> = ({
  courses,
  enrollments,
  emptyMessage = "You haven't enrolled in any courses yet."
}) => {
  if (courses.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {courses.map((course) => {
        const enrollment = enrollments.find(e => e.courseId === course.id);
        const lastAccessed = enrollment ? formatDistance(
          new Date(enrollment.lastAccessDate),
          new Date(),
          { addSuffix: true }
        ) : '';
        
        return (
          <Link 
            key={course.id} 
            to={`/courses/${course.id}`}
            className="block transition-transform hover:-translate-y-1"
          >
            <Card className="overflow-hidden hover:shadow-md transition-shadow">
              <div className="flex flex-col sm:flex-row">
                <div className="sm:w-48 h-32 sm:h-auto">
                  <img 
                    src={course.thumbnail} 
                    alt={course.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="flex-1">
                  <div className="mb-1">
                    <h3 className="font-semibold text-lg">{course.title}</h3>
                    <p className="text-sm text-gray-500">Instructor: {course.instructor}</p>
                  </div>
                  
                  <div className="mt-4">
                    <div className="flex justify-between text-sm mb-1">
                      <span>Progress</span>
                      <span>{enrollment?.progress || 0}%</span>
                    </div>
                    <ProgressBar 
                      value={enrollment?.progress || 0} 
                      size="sm"
                      variant={enrollment?.progress === 100 ? 'success' : 'default'}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between mt-4 text-sm">
                    <span className="text-gray-500">
                      Last accessed {lastAccessed}
                    </span>
                    <span className="text-blue-600 font-medium">
                      Continue Learning
                    </span>
                  </div>
                </CardContent>
              </div>
            </Card>
          </Link>
        );
      })}
    </div>
  );
};