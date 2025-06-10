import  { useState } from "react";
import {
  Download,
  Star,
  Eye,
  Search,
 
  Calculator,
  CheckSquare,
  BarChart3,
  Users,
  ArrowRight,
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const TemplatesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedType, setSelectedType] = useState("all");

  const categories = [
    { id: "all", name: "All Templates", count: 24 },
    { id: "documentation", name: "Documentation", count: 8 },
    { id: "planning", name: "Planning & Strategy", count: 6 },
    { id: "research", name: "Research & Analysis", count: 5 },
    { id: "design", name: "Design & UX", count: 3 },
    { id: "metrics", name: "Metrics & Analytics", count: 2 },
  ];

  const templateTypes = [
    { id: "all", name: "All Types" },
    { id: "google-docs", name: "Google Docs" },
    { id: "notion", name: "Notion" },
    { id: "figma", name: "Figma" },
    { id: "excel", name: "Excel/Sheets" },
    { id: "miro", name: "Miro/Mural" },
  ];

  const templates = [
    {
      id: 1,
      title: "African Market PRD Template",
      description:
        "Comprehensive Product Requirements Document template with African market considerations, regulatory compliance, and cultural context sections.",
      category: "documentation",
      type: "google-docs",
      downloads: 3247,
      rating: 4.9,
      author: "Amara Kone",
      image:
        "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=400",
      tags: ["PRD", "Documentation", "Africa", "Compliance"],
      features: [
        "Regulatory compliance checklist",
        "Cultural considerations framework",
        "Local payment methods section",
        "Offline-first requirements",
        "Multi-language support planning",
      ],
      preview:
        "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 2,
      title: "Fintech Product Strategy Canvas",
      description:
        "Strategic planning canvas specifically designed for fintech products in African markets with regulatory and infrastructure considerations.",
      category: "planning",
      type: "miro",
      downloads: 2156,
      rating: 4.8,
      author: "David Ochieng",
      image:
        "https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=400",
      tags: ["Strategy", "Fintech", "Canvas", "Planning"],
      features: [
        "Regulatory landscape mapping",
        "Infrastructure constraints analysis",
        "Competitive positioning framework",
        "Go-to-market strategy template",
        "Risk assessment matrix",
      ],
      preview:
        "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 3,
      title: "Mobile-First User Journey Map",
      description:
        "User journey mapping template optimized for mobile-first products in emerging markets with connectivity and device limitations.",
      category: "design",
      type: "figma",
      downloads: 1834,
      rating: 4.7,
      author: "Fatima Al-Zahra",
      image:
        "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=400",
      tags: ["UX", "Mobile", "Journey Map", "Emerging Markets"],
      features: [
        "Offline interaction flows",
        "Low-bandwidth considerations",
        "Device capability mapping",
        "Data cost awareness",
        "Accessibility checkpoints",
      ],
      preview:
        "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 4,
      title: "African Market Research Framework",
      description:
        "Comprehensive market research template covering 54 African countries with economic, cultural, and technological factors.",
      category: "research",
      type: "excel",
      downloads: 2943,
      rating: 4.9,
      author: "Kwame Asante",
      image:
        "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400",
      tags: ["Market Research", "Africa", "Analysis", "Data"],
      features: [
        "Country-by-country analysis template",
        "Economic indicators dashboard",
        "Cultural factors assessment",
        "Tech adoption metrics",
        "Regulatory environment mapping",
      ],
      preview:
        "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 5,
      title: "Product Roadmap for African Markets",
      description:
        "Flexible roadmap template that accounts for infrastructure development, regulatory changes, and market evolution across Africa.",
      category: "planning",
      type: "notion",
      downloads: 1567,
      rating: 4.6,
      author: "Aisha Mwangi",
      image:
        "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=400",
      tags: ["Roadmap", "Planning", "Strategy", "Africa"],
      features: [
        "Phased rollout planning",
        "Infrastructure dependency tracking",
        "Regulatory milestone integration",
        "Market-specific feature prioritization",
        "Risk mitigation planning",
      ],
      preview:
        "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 6,
      title: "Cross-Cultural User Research Guide",
      description:
        "Research methodology template for conducting user studies across diverse African cultures, languages, and socioeconomic backgrounds.",
      category: "research",
      type: "google-docs",
      downloads: 1234,
      rating: 4.8,
      author: "Zara Hassan",
      image:
        "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400",
      tags: ["User Research", "Culture", "Methodology", "Diversity"],
      features: [
        "Cultural sensitivity guidelines",
        "Multi-language research protocols",
        "Socioeconomic consideration framework",
        "Remote research methodologies",
        "Bias identification checklist",
      ],
      preview:
        "https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  const interactiveTools = [
    {
      id: "market-calculator",
      title: "African Market Size Calculator",
      description:
        "Calculate total addressable market (TAM) for your product across African countries",
      icon: <Calculator className="h-8 w-8" />,
      color: "bg-blue-500",
      features: [
        "54 country database",
        "Economic indicators",
        "Population data",
        "Internet penetration",
      ],
    },
    {
      id: "feature-prioritizer",
      title: "Feature Prioritization Matrix",
      description:
        "Prioritize features based on African market needs and constraints",
      icon: <CheckSquare className="h-8 w-8" />,
      color: "bg-green-500",
      features: [
        "Impact vs effort matrix",
        "Market-specific scoring",
        "Resource allocation",
        "Timeline planning",
      ],
    },
    {
      id: "metrics-dashboard",
      title: "PM Metrics Dashboard Builder",
      description:
        "Build custom dashboards for tracking product metrics in African markets",
      icon: <BarChart3 className="h-8 w-8" />,
      color: "bg-purple-500",
      features: [
        "KPI templates",
        "Market benchmarks",
        "Growth tracking",
        "Performance analysis",
      ],
    },
    {
      id: "stakeholder-mapper",
      title: "Stakeholder Mapping Tool",
      description:
        "Map and manage stakeholders across different African business environments",
      icon: <Users className="h-8 w-8" />,
      color: "bg-orange-500",
      features: [
        "Influence mapping",
        "Communication planning",
        "Cultural considerations",
        "Relationship tracking",
      ],
    },
  ];

  const filteredTemplates = templates.filter((template) => {
    const matchesSearch =
      template.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      template.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      template.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      );
    const matchesCategory =
      selectedCategory === "all" || template.category === selectedCategory;
    const matchesType =
      selectedType === "all" || template.type === selectedType;

    return matchesSearch && matchesCategory && matchesType;
  });

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 md:pt-40 pb-12 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Templates & Tools
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Ready-to-use templates and interactive tools designed specifically
              for African product managers. Save time and ensure you're
              following best practices for African markets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search templates and tools..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Tools */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Interactive Tools
            </h2>
            <p className="text-xl text-gray-600">
              Powerful online tools to help you make data-driven decisions for
              African markets
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {interactiveTools.map((tool) => (
              <div
                key={tool.id}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              >
                <div
                  className={`${tool.color} w-16 h-16 rounded-lg flex items-center justify-center mb-4 text-white`}
                >
                  {tool.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {tool.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{tool.description}</p>
                <ul className="space-y-1 mb-4">
                  {tool.features.map((feature, index) => (
                    <li
                      key={index}
                      className="text-xs text-gray-500 flex items-center"
                    >
                      <div className="w-1 h-1 bg-gray-400 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link to="/tools">
                  <button className="w-full bg-gray-900 text-white py-2 rounded-lg hover:bg-gray-800 transition-colors duration-200 flex items-center justify-center space-x-2">
                    <span>Launch Tool</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Templates Section */}
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
                  Format
                </h3>
                <div className="space-y-2">
                  {templateTypes.map((type) => (
                    <button
                      key={type.id}
                      onClick={() => setSelectedType(type.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-colors duration-200 ${
                        selectedType === type.id
                          ? "bg-orange-100 text-orange-800"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      {type.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Templates Grid */}
            <div className="lg:w-3/4">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  Templates ({filteredTemplates.length})
                </h2>
                <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm">
                  <option>Most Downloaded</option>
                  <option>Newest First</option>
                  <option>Highest Rated</option>
                  <option>A-Z</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredTemplates.map((template) => (
                  <div
                    key={template.id}
                    className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    <img
                      src={template.image}
                      alt={template.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                          {template.type
                            .replace("-", " ")
                            .replace(/\b\w/g, (l) => l.toUpperCase())}
                        </span>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-400 mr-1" />
                          <span className="text-sm text-gray-600">
                            {template.rating}
                          </span>
                        </div>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {template.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {template.description}
                      </p>

                      <div className="mb-4">
                        <h4 className="text-sm font-medium text-gray-900 mb-2">
                          Key Features:
                        </h4>
                        <ul className="space-y-1">
                          {template.features
                            .slice(0, 3)
                            .map((feature, index) => (
                              <li
                                key={index}
                                className="text-xs text-gray-600 flex items-center"
                              >
                                <div className="w-1 h-1 bg-orange-500 rounded-full mr-2"></div>
                                {feature}
                              </li>
                            ))}
                        </ul>
                      </div>

                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <div className="flex items-center">
                          <Download className="h-4 w-4 mr-1" />
                          {template.downloads.toLocaleString()}
                        </div>
                        <span>by {template.author}</span>
                      </div>

                      <div className="flex space-x-2">
                        <button className="flex-1 bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-700 transition-colors duration-200 flex items-center justify-center space-x-2">
                          <Download className="h-4 w-4" />
                          <span>Download</span>
                        </button>
                        <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                          <Eye className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-orange-500 to-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Need a Custom Template?
          </h2>
          <p className="text-xl text-white opacity-90 mb-8 max-w-2xl mx-auto">
            Can't find what you're looking for? Our community of expert PMs can
            create custom templates tailored to your specific needs and market
            requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/support">
              <button className="bg-white text-orange-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-semibold">
                Request Custom Template
              </button>
            </Link>
            <Link to="/contribute">
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-orange-600 transition-all duration-200 font-semibold">
                Contribute Template
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TemplatesPage;
