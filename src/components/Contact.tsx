import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Calendar, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    currentRole: '',
    interest: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email Us',
      details: 'hello@pmafrica.com',
      subtext: 'We typically respond within 24 hours'
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Call Us',
      details: '+234 800 123 4567',
      subtext: 'Monday - Friday, 9AM - 6PM WAT'
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: 'Our Locations',
      details: 'Lagos • Nairobi • Cairo',
      subtext: 'Serving product managers across Africa'
    }
  ];

  const faqs = [
    {
      question: 'Do I need technical experience to join?',
      answer: 'While technical background helps, we welcome professionals from all backgrounds including business, design, marketing, and operations.'
    },
    {
      question: 'What is the time commitment?',
      answer: 'The program requires 8-10 hours per week including live sessions, assignments, and project work. All sessions are recorded for flexibility.'
    },
    {
      question: 'Is job placement guaranteed?',
      answer: 'While we cannot guarantee placement, our 85% success rate speaks to the effectiveness of our program and career support services.'
    }
  ];

  if (isSubmitted) {
    return (
      <section id="contact\" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-green-50 p-8 rounded-2xl">
              <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Thank You!</h2>
              <p className="text-gray-600 mb-6">
                We've received your message and will get back to you within 24 hours. 
                In the meantime, join our community to start connecting with other aspiring PMs.
              </p>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors duration-200"
              >
                Send Another Message
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to start your PM journey? Have questions about our program? 
            We're here to help you take the next step in your career.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-200"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-200"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-200"
                    placeholder="+234 800 123 4567"
                  />
                </div>
                <div>
                  <label htmlFor="currentRole" className="block text-sm font-medium text-gray-700 mb-2">
                    Current Role
                  </label>
                  <input
                    type="text"
                    id="currentRole"
                    name="currentRole"
                    value={formData.currentRole}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-200"
                    placeholder="e.g., Software Engineer"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-2">
                  How can we help you? *
                </label>
                <select
                  id="interest"
                  name="interest"
                  required
                  value={formData.interest}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-200"
                >
                  <option value="">Select an option</option>
                  <option value="program">Join the Transition Program</option>
                  <option value="community">Join the Community</option>
                  <option value="mentorship">Find a Mentor</option>
                  <option value="partnership">Partnership Opportunities</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-200"
                  placeholder="Tell us about your background and goals..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-orange-600 text-white px-6 py-4 rounded-lg hover:bg-orange-700 transition-all duration-200 font-semibold flex items-center justify-center space-x-2"
              >
                <Send className="h-5 w-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-orange-100 p-3 rounded-lg">
                      <div className="text-orange-600">{info.icon}</div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{info.title}</h4>
                      <p className="text-gray-900">{info.details}</p>
                      <p className="text-sm text-gray-600">{info.subtext}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            {/* <div className="bg-blue-50 p-6 rounded-xl">
              <h4 className="font-bold text-gray-900 mb-4">Quick Actions</h4>
              <div className="space-y-3">
                <button className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>Schedule a Call</span>
                </button>
                <button className="w-full bg-white text-blue-600 border-2 border-blue-600 px-4 py-3 rounded-lg hover:bg-blue-50 transition-colors duration-200 flex items-center justify-center space-x-2">
                  <MessageCircle className="h-4 w-4" />
                  <span>Join WhatsApp Group</span>
                </button>
              </div>
            </div> */}

            {/* FAQs */}
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Frequently Asked Questions</h4>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-l-4 border-orange-500 pl-4">
                    <h5 className="font-medium text-gray-900 mb-1">{faq.question}</h5>
                    <p className="text-sm text-gray-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;