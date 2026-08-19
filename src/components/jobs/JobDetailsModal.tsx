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
    <div className="fixed inset-0 bg-foreground/50 flex items-center justify-center z-50 p-4">
      <div className="bg-card rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div className="flex items-center gap-4">
            <img 
              src={job.companyLogo} 
              alt={job.company}
              className="w-16 h-16 rounded-lg object-cover"
            />
            <div>
              <h2 className="text-2xl font-bold text-foreground">{job.title}</h2>
              <p className="text-lg text-muted-foreground">{job.company}</p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
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
          <button onClick={onClose} className="text-muted-foreground hover:text-muted-foreground">
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
                  <span className="bg-warning/15 text-warning px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </span>
                )}
                {job.urgent && (
                  <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                    Urgent
                  </span>
                )}
                {job.remote && (
                  <span className="bg-success/15 text-success px-3 py-1 rounded-full text-sm font-medium">
                    Remote
                  </span>
                )}
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                  {job.type}
                </span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                  {job.level}
                </span>
              </div>

              {/* Job Description */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Job Description</h3>
                <p className="text-foreground leading-relaxed">{job.description}</p>
              </div>

              {/* Requirements */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Requirements</h3>
                <ul className="space-y-2">
                  {job.requirements.map((requirement, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-success mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{requirement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Benefits & Perks</h3>
                <ul className="space-y-2">
                  {job.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Skills */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Required Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {job.skills.map((skill, index) => (
                    <span key={index} className="bg-muted text-foreground px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Info */}
              <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-semibold text-foreground mb-3">Job Details</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <DollarSign className="h-4 w-4 text-muted-foreground mr-2" />
                      <span className="text-sm text-muted-foreground">Salary</span>
                    </div>
                    <span className="font-medium">{job.salary}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Building className="h-4 w-4 text-muted-foreground mr-2" />
                      <span className="text-sm text-muted-foreground">Company Size</span>
                    </div>
                    <span className="font-medium">{job.companySize}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Users className="h-4 w-4 text-muted-foreground mr-2" />
                      <span className="text-sm text-muted-foreground">Level</span>
                    </div>
                    <span className="font-medium">{job.level}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 text-muted-foreground mr-2" />
                      <span className="text-sm text-muted-foreground">Posted</span>
                    </div>
                    <span className="font-medium">{getTimeAgo(job.postedDate)}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button 
                  onClick={() => onApply(job)}
                  className="w-full btn-fill py-3 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <ExternalLink className="h-4 w-4" />
                  <span>Apply Now</span>
                </button>
                
                <div className="flex space-x-2">
                  <button
                    onClick={() => onToggleSave(job.id)}
                    className={`flex-1 py-2 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2 ${
                      savedJobs.includes(job.id)
                        ? 'bg-primary/10 text-primary border border-primary/30'
                        : 'bg-muted text-muted-foreground hover:bg-accent'
                    }`}
                  >
                    <Bookmark className="h-4 w-4" />
                    <span>{savedJobs.includes(job.id) ? 'Saved' : 'Save'}</span>
                  </button>
                  
                  <button
                    onClick={shareJob}
                    className="flex-1 bg-muted text-muted-foreground py-2 rounded-lg hover:bg-accent transition-colors duration-200 flex items-center justify-center space-x-2"
                  >
                    <Share2 className="h-4 w-4" />
                    <span>Share</span>
                  </button>
                </div>
              </div>

              {/* Company Info */}
              <div className="bg-accent p-4 rounded-lg">
                <h3 className="font-semibold text-foreground mb-3">About {job.company}</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {job.company} is a leading technology company in Africa, focused on building innovative 
                  products that serve millions of users across the continent.
                </p>
                <button className="text-primary hover:text-primary text-sm font-medium flex items-center">
                  View Company Profile
                  <ExternalLink className="h-3 w-3 ml-1" />
                </button>
              </div>

              {/* Similar Jobs */}
              <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-semibold text-foreground mb-3">Similar Jobs</h3>
                <div className="space-y-2">
                  <div className="text-sm">
                    <div className="font-medium text-foreground">Senior Product Manager</div>
                    <div className="text-muted-foreground">Paystack • Lagos, Nigeria</div>
                  </div>
                  <div className="text-sm">
                    <div className="font-medium text-foreground">Product Lead</div>
                    <div className="text-muted-foreground">Jumia • Nairobi, Kenya</div>
                  </div>
                  <div className="text-sm">
                    <div className="font-medium text-foreground">Principal PM</div>
                    <div className="text-muted-foreground">Interswitch • Remote</div>
                  </div>
                </div>
                <button className="text-primary hover:text-primary text-sm font-medium mt-3">
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