import React, { useState } from "react";
import {
  Upload,
  FileText,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const ContributePage = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    type: "free",
    format: "",
    tags: "",
    authorName: "",
    authorRole: "",
    authorCompany: "",
    authorBio: "",
    whatYouGet: "",
    requirements: "",
    targetAudience: "",
  });
  const [files, setFiles] = useState<File[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const categories = [
    { id: "templates", name: "Templates & Frameworks" },
    { id: "guides", name: "Learning Materials" },
    { id: "videos", name: "Video Content" },
    { id: "tools", name: "Tools & Software" },
    { id: "case-studies", name: "Case Studies" },
  ];

  const resourceTypes = [
    { id: "free", name: "Free Resource" },
    { id: "premium", name: "Premium Content" },
    { id: "member-only", name: "Member Only" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    setIsSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files));
    }
  };

  const guidelines = [
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Quality Content",
      description:
        "Ensure your resource is well-structured, professionally written, and provides real value to African PMs.",
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "African Context",
      description:
        "Include considerations specific to African markets, regulations, and cultural contexts where relevant.",
    },
    {
      icon: <Upload className="h-6 w-6" />,
      title: "Proper Formatting",
      description:
        "Use clear headings, bullet points, and visual elements to make your content easy to consume.",
    },
    {
      icon: <AlertCircle className="h-6 w-6" />,
      title: "Original Work",
      description:
        "Only submit original content or properly attributed resources with appropriate permissions.",
    },
  ];

  const benefits = [
    "Get recognized as a thought leader in the African PM community",
    "Build your personal brand and professional network",
    "Help fellow PMs succeed in their careers",
    "Receive feedback and engagement from the community",
    "Potential speaking opportunities at ProdHive events",
    "Featured author spotlight in our newsletter",
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-white" id="#">
        <Header />
        <div className="pt-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <div className="bg-green-50 p-8 rounded-2xl">
                <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                  Thank You for Contributing!
                </h1>
                <p className="text-xl text-gray-600 mb-6">
                  Your resource has been submitted for review. Our team will
                  evaluate it within 3-5 business days and notify you once it's
                  approved and published.
                </p>
                <div className="bg-white p-6 rounded-lg border border-green-200 mb-6">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    What happens next?
                  </h3>
                  <ul className="text-left text-gray-600 space-y-2">
                    <li>• Our editorial team reviews your submission</li>
                    <li>
                      • We may reach out for clarifications or improvements
                    </li>
                    <li>
                      • Once approved, your resource goes live on the platform
                    </li>
                    <li>
                      • You'll receive an email confirmation with the live link
                    </li>
                  </ul>
                </div>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors duration-200 mr-4"
                >
                  Submit Another Resource
                </button>
                <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                  View My Submissions
                </button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-12 bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Contribute to the Community
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Share your knowledge and help fellow product managers across
                Africa succeed. Contribute templates, guides, case studies, and
                more to our growing resource library.
              </p>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Form */}
            <div className="lg:col-span-2">
              <div className="bg-white border border-gray-200 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Submit Your Resource
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Basic Information */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Basic Information
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <label
                          htmlFor="title"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Resource Title *
                        </label>
                        <input
                          type="text"
                          id="title"
                          name="title"
                          required
                          value={formData.title}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                          placeholder="e.g., Product Requirements Document Template for African Markets"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="description"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Short Description *
                        </label>
                        <textarea
                          id="description"
                          name="description"
                          required
                          rows={3}
                          value={formData.description}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                          placeholder="Brief description of what this resource provides..."
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label
                            htmlFor="category"
                            className="block text-sm font-medium text-gray-700 mb-2"
                          >
                            Category *
                          </label>
                          <select
                            id="category"
                            name="category"
                            required
                            value={formData.category}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                          >
                            <option value="">Select a category</option>
                            {categories.map((category) => (
                              <option key={category.id} value={category.id}>
                                {category.name}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label
                            htmlFor="type"
                            className="block text-sm font-medium text-gray-700 mb-2"
                          >
                            Resource Type *
                          </label>
                          <select
                            id="type"
                            name="type"
                            required
                            value={formData.type}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                          >
                            {resourceTypes.map((type) => (
                              <option key={type.id} value={type.id}>
                                {type.name}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label
                            htmlFor="format"
                            className="block text-sm font-medium text-gray-700 mb-2"
                          >
                            Format *
                          </label>
                          <input
                            type="text"
                            id="format"
                            name="format"
                            required
                            value={formData.format}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                            placeholder="e.g., Google Docs, PDF, Figma"
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="tags"
                            className="block text-sm font-medium text-gray-700 mb-2"
                          >
                            Tags *
                          </label>
                          <input
                            type="text"
                            id="tags"
                            name="tags"
                            required
                            value={formData.tags}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                            placeholder="e.g., PRD, Documentation, Planning"
                          />
                          <p className="text-sm text-gray-500 mt-1">
                            Separate tags with commas
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* File Upload */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Upload Files
                    </h3>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-orange-500 transition-colors duration-200">
                      <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <div className="mb-4">
                        <label htmlFor="file-upload" className="cursor-pointer">
                          <span className="text-orange-600 hover:text-orange-700 font-medium">
                            Click to upload
                          </span>
                          <span className="text-gray-600">
                            {" "}
                            or drag and drop
                          </span>
                        </label>
                        <input
                          id="file-upload"
                          type="file"
                          multiple
                          onChange={handleFileUpload}
                          className="hidden"
                          accept=".pdf,.doc,.docx,.ppt,.pptx,.xls,.xlsx,.zip,.fig"
                        />
                      </div>
                      <p className="text-sm text-gray-500">
                        PDF, DOC, PPT, XLS, ZIP, Figma files up to 50MB each
                      </p>
                      {files.length > 0 && (
                        <div className="mt-4 text-left">
                          <h4 className="font-medium text-gray-900 mb-2">
                            Selected Files:
                          </h4>
                          <ul className="space-y-1">
                            {files.map((file, index) => (
                              <li
                                key={index}
                                className="text-sm text-gray-600 flex items-center"
                              >
                                <FileText className="h-4 w-4 mr-2" />
                                {file.name} (
                                {(file.size / 1024 / 1024).toFixed(2)} MB)
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Detailed Information */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Detailed Information
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <label
                          htmlFor="whatYouGet"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          What Users Will Get *
                        </label>
                        <textarea
                          id="whatYouGet"
                          name="whatYouGet"
                          required
                          rows={4}
                          value={formData.whatYouGet}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                          placeholder="List what's included in this resource (one item per line)"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="requirements"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Requirements
                        </label>
                        <textarea
                          id="requirements"
                          name="requirements"
                          rows={3}
                          value={formData.requirements}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                          placeholder="What users need to use this resource effectively"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="targetAudience"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Target Audience *
                        </label>
                        <textarea
                          id="targetAudience"
                          name="targetAudience"
                          required
                          rows={2}
                          value={formData.targetAudience}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                          placeholder="Who is this resource designed for?"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Author Information */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Author Information
                    </h3>
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label
                            htmlFor="authorName"
                            className="block text-sm font-medium text-gray-700 mb-2"
                          >
                            Your Name *
                          </label>
                          <input
                            type="text"
                            id="authorName"
                            name="authorName"
                            required
                            value={formData.authorName}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="authorRole"
                            className="block text-sm font-medium text-gray-700 mb-2"
                          >
                            Your Role *
                          </label>
                          <input
                            type="text"
                            id="authorRole"
                            name="authorRole"
                            required
                            value={formData.authorRole}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                            placeholder="e.g., Senior Product Manager"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="authorCompany"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Company/Organization
                        </label>
                        <input
                          type="text"
                          id="authorCompany"
                          name="authorCompany"
                          value={formData.authorCompany}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="authorBio"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Short Bio *
                        </label>
                        <textarea
                          id="authorBio"
                          name="authorBio"
                          required
                          rows={3}
                          value={formData.authorBio}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                          placeholder="Brief description of your background and expertise"
                        />
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-orange-600 text-white px-6 py-4 rounded-lg hover:bg-orange-700 transition-colors duration-200 font-semibold"
                  >
                    Submit Resource for Review
                  </button>
                </form>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Guidelines */}
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Submission Guidelines
                  </h3>
                  <div className="space-y-4">
                    {guidelines.map((guideline, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="bg-orange-100 p-2 rounded-lg flex-shrink-0">
                          <div className="text-orange-600">
                            {guideline.icon}
                          </div>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 mb-1">
                            {guideline.title}
                          </h4>
                          <p className="text-sm text-gray-600">
                            {guideline.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Benefits */}
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Why Contribute?
                  </h3>
                  <ul className="space-y-2">
                    {benefits.map((benefit, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-sm text-gray-700"
                      >
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Contact */}
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Need Help?
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Have questions about contributing? Our team is here to help.
                  </p>
                  <Link to="/support">
                    <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm">
                      Contact Support
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContributePage;
