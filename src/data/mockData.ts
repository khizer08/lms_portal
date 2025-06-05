import { Course, Enrollment, Notification, User } from '../types';

export const currentUser: User = {
  id: 'user1',
  name: 'Alex Johnson',
  email: 'alex.johnson@example.com',
  avatar: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=100',
  role: 'student'
};

export const notifications: Notification[] = [
  {
    id: 'notif1',
    userId: 'user1',
    title: 'New lesson available',
    message: 'A new lesson has been added to "Advanced React Patterns"',
    date: '2025-06-10T10:30:00Z',
    read: false,
    type: 'announcement'
  },
  {
    id: 'notif2',
    userId: 'user1',
    title: 'Assignment deadline approaching',
    message: 'Your assignment for "UX Design Principles" is due in 2 days',
    date: '2025-06-09T14:20:00Z',
    read: true,
    type: 'deadline'
  },
  {
    id: 'notif3',
    userId: 'user1',
    title: 'Feedback received',
    message: 'Your instructor has provided feedback on your recent project',
    date: '2025-06-08T09:15:00Z',
    read: true,
    type: 'message'
  }
];

export const courses: Course[] = [
  {
    id: 'course1',
    title: 'Advanced React Patterns',
    description: 'Master advanced React patterns including compound components, render props, higher-order components, and hooks. Learn how to build scalable and maintainable React applications with these powerful techniques.',
    instructor: 'Sarah Miller',
    instructorAvatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100',
    thumbnail: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=600',
    duration: '10h 30m',
    level: 'advanced',
    rating: 4.8,
    totalRatings: 324,
    tags: ['React', 'JavaScript', 'Frontend'],
    enrolledStudents: 1248,
    price: 89.99,
    isFeatured: true,
    modules: [
      {
        id: 'module1',
        title: 'Introduction to Advanced Patterns',
        description: 'Overview of the course and introduction to advanced React patterns',
        duration: '45m',
        lessons: [
          { id: 'lesson1', title: 'Course Overview', type: 'video', duration: '10m', isCompleted: true },
          { id: 'lesson2', title: 'Why Advanced Patterns Matter', type: 'video', duration: '15m', isCompleted: true },
          { id: 'lesson3', title: 'Setting Up Your Environment', type: 'article', duration: '20m', isCompleted: false }
        ]
      },
      {
        id: 'module2',
        title: 'Compound Components Pattern',
        description: 'Learn how to build flexible and composable component APIs',
        duration: '2h 15m',
        lessons: [
          { id: 'lesson4', title: 'Introduction to Compound Components', type: 'video', duration: '20m', isCompleted: false },
          { id: 'lesson5', title: 'Building a Compound Component', type: 'video', duration: '35m', isCompleted: false },
          { id: 'lesson6', title: 'Practice Exercise', type: 'quiz', duration: '30m', isCompleted: false }
        ]
      }
    ]
  },
  {
    id: 'course2',
    title: 'UX Design Principles',
    description: 'Learn the fundamental principles of UX design and how to apply them to create intuitive and delightful user experiences. This course covers everything from user research to prototyping.',
    instructor: 'Michael Chen',
    instructorAvatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100',
    thumbnail: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
    duration: '8h 45m',
    level: 'intermediate',
    rating: 4.6,
    totalRatings: 215,
    tags: ['UX', 'Design', 'UI'],
    enrolledStudents: 972,
    price: 69.99,
    isFeatured: false,
    modules: [
      {
        id: 'module1',
        title: 'Introduction to UX Design',
        description: 'Fundamentals of user experience design',
        duration: '1h 30m',
        lessons: [
          { id: 'lesson1', title: 'What is UX Design?', type: 'video', duration: '15m', isCompleted: true },
          { id: 'lesson2', title: 'The UX Design Process', type: 'video', duration: '20m', isCompleted: true },
          { id: 'lesson3', title: 'UX vs UI', type: 'article', duration: '15m', isCompleted: true }
        ]
      },
      {
        id: 'module2',
        title: 'User Research Methods',
        description: 'Learn various methods for conducting effective user research',
        duration: '2h',
        lessons: [
          { id: 'lesson4', title: 'User Interviews', type: 'video', duration: '25m', isCompleted: true },
          { id: 'lesson5', title: 'Surveys and Questionnaires', type: 'video', duration: '20m', isCompleted: false },
          { id: 'lesson6', title: 'Research Exercise', type: 'quiz', duration: '30m', isCompleted: false }
        ]
      }
    ]
  },
  {
    id: 'course3',
    title: 'Data Science Fundamentals',
    description: 'A comprehensive introduction to data science concepts and techniques. Learn how to analyze and interpret complex data, use statistical methods, and create insightful visualizations.',
    instructor: 'David Wang',
    instructorAvatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100',
    thumbnail: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600',
    duration: '12h 15m',
    level: 'beginner',
    rating: 4.7,
    totalRatings: 189,
    tags: ['Data Science', 'Python', 'Statistics'],
    enrolledStudents: 845,
    price: 79.99,
    isFeatured: true,
    modules: [
      {
        id: 'module1',
        title: 'Introduction to Data Science',
        description: 'Overview of data science concepts and applications',
        duration: '1h 15m',
        lessons: [
          { id: 'lesson1', title: 'What is Data Science?', type: 'video', duration: '15m', isCompleted: false },
          { id: 'lesson2', title: 'The Data Science Process', type: 'video', duration: '20m', isCompleted: false },
          { id: 'lesson3', title: 'Setting Up Your Environment', type: 'article', duration: '20m', isCompleted: false }
        ]
      },
      {
        id: 'module2',
        title: 'Python for Data Science',
        description: 'Essential Python programming skills for data analysis',
        duration: '3h',
        lessons: [
          { id: 'lesson4', title: 'Python Basics', type: 'video', duration: '45m', isCompleted: false },
          { id: 'lesson5', title: 'Working with NumPy', type: 'video', duration: '30m', isCompleted: false },
          { id: 'lesson6', title: 'Python Practice', type: 'quiz', duration: '30m', isCompleted: false }
        ]
      }
    ]
  },
  {
    id: 'course4',
    title: 'Digital Marketing Mastery',
    description: 'Learn how to create and implement effective digital marketing strategies. This course covers SEO, social media marketing, content creation, email campaigns, and analytics.',
    instructor: 'Emma Rodriguez',
    instructorAvatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100',
    thumbnail: 'https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg?auto=compress&cs=tinysrgb&w=600',
    duration: '9h 30m',
    level: 'intermediate',
    rating: 4.5,
    totalRatings: 156,
    tags: ['Marketing', 'SEO', 'Social Media'],
    enrolledStudents: 720,
    price: 59.99,
    isFeatured: false,
    modules: [
      {
        id: 'module1',
        title: 'Digital Marketing Fundamentals',
        description: 'Introduction to key digital marketing concepts',
        duration: '1h 45m',
        lessons: [
          { id: 'lesson1', title: 'Digital Marketing Overview', type: 'video', duration: '20m', isCompleted: false },
          { id: 'lesson2', title: 'Creating a Marketing Strategy', type: 'video', duration: '25m', isCompleted: false },
          { id: 'lesson3', title: 'Understanding Your Audience', type: 'article', duration: '15m', isCompleted: false }
        ]
      },
      {
        id: 'module2',
        title: 'Search Engine Optimization',
        description: 'Learn how to improve your website\'s visibility in search engines',
        duration: '2h 30m',
        lessons: [
          { id: 'lesson4', title: 'SEO Fundamentals', type: 'video', duration: '30m', isCompleted: false },
          { id: 'lesson5', title: 'Keyword Research', type: 'video', duration: '25m', isCompleted: false },
          { id: 'lesson6', title: 'On-Page SEO', type: 'video', duration: '35m', isCompleted: false }
        ]
      }
    ]
  }
];

export const enrollments: Enrollment[] = [
  {
    id: 'enroll1',
    courseId: 'course1',
    userId: 'user1',
    progress: 25,
    startDate: '2025-05-15T00:00:00Z',
    lastAccessDate: '2025-06-10T14:30:00Z',
    certificateIssued: false
  },
  {
    id: 'enroll2',
    courseId: 'course2',
    userId: 'user1',
    progress: 75,
    startDate: '2025-04-20T00:00:00Z',
    lastAccessDate: '2025-06-09T10:15:00Z',
    certificateIssued: false
  }
];

export const recommendedCourses = [
  courses[2],
  courses[3]
];

export function getCourse(id: string): Course | undefined {
  return courses.find(course => course.id === id);
}

export function getEnrollments(userId: string): Enrollment[] {
  return enrollments.filter(enrollment => enrollment.userId === userId);
}

export function getEnrolledCourses(userId: string): Course[] {
  const userEnrollments = getEnrollments(userId);
  return userEnrollments
    .map(enrollment => courses.find(course => course.id === enrollment.courseId))
    .filter((course): course is Course => course !== undefined);
}

export function getUserNotifications(userId: string): Notification[] {
  return notifications.filter(notification => notification.userId === userId);
}

export function getUnreadNotificationsCount(userId: string): number {
  return getUserNotifications(userId).filter(notification => !notification.read).length;
}