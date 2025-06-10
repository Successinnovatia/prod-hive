import { useState } from "react";
import {
  BookOpen,
  FileText,
  Users,
  Clock,
  Star,
  Play,
  Download,
  CheckCircle,
  Award,
  Target,
  Globe,
  Smartphone,
  DollarSign,
  ArrowRight,
  Search,
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CourseModal from "../components/learning/CourseModal";
import LearningPathModal from "../components/learning/LearningPathModal";
import { Link } from "react-router-dom";

const LearningPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedLevel, setSelectedLevel] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  // Modal states
  const [courseModal, setCourseModal] = useState<{
    isOpen: boolean;
    course: any;
    mode: "start" | "preview";
  }>({
    isOpen: false,
    course: null,
    mode: "start",
  });
  const [pathModal, setPathModal] = useState<{ isOpen: boolean; path: any }>({
    isOpen: false,
    path: null,
  });

  const categories = [
    { id: "all", name: "All Content", count: 42 },
    { id: "fundamentals", name: "PM Fundamentals", count: 12 },
    { id: "african-markets", name: "African Markets", count: 8 },
    { id: "fintech", name: "Fintech", count: 6 },
    { id: "mobile", name: "Mobile Products", count: 5 },
    { id: "case-studies", name: "Case Studies", count: 7 },
    { id: "career", name: "Career Development", count: 4 },
  ];

  const levels = [
    { id: "all", name: "All Levels" },
    { id: "beginner", name: "Beginner" },
    { id: "intermediate", name: "Intermediate" },
    { id: "advanced", name: "Advanced" },
  ];

  const featuredCourses = [
    {
      id: 1,
      title: "Product Management for African Markets",
      description:
        "Comprehensive course covering the unique challenges and opportunities of building products for African markets.",
      instructor: "Aisha Bello",
      instructorRole: "Senior PM at Flutterwave",
      duration: "8 weeks",
      lessons: 24,
      students: 1247,
      rating: 4.9,
      level: "intermediate",
      category: "african-markets",
      image:
        "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600",
      price: "Free",
      topics: [
        "Market Research in Africa",
        "Cultural Considerations",
        "Infrastructure Challenges",
        "Regulatory Landscape",
        "Payment Systems",
        "Mobile-First Design",
        "Localization Strategies",
        "Go-to-Market Planning",
      ],
      featured: true,
    },
    {
      id: 2,
      title: "Fintech Product Management Masterclass",
      description:
        "Deep dive into building fintech products for emerging markets with focus on financial inclusion.",
      instructor: "Kwame Nkrumah",
      instructorRole: "Product Lead at Safaricom",
      duration: "6 weeks",
      lessons: 18,
      students: 892,
      rating: 4.8,
      level: "advanced",
      category: "fintech",
      image:
        "https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=600",
      price: "Premium",
      topics: [
        "Financial Inclusion Principles",
        "Regulatory Compliance",
        "Risk Management",
        "Payment Infrastructure",
        "Digital Banking",
        "Microfinance Products",
        "Security & Trust",
        "Scaling Strategies",
      ],
      featured: true,
    },
    {
      id: 3,
      title: "Mobile-First Product Strategy",
      description:
        "Learn to build products optimized for mobile devices and low-connectivity environments.",
      instructor: "Fatoumata Diallo",
      instructorRole: "Product Director at Jumia",
      duration: "4 weeks",
      lessons: 12,
      students: 1534,
      rating: 4.7,
      level: "intermediate",
      category: "mobile",
      image:
        "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=600",
      price: "Free",
      topics: [
        "Mobile UX Principles",
        "Offline-First Design",
        "Data Optimization",
        "Progressive Web Apps",
        "Device Constraints",
        "Performance Optimization",
        "User Onboarding",
        "Retention Strategies",
      ],
      featured: true,
    },
  ];

  const learningPaths = [
    {
      id: "transition",
      title: "Career Transition to PM",
      description:
        "Complete pathway for professionals transitioning into product management",
      courses: 6,
      duration: "12 weeks",
      level: "beginner",
      icon: <Target className="h-8 w-8" />,
      color: "bg-blue-500",
      steps: [
        "PM Fundamentals",
        "Market Research",
        "Product Strategy",
        "Technical Skills",
        "Stakeholder Management",
        "Portfolio Building",
      ],
    },
    {
      id: "african-pm",
      title: "African Market Specialist",
      description: "Become an expert in building products for African markets",
      courses: 8,
      duration: "16 weeks",
      level: "intermediate",
      icon: <Globe className="h-8 w-8" />,
      color: "bg-green-500",
      steps: [
        "African Market Dynamics",
        "Cultural Intelligence",
        "Regulatory Navigation",
        "Infrastructure Adaptation",
        "Localization Mastery",
        "Partnership Strategies",
        "Scaling Across Borders",
        "Impact Measurement",
      ],
    },
    {
      id: "fintech-expert",
      title: "Fintech Product Expert",
      description: "Master fintech product development for emerging markets",
      courses: 7,
      duration: "14 weeks",
      level: "advanced",
      icon: <DollarSign className="h-8 w-8" />,
      color: "bg-purple-500",
      steps: [
        "Financial Services Landscape",
        "Regulatory Compliance",
        "Risk & Security",
        "Payment Systems",
        "Digital Banking",
        "Blockchain & Crypto",
        "Financial Inclusion",
      ],
    },
    {
      id: "mobile-master",
      title: "Mobile Product Master",
      description: "Excel at building mobile products for emerging markets",
      courses: 5,
      duration: "10 weeks",
      level: "intermediate",
      icon: <Smartphone className="h-8 w-8" />,
      color: "bg-orange-500",
      steps: [
        "Mobile Strategy",
        "UX for Constraints",
        "Performance Optimization",
        "Offline Capabilities",
        "App Store Success",
      ],
    },
  ];

  const caseStudies = [
    {
      id: "mpesa-mobile-payments",
      title: "How M-Pesa Revolutionized Mobile Payments",
      company: "Safaricom",
      country: "Kenya",
      category: "Fintech",
      readTime: "15 min",
      image:
        "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400",
      keyLessons: [
        "Understanding unbanked populations",
        "Building trust in digital payments",
        "Agent network strategy",
        "Regulatory partnership",
      ],
    },
    {
      id: "jumia-localization",
      title: "Jumia's E-commerce Localization Strategy",
      company: "Jumia",
      country: "Multi-country",
      category: "E-commerce",
      readTime: "12 min",
      image:
        "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400",
      keyLessons: [
        "Multi-country product strategy",
        "Local payment integration",
        "Logistics optimization",
        "Cultural adaptation",
      ],
    },
    {
      id: "flutterwave-api",
      title: "Flutterwave's Cross-Border Payment Solution",
      company: "Flutterwave",
      country: "Nigeria",
      category: "Fintech",
      readTime: "18 min",
      image:
        "https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=400",
      keyLessons: [
        "API-first product design",
        "Developer ecosystem building",
        "Regulatory compliance",
        "International expansion",
      ],
    },
  ];

  const guides = [
    {
      id: 1,
      title: "Complete Guide to African Market Research",
      description: "Comprehensive methodology for researching African markets",
      downloadCount: 3247,
      pages: 45,
      format: "PDF",
      image:
        "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=300",
      filename: "african-market-research-guide.pdf",
    },
    {
      id: 2,
      title: "Regulatory Compliance Handbook",
      description: "Navigate regulations across 54 African countries",
      downloadCount: 1856,
      pages: 78,
      format: "PDF",
      image:
        "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=300",
      filename: "fintech-pm-playbook.pdf",
    },
    {
      id: 3,
      title: "Mobile UX Design Principles for Africa",
      description: "Design guidelines for mobile products in emerging markets",
      downloadCount: 2134,
      pages: 32,
      format: "PDF",
      image:
        "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=300",
      filename: "mobile-ux-guide.pdf",
    },
  ];

  const filteredCourses = featuredCourses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || course.category === selectedCategory;
    const matchesLevel =
      selectedLevel === "all" || course.level === selectedLevel;

    return matchesSearch && matchesCategory && matchesLevel;
  });

  // Modal handlers
  const handleStartCourse = (course: any) => {
    setCourseModal({ isOpen: true, course, mode: "start" });
  };

  const handlePreviewCourse = (course: any) => {
    setCourseModal({ isOpen: true, course, mode: "preview" });
  };

  const handleStartLearningPath = (path: any) => {
    setPathModal({ isOpen: true, path });
  };

  const handleDownloadGuide = (filename: string) => {
    const link = document.createElement("a");
    link.href = `/downloads/${filename}`;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Learning Hub
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Master product management with courses, case studies, and guides
              specifically designed for African markets and emerging economies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search courses, guides, case studies..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
            </div>
            <div className="flex items-center justify-center space-x-8 mt-6 text-sm text-gray-600">
              <div className="flex items-center">
                <BookOpen className="h-5 w-5 mr-2 text-blue-600" />
                <span>42 Courses</span>
              </div>
              <div className="flex items-center">
                <FileText className="h-5 w-5 mr-2 text-green-600" />
                <span>15 Case Studies</span>
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 mr-2 text-purple-600" />
                <span>8k+ Students</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Paths */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Learning Paths
            </h2>
            <p className="text-xl text-gray-600">
              Structured learning journeys to master specific aspects of product
              management
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {learningPaths.map((path) => (
              <div
                key={path.id}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className={`${path.color} w-16 h-16 rounded-lg flex items-center justify-center mb-4 text-white`}
                >
                  {path.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {path.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{path.description}</p>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>{path.courses} courses</span>
                  <span>{path.duration}</span>
                  <span className="capitalize">{path.level}</span>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">
                    Learning Steps:
                  </h4>
                  <ul className="space-y-1">
                    {path.steps.slice(0, 3).map((step, index) => (
                      <li
                        key={index}
                        className="text-xs text-gray-600 flex items-center"
                      >
                        <div className="w-1 h-1 bg-orange-500 rounded-full mr-2"></div>
                        {step}
                      </li>
                    ))}
                    {path.steps.length > 3 && (
                      <li className="text-xs text-gray-500">
                        +{path.steps.length - 3} more steps
                      </li>
                    )}
                  </ul>
                </div>

                <button
                  onClick={() => handleStartLearningPath(path)}
                  className="w-full bg-gray-900 text-white py-2 rounded-lg hover:bg-gray-800 transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <span>Start Learning</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filters */}
            <div className="lg:w-1/4">
              <div className="bg-white p-6 rounded-xl shadow-sm sticky top-24">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Categories
                </h3>
                <div className="space-y-2 mb-6">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-colors duration-200 flex items-center justify-between ${
                        selectedCategory === category.id
                          ? "bg-orange-100 text-orange-800"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      <span>{category.name}</span>
                      <span className="text-sm text-gray-500">
                        {category.count}
                      </span>
                    </button>
                  ))}
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Level
                </h3>
                <div className="space-y-2">
                  {levels.map((level) => (
                    <button
                      key={level.id}
                      onClick={() => setSelectedLevel(level.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-colors duration-200 ${
                        selectedLevel === level.id
                          ? "bg-orange-100 text-orange-800"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      {level.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Courses Grid */}
            <div className="lg:w-3/4">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  Featured Courses ({filteredCourses.length})
                </h2>
                <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm">
                  <option>Most Popular</option>
                  <option>Newest First</option>
                  <option>Highest Rated</option>
                  <option>Duration</option>
                </select>
              </div>

              <div className="space-y-6">
                {filteredCourses.map((course) => (
                  <div
                    key={course.id}
                    className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex flex-col md:flex-row">
                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-full md:w-64 h-48 md:h-auto object-cover"
                      />
                      <div className="flex-1 p-6">
                        <div className="flex items-center justify-between mb-3">
                          <span
                            className={`px-3 py-1 rounded-full text-sm font-medium ${
                              course.price === "Free"
                                ? "bg-green-100 text-green-800"
                                : "bg-orange-100 text-orange-800"
                            }`}
                          >
                            {course.price}
                          </span>
                          <div className="flex items-center">
                            <Star className="h-4 w-4 text-yellow-400 mr-1" />
                            <span className="text-sm text-gray-600">
                              {course.rating}
                            </span>
                            <span className="text-sm text-gray-500 ml-1">
                              ({course.students} students)
                            </span>
                          </div>
                        </div>

                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          {course.title}
                        </h3>
                        <p className="text-gray-600 mb-4">
                          {course.description}
                        </p>

                        <div className="flex items-center mb-4">
                          <div className="w-8 h-8 bg-gray-300 rounded-full mr-3"></div>
                          <div>
                            <div className="font-medium text-gray-900">
                              {course.instructor}
                            </div>
                            <div className="text-sm text-gray-600">
                              {course.instructorRole}
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            {course.duration}
                          </div>
                          <div className="flex items-center">
                            <BookOpen className="h-4 w-4 mr-1" />
                            {course.lessons} lessons
                          </div>
                          <div className="flex items-center">
                            <Users className="h-4 w-4 mr-1" />
                            {course.students.toLocaleString()} students
                          </div>
                        </div>

                        <div className="mb-4">
                          <h4 className="text-sm font-medium text-gray-900 mb-2">
                            What you'll learn:
                          </h4>
                          <div className="grid grid-cols-2 gap-1">
                            {course.topics.slice(0, 4).map((topic, index) => (
                              <div
                                key={index}
                                className="text-xs text-gray-600 flex items-center"
                              >
                                <CheckCircle className="h-3 w-3 text-green-500 mr-1 flex-shrink-0" />
                                {topic}
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="flex space-x-3">
                          <button
                            onClick={() => handleStartCourse(course)}
                            className="flex-1 bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-700 transition-colors duration-200 flex items-center justify-center space-x-2"
                          >
                            <Play className="h-4 w-4" />
                            <span>Start Course</span>
                          </button>
                          <button
                            onClick={() => handlePreviewCourse(course)}
                            className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                          >
                            Preview
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section id="case-studies" className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              African Product Case Studies
            </h2>
            <p className="text-xl text-gray-600">
              Learn from successful African products and their journey to market
              leadership
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudies.map((study) => (
              <a
                key={study.id}
                href={`/case-studies/${study.id}`}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 block"
              >
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {study.category}
                    </span>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="h-4 w-4 mr-1" />
                      {study.readTime}
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {study.title}
                  </h3>
                  <div className="text-sm text-gray-600 mb-4">
                    <span className="font-medium">{study.company}</span> •{" "}
                    {study.country}
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-900 mb-2">
                      Key Lessons:
                    </h4>
                    <ul className="space-y-1">
                      {study.keyLessons.map((lesson, index) => (
                        <li
                          key={index}
                          className="text-xs text-gray-600 flex items-center"
                        >
                          <div className="w-1 h-1 bg-orange-500 rounded-full mr-2"></div>
                          {lesson}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="w-full bg-gray-900 text-white py-2 rounded-lg hover:bg-gray-800 transition-colors duration-200 flex items-center justify-center space-x-2">
                    <BookOpen className="h-4 w-4" />
                    <span>Read Case Study</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Guides & Resources */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Guides & Resources
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive guides and resources to support your learning
              journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {guides.map((guide) => (
              <div
                key={guide.id}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
              >
                <img
                  src={guide.image}
                  alt={guide.title}
                  className="w-full h-32 object-cover rounded-lg mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {guide.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {guide.description}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>{guide.pages} pages</span>
                  <span>{guide.format}</span>
                  <div className="flex items-center">
                    <Download className="h-4 w-4 mr-1" />
                    {guide.downloadCount.toLocaleString()}
                  </div>
                </div>

                <button
                  onClick={() => handleDownloadGuide(guide.filename)}
                  className="w-full bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-700 transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <Download className="h-4 w-4" />
                  <span>Download Guide</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-orange-500 to-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Start Your Learning Journey Today
          </h2>
          <p className="text-xl text-white opacity-90 mb-8 max-w-2xl mx-auto">
            Join thousands of product managers who have advanced their careers
            through our comprehensive learning programs designed for African
            markets.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <button className="bg-white text-orange-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-semibold flex items-center space-x-2">
                <Award className="h-5 w-5" />
                <span>Get Certified</span>
              </button>
            </Link>
            <Link to="/signin">
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-orange-600 transition-all duration-200 font-semibold">
                Browse All Courses
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Modals */}
      <CourseModal
        isOpen={courseModal.isOpen}
        onClose={() =>
          setCourseModal({ isOpen: false, course: null, mode: "start" })
        }
        course={courseModal.course}
        mode={courseModal.mode}
      />

      <LearningPathModal
        isOpen={pathModal.isOpen}
        onClose={() => setPathModal({ isOpen: false, path: null })}
        path={pathModal.path}
      />

      <Footer />
    </div>
  );
};

export default LearningPage;
