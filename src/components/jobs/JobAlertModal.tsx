import React, { useState } from 'react';
import { X, Bell, CheckCircle } from 'lucide-react';

interface JobAlertModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const JobAlertModal: React.FC<JobAlertModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    email: '',
    jobTitle: '',
    location: 'all',
    experienceLevel: 'all',
    jobType: 'all',
    salaryRange: 'all',
    frequency: 'daily'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const locations = [
    { id: 'all', name: 'All Locations' },
    { id: 'nigeria', name: 'Nigeria' },
    { id: 'kenya', name: 'Kenya' },
    { id: 'south-africa', name: 'South Africa' },
    { id: 'egypt', name: 'Egypt' },
    { id: 'ghana', name: 'Ghana' },
    { id: 'remote', name: 'Remote' }
  ];

  const experienceLevels = [
    { id: 'all', name: 'All Levels' },
    { id: 'junior', name: 'Junior (0-2 years)' },
    { id: 'mid-level', name: 'Mid-level (3-5 years)' },
    { id: 'senior', name: 'Senior (5+ years)' },
    { id: 'lead', name: 'Lead/Principal' }
  ];

  const jobTypes = [
    { id: 'all', name: 'All Types' },
    { id: 'full-time', name: 'Full-time' },
    { id: 'part-time', name: 'Part-time' },
    { id: 'contract', name: 'Contract' },
    { id: 'freelance', name: 'Freelance' }
  ];

  const salaryRanges = [
    { id: 'all', name: 'All Salaries' },
    { id: '0-50k', name: '$0 - $50,000' },
    { id: '50k-75k', name: '$50,000 - $75,000' },
    { id: '75k-100k', name: '$75,000 - $100,000' },
    { id: '100k+', name: '$100,000+' }
  ];

  const frequencies = [
    { id: 'daily', name: 'Daily' },
    { id: 'weekly', name: 'Weekly' },
    { id: 'monthly', name: 'Monthly' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitted(true);
      // In a real app, this would submit to an API
      setTimeout(() => {
        setIsSubmitted(false);
        onClose();
        // Reset form
        setFormData({
          email: '',
          jobTitle: '',
          location: 'all',
          experienceLevel: 'all',
          jobType: 'all',
          salaryRange: 'all',
          frequency: 'daily'
        });
        setErrors({});
      }, 2000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  if (!isOpen) return null;

  if (isSubmitted) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-xl max-w-md w-full p-8 text-center">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Job Alert Created!</h2>
          <p className="text-gray-600 mb-6">
            You'll receive {formData.frequency} notifications about new PM jobs matching your criteria. 
            You can manage your alerts anytime from your profile.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-sm text-blue-800">
              💡 <strong>Pro Tip:</strong> Set up multiple alerts with different criteria to catch all relevant opportunities!
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center">
            <div className="bg-blue-500 p-2 rounded-lg mr-3">
              <Bell className="h-6 w-6 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900">Create Job Alert</h2>
              <p className="text-gray-600">Get notified when new jobs match your criteria</p>
            </div>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X className="h-6 w-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="your.email@example.com"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          {/* Job Title Keywords */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Job Title Keywords</label>
            <input
              type="text"
              name="jobTitle"
              value={formData.jobTitle}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="e.g., Product Manager, Senior PM, Product Lead"
            />
            <p className="text-sm text-gray-500 mt-1">Leave empty to get alerts for all PM roles</p>
          </div>

          {/* Filters */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
              <select
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                {locations.map(location => (
                  <option key={location.id} value={location.id}>{location.name}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Experience Level</label>
              <select
                name="experienceLevel"
                value={formData.experienceLevel}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                {experienceLevels.map(level => (
                  <option key={level.id} value={level.id}>{level.name}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Job Type</label>
              <select
                name="jobType"
                value={formData.jobType}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                {jobTypes.map(type => (
                  <option key={type.id} value={type.id}>{type.name}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Salary Range</label>
              <select
                name="salaryRange"
                value={formData.salaryRange}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                {salaryRanges.map(range => (
                  <option key={range.id} value={range.id}>{range.name}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Notification Frequency */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Notification Frequency</label>
            <select
              name="frequency"
              value={formData.frequency}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              {frequencies.map(freq => (
                <option key={freq.id} value={freq.id}>{freq.name}</option>
              ))}
            </select>
          </div>

          {/* Alert Preview */}
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-medium text-blue-900 mb-2">Alert Preview</h3>
            <p className="text-sm text-blue-800">
              You'll receive {formData.frequency} emails about{' '}
              {formData.jobTitle ? `"${formData.jobTitle}"` : 'Product Manager'} jobs{' '}
              {formData.location !== 'all' && `in ${locations.find(l => l.id === formData.location)?.name}`}
              {formData.experienceLevel !== 'all' && ` for ${experienceLevels.find(l => l.id === formData.experienceLevel)?.name.toLowerCase()}`}
              {formData.salaryRange !== 'all' && ` with salary ${salaryRanges.find(r => r.id === formData.salaryRange)?.name}`}.
            </p>
          </div>

          {/* Submit Button */}
          <div className="flex space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 border border-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <Bell className="h-4 w-4" />
              <span>Create Alert</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JobAlertModal;