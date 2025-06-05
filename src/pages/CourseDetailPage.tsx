import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCourse, getEnrollments, currentUser } from '../data/mockData';
import { CourseOverview } from '../components/modules/CourseOverview';
import { Course, Enrollment } from '../types';

export const CourseDetailPage: React.FC = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const [course, setCourse] = useState<Course | null>(null);
  const [enrollment, setEnrollment] = useState<Enrollment | null>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    if (courseId) {
      // In a real app, this would be an API call
      const foundCourse = getCourse(courseId);
      setCourse(foundCourse || null);
      
      const userEnrollments = getEnrollments(currentUser.id);
      const foundEnrollment = userEnrollments.find(e => e.courseId === courseId) || null;
      setEnrollment(foundEnrollment);
      
      setLoading(false);
    }
  }, [courseId]);
  
  const handleEnroll = () => {
    // In a real app, this would make an API call to enroll the user
    console.log('Enrolling in course:', courseId);
    
    // Mock enrollment for demo purposes
    if (course) {
      const newEnrollment: Enrollment = {
        id: `enroll-${Date.now()}`,
        courseId: course.id,
        userId: currentUser.id,
        progress: 0,
        startDate: new Date().toISOString(),
        lastAccessDate: new Date().toISOString(),
        certificateIssued: false
      };
      
      setEnrollment(newEnrollment);
    }
  };
  
  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      </div>
    );
  }
  
  if (!course) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Course Not Found</h1>
          <p className="text-gray-600">The course you're looking for doesn't exist or has been removed.</p>
        </div>
      </div>
    );
  }
  
  return (
    <div>
      <div className="bg-blue-50 border-b border-blue-100">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-wrap items-center text-sm">
            <a href="/" className="text-gray-500 hover:text-gray-700">Home</a>
            <span className="mx-2 text-gray-400">/</span>
            <a href="/courses" className="text-gray-500 hover:text-gray-700">Courses</a>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-700">{course.title}</span>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        <CourseOverview 
          course={course}
          progress={enrollment?.progress || 0}
          isEnrolled={!!enrollment}
          onEnroll={handleEnroll}
        />
      </div>
    </div>
  );
};