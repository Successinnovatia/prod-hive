import { useState } from "react";
import {
  Calculator,
  BarChart3,
  Users,
  Target,
  Globe,
  Smartphone,
  DollarSign,
  Shield,
  Clock,
  TrendingUp,
  Zap,
  Play,
  Star,
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MarketSizeCalculator from "../components/tools/MarketSizeCalculator";
import FeaturePrioritizer from "../components/tools/FeaturePrioritizer";
import MetricsDashboard from "../components/tools/MetricsDashboard";
import StakeholderMapper from "../components/tools/StakeholderMapper";
import { Link } from "react-router-dom";

const ToolsPage = () => {
  // const [activeCalculator, setActiveCalculator] = useState("market-size");
  const [calculatorInputs, setCalculatorInputs] = useState({
    country: "nigeria",
    population: 220000000,
    internetPenetration: 51.9,
    smartphonePenetration: 83.3,
    targetDemographic: 25,
    conversionRate: 2.5,
  });

  // Tool modal states
  const [openTool, setOpenTool] = useState<string | null>(null);

  const tools = [
    {
      id: "market-calculator",
      title: "African Market Size Calculator",
      description:
        "Calculate TAM, SAM, and SOM for your product across 54 African countries with real economic data.",
      icon: <Calculator className="h-8 w-8" />,
      color: "bg-blue-500",
      category: "Analysis",
      features: [
        "Real-time economic data for 54 countries",
        "Internet and smartphone penetration rates",
        "GDP and purchasing power calculations",
        "Market segmentation analysis",
        "Export to presentation format",
      ],
      metrics: { users: "2.3k", rating: 4.8, saves: "890" },
      component: "MarketSizeCalculator",
    },
    {
      id: "feature-prioritizer",
      title: "Feature Prioritization Matrix",
      description:
        "Prioritize features using African market-specific criteria including infrastructure constraints.",
      icon: <Target className="h-8 w-8" />,
      color: "bg-green-500",
      category: "Planning",
      features: [
        "Impact vs Effort matrix with African context",
        "Infrastructure dependency scoring",
        "Regulatory compliance weighting",
        "Cultural adaptation requirements",
        "Resource allocation recommendations",
      ],
      metrics: { users: "1.8k", rating: 4.7, saves: "654" },
      component: "FeaturePrioritizer",
    },
    {
      id: "metrics-dashboard",
      title: "PM Metrics Dashboard Builder",
      description:
        "Build custom dashboards with KPIs relevant to African markets and emerging economies.",
      icon: <BarChart3 className="h-8 w-8" />,
      color: "bg-purple-500",
      category: "Analytics",
      features: [
        "Pre-built African market KPI templates",
        "Mobile-first usage analytics",
        "Offline engagement tracking",
        "Payment method performance",
        "Cultural adoption metrics",
      ],
      metrics: { users: "3.1k", rating: 4.9, saves: "1.2k" },
      component: "MetricsDashboard",
    },
    {
      id: "stakeholder-mapper",
      title: "Stakeholder Mapping Tool",
      description:
        "Map stakeholders across different African business environments and cultural contexts.",
      icon: <Users className="h-8 w-8" />,
      color: "bg-orange-500",
      category: "Management",
      features: [
        "Cultural influence mapping",
        "Government relations tracking",
        "Community leader identification",
        "Communication preference analysis",
        "Relationship strength assessment",
      ],
      metrics: { users: "1.5k", rating: 4.6, saves: "432" },
      component: "StakeholderMapper",
    },
    {
      id: "localization-planner",
      title: "Product Localization Planner",
      description:
        "Plan product localization across African languages, currencies, and cultural preferences.",
      icon: <Globe className="h-8 w-8" />,
      color: "bg-indigo-500",
      category: "Localization",
      features: [
        "2000+ African languages database",
        "Currency and payment method mapping",
        "Cultural preference guidelines",
        "Regulatory requirement checklist",
        "Phased rollout planning",
      ],
      metrics: { users: "987", rating: 4.5, saves: "298" },
      component: "LocalizationPlanner",
    },
    {
      id: "mobile-optimizer",
      title: "Mobile Experience Optimizer",
      description:
        "Optimize your product for low-end devices and limited connectivity common in African markets.",
      icon: <Smartphone className="h-8 w-8" />,
      color: "bg-pink-500",
      category: "Optimization",
      features: [
        "Device capability assessment",
        "Bandwidth optimization calculator",
        "Offline functionality planner",
        "Data cost impact analysis",
        "Performance benchmarking",
      ],
      metrics: { users: "2.7k", rating: 4.8, saves: "876" },
      component: "MobileOptimizer",
    },
    {
      id: "pricing-calculator",
      title: "African Pricing Strategy Calculator",
      description:
        "Calculate optimal pricing considering purchasing power parity and local economic conditions.",
      icon: <DollarSign className="h-8 w-8" />,
      color: "bg-emerald-500",
      category: "Pricing",
      features: [
        "PPP-adjusted pricing recommendations",
        "Local currency volatility analysis",
        "Competitive pricing benchmarks",
        "Payment method cost integration",
        "Affordability index calculation",
      ],
      metrics: { users: "1.9k", rating: 4.7, saves: "567" },
      component: "PricingCalculator",
    },
    {
      id: "compliance-checker",
      title: "Regulatory Compliance Checker",
      description:
        "Check regulatory requirements across African countries for your product category.",
      icon: <Shield className="h-8 w-8" />,
      color: "bg-red-500",
      category: "Compliance",
      features: [
        "Country-specific regulation database",
        "Data protection law compliance",
        "Financial services regulations",
        "Telecommunications requirements",
        "Regular updates and alerts",
      ],
      metrics: { users: "1.2k", rating: 4.9, saves: "445" },
      component: "ComplianceChecker",
    },
    {
      id: "launch-timeline",
      title: "Product Launch Timeline Builder",
      description:
        "Build realistic launch timelines considering African market infrastructure and processes.",
      icon: <Clock className="h-8 w-8" />,
      color: "bg-yellow-500",
      category: "Planning",
      features: [
        "Infrastructure readiness assessment",
        "Regulatory approval timelines",
        "Partnership development phases",
        "Market education requirements",
        "Risk mitigation planning",
      ],
      metrics: { users: "1.6k", rating: 4.6, saves: "523" },
      component: "LaunchTimeline",
    },
  ];

  const countries = [
    {
      id: "nigeria",
      name: "Nigeria",
      population: 220000000,
      internetPenetration: 51.9,
      gdpPerCapita: 2085,
    },
    {
      id: "south-africa",
      name: "South Africa",
      population: 60000000,
      internetPenetration: 68.2,
      gdpPerCapita: 6001,
    },
    {
      id: "kenya",
      name: "Kenya",
      population: 54000000,
      internetPenetration: 87.2,
      gdpPerCapita: 1838,
    },
    {
      id: "egypt",
      name: "Egypt",
      population: 104000000,
      internetPenetration: 72.0,
      gdpPerCapita: 3019,
    },
    {
      id: "ghana",
      name: "Ghana",
      population: 32000000,
      internetPenetration: 68.0,
      gdpPerCapita: 2202,
    },
  ];

  const calculateMarketSize = () => {
    const country = countries.find((c) => c.id === calculatorInputs.country);
    if (!country) return { tam: 0, sam: 0, som: 0 };

    const internetUsers =
      (country.population * country.internetPenetration) / 100;
    const targetUsers =
      (internetUsers * calculatorInputs.targetDemographic) / 100;
    const potentialCustomers =
      (targetUsers * calculatorInputs.conversionRate) / 100;

    return {
      tam: Math.round(internetUsers),
      sam: Math.round(targetUsers),
      som: Math.round(potentialCustomers),
    };
  };

  const launchTool = (toolId: string) => {
    setOpenTool(toolId);
  };

  const closeTool = () => {
    setOpenTool(null);
  };

  const marketSize = calculateMarketSize();

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 md:pt-40 pb-12 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Interactive PM Tools
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Powerful, data-driven tools designed specifically for African
              product managers. Make informed decisions with real market data
              and cultural insights.
            </p>
            <div className="flex items-center justify-center space-x-8 text-sm text-gray-600">
              <div className="flex items-center">
                <Users className="h-5 w-5 mr-2 text-blue-600" />
                <span>15k+ Active Users</span>
              </div>
              <div className="flex items-center">
                <Star className="h-5 w-5 mr-2 text-yellow-500" />
                <span>4.8 Average Rating</span>
              </div>
              <div className="flex items-center">
                <Globe className="h-5 w-5 mr-2 text-green-600" />
                <span>54 Countries Covered</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Tool - Market Calculator */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center mb-4">
                  <div className="bg-blue-500 p-3 rounded-lg mr-4">
                    <Calculator className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      African Market Size Calculator
                    </h2>
                    <p className="text-gray-600">
                      Calculate your Total Addressable Market
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Target Country
                    </label>
                    <select
                      value={calculatorInputs.country}
                      onChange={(e) =>
                        setCalculatorInputs({
                          ...calculatorInputs,
                          country: e.target.value,
                        })
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      {countries.map((country) => (
                        <option key={country.id} value={country.id}>
                          {country.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Target Demographic (% of internet users)
                    </label>
                    <input
                      type="range"
                      min="1"
                      max="100"
                      value={calculatorInputs.targetDemographic}
                      onChange={(e) =>
                        setCalculatorInputs({
                          ...calculatorInputs,
                          targetDemographic: parseInt(e.target.value),
                        })
                      }
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>1%</span>
                      <span className="font-medium">
                        {calculatorInputs.targetDemographic}%
                      </span>
                      <span>100%</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Expected Conversion Rate (%)
                    </label>
                    <input
                      type="range"
                      min="0.1"
                      max="10"
                      step="0.1"
                      value={calculatorInputs.conversionRate}
                      onChange={(e) =>
                        setCalculatorInputs({
                          ...calculatorInputs,
                          conversionRate: parseFloat(e.target.value),
                        })
                      }
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>0.1%</span>
                      <span className="font-medium">
                        {calculatorInputs.conversionRate}%
                      </span>
                      <span>10%</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Market Size Results
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                    <div>
                      <div className="text-sm text-gray-600">
                        Total Addressable Market (TAM)
                      </div>
                      <div className="text-xs text-gray-500">
                        All internet users
                      </div>
                    </div>
                    <div className="text-xl font-bold text-blue-600">
                      {marketSize.tam.toLocaleString()}
                    </div>
                  </div>

                  <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                    <div>
                      <div className="text-sm text-gray-600">
                        Serviceable Addressable Market (SAM)
                      </div>
                      <div className="text-xs text-gray-500">
                        Target demographic
                      </div>
                    </div>
                    <div className="text-xl font-bold text-green-600">
                      {marketSize.sam.toLocaleString()}
                    </div>
                  </div>

                  <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
                    <div>
                      <div className="text-sm text-gray-600">
                        Serviceable Obtainable Market (SOM)
                      </div>
                      <div className="text-xs text-gray-500">
                        Realistic customers
                      </div>
                    </div>
                    <div className="text-xl font-bold text-orange-600">
                      {marketSize.som.toLocaleString()}
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => launchTool("market-calculator")}
                  className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <Play className="h-4 w-4" />
                  <span>Launch Full Calculator</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Tools Grid */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">All Tools</h2>
            <p className="text-xl text-gray-600">
              Comprehensive suite of tools for every aspect of product
              management in Africa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool) => (
              <div
                key={tool.id}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`${tool.color} w-12 h-12 rounded-lg flex items-center justify-center text-white`}
                  >
                    {tool.icon}
                  </div>
                  <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium">
                    {tool.category}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {tool.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{tool.description}</p>

                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">
                    Key Features:
                  </h4>
                  <ul className="space-y-1">
                    {tool.features.slice(0, 3).map((feature, index) => (
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

                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                  <div className="flex items-center">
                    <Users className="h-3 w-3 mr-1" />
                    {tool.metrics.users} users
                  </div>
                  <div className="flex items-center">
                    <Star className="h-3 w-3 mr-1 text-yellow-400" />
                    {tool.metrics.rating}
                  </div>
                  <div className="flex items-center">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    {tool.metrics.saves} saves
                  </div>
                </div>

                <button
                  onClick={() => launchTool(tool.id)}
                  className="w-full bg-gray-900 text-white py-2 rounded-lg hover:bg-gray-800 transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <Play className="h-4 w-4" />
                  <span>Launch Tool</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tool Categories */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Browse by Category
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              {
                name: "Analysis",
                icon: <BarChart3 className="h-6 w-6" />,
                count: 8,
                color: "bg-blue-100 text-blue-600",
              },
              {
                name: "Planning",
                icon: <Target className="h-6 w-6" />,
                count: 6,
                color: "bg-green-100 text-green-600",
              },
              {
                name: "Analytics",
                icon: <TrendingUp className="h-6 w-6" />,
                count: 5,
                color: "bg-purple-100 text-purple-600",
              },
              {
                name: "Management",
                icon: <Users className="h-6 w-6" />,
                count: 4,
                color: "bg-orange-100 text-orange-600",
              },
              {
                name: "Localization",
                icon: <Globe className="h-6 w-6" />,
                count: 3,
                color: "bg-indigo-100 text-indigo-600",
              },
              {
                name: "Compliance",
                icon: <Shield className="h-6 w-6" />,
                count: 2,
                color: "bg-red-100 text-red-600",
              },
            ].map((category, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-4 text-center hover:shadow-md transition-shadow duration-200 cursor-pointer"
              >
                <div
                  className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center mx-auto mb-2`}
                >
                  {category.icon}
                </div>
                <h3 className="font-medium text-gray-900 text-sm">
                  {category.name}
                </h3>
                <p className="text-xs text-gray-500">{category.count} tools</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-orange-500 to-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Build Better Products for Africa
          </h2>
          <p className="text-xl text-white opacity-90 mb-8 max-w-2xl mx-auto">
            Join thousands of product managers using our tools to make
            data-driven decisions and build successful products across African
            markets.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <button className="bg-white text-orange-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-semibold flex items-center space-x-2">
                <Zap className="h-5 w-5" />
                <span>Get Pro Access</span>
              </button>
            </Link>
            <Link to="/support">
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-orange-600 transition-all duration-200 font-semibold">
                Request New Tool
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Tool Modals */}
      <MarketSizeCalculator
        isOpen={openTool === "market-calculator"}
        onClose={closeTool}
      />
      <FeaturePrioritizer
        isOpen={openTool === "feature-prioritizer"}
        onClose={closeTool}
      />
      <MetricsDashboard
        isOpen={openTool === "metrics-dashboard"}
        onClose={closeTool}
      />
      <StakeholderMapper
        isOpen={openTool === "stakeholder-mapper"}
        onClose={closeTool}
      />

      <Footer />
    </div>
  );
};

export default ToolsPage;
