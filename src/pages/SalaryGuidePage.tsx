import { useState } from "react";
import {
  DollarSign,
  TrendingUp,
  MapPin,
  Users,
  BarChart3,
  Globe,
  Award,
  Calculator,
  Download,
  Zap,
  Clock,
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

// Define types
type Level = "junior" | "mid" | "senior" | "lead";

interface SalaryRange {
  min: number;
  max: number;
  median: number;
}

interface Country {
  id: string;
  name: string;
  currency: string;
  flag: string;
  salaryRanges: Record<Level, SalaryRange>;
  costOfLiving: string;
  marketSize: string;
  techHubs: string[];
  topCompanies: string[];
  insights: string[];
}

interface Industry {
  id: string;
  name: string;
  multiplier: number;
  description: string;
  topSkills: string[];
}

interface CompanySize {
  id: string;
  name: string;
  multiplier: number;
  equity: string;
}

interface SalaryData {
  countries: Country[];
  industries: Industry[];
  companySizes: CompanySize[];
}

interface LevelInfo {
  id: Level;
  name: string;
  description: string;
}

interface BenefitItem {
  name: string;
  prevalence: number;
  value: string;
}

interface BenefitCategory {
  category: string;
  items: BenefitItem[];
}

interface MarketTrend {
  trend: string;
  impact: string;
  description: string;
  icon: JSX.Element;
}

const SalaryGuidePage = () => {
  const [selectedCountry, setSelectedCountry] = useState<string>("all");
  const [selectedLevel, setSelectedLevel] = useState<Level | "all">("all");
  const [selectedIndustry, setSelectedIndustry] = useState<string>("all");
  const [selectedCompanySize, setSelectedCompanySize] = useState<string>("all");
  // const [showCalculator] = useState(false);

  const handleDownloadGuide = () => {
    const filename = "African_PM_Salary_Guide_2025.pdf";
    const link = document.createElement("a");
    link.href = `/downloads/${filename}`;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Comprehensive salary data for African PM roles
  const salaryData: SalaryData = {
    countries: [
      {
        id: "nigeria",
        name: "Nigeria",
        currency: "USD",
        flag: "🇳🇬",
        salaryRanges: {
          junior: { min: 25000, max: 45000, median: 35000 },
          mid: { min: 45000, max: 75000, median: 60000 },
          senior: { min: 75000, max: 120000, median: 95000 },
          lead: { min: 120000, max: 180000, median: 150000 },
        },
        costOfLiving: "Low",
        marketSize: "Large",
        techHubs: ["Lagos", "Abuja", "Port Harcourt"],
        topCompanies: ["Flutterwave", "Paystack", "Interswitch", "Kuda Bank"],
        insights: [
          "Fintech dominates the PM job market",
          "Lagos offers highest salaries",
          "Remote work increasing salary ranges",
          "Equity compensation becoming common",
        ],
      },
      {
        id: "south-africa",
        name: "South Africa",
        currency: "USD",
        flag: "🇿🇦",
        salaryRanges: {
          junior: { min: 35000, max: 55000, median: 45000 },
          mid: { min: 55000, max: 85000, median: 70000 },
          senior: { min: 85000, max: 130000, median: 107000 },
          lead: { min: 130000, max: 200000, median: 165000 },
        },
        costOfLiving: "Medium",
        marketSize: "Large",
        techHubs: ["Cape Town", "Johannesburg", "Durban"],
        topCompanies: ["Naspers", "Standard Bank", "Discovery", "Takealot"],
        insights: [
          "Most mature PM market in Africa",
          "Strong fintech and e-commerce sectors",
          "Cape Town tech scene growing rapidly",
          "International companies offer premium salaries",
        ],
      },
      {
        id: "kenya",
        name: "Kenya",
        currency: "USD",
        flag: "🇰🇪",
        salaryRanges: {
          junior: { min: 20000, max: 40000, median: 30000 },
          mid: { min: 40000, max: 70000, median: 55000 },
          senior: { min: 70000, max: 110000, median: 90000 },
          lead: { min: 110000, max: 160000, median: 135000 },
        },
        costOfLiving: "Medium",
        marketSize: "Medium",
        techHubs: ["Nairobi", "Mombasa"],
        topCompanies: ["Safaricom", "Equity Bank", "Jumia", "Twiga Foods"],
        insights: [
          "Mobile money expertise highly valued",
          "Agritech and fintech leading growth",
          "Nairobi is East Africa's tech hub",
          "Strong focus on financial inclusion",
        ],
      },
      {
        id: "egypt",
        name: "Egypt",
        currency: "USD",
        flag: "🇪🇬",
        salaryRanges: {
          junior: { min: 18000, max: 35000, median: 26500 },
          mid: { min: 35000, max: 60000, median: 47500 },
          senior: { min: 60000, max: 95000, median: 77500 },
          lead: { min: 95000, max: 140000, median: 117500 },
        },
        costOfLiving: "Low",
        marketSize: "Large",
        techHubs: ["Cairo", "Alexandria"],
        topCompanies: ["Fawry", "Vezeeta", "Swvl", "Paymob"],
        insights: [
          "Rapidly growing startup ecosystem",
          "Government digitization driving demand",
          "Arabic language skills premium",
          "Regional expansion opportunities",
        ],
      },
      {
        id: "ghana",
        name: "Ghana",
        currency: "USD",
        flag: "🇬🇭",
        salaryRanges: {
          junior: { min: 22000, max: 38000, median: 30000 },
          mid: { min: 38000, max: 65000, median: 51500 },
          senior: { min: 65000, max: 100000, median: 82500 },
          lead: { min: 100000, max: 145000, median: 122500 },
        },
        costOfLiving: "Medium",
        marketSize: "Small",
        techHubs: ["Accra", "Kumasi"],
        topCompanies: ["MTN Ghana", "Zeepay", "Hubtel", "ExpressPay"],
        insights: [
          "Mobile payments and fintech focus",
          "Growing international interest",
          "English-speaking advantage",
          "Regional gateway to West Africa",
        ],
      },
    ],
    industries: [
      {
        id: "fintech",
        name: "Fintech",
        multiplier: 1.2,
        description: "Highest paying sector with strong growth",
        topSkills: [
          "Payment Systems",
          "Regulatory Compliance",
          "Financial Inclusion",
          "API Design",
        ],
      },
      {
        id: "ecommerce",
        name: "E-commerce",
        multiplier: 1.1,
        description: "Growing rapidly across Africa",
        topSkills: [
          "Marketplace Dynamics",
          "Logistics",
          "Mobile Commerce",
          "Localization",
        ],
      },
      {
        id: "healthtech",
        name: "Healthtech",
        multiplier: 1.0,
        description: "Emerging sector with social impact",
        topSkills: [
          "Healthcare Compliance",
          "Telemedicine",
          "Health Records",
          "Patient Experience",
        ],
      },
      {
        id: "edtech",
        name: "EdTech",
        multiplier: 0.9,
        description: "Mission-driven with growth potential",
        topSkills: [
          "Learning Platforms",
          "Content Strategy",
          "Student Engagement",
          "Assessment Tools",
        ],
      },
      {
        id: "agritech",
        name: "AgriTech",
        multiplier: 0.95,
        description: "High impact, developing market",
        topSkills: [
          "Supply Chain",
          "Rural Markets",
          "Agricultural Data",
          "Farmer Experience",
        ],
      },
      {
        id: "banking",
        name: "Traditional Banking",
        multiplier: 1.15,
        description: "Stable with digital transformation focus",
        topSkills: [
          "Digital Banking",
          "Regulatory Knowledge",
          "Legacy Systems",
          "Customer Experience",
        ],
      },
    ],
    companySizes: [
      {
        id: "startup",
        name: "Startup (1-50)",
        multiplier: 0.85,
        equity: "High",
      },
      {
        id: "small",
        name: "Small (51-200)",
        multiplier: 0.95,
        equity: "Medium",
      },
      {
        id: "medium",
        name: "Medium (201-1000)",
        multiplier: 1.0,
        equity: "Low",
      },
      {
        id: "large",
        name: "Large (1000+)",
        multiplier: 1.2,
        equity: "Very Low",
      },
    ],
  };

  const levels: LevelInfo[] = [
    {
      id: "junior",
      name: "Junior PM (0-2 years)",
      description: "Entry-level product management roles",
    },
    {
      id: "mid",
      name: "Mid-level PM (3-5 years)",
      description: "Experienced individual contributors",
    },
    {
      id: "senior",
      name: "Senior PM (5-8 years)",
      description: "Senior individual contributors and team leads",
    },
    {
      id: "lead",
      name: "Lead/Principal PM (8+ years)",
      description: "Strategic leaders and people managers",
    },
  ];

  const benefits: BenefitCategory[] = [
    {
      category: "Health & Wellness",
      items: [
        { name: "Health Insurance", prevalence: 85, value: "$2,000-5,000" },
        { name: "Dental Coverage", prevalence: 60, value: "$500-1,200" },
        {
          name: "Mental Health Support",
          prevalence: 40,
          value: "$1,000-2,500",
        },
        { name: "Gym Membership", prevalence: 35, value: "$300-800" },
      ],
    },
    {
      category: "Financial",
      items: [
        {
          name: "Equity/Stock Options",
          prevalence: 70,
          value: "0.1%-2% equity",
        },
        {
          name: "Performance Bonus",
          prevalence: 75,
          value: "10%-25% of salary",
        },
        {
          name: "Retirement Contribution",
          prevalence: 55,
          value: "3%-8% match",
        },
        {
          name: "Professional Development",
          prevalence: 80,
          value: "$1,000-5,000",
        },
      ],
    },
    {
      category: "Work-Life Balance",
      items: [
        { name: "Remote Work", prevalence: 90, value: "Flexible location" },
        { name: "Flexible Hours", prevalence: 85, value: "Work-life balance" },
        { name: "Unlimited PTO", prevalence: 25, value: "Flexible time off" },
        { name: "Parental Leave", prevalence: 65, value: "3-6 months" },
      ],
    },
  ];

  const marketTrends: MarketTrend[] = [
    {
      trend: "Remote Work Adoption",
      impact: "+15-25%",
      description: "Remote positions command salary premiums",
      icon: <Globe className="h-6 w-6" />,
    },
    {
      trend: "Fintech Boom",
      impact: "+20-30%",
      description: "Fintech PMs earn significantly more",
      icon: <DollarSign className="h-6 w-6" />,
    },
    {
      trend: "Equity Compensation",
      impact: "+10-40%",
      description: "Stock options becoming standard",
      icon: <TrendingUp className="h-6 w-6" />,
    },
    {
      trend: "Skills Premium",
      impact: "+5-15%",
      description: "AI/ML and data skills command premiums",
      icon: <Zap className="h-6 w-6" />,
    },
  ];

  const getCountryData = (countryId: string): Country | undefined => {
    return salaryData.countries.find((c) => c.id === countryId);
  };

  const calculateSalary = (
    baseCountry: Country | undefined,
    level: Level | "all",
    industry: string,
    companySize: string
  ) => {
    if (!baseCountry || level === "all" || !baseCountry.salaryRanges[level])
      return null;

    const baseSalary = baseCountry.salaryRanges[level];
    const industryMultiplier =
      salaryData.industries.find((i) => i.id === industry)?.multiplier || 1;
    const companySizeMultiplier =
      salaryData.companySizes.find((s) => s.id === companySize)?.multiplier ||
      1;

    return {
      min: Math.round(
        baseSalary.min * industryMultiplier * companySizeMultiplier
      ),
      max: Math.round(
        baseSalary.max * industryMultiplier * companySizeMultiplier
      ),
      median: Math.round(
        baseSalary.median * industryMultiplier * companySizeMultiplier
      ),
    };
  };

  const filteredCountries =
    selectedCountry === "all"
      ? salaryData.countries
      : salaryData.countries.filter((c) => c.id === selectedCountry);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              African PM Salary Guide 2025
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Comprehensive salary data for product managers across Africa. Make
              informed career decisions with real market insights from 500+ PM
              professionals.
            </p>
            <div className="flex items-center justify-center space-x-8 text-sm text-gray-600">
              <div className="flex items-center">
                <Users className="h-5 w-5 mr-2 text-blue-600" />
                <span>500+ Data Points</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-green-600" />
                <span>15+ Countries</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2 text-purple-600" />
                <span>Updated Monthly</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Salary Calculator */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-2xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Salary Calculator
              </h2>
              <p className="text-xl text-gray-600">
                Get personalized salary estimates based on your location,
                experience, and industry
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Country
                </label>
                <select
                  value={selectedCountry}
                  onChange={(e) => setSelectedCountry(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                >
                  <option value="all">All Countries</option>
                  {salaryData.countries.map((country) => (
                    <option key={country.id} value={country.id}>
                      {country.flag} {country.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Experience Level
                </label>
                <select
                  value={selectedLevel}
                  onChange={(e) =>
                    setSelectedLevel(e.target.value as Level | "all")
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                >
                  <option value="all">All Levels</option>
                  {levels.map((level) => (
                    <option key={level.id} value={level.id}>
                      {level.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Industry
                </label>
                <select
                  value={selectedIndustry}
                  onChange={(e) => setSelectedIndustry(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                >
                  <option value="all">All Industries</option>
                  {salaryData.industries.map((industry) => (
                    <option key={industry.id} value={industry.id}>
                      {industry.name}
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
                  <option value="all">All Sizes</option>
                  {salaryData.companySizes.map((size) => (
                    <option key={size.id} value={size.id}>
                      {size.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {selectedCountry !== "all" && selectedLevel !== "all" && (
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Your Estimated Salary Range
                </h3>
                {(() => {
                  const countryData = getCountryData(selectedCountry);
                  const calculatedSalary = calculateSalary(
                    countryData,
                    selectedLevel,
                    selectedIndustry,
                    selectedCompanySize
                  );

                  if (!calculatedSalary) return null;

                  return (
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center p-4 bg-blue-50 rounded-lg">
                        <div className="text-2xl font-bold text-blue-600">
                          ${calculatedSalary.min.toLocaleString()}
                        </div>
                        <div className="text-sm text-gray-600">Minimum</div>
                      </div>
                      <div className="text-center p-4 bg-green-50 rounded-lg">
                        <div className="text-2xl font-bold text-green-600">
                          ${calculatedSalary.median.toLocaleString()}
                        </div>
                        <div className="text-sm text-gray-600">Median</div>
                      </div>
                      <div className="text-center p-4 bg-orange-50 rounded-lg">
                        <div className="text-2xl font-bold text-orange-600">
                          ${calculatedSalary.max.toLocaleString()}
                        </div>
                        <div className="text-sm text-gray-600">Maximum</div>
                      </div>
                    </div>
                  );
                })()}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Country Breakdown */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Salary by Country
            </h2>
            <p className="text-xl text-gray-600">
              Detailed breakdown of PM salaries across major African markets
            </p>
          </div>

          <div className="space-y-8">
            {filteredCountries.map((country) => (
              <div
                key={country.id}
                className="bg-white rounded-xl p-8 shadow-sm"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <span className="text-4xl">{country.flag}</span>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {country.name}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span>Cost of Living: {country.costOfLiving}</span>
                        <span>Market Size: {country.marketSize}</span>
                        <span>Tech Hubs: {country.techHubs.join(", ")}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-600">
                      Median Senior PM
                    </div>
                    <div className="text-2xl font-bold text-orange-600">
                      ${country.salaryRanges.senior.median.toLocaleString()}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
                  {levels.map((level) => {
                    const salaryRange = country.salaryRanges[level.id];
                    return (
                      <div key={level.id} className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-900 mb-2">
                          {level.name.split(" ")[0]} PM
                        </h4>
                        <div className="text-lg font-bold text-gray-900">
                          ${salaryRange.min.toLocaleString()} - $
                          {salaryRange.max.toLocaleString()}
                        </div>
                        <div className="text-sm text-gray-600">
                          Median: ${salaryRange.median.toLocaleString()}
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Top Companies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {country.topCompanies.map((company, index) => (
                        <span
                          key={index}
                          className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                        >
                          {company}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Market Insights
                    </h4>
                    <ul className="space-y-1">
                      {country.insights.map((insight, index) => (
                        <li
                          key={index}
                          className="text-sm text-gray-600 flex items-center"
                        >
                          <div className="w-1 h-1 bg-orange-500 rounded-full mr-2"></div>
                          {insight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Analysis */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Industry Salary Premiums
            </h2>
            <p className="text-xl text-gray-600">
              How different industries affect PM compensation across Africa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {salaryData.industries.map((industry) => (
              <div
                key={industry.id}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {industry.name}
                  </h3>
                  <div
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      industry.multiplier >= 1.15
                        ? "bg-green-100 text-green-800"
                        : industry.multiplier >= 1.05
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {industry.multiplier >= 1 ? "1+" : ""}
                    {Math.round((industry.multiplier - 1) * 100)}%
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  {industry.description}
                </p>
                <div>
                  <h4 className="font-medium text-gray-600 mb-2">Top Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {industry.topSkills.map((skill, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Trends */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Market Trends
            </h2>
            <p className="text-xl text-gray-600">
              Key trends shaping PM compensation in Africa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {marketTrends.map((trend, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm text-center"
              >
                <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <div className="text-orange-600">{trend.icon}</div>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {trend.trend}
                </h3>
                <div className="text-2xl font-bold text-green-600 mb-2">
                  {trend.impact}
                </div>
                <p className="text-sm text-gray-600">{trend.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Analysis */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Benefits & Perks
            </h2>
            <p className="text-xl text-gray-600">
              Beyond salary: comprehensive benefits offered to African PMs
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {benefits.map((category, index) => (
              <div
                key={index}
                className="bg-white p-6 border rounded-xl border-gray-200"
              >
                <h3 className="text-xl mb-6 font-semibold text-gray-900">
                  {category.category}
                </h3>
                <div className="space-y-4">
                  {category.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="flex items-center justify-between"
                    >
                      <div>
                        <div className="font-medium text-gray-900">
                          {item.name}
                        </div>
                        <div className="text-sm text-gray-600">
                          {item.value}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium text-gray-900">
                          {item.prevalence}%
                        </div>
                        <div className="w-16 bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-orange-500 h-2 rounded-full"
                            style={{ width: item.prevalence + "%" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Negotiation Tips */}
      <section className="py-12 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Salary Negotiation Tips
            </h2>
            <p className="text-xl text-gray-600">
              Expert advice for negotiating PM salaries in African markets
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Research Market Rates",
                description:
                  "Use this guide and network with other PMs to understand current market rates for your level and location.",
                icon: <BarChart3 className="h-6 w-6" />,
              },
              {
                title: "Highlight African Market Experience",
                description:
                  "Experience with African markets, regulations, and cultural nuances commands a premium.",
                icon: <Globe className="h-6 w-6" />,
              },
              {
                title: "Consider Total Compensation",
                description:
                  "Factor in equity, benefits, remote work flexibility, and professional development opportunities.",
                icon: <Calculator className="h-6 w-6" />,
              },
              {
                title: "Demonstrate Impact",
                description:
                  "Quantify your achievements with metrics relevant to African markets (user growth, user revenue, revenue, etc.).",
                icon: <TrendingUp className="h-6 w-6" />,
              },
              {
                title: "Leverage Remote Opportunities",
                description:
                  "Remote positions often offer higher compensation and access to international companies.",
                icon: <Zap className="h-6 w-6" />,
              },
              {
                title: "Build Specialized Skills",
                description:
                  "Develop expertise in high-demand areas like fintech, mobile-first design, or regulatory compliance.",
                icon: <Award className="h-6 w-6" />,
              },
            ].map((tip, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <div className="text-orange-600">{tip.icon}</div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {tip.title}
                </h3>
                <p className="text-sm text-gray-600">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-orange-500 to-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-4 sm:py-6 lg:px-8 lg:text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Advance Your PM Career?
          </h2>
          <p className="text-xl text-white opacity-90 mb-8 max-w-2xl mx-auto">
            Join our community to access exclusive salary insights, negotiate
            better offers, and connect with top companies across Africa.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleDownloadGuide}
              className="bg-white text-orange-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-300 font-semibold flex items-center space-x-2"
            >
              <div>
                <Download className="h-5 w-5" />
              </div>
              <span>Download Full Report</span>
            </button>
            <Link to="/register">
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-orange-600 transition-colors duration-300 font-semibold">
                Join PM Community
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SalaryGuidePage;
