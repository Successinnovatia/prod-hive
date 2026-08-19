import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, Mail, Lock, Eye, EyeOff, CheckCircle, ArrowRight, Target } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    currentRole: '',
    experience: '',
    agreeToTerms: false,
    subscribeNewsletter: true
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (!formData.currentRole) {
      newErrors.currentRole = 'Please select your current role';
    }

    if (!formData.experience) {
      newErrors.experience = 'Please select your experience level';
    }

    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = 'You must agree to the terms and conditions';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle registration logic here
      console.log('Registration data:', formData);
      alert('Registration successful! Welcome to TechPod.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const currentRoles = [
    'Software Engineer',
    'Business Analyst',
    'UX/UI Designer',
    'Marketing Manager',
    'Operations Manager',
    'Data Analyst',
    'Project Manager',
    'Consultant',
    'Entrepreneur',
    'Student',
    'Other'
  ];

  const experienceLevels = [
    '0-1 years',
    '2-3 years',
    '4-5 years',
    '6-8 years',
    '9+ years'
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-32 pb-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-gradient-to-br from-primary to-accent p-3 rounded-lg">
                <Target className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Join TechPod Community
            </h1>
            <p className="text-xl text-muted-foreground">
              Start your product management journey with Africa's premier PM community
            </p>
          </div>

          {/* Registration Form */}
          <div className="bg-card border border-border rounded-xl p-8 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                    First Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-ring focus:border-ring transition-colors duration-200 ${
                        errors.firstName ? 'border-red-500' : 'border-input'
                      }`}
                      placeholder="Enter your first name"
                    />
                  </div>
                  {errors.firstName && (
                    <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                    Last Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-ring focus:border-ring transition-colors duration-200 ${
                        errors.lastName ? 'border-red-500' : 'border-input'
                      }`}
                      placeholder="Enter your last name"
                    />
                  </div>
                  {errors.lastName && (
                    <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>
                  )}
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-ring focus:border-ring transition-colors duration-200 ${
                      errors.email ? 'border-red-500' : 'border-input'
                    }`}
                    placeholder="your.email@example.com"
                  />
                </div>
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                )}
              </div>

              {/* Password Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-foreground mb-2">
                    Password *
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className={`w-full pl-10 pr-12 py-3 border rounded-lg focus:ring-2 focus:ring-ring focus:border-ring transition-colors duration-200 ${
                        errors.password ? 'border-red-500' : 'border-input'
                      }`}
                      placeholder="Create a password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-muted-foreground"
                    >
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                  {errors.password && (
                    <p className="mt-1 text-sm text-red-600">{errors.password}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-foreground mb-2">
                    Confirm Password *
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      id="confirmPassword"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className={`w-full pl-10 pr-12 py-3 border rounded-lg focus:ring-2 focus:ring-ring focus:border-ring transition-colors duration-200 ${
                        errors.confirmPassword ? 'border-red-500' : 'border-input'
                      }`}
                      placeholder="Confirm your password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-muted-foreground"
                    >
                      {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                  {errors.confirmPassword && (
                    <p className="mt-1 text-sm text-red-600">{errors.confirmPassword}</p>
                  )}
                </div>
              </div>

              {/* Professional Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="currentRole" className="block text-sm font-medium text-foreground mb-2">
                    Current Role *
                  </label>
                  <select
                    id="currentRole"
                    name="currentRole"
                    value={formData.currentRole}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-ring focus:border-ring transition-colors duration-200 ${
                      errors.currentRole ? 'border-red-500' : 'border-input'
                    }`}
                  >
                    <option value="">Select your current role</option>
                    {currentRoles.map((role) => (
                      <option key={role} value={role}>{role}</option>
                    ))}
                  </select>
                  {errors.currentRole && (
                    <p className="mt-1 text-sm text-red-600">{errors.currentRole}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="experience" className="block text-sm font-medium text-foreground mb-2">
                    Years of Experience *
                  </label>
                  <select
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-ring focus:border-ring transition-colors duration-200 ${
                      errors.experience ? 'border-red-500' : 'border-input'
                    }`}
                  >
                    <option value="">Select experience level</option>
                    {experienceLevels.map((level) => (
                      <option key={level} value={level}>{level}</option>
                    ))}
                  </select>
                  {errors.experience && (
                    <p className="mt-1 text-sm text-red-600">{errors.experience}</p>
                  )}
                </div>
              </div>

              {/* Checkboxes */}
              <div className="space-y-4">
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="agreeToTerms"
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={handleChange}
                    className="mt-1 h-4 w-4 text-primary focus:ring-ring border-input rounded"
                  />
                  <label htmlFor="agreeToTerms" className="ml-3 text-sm text-foreground">
                    I agree to the{' '}
                    <Link to="/terms" className="text-primary hover:text-primary underline">
                      Terms and Conditions
                    </Link>{' '}
                    and{' '}
                    <Link to="/privacy" className="text-primary hover:text-primary underline">
                      Privacy Policy
                    </Link>
                    *
                  </label>
                </div>
                {errors.agreeToTerms && (
                  <p className="text-sm text-red-600">{errors.agreeToTerms}</p>
                )}

                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="subscribeNewsletter"
                    name="subscribeNewsletter"
                    checked={formData.subscribeNewsletter}
                    onChange={handleChange}
                    className="mt-1 h-4 w-4 text-primary focus:ring-ring border-input rounded"
                  />
                  <label htmlFor="subscribeNewsletter" className="ml-3 text-sm text-foreground">
                    Subscribe to our newsletter for PM insights, job opportunities, and community updates
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground py-4 rounded-lg hover:bg-primary/90 transition-all duration-200 font-semibold flex items-center justify-center space-x-2 hover:scale-105"
              >
                <span>Create Account</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </form>

            {/* Sign In Link */}
            <div className="mt-6 text-center">
              <p className="text-muted-foreground">
                Already have an account?{' '}
                <Link to="/signin" className="text-primary hover:text-primary font-medium">
                  Sign in here
                </Link>
              </p>
            </div>
          </div>

          {/* Benefits */}
          <div className="mt-8 bg-gradient-to-br from-background via-primary/5 to-accent/10 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4 text-center">
              What you'll get as a member:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Access to exclusive PM resources and templates',
                'Job opportunities from top African companies',
                'Mentorship from experienced product managers',
                'Networking with 500+ PM professionals',
                'Free courses and learning materials',
                'Salary insights and career guidance'
              ].map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default RegisterPage;