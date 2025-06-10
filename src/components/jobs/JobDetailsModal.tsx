import React from 'react';
import { X, MapPin, DollarSign, Clock, Building, Users, ExternalLink, Bookmark, Share2, CheckCircle } from 'lucide-react';

interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  level: string;
  salary: string;
  postedDate: string;
  description: string;
  requirements: string[];
  benefits: string[];
  companySize: string;
  companyLogo: string;
  featured: boolean;
  urgent: boolean;
  remote: boolean;
  skills: string[];
}

interface JobDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  job: Job | null;
  onApply: (job: Job) => void;
  savedJobs: string[];
  onToggleSave: (jobId: string) => void;
}

const JobDetailsModal: React.FC<JobDetailsModalProps> = ({ 
  isOpen, 
  onClose, 
  job, 
  onApply, 
  savedJobs, 
  onToggleSave 
}) => {
  if (!isOpen || !job) return null;

  const getTimeAgo = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) return '1 day ago';
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
    return `${Math.floor(diffDays / 30)} months ago`;
  };

  const shareJob = () => {
    if (navigator.share) {
      navigator.share({
        title: `${job.title} at ${job.company}`,
        text: `Check out this Product Manager position: ${job.title} at ${job.company}`,
        url: window.location.href
      });
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Job link copied to clipboard!');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center gap-4">
            <img 
              src={job.companyLogo} 
              alt={job.company}
              className="w-16 h-16 rounded-lg object-cover"
            />
            <div>
              <h2 className="text-2xl font-bold text-gray-900">{job.title}</h2>
              <p className="text-lg text-gray-600">{job.company}</p>
              <div className="flex items-center gap-4 text-sm text-gray-500 mt-1">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  {job.location}
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  {getTimeAgo(job.postedDate)}
                </div>
              </div>
            </div>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Job Tags */}
              <div className="flex flex-wrap gap-2">
                {job.featured && (
                  <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </span>
                )}
                {job.urgent && (
                  <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                    Urgent
                  </span>
                )}
                {job.remote && (
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    Remote
                  </span>
                )}
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  {job.type}
                </span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                  {job.level}
                </span>
              </div>

              {/* Job Description */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Job Description</h3>
                <p className="text-gray-700 leading-relaxed">{job.description}</p>
              </div>

              {/* Requirements */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Requirements</h3>
                <ul className="space-y-2">
                  {job.requirements.map((requirement, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{requirement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Benefits & Perks</h3>
                <ul className="space-y-2">
                  {job.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Skills */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Required Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {job.skills.map((skill, index) => (
                    <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Info */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-3">Job Details</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <DollarSign className="h-4 w-4 text-gray-400 mr-2" />
                      <span className="text-sm text-gray-600">Salary</span>
                    </div>
                    <span className="font-medium">{job.salary}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Building className="h-4 w-4 text-gray-400 mr-2" />
                      <span className="text-sm text-gray-600">Company Size</span>
                    </div>
                    <span className="font-medium">{job.companySize}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Users className="h-4 w-4 text-gray-400 mr-2" />
                      <span className="text-sm text-gray-600">Level</span>
                    </div>
                    <span className="font-medium">{job.level}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 text-gray-400 mr-2" />
                      <span className="text-sm text-gray-600">Posted</span>
                    </div>
                    <span className="font-medium">{getTimeAgo(job.postedDate)}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button 
                  onClick={() => onApply(job)}
                  className="w-full bg-orange-600 text-white py-3 rounded-lg hover:bg-orange-700 transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <ExternalLink className="h-4 w-4" />
                  <span>Apply Now</span>
                </button>
                
                <div className="flex space-x-2">
                  <button
                    onClick={() => onToggleSave(job.id)}
                    className={`flex-1 py-2 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2 ${
                      savedJobs.includes(job.id)
                        ? 'bg-orange-100 text-orange-600 border border-orange-200'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    <Bookmark className="h-4 w-4" />
                    <span>{savedJobs.includes(job.id) ? 'Saved' : 'Save'}</span>
                  </button>
                  
                  <button
                    onClick={shareJob}
                    className="flex-1 bg-gray-100 text-gray-600 py-2 rounded-lg hover:bg-gray-200 transition-colors duration-200 flex items-center justify-center space-x-2"
                  >
                    <Share2 className="h-4 w-4" />
                    <span>Share</span>
                  </button>
                </div>
              </div>

              {/* Company Info */}
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-3">About {job.company}</h3>
                <p className="text-sm text-gray-600 mb-3">
                  {job.company} is a leading technology company in Africa, focused on building innovative 
                  products that serve millions of users across the continent.
                </p>
                <button className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center">
                  View Company Profile
                  <ExternalLink className="h-3 w-3 ml-1" />
                </button>
              </div>

              {/* Similar Jobs */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-3">Similar Jobs</h3>
                <div className="space-y-2">
                  <div className="text-sm">
                    <div className="font-medium text-gray-900">Senior Product Manager</div>
                    <div className="text-gray-600">Paystack • Lagos, Nigeria</div>
                  </div>
                  <div className="text-sm">
                    <div className="font-medium text-gray-900">Product Lead</div>
                    <div className="text-gray-600">Jumia • Nairobi, Kenya</div>
                  </div>
                  <div className="text-sm">
                    <div className="font-medium text-gray-900">Principal PM</div>
                    <div className="text-gray-600">Interswitch • Remote</div>
                  </div>
                </div>
                <button className="text-orange-600 hover:text-orange-700 text-sm font-medium mt-3">
                  View All Similar Jobs
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetailsModal;