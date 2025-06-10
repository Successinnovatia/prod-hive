import { useState } from "react";
import {
  Search,
  Filter,
  MapPin,
  Clock,
  DollarSign,
  Building,
  Users,
  Star,
  Bookmark,
  ExternalLink,
  Briefcase,
  Award,
  Share2,
  AlertCircle,
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import JobApplicationModal from "../components/jobs/JobApplicationModal";
import JobAlertModal from "../components/jobs/JobAlertModal";
import JobDetailsModal from "../components/jobs/JobDetailsModal";
import { Link } from "react-router-dom";

const JobBoardPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [selectedLevel, setSelectedLevel] = useState("all");
  const [selectedType, setSelectedType] = useState("all");
  const [selectedCompanySize, setSelectedCompanySize] = useState("all");
  const [selectedSalaryRange, setSelectedSalaryRange] = useState("all");
  const [sortBy, setSortBy] = useState("newest");
  const [savedJobs, setSavedJobs] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);

  // Modal states
  const [applicationModal, setApplicationModal] = useState<{
    isOpen: boolean;
    job: any;
  }>({ isOpen: false, job: null });
  const [alertModal, setAlertModal] = useState(false);
  const [detailsModal, setDetailsModal] = useState<{
    isOpen: boolean;
    job: any;
  }>({ isOpen: false, job: null });

  // Mock job data with realistic African PM roles
  const jobs = [
    {
      id: "1",
      title: "Senior Product Manager - Fintech",
      company: "Flutterwave",
      location: "Lagos, Nigeria",
      type: "Full-time",
      level: "Senior",
      salary: "$80,000 - $120,000",
      postedDate: "2024-01-15",
      description:
        "Lead product strategy for our core payment infrastructure serving 900K+ businesses across Africa. Drive cross-border payment innovations and API platform development.",
      requirements: [
        "5+ years product management experience in fintech",
        "Experience with payment systems and APIs",
        "Strong analytical and data-driven decision making",
        "Experience in African markets preferred",
        "Bachelor's degree in Engineering, Business, or related field",
      ],
      benefits: [
        "Competitive salary + equity",
        "Health insurance",
        "Remote work flexibility",
        "Learning & development budget",
        "Stock options",
      ],
      companySize: "Large (500+)",
      companyLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTapojSnWH-n-WcVbMRNLe7dfFkBxaT7X8fFg&s",
      featured: true,
      urgent: false,
      remote: true,
      skills: [
        "Product Strategy",
        "Fintech",
        "APIs",
        "Data Analysis",
        "Cross-border Payments",
      ],
    },
    {
      id: "2",
      title: "Product Manager - E-commerce Platform",
      company: "Jumia",
      location: "Nairobi, Kenya",
      type: "Full-time",
      level: "Mid-level",
      salary: "$60,000 - $85,000",
      postedDate: "2024-01-14",
      description:
        "Drive product development for our marketplace platform serving millions of customers across Africa. Focus on mobile experience and local market adaptation.",
      requirements: [
        "3-5 years product management experience",
        "E-commerce or marketplace experience",
        "Mobile-first product thinking",
        "Understanding of African markets",
        "Strong communication skills",
      ],
      benefits: [
        "Competitive package",
        "Health & dental insurance",
        "Professional development",
        "Flexible working hours",
        "Performance bonuses",
      ],
      companySize: "Large (500+)",
      companyLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx-6scFSoduBe_U7LTSX44fEKceQ2nVlG4sg&s",
      featured: true,
      urgent: true,
      remote: false,
      skills: [
        "E-commerce",
        "Mobile Products",
        "Marketplace",
        "User Experience",
        "Analytics",
      ],
    },
    {
      id: "3",
      title: "Junior Product Manager - Mobile Banking",
      company: "Standard Bank",
      location: "Johannesburg, South Africa",
      type: "Full-time",
      level: "Junior",
      salary: "$45,000 - $65,000",
      postedDate: "2024-01-13",
      description:
        "Join our digital banking team to build innovative mobile banking solutions for African consumers. Great opportunity for career growth in fintech.",
      requirements: [
        "1-3 years product or related experience",
        "Interest in fintech and digital banking",
        "Strong analytical skills",
        "Customer-centric mindset",
        "Bachelor's degree preferred",
      ],
      benefits: [
        "Comprehensive training program",
        "Medical aid",
        "Retirement fund",
        "Study assistance",
        "Career progression opportunities",
      ],
      companySize: "Large (500+)",
      companyLogo: "https://cdn.worldvectorlogo.com/logos/standard-bank.svg",
      featured: false,
      urgent: false,
      remote: true,
      skills: [
        "Mobile Banking",
        "Digital Products",
        "Financial Services",
        "User Research",
        "Agile",
      ],
    },
    {
      id: "4",
      title: "Product Lead - Logistics Technology",
      company: "Kobo360",
      location: "Lagos, Nigeria",
      type: "Full-time",
      level: "Senior",
      salary: "$70,000 - $100,000",
      postedDate: "2024-01-12",
      description:
        "Lead product strategy for Africa's largest logistics platform. Drive innovation in supply chain technology and last-mile delivery solutions.",
      requirements: [
        "4+ years product leadership experience",
        "Logistics or supply chain experience",
        "B2B product experience",
        "Team management skills",
        "Strategic thinking abilities",
      ],
      benefits: [
        "Leadership role with equity",
        "Health insurance for family",
        "Flexible work arrangements",
        "Professional coaching",
        "Conference attendance budget",
      ],
      companySize: "Medium (100-500)",
      companyLogo:
        "https://media.licdn.com/dms/image/v2/C4D0BAQH4Z5orOWHd4A/company-logo_200_200/company-logo_200_200/0/1643281904472/kobo360_logo?e=2147483647&v=beta&t=pKt7bLpCC45bIUz4cdojTMJ0VQ3e03unxQ8Md8J7oAg",
      featured: false,
      urgent: true,
      remote: false,
      skills: [
        "Logistics",
        "B2B Products",
        "Team Leadership",
        "Supply Chain",
        "Technology Strategy",
      ],
    },
    {
      id: "5",
      title: "Product Manager - EdTech Platform",
      company: "uLesson",
      location: "Remote (Africa)",
      type: "Full-time",
      level: "Mid-level",
      salary: "$55,000 - $75,000",
      postedDate: "2024-01-11",
      description:
        "Shape the future of education in Africa by building innovative learning platforms. Focus on mobile-first educational content and assessment tools.",
      requirements: [
        "3+ years product management experience",
        "EdTech or education experience preferred",
        "Mobile product expertise",
        "Understanding of African education systems",
        "Passion for education and learning",
      ],
      benefits: [
        "Fully remote position",
        "Health insurance",
        "Learning stipend",
        "Flexible schedule",
        "Impact-driven mission",
      ],
      companySize: "Medium (100-500)",
      companyLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZNtMW1VzWgIYtUqTDbp4Y4nZBT7Wj8N_7Sw&s",
      featured: false,
      urgent: false,
      remote: true,
      skills: [
        "EdTech",
        "Mobile Learning",
        "Content Strategy",
        "User Experience",
        "Educational Technology",
      ],
    },
    {
      id: "6",
      title: "Senior Product Manager - Agritech",
      company: "Farmcrowdy",
      location: "Abuja, Nigeria",
      type: "Full-time",
      level: "Senior",
      salary: "$65,000 - $90,000",
      postedDate: "2024-01-10",
      description:
        "Drive product innovation in agricultural technology, connecting farmers with modern farming techniques and market access across Africa.",
      requirements: [
        "5+ years product management experience",
        "Agritech or agriculture industry knowledge",
        "Rural market understanding",
        "Data analytics expertise",
        "Stakeholder management skills",
      ],
      benefits: [
        "Competitive salary package",
        "Health & life insurance",
        "Agricultural impact mission",
        "Professional development",
        "Travel opportunities",
      ],
      companySize: "Medium (100-500)",
      companyLogo:
        "https://media.licdn.com/dms/image/v2/C4E0BAQGsnKIse0ngqg/company-logo_200_200/company-logo_200_200/0/1641048531344/farmcrowdy_logo?e=2147483647&v=beta&t=2N6cL2gFxL7NqMqt39qftGi61qwnTqIJcG02eTJwOHU",
      featured: false,
      urgent: false,
      remote: false,
      skills: [
        "Agritech",
        "Rural Markets",
        "Data Analytics",
        "Stakeholder Management",
        "Agricultural Technology",
      ],
    },
    {
      id: "7",
      title: "Product Manager - Healthtech",
      company: "Vezeeta",
      location: "Cairo, Egypt",
      type: "Full-time",
      level: "Mid-level",
      salary: "$50,000 - $70,000",
      postedDate: "2024-01-09",
      description:
        "Build healthcare technology solutions that improve access to quality healthcare across the Middle East and Africa. Focus on telemedicine and health records.",
      requirements: [
        "3-5 years product management experience",
        "Healthcare or healthtech background",
        "Regulatory compliance knowledge",
        "User-centered design thinking",
        "Arabic language skills preferred",
      ],
      benefits: [
        "Healthcare mission impact",
        "Comprehensive health coverage",
        "Professional development budget",
        "Flexible working hours",
        "Stock option plan",
      ],
      companySize: "Medium (100-500)",
      companyLogo:
        "https://play-lh.googleusercontent.com/ttLkUcwcja5-8YAhk1ndWbPEglgdoCjs2tEDEOXsd09uq6WuIL-GjWRn_a7HVJbpN06Q",
      featured: false,
      urgent: false,
      remote: true,
      skills: [
        "Healthtech",
        "Telemedicine",
        "Healthcare Compliance",
        "User Experience",
        "Digital Health",
      ],
    },
    {
      id: "8",
      title: "Product Manager - Renewable Energy",
      company: "M-KOPA",
      location: "Nairobi, Kenya",
      type: "Full-time",
      level: "Mid-level",
      salary: "$55,000 - $80,000",
      postedDate: "2024-01-08",
      description:
        "Lead product development for solar energy solutions that provide clean, affordable energy to underserved communities across Africa.",
      requirements: [
        "3+ years product management experience",
        "Clean energy or sustainability focus",
        "IoT and hardware product experience",
        "Financial services knowledge",
        "Impact-driven mindset",
      ],
      benefits: [
        "Sustainability mission",
        "Health insurance",
        "Professional growth opportunities",
        "International exposure",
        "Performance incentives",
      ],
      companySize: "Medium (100-500)",
      companyLogo:
        "https://images.squarespace-cdn.com/content/v1/5355ed0ae4b0753f93e22adc/1643194834646-YUR01UZ9VX9KGV9S3FMF/M-Kopa+Logo+%281%29.png?format=1500w",
      featured: false,
      urgent: false,
      remote: false,
      skills: [
        "Clean Energy",
        "IoT Products",
        "Financial Inclusion",
        "Hardware",
        "Sustainability",
      ],
    },
  ];

  const locations = [
    { id: "all", name: "All Locations", count: jobs.length },
    {
      id: "nigeria",
      name: "Nigeria",
      count: jobs.filter((j) => j.location.includes("Nigeria")).length,
    },
    {
      id: "kenya",
      name: "Kenya",
      count: jobs.filter((j) => j.location.includes("Kenya")).length,
    },
    {
      id: "south-africa",
      name: "South Africa",
      count: jobs.filter((j) => j.location.includes("South Africa")).length,
    },
    {
      id: "egypt",
      name: "Egypt",
      count: jobs.filter((j) => j.location.includes("Egypt")).length,
    },
    {
      id: "remote",
      name: "Remote",
      count: jobs.filter((j) => j.remote || j.location.includes("Remote"))
        .length,
    },
  ];

  const levels = [
    { id: "all", name: "All Levels" },
    { id: "junior", name: "Junior (0-2 years)" },
    { id: "mid-level", name: "Mid-level (3-5 years)" },
    { id: "senior", name: "Senior (5+ years)" },
    { id: "lead", name: "Lead/Principal" },
  ];

  const jobTypes = [
    { id: "all", name: "All Types" },
    { id: "full-time", name: "Full-time" },
    { id: "part-time", name: "Part-time" },
    { id: "contract", name: "Contract" },
    { id: "freelance", name: "Freelance" },
  ];

  const companySizes = [
    { id: "all", name: "All Company Sizes" },
    { id: "startup", name: "Startup (1-50)" },
    { id: "small", name: "Small (51-100)" },
    { id: "medium", name: "Medium (101-500)" },
    { id: "large", name: "Large (500+)" },
  ];

  const salaryRanges = [
    { id: "all", name: "All Salaries" },
    { id: "0-50k", name: "$0 - $50,000" },
    { id: "50k-75k", name: "$50,000 - $75,000" },
    { id: "75k-100k", name: "$75,000 - $100,000" },
    { id: "100k+", name: "$100,000+" },
  ];

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.skills.some((skill) =>
        skill.toLowerCase().includes(searchTerm.toLowerCase())
      );

    const matchesLocation =
      selectedLocation === "all" ||
      (selectedLocation === "remote" && job.remote) ||
      job.location.toLowerCase().includes(selectedLocation.replace("-", " "));

    const matchesLevel =
      selectedLevel === "all" ||
      job.level.toLowerCase().includes(selectedLevel.replace("-", " "));
    const matchesType =
      selectedType === "all" ||
      job.type.toLowerCase().includes(selectedType.replace("-", " "));

    const matchesCompanySize =
      selectedCompanySize === "all" ||
      job.companySize.toLowerCase().includes(selectedCompanySize);

    const matchesSalary =
      selectedSalaryRange === "all" ||
      (selectedSalaryRange === "100k+" && job.salary.includes("100,000")) ||
      job.salary.includes(selectedSalaryRange.split("-")[0]);

    return (
      matchesSearch &&
      matchesLocation &&
      matchesLevel &&
      matchesType &&
      matchesCompanySize &&
      matchesSalary
    );
  });

  const sortedJobs = [...filteredJobs].sort((a, b) => {
    switch (sortBy) {
      case "newest":
        return (
          new Date(b.postedDate).getTime() - new Date(a.postedDate).getTime()
        );
      case "salary-high":
        return (
          parseInt(b.salary.split("$")[1].split(",").join("")) -
          parseInt(a.salary.split("$")[1].split(",").join(""))
        );
      case "salary-low":
        return (
          parseInt(a.salary.split("$")[1].split(",").join("")) -
          parseInt(b.salary.split("$")[1].split(",").join(""))
        );
      case "company":
        return a.company.localeCompare(b.company);
      default:
        return 0;
    }
  });

  const toggleSaveJob = (jobId: string) => {
    setSavedJobs((prev) =>
      prev.includes(jobId)
        ? prev.filter((id) => id !== jobId)
        : [...prev, jobId]
    );
  };

  const getTimeAgo = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 1) return "1 day ago";
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
    return `${Math.floor(diffDays / 30)} months ago`;
  };

  const featuredJobs = jobs.filter((job) => job.featured);
  // const urgentJobs = jobs.filter((job) => job.urgent);

  // Modal handlers
  const handleApplyClick = (job: any) => {
    setApplicationModal({ isOpen: true, job });
  };

  const handleDetailsClick = (job: any) => {
    setDetailsModal({ isOpen: true, job });
  };

  const handleCreateAlert = () => {
    setAlertModal(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              African PM Job Board
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Discover product management opportunities across Africa's
              fastest-growing tech companies. From fintech to e-commerce, find
              your next career move.
            </p>

            {/* Search Bar */}
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="text"
                    placeholder="Search jobs, companies, or skills..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>
                <div className="flex gap-2">
                  <select
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  >
                    {locations.map((location) => (
                      <option key={location.id} value={location.id}>
                        {location.name} ({location.count})
                      </option>
                    ))}
                  </select>
                  <button
                    onClick={() => setShowFilters(!showFilters)}
                    className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors duration-200 flex items-center space-x-2"
                  >
                    <Filter className="h-5 w-5" />
                    <span>Filters</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="flex items-center justify-center space-x-8 mt-6 text-sm text-gray-600">
              <div className="flex items-center">
                <Briefcase className="h-5 w-5 mr-2 text-blue-600" />
                <span>{jobs.length} Active Jobs</span>
              </div>
              <div className="flex items-center">
                <Building className="h-5 w-5 mr-2 text-green-600" />
                <span>50+ Companies</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-purple-600" />
                <span>15+ Countries</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Panel */}
      {showFilters && (
        <section className="py-6 bg-gray-50 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Experience Level
                </label>
                <select
                  value={selectedLevel}
                  onChange={(e) => setSelectedLevel(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                >
                  {levels.map((level) => (
                    <option key={level.id} value={level.id}>
                      {level.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Job Type
                </label>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                >
                  {jobTypes.map((type) => (
                    <option key={type.id} value={type.id}>
                      {type.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Company Size
                </label>
                <select
                  value={selectedCompanySize}
                  onChange={(e) => setSelectedCompanySize(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                >
                  {companySizes.map((size) => (
                    <option key={size.id} value={size.id}>
                      {size.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Salary Range
                </label>
                <select
                  value={selectedSalaryRange}
                  onChange={(e) => setSelectedSalaryRange(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                >
                  {salaryRanges.map((range) => (
                    <option key={range.id} value={range.id}>
                      {range.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Featured Jobs */}
      {featuredJobs.length > 0 && (
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <Star className="h-6 w-6 text-yellow-500 mr-2" />
              Featured Jobs
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featuredJobs.slice(0, 4).map((job) => (
                <div
                  key={job.id}
                  className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={job.companyLogo}
                        alt={job.company}
                        className="w-12 h-12 rounded-lg object-cover"
                      />
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">
                          {job.title}
                        </h3>
                        <p className="text-gray-600">{job.company}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {job.urgent && (
                        <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs font-medium">
                          Urgent
                        </span>
                      )}
                      <button
                        onClick={() => toggleSaveJob(job.id)}
                        className={`p-2 rounded-lg transition-colors duration-200 ${
                          savedJobs.includes(job.id)
                            ? "bg-orange-100 text-orange-600"
                            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                        }`}
                      >
                        <Bookmark className="h-4 w-4" />
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {job.location}
                    </div>
                    <div className="flex items-center">
                      <DollarSign className="h-4 w-4 mr-1" />
                      {job.salary}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {getTimeAgo(job.postedDate)}
                    </div>
                  </div>

                  <p className="text-gray-700 mb-4 line-clamp-2">
                    {job.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {job.skills.slice(0, 3).map((skill, index) => (
                      <span
                        key={index}
                        className="bg-white text-gray-700 px-3 py-1 rounded-full text-sm border"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleApplyClick(job)}
                      className="flex-1 bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-700 transition-colors duration-200 flex items-center justify-center space-x-2"
                    >
                      <span>Apply Now</span>
                      <ExternalLink className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => handleDetailsClick(job)}
                      className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                    >
                      Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Main Job Listings */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <div className="lg:w-1/4">
              <div className="bg-white p-6 rounded-xl shadow-sm sticky top-24">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Job Alerts
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Get notified when new PM jobs matching your criteria are
                  posted.
                </p>
                <button
                  onClick={handleCreateAlert}
                  className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 mb-6"
                >
                  Create Job Alert
                </button>

                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Quick Stats
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total Jobs:</span>
                    <span className="font-semibold">{jobs.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Remote Jobs:</span>
                    <span className="font-semibold">
                      {jobs.filter((j) => j.remote).length}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Senior Roles:</span>
                    <span className="font-semibold">
                      {jobs.filter((j) => j.level === "Senior").length}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Saved Jobs:</span>
                    <span className="font-semibold">{savedJobs.length}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Job Listings */}
            <div className="lg:w-3/4">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">
                  {sortedJobs.length} Jobs Found
                </h2>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-2 text-sm"
                >
                  <option value="newest">Newest First</option>
                  <option value="salary-high">Highest Salary</option>
                  <option value="salary-low">Lowest Salary</option>
                  <option value="company">Company A-Z</option>
                </select>
              </div>

              <div className="space-y-6">
                {sortedJobs.map((job) => (
                  <div
                    key={job.id}
                    className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-all duration-200"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <img
                          src={job.companyLogo}
                          alt={job.company}
                          className="w-16 h-16 rounded-lg object-cover"
                        />
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-1">
                            {job.title}
                          </h3>
                          <p className="text-gray-600 font-medium">
                            {job.company}
                          </p>
                          <div className="flex items-center gap-4 text-sm text-gray-500 mt-1">
                            <div className="flex items-center">
                              <MapPin className="h-4 w-4 mr-1" />
                              {job.location}
                            </div>
                            <div className="flex items-center">
                              <Briefcase className="h-4 w-4 mr-1" />
                              {job.type}
                            </div>
                            <div className="flex items-center">
                              <Users className="h-4 w-4 mr-1" />
                              {job.level}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        {job.featured && (
                          <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs font-medium">
                            Featured
                          </span>
                        )}
                        {job.urgent && (
                          <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs font-medium">
                            Urgent
                          </span>
                        )}
                        {job.remote && (
                          <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">
                            Remote
                          </span>
                        )}
                        <button
                          onClick={() => toggleSaveJob(job.id)}
                          className={`p-2 rounded-lg transition-colors duration-200 ${
                            savedJobs.includes(job.id)
                              ? "bg-orange-100 text-orange-600"
                              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                          }`}
                        >
                          <Bookmark className="h-4 w-4" />
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center gap-6 text-sm text-gray-600 mb-4">
                      <div className="flex items-center">
                        <DollarSign className="h-4 w-4 mr-1" />
                        {job.salary}
                      </div>
                      <div className="flex items-center">
                        <Building className="h-4 w-4 mr-1" />
                        {job.companySize}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {getTimeAgo(job.postedDate)}
                      </div>
                    </div>

                    <p className="text-gray-700 mb-4">{job.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {job.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex space-x-3">
                        <button
                          onClick={() => handleApplyClick(job)}
                          className="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition-colors duration-200 flex items-center space-x-2"
                        >
                          <span>Apply Now</span>
                          <ExternalLink className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => handleDetailsClick(job)}
                          className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                        >
                          View Details
                        </button>
                      </div>
                      <button className="text-gray-400 hover:text-gray-600">
                        <Share2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {sortedJobs.length === 0 && (
                <div className="text-center py-12">
                  <AlertCircle className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    No jobs found
                  </h3>
                  <p className="text-gray-600">
                    Try adjusting your search criteria or filters
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-orange-500 to-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Land Your Dream PM Job?
          </h2>
          <p className="text-xl text-white opacity-90 mb-8 max-w-2xl mx-auto">
            Join our community to get exclusive job opportunities, career
            guidance, and connect with hiring managers across Africa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <button className="bg-white text-orange-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-semibold flex items-center space-x-2">
                <Award className="h-5 w-5" />
                <span>Join PM Community</span>
              </button>
            </Link>
            <Link to="/signin">
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-orange-600 transition-all duration-200 font-semibold">
                Post a Job
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Modals */}
      <JobApplicationModal
        isOpen={applicationModal.isOpen}
        onClose={() => setApplicationModal({ isOpen: false, job: null })}
        job={applicationModal.job}
      />

      <JobAlertModal isOpen={alertModal} onClose={() => setAlertModal(false)} />

      <JobDetailsModal
        isOpen={detailsModal.isOpen}
        onClose={() => setDetailsModal({ isOpen: false, job: null })}
        job={detailsModal.job}
        onApply={handleApplyClick}
        savedJobs={savedJobs}
        onToggleSave={toggleSaveJob}
      />

      <Footer />
    </div>
  );
};

export default JobBoardPage;
