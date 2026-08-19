import React, { useState } from 'react';
import { X, Upload, Send, CheckCircle, AlertCircle } from 'lucide-react';

interface JobApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  job: {
    id: string;
    title: string;
    company: string;
    location: string;
    salary: string;
  } | null;
}

const JobApplicationModal: React.FC<JobApplicationModalProps> = ({ isOpen, onClose, job }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    currentRole: '',
    experience: '',
    coverLetter: '',
    linkedinUrl: '',
    portfolioUrl: ''
  });
  const [resume, setResume] = useState<File | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    if (!formData.coverLetter.trim()) newErrors.coverLetter = 'Cover letter is required';
    if (!resume) newErrors.resume = 'Resume is required';

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitted(true);
      // In a real app, this would submit to an API
      setTimeout(() => {
        setIsSubmitted(false);
        onClose();
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          currentRole: '',
          experience: '',
          coverLetter: '',
          linkedinUrl: '',
          portfolioUrl: ''
        });
        setResume(null);
        setErrors({});
      }, 2000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResume(e.target.files[0]);
      if (errors.resume) {
        setErrors(prev => ({ ...prev, resume: '' }));
      }
    }
  };

  if (!isOpen || !job) return null;

  if (isSubmitted) {
    return (
      <div className="fixed inset-0 bg-foreground/50 flex items-center justify-center z-50 p-4">
        <div className="bg-card rounded-xl max-w-md w-full p-8 text-center">
          <CheckCircle className="h-16 w-16 text-success mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-foreground mb-4">Application Submitted!</h2>
          <p className="text-muted-foreground mb-6">
            Your application for {job.title} at {job.company} has been submitted successfully. 
            You'll hear back from the hiring team within 5-7 business days.
          </p>
          <div className="bg-primary/10 p-4 rounded-lg">
            <p className="text-sm text-primary">
              💡 <strong>Next Steps:</strong> Check your email for confirmation and follow up on LinkedIn with the hiring manager.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-foreground/50 flex items-center justify-center z-50 p-4">
      <div className="bg-card rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div>
            <h2 className="text-xl font-bold text-foreground">Apply for Position</h2>
            <p className="text-muted-foreground">{job.title} at {job.company}</p>
          </div>
          <button onClick={onClose} className="text-muted-foreground hover:text-muted-foreground">
            <X className="h-6 w-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Personal Information */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Personal Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">First Name *</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-ring focus:border-ring ${
                    errors.firstName ? 'border-destructive' : 'border-input'
                  }`}
                />
                {errors.firstName && <p className="text-destructive text-sm mt-1">{errors.firstName}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Last Name *</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-ring focus:border-ring ${
                    errors.lastName ? 'border-destructive' : 'border-input'
                  }`}
                />
                {errors.lastName && <p className="text-destructive text-sm mt-1">{errors.lastName}</p>}
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Contact Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-ring focus:border-ring ${
                    errors.email ? 'border-destructive' : 'border-input'
                  }`}
                />
                {errors.email && <p className="text-destructive text-sm mt-1">{errors.email}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Phone *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-ring focus:border-ring ${
                    errors.phone ? 'border-destructive' : 'border-input'
                  }`}
                />
                {errors.phone && <p className="text-destructive text-sm mt-1">{errors.phone}</p>}
              </div>
            </div>
          </div>

          {/* Professional Information */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Professional Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Current Role</label>
                <input
                  type="text"
                  name="currentRole"
                  value={formData.currentRole}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-input rounded-lg focus:ring-2 focus:ring-ring focus:border-ring"
                  placeholder="e.g., Senior Software Engineer"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Years of Experience</label>
                <select
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-input rounded-lg focus:ring-2 focus:ring-ring focus:border-ring"
                >
                  <option value="">Select experience</option>
                  <option value="0-1">0-1 years</option>
                  <option value="2-3">2-3 years</option>
                  <option value="4-5">4-5 years</option>
                  <option value="6-8">6-8 years</option>
                  <option value="9+">9+ years</option>
                </select>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Professional Links</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">LinkedIn URL</label>
                <input
                  type="url"
                  name="linkedinUrl"
                  value={formData.linkedinUrl}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-input rounded-lg focus:ring-2 focus:ring-ring focus:border-ring"
                  placeholder="https://linkedin.com/in/yourprofile"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Portfolio URL</label>
                <input
                  type="url"
                  name="portfolioUrl"
                  value={formData.portfolioUrl}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-input rounded-lg focus:ring-2 focus:ring-ring focus:border-ring"
                  placeholder="https://yourportfolio.com"
                />
              </div>
            </div>
          </div>

          {/* Resume Upload */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Resume *</label>
            <div className={`border-2 border-dashed rounded-lg p-6 text-center ${
              errors.resume ? 'border-destructive bg-destructive/10' : 'border-input hover:border-primary'
            }`}>
              <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
              <div className="mb-2">
                <label htmlFor="resume-upload" className="cursor-pointer">
                  <span className="text-primary hover:text-primary font-medium">Click to upload</span>
                  <span className="text-muted-foreground"> or drag and drop</span>
                </label>
                <input
                  id="resume-upload"
                  type="file"
                  onChange={handleFileUpload}
                  className="hidden"
                  accept=".pdf,.doc,.docx"
                />
              </div>
              <p className="text-sm text-muted-foreground">PDF, DOC, DOCX up to 10MB</p>
              {resume && (
                <div className="mt-2 text-sm text-success">
                  ✓ {resume.name} ({(resume.size / 1024 / 1024).toFixed(2)} MB)
                </div>
              )}
            </div>
            {errors.resume && <p className="text-destructive text-sm mt-1">{errors.resume}</p>}
          </div>

          {/* Cover Letter */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Cover Letter *</label>
            <textarea
              name="coverLetter"
              value={formData.coverLetter}
              onChange={handleChange}
              rows={6}
              className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-ring focus:border-ring ${
                errors.coverLetter ? 'border-destructive' : 'border-input'
              }`}
              placeholder="Tell us why you're interested in this role and what makes you a great fit..."
            />
            {errors.coverLetter && <p className="text-destructive text-sm mt-1">{errors.coverLetter}</p>}
          </div>

          {/* Submit Button */}
          <div className="flex space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 border border-input text-foreground py-3 rounded-lg hover:bg-accent transition-colors duration-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 btn-fill py-3 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <Send className="h-4 w-4" />
              <span>Submit Application</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JobApplicationModal;