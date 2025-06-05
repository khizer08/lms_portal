import React from 'react';
import { BookOpen, CheckCircle, Users, Star, Clock, Award, BarChart } from 'lucide-react';
import { Course } from '../../types';
import { Avatar } from '../ui/Avatar';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { Card, CardContent } from '../ui/Card';
import { ProgressBar } from '../ui/ProgressBar';

interface CourseOverviewProps {
  course: Course;
  progress?: number;
  isEnrolled?: boolean;
  onEnroll?: () => void;
}

export const CourseOverview: React.FC<CourseOverviewProps> = ({
  course,
  progress = 0,
  isEnrolled = false,
  onEnroll,
}) => {
  const totalLessons = course.modules.reduce(
    (total, module) => total + module.lessons.length, 
    0
  );
  
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{course.title}</h1>
          
          <p className="text-gray-700 mb-6">
            {course.description}
          </p>
          
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <div className="flex items-center">
              <Clock className="text-gray-500 w-5 h-5 mr-2" />
              <span className="text-gray-700">{course.duration}</span>
            </div>
            <div className="flex items-center">
              <BarChart className="text-gray-500 w-5 h-5 mr-2" />
              <span className="text-gray-700 capitalize">{course.level}</span>
            </div>
            <div className="flex items-center">
              <Users className="text-gray-500 w-5 h-5 mr-2" />
              <span className="text-gray-700">{course.enrolledStudents} students</span>
            </div>
            <div className="flex items-center">
              <Star className="text-yellow-500 w-5 h-5 mr-2 fill-yellow-500" />
              <span className="text-gray-700">{course.rating} ({course.totalRatings} ratings)</span>
            </div>
          </div>
          
          <div className="flex items-center mb-8">
            <Avatar
              src={course.instructorAvatar}
              name={course.instructor}
              size="md"
              className="mr-3"
            />
            <div>
              <p className="font-medium">Instructor</p>
              <p className="text-gray-700">{course.instructor}</p>
            </div>
          </div>
          
          {isEnrolled && (
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-medium">Your Progress</h3>
                <span className="text-sm text-gray-600">{progress}% complete</span>
              </div>
              <ProgressBar value={progress} variant="success" size="md" />
            </div>
          )}
          
          {isEnrolled ? (
            <div className="flex gap-4">
              <Button className="flex-1">
                Continue Learning
              </Button>
              <Button variant="outline">
                <BookOpen size={18} className="mr-2" />
                View Course Materials
              </Button>
            </div>
          ) : (
            <div className="flex gap-4">
              <Button className="flex-1" onClick={onEnroll}>
                Enroll Now - ${course.price.toFixed(2)}
              </Button>
              <Button variant="outline">
                Add to Wishlist
              </Button>
            </div>
          )}
        </div>
        
        <div className="mt-8 bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-bold mb-4">Course Content</h2>
          
          <div className="mb-2 flex justify-between">
            <span className="text-gray-600">{course.modules.length} modules • {totalLessons} lessons</span>
            <span className="text-gray-600">{course.duration} total</span>
          </div>
          
          <div className="space-y-4 mt-6">
            {course.modules.map((module, moduleIndex) => (
              <div key={module.id} className="border border-gray-200 rounded-md overflow-hidden">
                <div className="bg-gray-50 p-4 flex justify-between items-center cursor-pointer">
                  <div>
                    <h3 className="font-medium">
                      Module {moduleIndex + 1}: {module.title}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">{module.lessons.length} lessons • {module.duration}</p>
                  </div>
                </div>
                
                <div className="divide-y divide-gray-100">
                  {module.lessons.map((lesson) => (
                    <div 
                      key={lesson.id} 
                      className="p-4 flex items-center hover:bg-gray-50 transition-colors"
                    >
                      {lesson.isCompleted ? (
                        <CheckCircle size={18} className="text-green-500 mr-3 flex-shrink-0" />
                      ) : (
                        <div className="w-[18px] h-[18px] border border-gray-300 rounded-full mr-3 flex-shrink-0" />
                      )}
                      <div className="flex-1">
                        <p className="text-gray-800">{lesson.title}</p>
                        <div className="flex items-center text-sm text-gray-500 mt-1">
                          {lesson.type === 'video' && (
                            <BookOpen size={14} className="mr-1" />
                          )}
                          {lesson.type === 'quiz' && (
                            <Award size={14} className="mr-1" />
                          )}
                          {lesson.type === 'article' && (
                            <BookOpen size={14} className="mr-1" />
                          )}
                          <span className="capitalize">{lesson.type}</span>
                          <span className="mx-2">•</span>
                          <span>{lesson.duration}</span>
                        </div>
                      </div>
                      {isEnrolled ? (
                        <Button variant="ghost" size="sm">
                          {lesson.isCompleted ? 'Review' : 'Start'}
                        </Button>
                      ) : (
                        <Badge variant="outline" size="sm">
                          Preview
                        </Badge>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div>
        <Card className="sticky top-24">
          <CardContent>
            <img 
              src={course.thumbnail} 
              alt={course.title} 
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            
            <div className="border-b pb-4 mb-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-bold text-2xl">${course.price.toFixed(2)}</h3>
              </div>
              
              <Button className="w-full mb-2">
                {isEnrolled ? 'Continue Learning' : 'Enroll Now'}
              </Button>
              <Button variant="outline" className="w-full">
                {isEnrolled ? 'Download Materials' : 'Add to Wishlist'}
              </Button>
            </div>
            
            <h3 className="font-medium mb-3">This course includes:</h3>
            
            <ul className="space-y-2">
              <li className="flex items-start">
                <BookOpen size={18} className="text-gray-500 mt-0.5 mr-3" />
                <span className="text-gray-700">{totalLessons} lessons</span>
              </li>
              <li className="flex items-start">
                <Clock size={18} className="text-gray-500 mt-0.5 mr-3" />
                <span className="text-gray-700">{course.duration} of content</span>
              </li>
              <li className="flex items-start">
                <Award size={18} className="text-gray-500 mt-0.5 mr-3" />
                <span className="text-gray-700">Certificate of completion</span>
              </li>
              <li className="flex items-start">
                <Users size={18} className="text-gray-500 mt-0.5 mr-3" />
                <span className="text-gray-700">Community access</span>
              </li>
            </ul>
            
            <div className="mt-6 text-center">
              <p className="text-gray-500 text-sm">
                30-Day Money-Back Guarantee
              </p>
              <p className="text-gray-500 text-sm mt-1">
                Full Lifetime Access
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};