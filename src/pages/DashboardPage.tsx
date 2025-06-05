import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Award, Clock, PlusCircle } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { EnrolledCoursesList } from '../components/modules/EnrolledCoursesList';
import { currentUser, getEnrolledCourses, getEnrollments, recommendedCourses } from '../data/mockData';
import { CourseList } from '../components/CourseList';

export const DashboardPage: React.FC = () => {
  const enrolledCourses = getEnrolledCourses(currentUser.id);
  const enrollments = getEnrollments(currentUser.id);

  return (
    <div>
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-1">Welcome back, {currentUser.name.split(' ')[0]}!</h1>
          <p className="text-gray-600">Track your progress and continue learning</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <BookOpen className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Enrolled Courses</p>
                  <p className="text-2xl font-bold">{enrolledCourses.length}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <Award className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Completed Courses</p>
                  <p className="text-2xl font-bold">0</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center">
                <div className="bg-purple-100 p-3 rounded-full mr-4">
                  <Clock className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Hours Learned</p>
                  <p className="text-2xl font-bold">12.5</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center">
                <div className="bg-amber-100 p-3 rounded-full mr-4">
                  <PlusCircle className="h-6 w-6 text-amber-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Certificates</p>
                  <p className="text-2xl font-bold">0</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-gray-900">Your Learning</h2>
            <Link to="/courses" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
              Explore more courses
            </Link>
          </div>
          
          {enrolledCourses.length > 0 ? (
            <EnrolledCoursesList 
              courses={enrolledCourses}
              enrollments={enrollments}
            />
          ) : (
            <Card>
              <CardContent className="py-12 text-center">
                <h3 className="text-lg font-medium mb-2">You haven't enrolled in any courses yet</h3>
                <p className="text-gray-500 mb-6">Start your learning journey today by enrolling in a course</p>
                <Link to="/courses">
                  <Button>Browse Courses</Button>
                </Link>
              </CardContent>
            </Card>
          )}
        </div>

        <div className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-gray-900">Recommended For You</h2>
            <Link to="/courses" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
              View all
            </Link>
          </div>
          
          <CourseList courses={recommendedCourses} />
        </div>
      </div>
    </div>
  );
};