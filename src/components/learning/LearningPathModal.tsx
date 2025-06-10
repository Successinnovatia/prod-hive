import React, { useState } from 'react';
import { X, Target, CheckCircle, ArrowRight, Clock, Award, Users } from 'lucide-react';

interface LearningPath {
  id: string;
  title: string;
  description: string;
  courses: number;
  duration: string;
  level: string;
  icon: React.ReactNode;
  color: string;
  steps: string[];
}

interface LearningPathModalProps {
  isOpen: boolean;
  onClose: () => void;
  path: LearningPath | null;
}

const LearningPathModal: React.FC<LearningPathModalProps> = ({ isOpen, onClose, path }) => {
  const [enrolledSteps, setEnrolledSteps] = useState<number[]>([]);
  const [currentStep, setCurrentStep] = useState(0);

  if (!isOpen || !path) return null;

  const pathCourses = [
    { id: 1, title: 'PM Fundamentals', duration: '4 weeks', status: 'available' },
    { id: 2, title: 'Market Research Techniques', duration: '2 weeks', status: 'locked' },
    { id: 3, title: 'Product Strategy Development', duration: '3 weeks', status: 'locked' },
    { id: 4, title: 'Technical Skills for PMs', duration: '2 weeks', status: 'locked' },
    { id: 5, title: 'Stakeholder Management', duration: '1 week', status: 'locked' },
    { id: 6, title: 'Portfolio Building Workshop', duration: '2 weeks', status: 'locked' }
  ];

  const handleEnroll = () => {
    setEnrolledSteps([0]);
    setCurrentStep(0);
  };

  const completeStep = (stepIndex: number) => {
    if (!enrolledSteps.includes(stepIndex)) {
      setEnrolledSteps([...enrolledSteps, stepIndex]);
    }
    if (stepIndex < path.steps.length - 1) {
      setCurrentStep(stepIndex + 1);
    }
  };

  const getStepStatus = (index: number) => {
    if (enrolledSteps.includes(index)) return 'completed';
    if (index === currentStep) return 'current';
    if (index < currentStep) return 'available';
    return 'locked';
  };

  const getProgressPercentage = () => {
    return (enrolledSteps.length / path.steps.length) * 100;
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center">
            <div className={`${path.color} w-12 h-12 rounded-lg flex items-center justify-center mr-4 text-white`}>
              {path.icon}
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">{path.title}</h2>
              <p className="text-gray-600">{path.description}</p>
            </div>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="p-6">
          {/* Path Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-blue-50 p-4 rounded-lg text-center">
              <Clock className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <div className="font-semibold text-gray-900">{path.duration}</div>
              <div className="text-sm text-gray-600">Total Duration</div>
            </div>
            <div className="bg-green-50 p-4 rounded-lg text-center">
              <Target className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <div className="font-semibold text-gray-900">{path.courses} Courses</div>
              <div className="text-sm text-gray-600">Structured Learning</div>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg text-center">
              <Award className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <div className="font-semibold text-gray-900">{path.level}</div>
              <div className="text-sm text-gray-600">Difficulty Level</div>
            </div>
          </div>

          {enrolledSteps.length > 0 && (
            <div className="mb-8">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">Learning Progress</span>
                <span className="text-sm text-gray-500">{enrolledSteps.length}/{path.steps.length} steps</span>
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
          )}

          {/* Learning Steps */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Learning Journey</h3>
            <div className="space-y-4">
              {path.steps.map((step, index) => {
                const status = getStepStatus(index);
                const course = pathCourses[index];
                
                return (
                  <div key={index} className={`flex items-center p-4 rounded-lg border-2 transition-all duration-200 ${
                    status === 'completed' ? 'bg-green-50 border-green-200' :
                    status === 'current' ? 'bg-orange-50 border-orange-200' :
                    status === 'available' ? 'bg-blue-50 border-blue-200' :
                    'bg-gray-50 border-gray-200'
                  }`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-4 ${
                      status === 'completed' ? 'bg-green-500 text-white' :
                      status === 'current' ? 'bg-orange-500 text-white' :
                      status === 'available' ? 'bg-blue-500 text-white' :
                      'bg-gray-300 text-gray-600'
                    }`}>
                      {status === 'completed' ? (
                        <CheckCircle className="h-5 w-5" />
                      ) : (
                        <span className="text-sm font-semibold">{index + 1}</span>
                      )}
                    </div>
                    
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">{step}</h4>
                      {course && (
                        <div className="text-sm text-gray-600">
                          {course.title} • {course.duration}
                        </div>
                      )}
                    </div>
                    
                    {status === 'current' && enrolledSteps.length > 0 && (
                      <button
                        onClick={() => completeStep(index)}
                        className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors duration-200 text-sm"
                      >
                        Complete Step
                      </button>
                    )}
                    
                    {status === 'locked' && (
                      <span className="text-gray-400 text-sm">Locked</span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-4">
            {enrolledSteps.length === 0 ? (
              <button 
                onClick={handleEnroll}
                className="flex-1 bg-orange-600 text-white py-3 rounded-lg hover:bg-orange-700 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Target className="h-5 w-5" />
                <span>Start Learning Path</span>
              </button>
            ) : (
              <button className="flex-1 bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors duration-200 flex items-center justify-center space-x-2">
                <Users className="h-5 w-5" />
                <span>Continue Learning</span>
              </button>
            )}
            
            <button 
              onClick={onClose}
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
            >
              Close
            </button>
          </div>

          {getProgressPercentage() === 100 && (
            <div className="mt-6 p-6 bg-green-50 rounded-lg text-center">
              <Award className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-green-800 mb-2">Learning Path Complete!</h3>
              <p className="text-green-600 mb-4">
                Congratulations! You've completed the {path.title} learning path.
              </p>
              <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors duration-200">
                Download Certificate
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LearningPathModal;