import React, { useState } from 'react';
import { X, Play, BookOpen, Clock, Users, Star, CheckCircle, Download, ArrowRight } from 'lucide-react';

interface Course {
  id: number;
  title: string;
  description: string;
  instructor: string;
  instructorRole: string;
  duration: string;
  lessons: number;
  students: number;
  rating: number;
  level: string;
  category: string;
  image: string;
  price: string;
  topics: string[];
  featured: boolean;
}

interface CourseModalProps {
  isOpen: boolean;
  onClose: () => void;
  course: Course | null;
  mode: 'start' | 'preview';
}

const CourseModal: React.FC<CourseModalProps> = ({ isOpen, onClose, course, mode }) => {
  const [currentLesson, setCurrentLesson] = useState(1);
  const [completedLessons, setCompletedLessons] = useState<number[]>([]);
  const [isEnrolled, setIsEnrolled] = useState(false);

  if (!isOpen || !course) return null;

  const lessons = [
    { id: 1, title: 'Introduction to African Markets', duration: '15 min', type: 'video' },
    { id: 2, title: 'Market Research Fundamentals', duration: '20 min', type: 'video' },
    { id: 3, title: 'Cultural Considerations', duration: '18 min', type: 'reading' },
    { id: 4, title: 'Regulatory Landscape Overview', duration: '25 min', type: 'video' },
    { id: 5, title: 'Infrastructure Challenges', duration: '22 min', type: 'interactive' },
    { id: 6, title: 'Payment Systems Analysis', duration: '30 min', type: 'case-study' },
    { id: 7, title: 'Mobile-First Strategy', duration: '28 min', type: 'video' },
    { id: 8, title: 'Localization Best Practices', duration: '35 min', type: 'workshop' }
  ];

  const handleEnroll = () => {
    setIsEnrolled(true);
    setCurrentLesson(1);
  };

  const markLessonComplete = (lessonId: number) => {
    if (!completedLessons.includes(lessonId)) {
      setCompletedLessons([...completedLessons, lessonId]);
    }
    if (lessonId < lessons.length) {
      setCurrentLesson(lessonId + 1);
    }
  };

  const getProgressPercentage = () => {
    return (completedLessons.length / lessons.length) * 100;
  };

  const getLessonIcon = (type: string) => {
    switch (type) {
      case 'video': return <Play className="h-4 w-4" />;
      case 'reading': return <BookOpen className="h-4 w-4" />;
      case 'interactive': return <Users className="h-4 w-4" />;
      case 'case-study': return <Star className="h-4 w-4" />;
      case 'workshop': return <ArrowRight className="h-4 w-4" />;
      default: return <BookOpen className="h-4 w-4" />;
    }
  };

  if (mode === 'preview') {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Course Preview</h2>
              <p className="text-gray-600">{course.title}</p>
            </div>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Course Info */}
              <div>
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-48 object-cover rounded-lg mb-6"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-4">{course.title}</h3>
                <p className="text-gray-600 mb-6">{course.description}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-blue-50 p-4 rounded-lg text-center">
                    <Clock className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                    <div className="font-semibold text-gray-900">{course.duration}</div>
                    <div className="text-sm text-gray-600">Duration</div>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg text-center">
                    <BookOpen className="h-6 w-6 text-green-600 mx-auto mb-2" />
                    <div className="font-semibold text-gray-900">{course.lessons}</div>
                    <div className="text-sm text-gray-600">Lessons</div>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg text-center">
                    <Users className="h-6 w-6 text-purple-600 mx-auto mb-2" />
                    <div className="font-semibold text-gray-900">{course.students.toLocaleString()}</div>
                    <div className="text-sm text-gray-600">Students</div>
                  </div>
                  <div className="bg-yellow-50 p-4 rounded-lg text-center">
                    <Star className="h-6 w-6 text-yellow-600 mx-auto mb-2" />
                    <div className="font-semibold text-gray-900">{course.rating}</div>
                    <div className="text-sm text-gray-600">Rating</div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">What You'll Learn:</h4>
                  <div className="space-y-2">
                    {course.topics.slice(0, 4).map((topic, index) => (
                      <div key={index} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        <span className="text-gray-700">{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button 
                  onClick={handleEnroll}
                  className="w-full bg-orange-600 text-white py-3 rounded-lg hover:bg-orange-700 transition-colors duration-200"
                >
                  Enroll in Course - {course.price}
                </button>
              </div>

              {/* Curriculum Preview */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Course Curriculum</h4>
                <div className="space-y-3">
                  {lessons.slice(0, 6).map((lesson, index) => (
                    <div key={lesson.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center">
                        <div className="bg-white p-2 rounded mr-3">
                          {getLessonIcon(lesson.type)}
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">{lesson.title}</div>
                          <div className="text-sm text-gray-600">{lesson.duration}</div>
                        </div>
                      </div>
                      {index === 0 && (
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
                          Free Preview
                        </span>
                      )}
                    </div>
                  ))}
                  <div className="text-center text-gray-500 text-sm">
                    +{lessons.length - 6} more lessons
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">{course.title}</h2>
            <p className="text-gray-600">by {course.instructor}</p>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X className="h-6 w-6" />
          </button>
        </div>

        {!isEnrolled ? (
          <div className="p-6 text-center">
            <div className="max-w-2xl mx-auto">
              <img 
                src={course.image} 
                alt={course.title}
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Start Learning?</h3>
              <p className="text-gray-600 mb-6">
                Join {course.students.toLocaleString()} other students in this comprehensive course 
                on {course.title.toLowerCase()}.
              </p>
              <button 
                onClick={handleEnroll}
                className="bg-orange-600 text-white px-8 py-3 rounded-lg hover:bg-orange-700 transition-colors duration-200 text-lg font-semibold"
              >
                Start Course - {course.price}
              </button>
            </div>
          </div>
        ) : (
          <div className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Course Content */}
              <div className="lg:col-span-2">
                <div className="bg-gray-900 rounded-lg p-8 text-center text-white mb-6">
                  <Play className="h-16 w-16 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">
                    Lesson {currentLesson}: {lessons[currentLesson - 1]?.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    Duration: {lessons[currentLesson - 1]?.duration}
                  </p>
                  <button 
                    onClick={() => markLessonComplete(currentLesson)}
                    className="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition-colors duration-200"
                  >
                    {completedLessons.includes(currentLesson) ? 'Lesson Complete' : 'Mark as Complete'}
                  </button>
                </div>

                {/* Progress */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">Course Progress</span>
                    <span className="text-sm text-gray-500">{completedLessons.length}/{lessons.length} lessons</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-green-500 h-2 rounded-full transition-all duration-300" 
                      style={{ width: `${getProgressPercentage()}%` }}
                    ></div>
                  </div>
                  <div className="text-sm text-gray-600 mt-1">
                    {getProgressPercentage().toFixed(0)}% Complete
                  </div>
                </div>
              </div>

              {/* Lesson List */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Course Lessons</h4>
                <div className="space-y-2">
                  {lessons.map((lesson) => (
                    <div 
                      key={lesson.id}
                      onClick={() => setCurrentLesson(lesson.id)}
                      className={`p-3 rounded-lg cursor-pointer transition-colors duration-200 ${
                        currentLesson === lesson.id 
                          ? 'bg-orange-100 border border-orange-200' 
                          : 'bg-gray-50 hover:bg-gray-100'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className={`p-1 rounded mr-2 ${
                            completedLessons.includes(lesson.id) 
                              ? 'bg-green-100 text-green-600' 
                              : 'bg-gray-200 text-gray-600'
                          }`}>
                            {completedLessons.includes(lesson.id) ? (
                              <CheckCircle className="h-4 w-4" />
                            ) : (
                              getLessonIcon(lesson.type)
                            )}
                          </div>
                          <div>
                            <div className="font-medium text-gray-900 text-sm">{lesson.title}</div>
                            <div className="text-xs text-gray-600">{lesson.duration}</div>
                          </div>
                        </div>
                        {currentLesson === lesson.id && (
                          <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {getProgressPercentage() === 100 && (
                  <div className="mt-6 p-4 bg-green-50 rounded-lg text-center">
                    <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-2" />
                    <h4 className="font-semibold text-green-800">Course Complete!</h4>
                    <p className="text-sm text-green-600 mb-3">
                      Congratulations on completing the course!
                    </p>
                    <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200 text-sm">
                      Download Certificate
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseModal;