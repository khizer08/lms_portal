import React, { useState } from 'react';
import { 
  SlidersHorizontal,
  BookOpen,
  Award,
  Search,
  Check,
  X
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { CourseList } from '../components/CourseList';
import { courses } from '../data/mockData';
import { Badge } from '../components/ui/Badge';
import { Card, CardContent } from '../components/ui/Card';
import { Course } from '../types';

type LevelFilter = 'all' | 'beginner' | 'intermediate' | 'advanced';
type CategoryFilter = 'all' | 'React' | 'UX' | 'Data Science' | 'Marketing';

export const CoursesPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [levelFilter, setLevelFilter] = useState<LevelFilter>('all');
  const [categoryFilter, setCategoryFilter] = useState<CategoryFilter>('all');
  const [filtersVisible, setFiltersVisible] = useState(false);
  
  const toggleFilters = () => setFiltersVisible(!filtersVisible);
  
  const clearFilters = () => {
    setLevelFilter('all');
    setCategoryFilter('all');
    setSearchQuery('');
  };
  
  const filteredCourses = courses.filter((course) => {
    // Search filter
    if (searchQuery && !course.title.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    
    // Level filter
    if (levelFilter !== 'all' && course.level !== levelFilter) {
      return false;
    }
    
    // Category filter
    if (categoryFilter !== 'all' && !course.tags.includes(categoryFilter)) {
      return false;
    }
    
    return true;
  });

  return (
    <div>
      <div className="bg-blue-50 border-b border-blue-100">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-1">Explore Courses</h1>
          <p className="text-gray-600">Discover new skills, expand your knowledge</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Filters sidebar - mobile toggle */}
          <div className="w-full md:hidden mb-4">
            <Button 
              variant="outline" 
              className="w-full flex items-center justify-center"
              onClick={toggleFilters}
            >
              <SlidersHorizontal size={16} className="mr-2" />
              {filtersVisible ? 'Hide Filters' : 'Show Filters'}
            </Button>
          </div>
          
          {/* Filters sidebar */}
          <div className={`${filtersVisible ? 'block' : 'hidden'} md:block md:w-64 flex-shrink-0`}>
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-semibold">Filters</h2>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="h-8 px-2 text-gray-500 hover:text-gray-700"
                    onClick={clearFilters}
                  >
                    <X size={14} className="mr-1" />
                    Clear
                  </Button>
                </div>
                
                {/* Search */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Search
                  </label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search courses..."
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
                
                {/* Level filter */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Level
                  </label>
                  <div className="space-y-2">
                    {['all', 'beginner', 'intermediate', 'advanced'].map((level) => (
                      <div 
                        key={level}
                        className="flex items-center"
                      >
                        <button
                          onClick={() => setLevelFilter(level as LevelFilter)}
                          className="w-full flex items-center p-2 rounded-md hover:bg-gray-100 transition-colors"
                        >
                          <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${levelFilter === level ? 'border-blue-600' : 'border-gray-300'}`}>
                            {levelFilter === level && (
                              <div className="w-2 h-2 rounded-full bg-blue-600" />
                            )}
                          </div>
                          <span className="ml-2 capitalize">
                            {level === 'all' ? 'All Levels' : level}
                          </span>
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Category filter */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category
                  </label>
                  <div className="space-y-2">
                    {['all', 'React', 'UX', 'Data Science', 'Marketing'].map((category) => (
                      <div 
                        key={category}
                        className="flex items-center"
                      >
                        <button
                          onClick={() => setCategoryFilter(category as CategoryFilter)}
                          className="w-full flex items-center p-2 rounded-md hover:bg-gray-100 transition-colors"
                        >
                          <div className={`w-4 h-4 rounded flex items-center justify-center ${categoryFilter === category ? 'bg-blue-600 border-blue-600' : 'border border-gray-300'}`}>
                            {categoryFilter === category && (
                              <Check size={12} className="text-white" />
                            )}
                          </div>
                          <span className="ml-2">
                            {category === 'all' ? 'All Categories' : category}
                          </span>
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Course list */}
          <div className="flex-1">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div>
                <p className="text-gray-500 text-sm">
                  Showing <span className="font-medium text-gray-900">{filteredCourses.length}</span> of <span className="font-medium text-gray-900">{courses.length}</span> courses
                </p>
              </div>
              
              {/* Active filters */}
              <div className="flex flex-wrap gap-2">
                {levelFilter !== 'all' && (
                  <Badge variant="secondary\" className="flex items-center gap-1">
                    <span className="capitalize">{levelFilter}</span>
                    <button 
                      onClick={() => setLevelFilter('all')}
                      className="ml-1 h-4 w-4 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300"
                    >
                      <X size={10} />
                    </button>
                  </Badge>
                )}
                {categoryFilter !== 'all' && (
                  <Badge variant="secondary" className="flex items-center gap-1">
                    <span>{categoryFilter}</span>
                    <button 
                      onClick={() => setCategoryFilter('all')}
                      className="ml-1 h-4 w-4 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300"
                    >
                      <X size={10} />
                    </button>
                  </Badge>
                )}
                {(levelFilter !== 'all' || categoryFilter !== 'all' || searchQuery) && (
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="h-7 px-2 text-sm"
                    onClick={clearFilters}
                  >
                    Clear all
                  </Button>
                )}
              </div>
            </div>
            
            <CourseList 
              courses={filteredCourses} 
              emptyMessage="No courses match your filters. Try adjusting your search criteria."
            />
          </div>
        </div>
      </div>
    </div>
  );
};