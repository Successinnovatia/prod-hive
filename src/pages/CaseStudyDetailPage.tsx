import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  Users,
  TrendingUp,
  Globe,
  DollarSign,
  Shield,
  CheckCircle,
  Download,
  Share2,
  Calendar,
  AlertCircle,
  Lightbulb,
  Target,
  Code,
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

// Define interfaces for type safety
interface Metric {
  label: string;
  value: string;
  icon: JSX.Element;
  growth: string;
}

interface Section {
  title: string;
  content: string;
}

interface KeyLesson {
  title: string;
  description: string;
  icon: JSX.Element;
  details: string;
}

interface DownloadableAsset {
  title: string;
  description: string;
  format: string;
  size: string;
  pages: number;
}

interface RelatedCaseStudy {
  id: string;
  title: string;
  company: string;
  readTime: string;
  category: string;
}

interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  company: string;
  country: string;
  category: string;
  readTime: string;
  publishDate: string;
  author: string;
  authorRole: string;
  authorBio: string;
  image: string;
  heroImage: string;
  overview: {
    challenge: string;
    solution: string;
    impact: string;
    timeline: string;
  };
  metrics: Metric[];
  sections: Record<string, Section>;
  keyLessons: KeyLesson[];
  pmInsights: string[];
  downloadableAssets: DownloadableAsset[];
  relatedCaseStudies: RelatedCaseStudy[];
}

const CaseStudyDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("overview");
  const [downloadFormat, setDownloadFormat] = useState("pdf");

  // Comprehensive case studies database
  const caseStudies: Record<string, CaseStudy> = {
    "mpesa-mobile-payments": {
      id: "mpesa-mobile-payments",
      title: "How M-Pesa Revolutionized Mobile Payments in Africa",
      subtitle: "From SMS-based money transfer to a $2.1B fintech ecosystem",
      company: "Safaricom",
      country: "Kenya",
      category: "Fintech",
      readTime: "25 min",
      publishDate: "2024-12-20",
      author: "David Ochieng",
      authorRole: "Product Manager at Safaricom",
      authorBio:
        "David has 8+ years of experience in fintech product management across East Africa, leading mobile money innovations at Safaricom.",
      image:
        "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800",
      heroImage:
        "https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=1200",
      overview: {
        challenge:
          "In 2007, Kenya had one of the lowest banking penetration rates globally at 19%. The majority of the population relied on cash transactions and unsafe informal money transfer systems, creating barriers to economic participation.",
        solution:
          "M-Pesa launched as a simple SMS-based money transfer service that allowed users to deposit, withdraw, and transfer money using basic mobile phones, without requiring traditional bank accounts.",
        impact:
          "Today, M-Pesa serves over 50 million users across 7 countries, processes over $314 billion annually, and has become the backbone of Kenya's digital economy, increasing financial inclusion to 83%.",
        timeline: "2007-2024 (17 years)",
      },
      metrics: [
        {
          label: "Active Users",
          value: "50M+",
          icon: <Users className="h-6 w-6" />,
          growth: "+15% YoY",
        },
        {
          label: "Annual Volume",
          value: "$314B",
          icon: <DollarSign className="h-6 w-6" />,
          growth: "+22% YoY",
        },
        {
          label: "Countries",
          value: "7",
          icon: <Globe className="h-6 w-6" />,
          growth: "Expanding",
        },
        {
          label: "Agents",
          value: "400K+",
          icon: <TrendingUp className="h-6 w-6" />,
          growth: "+8% YoY",
        },
      ],
      sections: {
        problem: {
          title: "The Problem: Financial Exclusion Crisis",
          content: `
            <div class="space-y-6">
              <p class="text-lg text-gray-700 leading-relaxed">In 2007, Kenya faced a massive financial inclusion challenge that affected millions of citizens and hindered economic growth.</p>
              <div class="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                <h3 class="text-lg font-semibold text-red-900 mb-3">Key Statistics</h3>
                <ul class="space-y-2 text-red-800">
                  <li><strong>19% banking penetration</strong> - Only 1 in 5 adults had access to formal banking</li>
                  <li><strong>80% rural population</strong> - Limited access to physical bank branches</li>
                  <li><strong>$2 average daily income</strong> - High poverty levels limiting financial access</li>
                  <li><strong>20% transaction fees</strong> - Expensive informal money transfer systems</li>
                </ul>
              </div>
              <h3 class="text-xl font-semibold text-gray-900">Core Challenges</h3>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="bg-gray-50 p-6 rounded-lg">
                  <h4 class="font-semibold text-gray-900 mb-3">
                    <MapPin class="h-5 w-5 mr-2 text-red-500" />
                    Geographic Barriers
                  </h4>
                  <ul class="space-y-2 text-gray-700 text-sm">
                    <li>• Bank branches concentrated in urban areas</li>
                    <li>• Rural populations traveled hours to access banking</li>
                    <li>• Poor road infrastructure limited physical access</li>
                    <li>• High cost of establishing rural branches</li>
                  </ul>
                </div>
                <div class="bg-gray-50 p-6 rounded-lg">
                  <h4 class="font-semibold text-gray-900 mb-3">
                    <DollarSign class="h-5 w-5 mr-2 text-red-500" />
                    Economic Barriers
                  </h4>
                  <ul class="space-y-2 text-gray-700 text-sm">
                    <li>• High minimum balance requirements</li>
                    <li>• Complex documentation requirements</li>
                    <li>• Transaction fees up to 20% of transfer amount</li>
                    <li>• No credit history for loan access</li>
                  </ul>
                </div>
                <div class="bg-gray-50 p-6 rounded-lg">
                  <h4 class="font-semibold text-gray-900 mb-3">
                    <Shield class="h-5 w-5 mr-2 text-red-500" />
                    Security Concerns
                  </h4>
                  <ul class="space-y-2 text-gray-700 text-sm">
                    <li>• Physical cash transport was dangerous</li>
                    <li>• Informal systems lacked accountability</li>
                    <li>• High risk of theft and fraud</li>
                    <li>• No recourse for failed transactions</li>
                  </ul>
                </div>
                <div class="bg-gray-50 p-6 rounded-lg">
                  <h4 class="font-semibold text-gray-900 mb-3">
                    <Users class="h-5 w-5 mr-2 text-red-500" />
                    Social Impact
                  </h4>
                  <ul class="space-y-2 text-gray-700 text-sm">
                    <li>• Limited remittances to rural families</li>
                    <li>• Difficulty saving for emergencies</li>
                    <li>• Exclusion from formal economy</li>
                    <li>• Limited business growth opportunities</li>
                  </ul>
                </div>
              </div>
              <div class="bg-blue-50 p-6 rounded-lg">
                <h4 class="font-semibold text-blue-900 mb-3">The Opportunity</h4>
                <p class="text-blue-800">Despite these challenges, Kenya had high mobile phone penetration (65% in 2007) and a strong need for money transfer solutions, creating a perfect opportunity for mobile-based financial services.</p>
              </div>
            </div>
          `,
        },
        solution: {
          title: "The Solution: Mobile Money Revolution",
          content: `
            <div class="space-y-6">
              <p class="text-lg text-gray-700 leading-relaxed">M-Pesa's solution was elegantly simple yet revolutionary, leveraging existing mobile infrastructure to create a new financial ecosystem.</p>
              <div class="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                <h3 class="text-lg font-semibold text-green-900 mb-3">Core Innovation</h3>
                <p class="text-green-800">Transform mobile phones into digital wallets using SMS technology, making financial services accessible to anyone with a basic phone.</p>
              </div>
              <h3 class="text-xl font-semibold text-gray-900">Product Architecture</h3>
              <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h4 class="font-semibold text-gray-900 mb-4">
                    <Smartphone class="h-5 w-5 mr-2 text-blue-500" />
                    Technical Foundation
                  </h4>
                  <div class="space-y-4">
                    <div class="bg-white border border-gray-200 p-4 rounded-lg">
                      <h5 class="font-medium text-gray-900 mb-2">SMS-Based Interface</h5>
                      <ul class="text-sm text-gray-600 space-y-1">
                        <li>• Worked on any mobile phone (no smartphone required)</li>
                        <li>• Simple menu-driven commands</li>
                        <li>• Real-time transaction confirmations</li>
                        <li>• Multi-language support (English, Swahili)</li>
                      </ul>
                    </div>
                    <div class="bg-white border border-gray-200 p-4 rounded-lg">
                      <h5 class="font-medium text-gray-900 mb-2">Security Layer</h5>
                      <ul class="text-sm text-gray-600 space-y-1">
                        <li>• SIM card-based authentication</li>
                        <li>• PIN protection for transactions</li>
                        <li>• Transaction limits and monitoring</li>
                        <li>• End-to-end encryption</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 mb-4">
                    <Users class="h-5 w-5 mr-2 text-green-500" />
                    Agent Network Model
                  </h4>
                  <div class="space-y-4">
                    <div class="bg-white border border-gray-200 p-4 rounded-lg">
                      <h5 class="font-medium text-gray-900 mb-2">Agent Functions</h5>
                      <ul class="text-sm text-gray-600 space-y-1">
                        <li>• Cash-in: Convert physical cash to digital money</li>
                        <li>• Cash-out: Convert digital money to physical cash</li>
                        <li>• Customer support and education</li>
                        <li>• Account registration and KYC</li>
                      </ul>
                    </div>
                    <div class="bg-white border border-gray-200 p-4 rounded-lg">
                      <h5 class="font-medium text-gray-900 mb-2">Agent Selection</h5>
                      <ul class="text-sm text-gray-600 space-y-1">
                        <li>• Existing retail shops and kiosks</li>
                        <li>• Trusted community members</li>
                        <li>• Strategic location placement</li>
                        <li>• Comprehensive training programs</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <h3 class="text-xl font-semibold text-gray-900">Core Features</h3>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div class="bg-blue-50 p-6 rounded-lg text-center">
                  <DollarSign class="h-12 w-12 text-blue-600 mx-auto mb-3" />
                  <h4 class="font-semibold text-gray-900 mb-2">Send Money</h4>
                  <p class="text-sm text-gray-600">Transfer money to any mobile number instantly with SMS confirmation</p>
                </div>
                <div class="bg-green-50 p-6 rounded-lg text-center">
                  <Smartphone class="h-12 w-12 text-green-600 mx-auto mb-3" />
                  <h4 class="font-semibold text-gray-900 mb-2">Buy Airtime</h4>
                  <p class="text-sm text-gray-600">Purchase mobile airtime for self or others using M-Pesa balance</p>
                </div>
                <div class="bg-purple-50 p-6 rounded-lg text-center">
                  <FileText class="h-12 w-12 text-purple-600 mx-auto mb-3" />
                  <h4 class="font-semibold text-gray-900 mb-2">Pay Bills</h4>
                  <p class="text-sm text-gray-600">Pay utilities, school fees, and other bills directly from mobile wallet</p>
                </div>
              </div>
              <div class="bg-orange-50 p-6 rounded-lg">
                <h4 class="font-semibold text-orange-900 mb-3">Pricing Strategy</h4>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h5 class="font-medium text-orange-800 mb-2">Transparent Fees</h5>
                    <ul class="text-sm text-orange-700 space-y-1">
                      <li>• Fixed fee structure (not percentage-based)</li>
                      <li>• Lower costs than traditional money transfer</li>
                      <li>• No monthly account maintenance fees</li>
                      <li>• Free balance inquiries</li>
                    </ul>
                  </div>
                  <div>
                    <h5 class="font-medium text-orange-800 mb-2">Accessibility</h5>
                    <ul class="text-sm text-orange-700 space-y-1">
                      <li>• No minimum balance requirements</li>
                      <li>• Instant account activation</li>
                      <li>• Works with any mobile phone</li>
                      <li>• Available 24/7</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          `,
        },
        execution: {
          title: "Execution: Building Trust and Scale",
          content: `
            <div class="space-y-6">
              <p class="text-lg text-gray-700 leading-relaxed">M-Pesa's execution strategy focused on gradual trust-building, regulatory partnership, and systematic scaling across Kenya and beyond.</p>
              <div class="space-y-8">
                <div class="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                  <h3 class="text-lg font-semibold text-blue-900 mb-3">
                    <Calendar class="h-5 w-5 mr-2" />
                    Phase 1: Pilot and Learning (2007-2008)
                  </h3>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 class="font-medium text-blue-800 mb-2">Launch Strategy</h4>
                      <ul class="space-y-1 text-blue-700 text-sm">
                        <li>• Started with 200 agents in Nairobi and surrounding areas</li>
                        <li>• Limited to person-to-person money transfers</li>
                        <li>• Focused on urban-to-rural remittances</li>
                        <li>• Extensive user education campaigns</li>
                      </ul>
                    </div>
                    <div>
                      <h4 class="font-medium text-blue-800 mb-2">Key Learnings</h4>
                      <ul class="space-y-1 text-blue-700 text-sm">
                        <li>• Users needed extensive hand-holding initially</li>
                        <li>• Agent training was critical for success</li>
                        <li>• Trust building required time and consistency</li>
                        <li>• Regulatory clarity was essential</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                  <h3 class="text-lg font-semibold text-green-900 mb-3">
                    <TrendingUp class="h-5 w-5 mr-2" />
                    Phase 2: National Expansion (2008-2010)
                  </h3>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 class="font-medium text-green-800 mb-2">Scaling Strategy</h4>
                      <ul class="space-y-1 text-green-700 text-sm">
                        <li>• Aggressive agent recruitment to 10,000+ nationwide</li>
                        <li>• "Send Money Home" marketing campaign</li>
                        <li>• Partnership with banks for cash management</li>
                        <li>• Added bill payment functionality</li>
                      </ul>
                    </div>
                    <div>
                      <h4 class="font-medium text-green-800 mb-2">Market Response</h4>
                      <ul class="space-y-1 text-green-700 text-sm">
                        <li>• Reached 1 million users by end of 2008</li>
                        <li>• Strong adoption in rural areas</li>
                        <li>• Positive word-of-mouth marketing</li>
                        <li>• Competitors began entering market</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
                  <h3 class="text-lg font-semibold text-purple-900 mb-3">
                    <Globe class="h-5 w-5 mr-2" />
                    Phase 3: Ecosystem Development (2010-2015)
                  </h3>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 class="font-medium text-purple-800 mb-2">Platform Strategy</h4>
                      <ul class="space-y-1 text-purple-700 text-sm">
                        <li>• Opened APIs for third-party integrations</li>
                        <li>• Enabled merchant payments (Lipa Na M-Pesa)</li>
                        <li>• Integrated with government services</li>
                        <li>• Added savings and loan products</li>
                      </ul>
                    </div>
                    <div>
                      <h4 class="font-medium text-purple-800 mb-2">International Expansion</h4>
                      <ul class="space-y-1 text-purple-700 text-sm">
                        <li>• Launched in Tanzania (2008)</li>
                        <li>• Expanded to Afghanistan, South Africa</li>
                        <li>• Adapted model for different markets</li>
                        <li>• Learned from market-specific challenges</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg">
                  <h3 class="text-lg font-semibold text-orange-900 mb-3">
                    <Smartphone class="h-5 w-5 mr-2" />
                    Phase 4: Digital Transformation (2015-Present)
                  </h3>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 class="font-medium text-orange-800 mb-2">Technology Evolution</h4>
                      <ul class="space-y-1 text-orange-700 text-sm">
                        <li>• Launched M-Pesa smartphone app</li>
                        <li>• Added QR code payments</li>
                        <li>• Integrated with global payment networks</li>
                        <li>• Enhanced security with biometrics</li>
                      </ul>
                    </div>
                    <div>
                      <h4 class="font-medium text-orange-800 mb-2">Advanced Services</h4>
                      <ul class="space-y-1 text-orange-700 text-sm">
                        <li>• M-Shwari savings and loan product</li>
                        <li>• Insurance products (M-Tiba health)</li>
                        <li>• Business solutions for enterprises</li>
                        <li>• Cross-border remittances</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="bg-gray-50 p-6 rounded-lg">
                <h3 class="text-lg font-semibold text-gray-900 mb-4">Execution Success Factors</h3>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div class="text-center">
                    <Shield class="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <h4 class="font-medium text-gray-900 mb-1">Trust Building</h4>
                    <p class="text-sm text-gray-600">Leveraged Safaricom's existing brand trust</p>
                  </div>
                  <div class="text-center">
                    <h4 class="font-medium text-gray-900 mb-1">Agent Network</h4>
                    <p class="text-sm text-gray-500">Strategic agent placement and support programs</p>
              </div>
            </div>`,
        },
        challenges: {
          title: "Key Challenges and Solutions",
          content: `
            <div class="space-y-6">
              <p class="text-lg text-gray-700 leading-relaxed">M-Pesa faced significant challenges during its development and scaling, each requiring innovative solutions and strategic thinking.</p>
              <div class="space-y-6">
                <div class="bg-red-50 border border-red-200 rounded-lg">
                  <h3 class="text-lg font-semibold text-red-900 mb-4">
                    <AlertCircle class="h-5 w-5 mr-2" />
                    Challenge 1: Regulatory Uncertainty
                  </h3>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 class="font-medium text-red-800 mb-2">The Problem</h4>
                      <ul class="space-y-1 text-red-700 text-sm">
                        <li>• No existing regulatory framework for mobile money</li>
                        <li>• Central bank concerns about financial stability</li>
                        <li>• Unclear legal status of electronic money</li>
                        <li>• Potential for sudden regulatory shutdown</li>
                      </ul>
                    </div>
                    <div>
                      <h4 class="font-medium text-red-800 mb-2">The Solution</h4>
                      <ul class="space-y-1 text-red-700 text-sm">
                        <li>• Proactive engagement with Central Bank of Kenya</li>
                        <li>• Transparent operations and regular reporting</li>
                        <li>• Gradual trust-building through pilot programs</li>
                        <li>• Collaborative development of regulations</li>
                      </ul>
                    </div>
                  </div>
                  <div class="mt-4 p-4 bg-red-100 rounded">
                    <p class="text-red-800 text-sm"><strong>Key</strong> Learning: Regulatory partnership is essential for fintech success. Transparency and collaboration build trust with regulators.</p>
                  </div>
                </div>
                <div class="bg-orange-50 border border-orange-200 rounded-lg p-6">
                  <h3 class="text-lg font-semibold text-orange-900 mb-4">
                    <Users class="h-5 w-5 mr-2" />
                    Challenge 2: User Trust and Adoption
                  </h3>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 class="font-medium text-orange-800 mb-2">The Problem</h4>
                      <ul class="space-y-1 text-orange-700 text-sm">
                        <li>• Low literacy rates in target population</li>
                        <li>• Skepticism about digital money concept</li>
                        <li>• Fear of losing money to technology</li>
                        <li>• Preference for physical cash transactions</li>
                      </ul>
                    </div>
                    <div>
                      <h4 class="font-medium text-orange-800 mb-2">The Solution</h4>
                      <ul class="space-y-1 text-orange-700 text-sm">
                        <li>• Extensive user education campaigns</li>
                        <li>• Agent training for customer support</li>
                        <li>• Leveraged Safaricom's existing brand trust</li>
                        <li>• Word-of-mouth marketing through early adopters</li>
                      </ul>
                    </div>
                  </div>
                  <div class="mt-4 p-4 bg-orange-100 rounded">
                    <p class="text-orange-800 text-sm"><strong>Key Learning:</strong> User education and trust-building are critical for new technology adoption, especially in underserved markets.</p>
                  </div>
                </div>
              </div>
            </div>`,
        },
        results: {
          title: "Results and Transformational Impact",
          content: `
            <div class="space-y-6">
              <p class="text-lg text-gray-700 leading-relaxed">M-Pesa's impact extends far beyond business metrics, fundamentally transforming Kenya's economy and society while inspiring mobile money adoption globally.</p>
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div class="bg-blue-50 p-6 rounded-lg text-center">
                  <div class="text-3xl font-bold text-blue-600 mb-2">50M+</div>
                  <div class="text-sm text-blue-800">Active Users</div>
                  <div class="text-xs text-blue-600 mt-1">Across 7 countries</div>
                </div>
                <div class="bg-green-50 p-6 rounded-lg text-center">
                  <div class="text-3xl font-bold text-green-600 mb-2">$314B</div>
                  <div class="text-sm text-green-800">Annual Volume</div>
                  <div class="text-xs text-green-600 mt-1">22% YoY growth</div>
                </div>
              </div>
            </div>
          </div>
          `,
        },
      },
      keyLessons: [
        {
          title: "Start with a Real Problem",
          description:
            "M-Pesa succeeded because it solved a genuine, widespread problem affecting millions of people. Deep market research revealed the pain points.",
          icon: <Target className="h-6 w-6" />,
          details:
            "The team spent months understanding the informal money transfer ecosystem and identifying specific pain points before building the solution.",
        },
        {
          title: "Build Trust Gradually",
          description:
            "Success required extensive user education and leveraging existing brand trust. Trust is is the foundation of financial services.",
          icon: <Shield className="h-6 w-6" />,
          details:
            "Safaricom's existing brand trust was crucial. The team invested heavily in user education and transparent communication.",
        },
      ],
      pmInsights: [
        "User research in low-income segments requires different methodologies and cultural sensitivity",
        "Agent feedback was as important as end-user feedback for product development",
        "Regulatory relationships need dedicated product management attention and resources",
        "Network effects become powerful once critical mass is achieved - focus on reaching tipping point",
      ],
      downloadableAssets: [
        {
          title: "Complete M-Pesa Case Study Report",
          description:
            "Comprehensive 45-page analysis with detailed metrics, timelines, and strategic insights",
          format: "PDF",
          size: "12.3 MB",
          pages: 45,
        },
      ],
      relatedCaseStudies: [
        {
          id: "flutterwave-api",
          title: "Flutterwave's API Strategy",
          company: "Flutterwave",
          readTime: "25 min",
          category: "Fintech",
        },
      ],
    },
    "jumia-localization": {
      id: "jumia-localization",
      title: "Jumia's Multi-Country E-commerce Localization Strategy",
      subtitle:
        "Building Africa's largest e-commerce platform across 11 countries with diverse markets",
      company: "Jumia",
      country: "Multi-country (11 African markets)",
      category: "E-commerce",
      readTime: "18 min",
      publishDate: "2024-12-18",
      author: "Fatima Al-Zahra",
      authorRole: "Product Director at Jumia",
      authorBio:
        "Fatima leads product strategy for Jumia's multi-country operations, with 10+ years experience in e-commerce localization across MENA and Africa.",
      image:
        "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
      heroImage:
        "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200",

      overview: {
        challenge:
          "Building a unified e-commerce platform that works across 11 African countries with different languages, currencies, payment methods, logistics infrastructure, consumer behaviors, and regulatory environments.",
        solution:
          "A modular platform architecture with country-specific customizations, local payment integrations, adaptive logistics solutions, and deep cultural localization while maintaining operational efficiency.",
        impact:
          "Became Africa's largest e-commerce platform with 7.1 million active customers, operations across 11 countries, and $1.3B in annual GMV, proving that localized e-commerce can work at scale in Africa.",
        timeline: "2012-2024 (12 years)",
      },

      metrics: [
        {
          label: "Active Customers",
          value: "7.1M",
          icon: <Users className="h-6 w-6" />,
          growth: "+12% YoY",
        },
        {
          label: "Countries",
          value: "11",
          icon: <Globe className="h-6 w-6" />,
          growth: "Stable",
        },
        {
          label: "Annual GMV",
          value: "$1.3B",
          icon: <DollarSign className="h-6 w-6" />,
          growth: "+18% YoY",
        },
        {
          label: "Active Sellers",
          value: "100K+",
          icon: <TrendingUp className="h-6 w-6" />,
          growth: "+25% YoY",
        },
      ],

      sections: {
        problem: {
          title: "The Challenge: E-commerce Across Diverse African Markets",
          content: `
                <div class="space-y-6">
                  <p class="text-lg text-gray-700 leading-relaxed">Jumia faced the unprecedented challenge of building a unified e-commerce platform across Africa's incredibly diverse markets, each with unique characteristics and requirements.</p>
                  
                  <div class="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                    <h3 class="text-lg font-semibold text-red-900 mb-3">Market Complexity Overview</h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 class="font-medium text-red-800 mb-2">Geographic Scope</h4>
                        <ul class="space-y-1 text-red-700 text-sm">
                          <li>• 11 countries across 4 regions</li>
                          <li>• 54 different languages spoken</li>
                          <li>• 11 different currencies</li>
                          <li>• Varying levels of infrastructure development</li>
                        </ul>
                      </div>
                      <div>
                        <h4 class="font-medium text-red-800 mb-2">Market Maturity</h4>
                        <ul class="space-y-1 text-red-700 text-sm">
                          <li>• Internet penetration: 20% - 70%</li>
                          <li>• E-commerce adoption: 2% - 15%</li>
                          <li>• Credit card usage: 5% - 25%</li>
                          <li>• Logistics infrastructure: Basic to Advanced</li>
                        </ul>
                      </div>
                    </div>
                  </div>
    
                  <h3 class="text-xl font-semibold text-gray-900">Core Challenges by Category</h3>
                  
                  <div class="space-y-6">
                    <div class="bg-blue-50 border border-blue-200 rounded-lg p-6">
                      <h4 class="font-semibold text-blue-900 mb-4">
                        <Globe class="h-5 w-5 mr-2" />
                        Cultural and Language Diversity
                      </h4>
                      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h5 class="font-medium text-blue-800 mb-2">Language Challenges</h5>
                          <ul class="space-y-1 text-blue-700 text-sm">
                            <li>• 20+ major languages across target markets</li>
                            <li>• Arabic, French, English, Portuguese, Swahili</li>
                            <li>• Right-to-left vs left-to-right text</li>
                            <li>• Cultural nuances in product descriptions</li>
                            <li>• Local slang and colloquialisms</li>
                          </ul>
                        </div>
                        <div>
                          <h5 class="font-medium text-blue-800 mb-2">Cultural Preferences</h5>
                          <ul class="space-y-1 text-blue-700 text-sm">
                            <li>• Different fashion and style preferences</li>
                            <li>• Varying color and design sensitivities</li>
                            <li>• Religious and cultural considerations</li>
                            <li>• Local holiday and seasonal patterns</li>
                            <li>• Family vs individual purchasing decisions</li>
                          </ul>
                        </div>
                      </div>
                    </div>
    
                    <div class="bg-green-50 border border-green-200 rounded-lg p-6">
                      <h4 class="font-semibold text-green-900 mb-4">
                        <DollarSign class="h-5 w-5 mr-2" />
                        Payment and Financial Infrastructure
                      </h4>
                      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h5 class="font-medium text-green-800 mb-2">Payment Method Diversity</h5>
                          <ul class="space-y-1 text-green-700 text-sm">
                            <li>• Mobile money: M-Pesa, Orange Money, MTN</li>
                            <li>• Cash on delivery preference: 60-80%</li>
                            <li>• Credit card penetration: 5-25%</li>
                            <li>• Bank transfer variations by country</li>
                            <li>• Digital wallet adoption differences</li>
                          </ul>
                        </div>
                        <div>
                          <h5 class="font-medium text-green-800 mb-2">Currency Challenges</h5>
                          <ul class="space-y-1 text-green-700 text-sm">
                            <li>• 11 different currencies to manage</li>
                            <li>• High volatility in some markets</li>
                            <li>• Cross-border payment complexities</li>
                            <li>• Local pricing psychology differences</li>
                            <li>• Currency conversion and display</li>
                          </ul>
                        </div>
                      </div>
                    </div>
    
                    <div class="bg-purple-50 border border-purple-200 rounded-lg p-6">
                      <h4 class="font-semibold text-purple-900 mb-4">
                        <TrendingUp class="h-5 w-5 mr-2" />
                        Logistics and Infrastructure
                      </h4>
                      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h5 class="font-medium text-purple-800 mb-2">Delivery Challenges</h5>
                          <ul class="space-y-1 text-purple-700 text-sm">
                            <li>• Poor addressing systems in many areas</li>
                            <li>• Limited postal service reliability</li>
                            <li>• Varying road infrastructure quality</li>
                            <li>• Security concerns in some regions</li>
                            <li>• Last-mile delivery complexity</li>
                          </ul>
                        </div>
                        <div>
                          <h5 class="font-medium text-purple-800 mb-2">Operational Complexity</h5>
                          <ul class="space-y-1 text-purple-700 text-sm">
                            <li>• Warehouse location optimization</li>
                            <li>• Inventory management across borders</li>
                            <li>• Import/export regulations</li>
                            <li>• Local supplier network development</li>
                            <li>• Quality control standardization</li>
                          </ul>
                        </div>
                      </div>
                    </div>
    
                    <div class="bg-orange-50 border border-orange-200 rounded-lg p-6">
                      <h4 class="font-semibold text-orange-900 mb-4">
                        <Shield class="h-5 w-5 mr-2" />
                        Regulatory and Legal Environment
                      </h4>
                      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h5 class="font-medium text-orange-800 mb-2">Regulatory Variations</h5>
                          <ul class="space-y-1 text-orange-700 text-sm">
                            <li>• Different e-commerce regulations</li>
                            <li>• Varying consumer protection laws</li>
                            <li>• Import duty and tax structures</li>
                            <li>• Data protection requirements</li>
                            <li>• Business registration complexities</li>
                          </ul>
                        </div>
                        <div>
                          <h5 class="font-medium text-orange-800 mb-2">Compliance Requirements</h5>
                          <ul class="space-y-1 text-orange-700 text-sm">
                            <li>• Local business licensing</li>
                            <li>• Tax registration and reporting</li>
                            <li>• Product safety and standards</li>
                            <li>• Advertising and marketing rules</li>
                            <li>• Employment law compliance</li>
                          </ul>
                        </div>
                      </div>
                    </div>
    
                    <div class="bg-gray-50 border border-gray-200 rounded-lg p-6">
                      <h4 class="font-semibold text-gray-900 mb-4">
                        <Users class="h-5 w-5 mr-2" />
                        Consumer Behavior Differences
                      </h4>
                      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h5 class="font-medium text-gray-800 mb-2">Shopping Patterns</h5>
                          <ul class="space-y-1 text-gray-700 text-sm">
                            <li>• Trust levels with online payments</li>
                            <li>• Mobile vs desktop usage patterns</li>
                            <li>• Social commerce influence</li>
                            <li>• Price sensitivity variations</li>
                            <li>• Return and refund expectations</li>
                          </ul>
                        </div>
                        <div>
                          <h5 class="font-medium text-gray-800 mb-2">Market Maturity</h5>
                          <ul class="space-y-1 text-gray-700 text-sm">
                            <li>• First-time online shoppers: 40-70%</li>
                            <li>• Digital literacy levels</li>
                            <li>• Customer service expectations</li>
                            <li>• Product discovery preferences</li>
                            <li>• Brand loyalty patterns</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
    
                  <div class="bg-yellow-50 p-6 rounded-lg">
                    <h4 class="font-semibold text-yellow-900 mb-3">The Strategic Opportunity</h4>
                    <p class="text-yellow-800">Despite these challenges, Africa represented a massive opportunity with 1.3 billion people, growing internet penetration, increasing smartphone adoption, and a rising middle class hungry for convenient shopping solutions.</p>
                  </div>
                </div>
              `,
        },

        solution: {
          title: "The Solution: Modular Localization Platform",
          content: `
                <div class="space-y-6">
                  <p class="text-lg text-gray-700 leading-relaxed">Jumia developed a sophisticated modular platform architecture that could be customized for each market while maintaining operational efficiency and brand consistency.</p>
                  
                  <div class="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                    <h3 class="text-lg font-semibold text-green-900 mb-3">Core Solution Philosophy</h3>
                    <p class="text-green-800">"Think global, act local" - Build a unified platform with deep local customization capabilities that can adapt to each market's unique requirements while maintaining operational efficiency.</p>
                  </div>
    
                  <h3 class="text-xl font-semibold text-gray-900">Platform Architecture</h3>
                  
                  <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    <div class="bg-blue-50 p-6 rounded-lg">
                      <h4 class="font-semibold text-blue-900 mb-4">
                        <Target class="h-5 w-5 mr-2" />
                        Core Platform Components
                      </h4>
                      <div class="space-y-3">
                        <div class="bg-white p-3 rounded border border-blue-200">
                          <h5 class="font-medium text-blue-800 mb-1">Shared E-commerce Engine</h5>
                          <p class="text-blue-700 text-sm">Common product catalog, order management, and user account systems</p>
                        </div>
                        <div class="bg-white p-3 rounded border border-blue-200">
                          <h5 class="font-medium text-blue-800 mb-1">Modular Country Layers</h5>
                          <p class="text-blue-700 text-sm">Customizable payment, logistics, and catalog modules per market</p>
                        </div>
                        <div class="bg-white p-3 rounded border border-blue-200">
                          <h5 class="font-medium text-blue-800 mb-1">Centralized Admin</h5>
                          <p class="text-blue-700 text-sm">Unified dashboard for managing all markets with local overrides</p>
                        </div>
                      </div>
                    </div>
                    
                    <div class="bg-green-50 p-6 rounded-lg">
                      <h4 class="font-semibold text-green-900 mb-4">
                        <Globe class="h-5 w-5 mr-2" />
                        Localization Framework
                      </h4>
                      <div class="space-y-3">
                        <div class="bg-white p-3 rounded border border-green-200">
                          <h5 class="font-medium text-green-800 mb-1">Multi-Language Engine</h5>
                          <p class="text-green-700 text-sm">Dynamic content translation with cultural context adaptation</p>
                        </div>
                        <div class="bg-white p-3 rounded border border-green-200">
                          <h5 class="font-medium text-green-800 mb-1">Currency Management</h5>
                          <p class="text-green-700 text-sm">Real-time conversion, local pricing, and payment processing</p>
                        </div>
                        <div class="bg-white p-3 rounded border border-green-200">
                          <h5 class="font-medium text-green-800 mb-1">Cultural Adaptation</h5>
                          <p class="text-green-700 text-sm">Local holidays, preferences, and behavioral customizations</p>
                        </div>
                      </div>
                    </div>
                  </div>
    
                  <h3 class="text-xl font-semibold text-gray-900">Key Solution Components</h3>
                  
                  <div class="space-y-6">
                    <div class="bg-purple-50 border border-purple-200 rounded-lg p-6">
                      <h4 class="font-semibold text-purple-900 mb-4">
                        <DollarSign class="h-5 w-5 mr-2" />
                        Payment Localization Strategy
                      </h4>
                      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h5 class="font-medium text-purple-800 mb-3">Mobile Money Integration</h5>
                          <ul class="space-y-2 text-purple-700 text-sm">
                            <li class="">
                              <CheckCircle class="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                              <span><strong>M-Pesa (Kenya, Tanzania):</strong> Direct API integration for seamless payments</span>
                            </li>
                            <li class="">
                              <CheckCircle class="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                              <span><strong>Orange Money (West Africa):</strong> Francophone market coverage</span>
                            </li>
                            <li class="">
                              <CheckCircle class="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                              <span><strong>MTN Mobile Money:</strong> Multi-country presence across Africa</span>
                            </li>
                            <li class="">
                              <CheckCircle class="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                              <span><strong>Airtel Money:</strong> East and West Africa coverage</span>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h5 class="font-medium text-purple-800 mb-3">Traditional Payment Methods</h5>
                          <ul class="space-y-2 text-purple-700 text-sm">
                            <li class="">
                              <CheckCircle class="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                              <span><strong>Cash on Delivery:</strong> Extensive network for trust-building</span>
                            </li>
                            <li class="">
                              <CheckCircle class="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                              <span><strong>Local Banking:</strong> Integration with major banks per country</span>
                            </li>
                            <li class="">
                              <CheckCircle class="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                              <span><strong>Digital Wallets:</strong> Support for emerging payment solutions</span>
                            </li>
                            <li class="">
                              <CheckCircle class="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                              <span><strong>Credit Cards:</strong> Visa, Mastercard for urban markets</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
    
                    <div class="bg-orange-50 border border-orange-200 rounded-lg p-6">
                      <h4 class="font-semibold text-orange-900 mb-4">
                        <TrendingUp class="h-5 w-5 mr-2" />
                        Logistics Solutions Framework
                      </h4>
                      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h5 class="font-medium text-orange-800 mb-3">Hybrid Delivery Model</h5>
                          <ul class="space-y-2 text-orange-700 text-sm">
                            <li class="">
                              <TrendingUp class="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                              <span><strong>Owned Logistics:</strong> Direct control in major cities</span>
                            </li>
                            <li class="">
                              <TrendingUp class="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                              <span><strong>Third-Party Partners:</strong> Local delivery companies for coverage</span>
                            </li>
                            <li class="">
                              <TrendingUp class="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                              <span><strong>Pickup Stations:</strong> Self-service points in urban areas</span>
                            </li>
                            <li class="">
                              <TrendingUp class="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                              <span><strong>Agent Network:</strong> Local representatives for remote areas</span>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h5 class="font-medium text-orange-800 mb-3">Warehouse Strategy</h5>
                          <ul class="space-y-2 text-orange-700 text-sm">
                            <li class="">
                              <MapPin class="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                              <span><strong>Strategic Placement:</strong> Warehouses in major economic centers</span>
                            </li>
                            <li class="">
                              <MapPin class="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                              <span><strong>Cross-Border Hubs:</strong> Regional distribution centers</span>
                            </li>
                            <li class="">
                              <MapPin class="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                              <span><strong>Local Sourcing:</strong> Country-specific supplier networks</span>
                            </li>
                            <li class="">
                              <MapPin class="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                              <span><strong>Inventory Optimization:</strong> AI-driven demand forecasting</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
    
                    <div class="bg-blue-50 border border-blue-200 rounded-lg p-6">
                      <h4 class="font-semibold text-blue-900 mb-4">
                        <Smartphone class="h-5 w-5 mr-2" />
                        Product Catalog Adaptation
                      </h4>
                      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h5 class="font-medium text-blue-800 mb-3">Local Sourcing Strategy</h5>
                          <ul class="space-y-2 text-blue-700 text-sm">
                            <li class="">
                              <Star class="h-4 w-4 mr-2 mt-0.5 flex-shrink-0 text-yellow-500" />
                              <span><strong>Country-Specific Suppliers:</strong> Local vendor networks</span>
                            </li>
                            <li class="">
                              <Star class="h-4 w-4 mr-2 mt-0.5 flex-shrink-0 text-yellow-500" />
                              <span><strong>Cultural Preferences:</strong> Adapted product mix per market</span>
                            </li>
                            <li class="">
                              <Star class="h-4 w-4 mr-2 mt-0.5 flex-shrink-0 text-yellow-500" />
                              <span><strong>Seasonal Adjustments:</strong> Local holidays and weather patterns</span>
                            </li>
                            <li class="">
                              <Star class="h-4 w-4 mr-2 mt-0.5 flex-shrink-0 text-yellow-500" />
                              <span><strong>Price Optimization:</strong> Local purchasing power considerations</span>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h5 class="font-medium text-blue-800 mb-3">Content Localization</h5>
                          <ul class="space-y-2 text-blue-700 text-sm">
                            <li class="">
                              <Globe class="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                              <span><strong>Multi-Language Support:</strong> 20+ languages with cultural context</span>
                            </li>
                            <li class="">
                              <Globe class="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                              <span><strong>Visual Adaptation:</strong> Models and imagery reflecting local demographics</span>
                            </li>
                            <li class="">
                              <Globe class="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                              <span><strong>Cultural Sensitivity:</strong> Religious and cultural considerations</span>
                            </li>
                            <li class="">
                              <Globe class="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                              <span><strong>Local Trends:</strong> Fashion and lifestyle preferences</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
    
                    <div class="bg-gray-50 border border-gray-200 rounded-lg p-6">
                      <h4 class="font-semibold text-gray-900 mb-4">
                        <Users class="h-5 w-5 mr-2" />
                        Customer Experience Localization
                      </h4>
                      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h5 class="font-medium text-gray-800 mb-3">Support Infrastructure</h5>
                          <ul class="space-y-2 text-gray-700 text-sm">
                            <li>• Local language customer service teams</li>
                            <li>• Country-specific support hours and channels</li>
                            <li>• Cultural training for support staff</li>
                            <li>• Local phone numbers and WhatsApp support</li>
                            <li>• Community-based customer education</li>
                          </ul>
                        </div>
                        <div>
                          <h5 class="font-medium text-gray-800 mb-3">User Experience Adaptation</h5>
                          <ul class="space-y-2 text-gray-700 text-sm">
                            <li>• Mobile-first design for smartphone users</li>
                            <li>• Simplified checkout for first-time users</li>
                            <li>• Trust signals and security messaging</li>
                            <li>• Local testimonials and social proof</li>
                            <li>• Educational content for e-commerce adoption</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
    
                  <div class="bg-green-100 p-6 rounded-lg">
                    <h3 class="text-lg font-semibold text-green-900 mb-4">Technology Innovation Highlights</h3>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div class="text-center">
                        <Zap class="h-8 w-8 text-green-600 mx-auto mb-2" />
                        <h4 class="font-medium text-green-900 mb-1">AI-Powered Localization</h4>
                        <p class="text-sm text-green-700">Machine learning for demand forecasting and inventory optimization per market</p>
                      </div>
                      <div class="text-center">
                        <Smartphone class="h-8 w-8 text-green-600 mx-auto mb-2" />
                        <h4 class="font-medium text-green-900 mb-1">Progressive Web App</h4>
                        <p class="text-sm text-green-700">Offline-capable mobile experience for low-connectivity environments</p>
                      </div>
                      <div class="text-center">
                        <BarChart3 class="h-8 w-8 text-green-600 mx-auto mb-2" />
                        <h4 class="font-medium text-green-900 mb-1">Real-Time Analytics</h4>
                        <p class="text-sm text-green-700">Market-specific performance tracking and optimization</p>
                      </div>
                    </div>
                  </div>
                </div>
              `,
        },

        execution: {
          title: "Execution: Country-by-Country Expansion Strategy",
          content: `
                <div class="space-y-6">
                  <p class="text-lg text-gray-700 leading-relaxed">Jumia's execution strategy focused on phased expansion, learning from each market entry, and building operational excellence before scaling to new countries.</p>
                  
                  <div class="space-y-8">
                    <div class="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                      <h3 class="text-lg font-semibold text-blue-900 mb-3">
                        <Calendar class="h-5 w-5 mr-2" />
                        Phase 1: Foundation Markets (2012-2014)
                      </h3>
                      <div class="mb-4">
                        <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Nigeria • Egypt • Morocco</span>
                      </div>
                      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 class="font-medium text-blue-800 mb-3">Strategic Focus</h4>
                          <ul class="space-y-2 text-blue-700 text-sm">
                            <li class="">
                              <Target class="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                              <span><strong>Platform Development:</strong> Built core e-commerce infrastructure</span>
                            </li>
                            <li class="">
                              <Target class="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                              <span><strong>Market Validation:</strong> Tested product-market fit in diverse regions</span>
                            </li>
                            <li class="">
                              <Target class="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                              <span><strong>Supplier Networks:</strong> Established initial vendor relationships</span>
                            </li>
                            <li class="">
                              <Target class="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                              <span><strong>Logistics Foundation:</strong> Developed delivery capabilities</span>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h4 class="font-medium text-blue-800 mb-3">Key Learnings</h4>
                          <ul class="space-y-2 text-blue-700 text-sm">
                            <li class="">
                              <Lightbulb class="h-4 w-4 mr-2 mt-0.5 flex-shrink-0 text-yellow-500" />
                              <span><strong>Cash on Delivery:</strong> Essential for building trust in new markets</span>
                            </li>
                            <li class="">
                              <Lightbulb class="h-4 w-4 mr-2 mt-0.5 flex-shrink-0 text-yellow-500" />
                              <span><strong>Local Partnerships:</strong> Critical for logistics and payments</span>
                            </li>
                            <li class="">
                              <Lightbulb class="h-4 w-4 mr-2 mt-0.5 flex-shrink-0 text-yellow-500" />
                              <span><strong>Mobile-First:</strong> Majority of traffic from mobile devices</span>
                            </li>
                            <li class="">
                              <Lightbulb class="h-4 w-4 mr-2 mt-0.5 flex-shrink-0 text-yellow-500" />
                              <span><strong>Customer Education:</strong> Extensive onboarding needed</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div class="mt-4 p-4 bg-blue-100 rounded">
                        <p class="text-blue-800 text-sm"><strong>Results:</strong> Achieved 500K users across 3 markets, established core platform architecture, and validated the African e-commerce opportunity.</p>
                      </div>
                    </div>
    
                    <div class="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                      <h3 class="text-lg font-semibold text-green-900 mb-3">
                        <Globe class="h-5 w-5 mr-2" />
                        Phase 2: Francophone Expansion (2014-2016)
                      </h3>
                      <div class="mb-4">
                        <span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Ivory Coast • Senegal • Cameroon</span>
                      </div>
                      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 class="font-medium text-green-800 mb-3">Localization Strategy</h4>
                          <ul class="space-y-2 text-green-700 text-sm">
                            <li class="">
                              <Globe class="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                              <span><strong>French Language:</strong> Complete platform translation and localization</span>
                            </li>
                            <li class="">
                              <Globe class="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                              <span><strong>CFA Franc Integration:</strong> Regional currency support</span>
                            </li>
                            <li class="">
                              <Globe class="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                              <span><strong>Orange Money:</strong> Primary mobile payment integration</span>
                            </li>
                            <li class="">
                              <Globe class="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                              <span><strong>Cultural Adaptation:</strong> French colonial influence considerations</span>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h4 class="font-medium text-green-800 mb-3">Operational Adaptations</h4>
                          <ul class="space-y-2 text-green-700 text-sm">
                            <li class="">
                              <TrendingUp class="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                              <span><strong>Regional Warehousing:</strong> Abidjan hub for West Africa</span>
                            </li>
                            <li class="">
                              <TrendingUp class="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                              <span><strong>Local Suppliers:</strong> French-speaking vendor networks</span>
                            </li>
                            <li class="">
                              <TrendingUp class="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                              <span><strong>Marketing Adaptation:</strong> French media and advertising channels</span>
                            </li>
                            <li class="">
                              <TrendingUp class="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                              <span><strong>Customer Service:</strong> French-speaking support teams</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div class="mt-4 p-4 bg-green-100 rounded">
                        <p class="text-green-800 text-sm"><strong>Results:</strong> Successfully adapted platform for Francophone markets, achieved 300K additional users, and established regional operational model.</p>
                      </div>
                    </div>
    
                    <div class="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
                      <h3 class="text-lg font-semibold text-purple-900 mb-3">
                        <Smartphone class="h-5 w-5 mr-2" />
                        Phase 3: East African Markets (2016-2018)
                      </h3>
                      <div class="mb-4">
                        <span class="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">Kenya • Uganda • Tanzania</span>
                      </div>
                      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 class="font-medium text-purple-800 mb-3">Mobile Money Focus</h4>
                          <ul class="space-y-2 text-purple-700 text-sm">
                            <li class="">
                              <DollarSign class="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                              <span><strong>M-Pesa Integration:</strong> Leveraged Kenya's mobile money ecosystem</span>
                            </li>
                            <li class="">
                              <DollarSign class="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                              <span><strong>Airtel Money:</strong> Multi-country mobile payment solution</span>
                            </li>
                            <li class="">
                              <DollarSign class="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                              <span><strong>Digital-First:</strong> Reduced reliance on cash on delivery</span>
                            </li>
                            <li class="">
                              <DollarSign class="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                              <span><strong>Instant Payments:</strong> Real-time transaction processing</span>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h4 class="font-medium text-purple-800 mb-3">Regional Optimization</h4>
                          <ul class="space-y-2 text-purple-700 text-sm">
                            <li class="">
                              <MapPin class="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                              <span><strong>Swahili Support:</strong> Local language for Kenya and Tanzania</span>
                            </li>
                            <li class="">
                              <MapPin class="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                              <span><strong>Cross-Border Logistics:</strong> Regional distribution optimization</span>
                            </li>
                            <li class="">
                              <MapPin class="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                              <span><strong>Local Fashion:</strong> East African style preferences</span>
                            </li>
                            <li class="">
                              <MapPin class="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                              <span><strong>Electronics Focus:</strong> High demand for mobile devices</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div class="mt-4 p-4 bg-purple-100 rounded">
                        <p class="text-purple-800 text-sm"><strong>Results:</strong> Achieved highest mobile payment adoption rates (70%+), established efficient regional logistics, and reached 1M+ users in East Africa.</p>
                      </div>
                    </div>
    
                    <div class="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg">
                      <h3 class="text-lg font-semibold text-orange-900 mb-3">
                        <BarChart3 class="h-5 w-5 mr-2" />
                        Phase 4: Optimization and Consolidation (2018-Present)
                      </h3>
                      <div class="mb-4">
                        <span class="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">Platform Unification • AI Integration • Profitability Focus</span>
                      </div>
                      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 class="font-medium text-orange-800 mb-3">Technology Evolution</h4>
                          <ul class="space-y-2 text-orange-700 text-sm">
                            <li class="">
                              <Zap class="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                              <span><strong>Platform Unification:</strong> Consolidated architecture across markets</span>
                            </li>
                            <li class="">
                              <Zap class="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                              <span><strong>AI-Powered Personalization:</strong> Market-specific recommendations</span>
                            </li>
                            <li class="">
                              <Zap class="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                              <span><strong>Advanced Analytics:</strong> Real-time market insights</span>
                            </li>
                            <li class="">
                              <Zap class="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                              <span><strong>Mobile App Enhancement:</strong> Native apps for all markets</span>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h4 class="font-medium text-orange-800 mb-3">Business Optimization</h4>
                          <ul class="space-y-2 text-orange-700 text-sm">
                            <li class="">
                              <Target class="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                              <span><strong>Unit Economics:</strong> Focus on profitability per market</span>
                            </li>
                            <li class="">
                              <Target class="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                              <span><strong>Operational Efficiency:</strong> Automated processes and AI</span>
                            </li>
                            <li class="">
                              <Target class="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                              <span><strong>Marketplace Growth:</strong> Third-party seller expansion</span>
                            </li>
                            <li class="">
                              <Target class="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                              <span><strong>Financial Services:</strong> JumiaPay ecosystem development</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div class="mt-4 p-4 bg-orange-100 rounded">
                        <p class="text-orange-800 text-sm"><strong>Results:</strong> Achieved operational efficiency across all markets, reached 7.1M active users, and established path to profitability with $1.3B annual GMV.</p>
                      </div>
                    </div>
                  </div>
    
                  <div class="bg-gray-50 p-6 rounded-lg">
                    <h3 class="text-lg font-semibold text-gray-900 mb-4">Execution Success Factors</h3>
                    <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
                      <div class="text-center">
                        <Target class="h-8 w-8 text-blue-600 mx-auto mb-2" />
                        <h4 class="font-medium text-gray-900 mb-1">Phased Approach</h4>
                        <p class="text-sm text-gray-600">Gradual expansion with learning integration</p>
                      </div>
                      <div class="text-center">
                        <Users class="h-8 w-8 text-green-600 mx-auto mb-2" />
                        <h4 class="font-medium text-gray-900 mb-1">Local Teams</h4>
                        <p class="text-sm text-gray-600">Country-specific expertise and relationships</p>
                      </div>
                      <div class="text-center">
                        <Zap class="h-8 w-8 text-purple-600 mx-auto mb-2" />
                        <h4 class="font-medium text-gray-900 mb-1">Technology Platform</h4>
                        <p class="text-sm text-gray-600">Scalable architecture with local flexibility</p>
                      </div>
                      <div class="text-center">
                        <BarChart3 class="h-8 w-8 text-orange-600 mx-auto mb-2" />
                        <h4 class="font-medium text-gray-900 mb-1">Data-Driven Decisions</h4>
                        <p class="text-sm text-gray-600">Market-specific analytics and optimization</p>
                      </div>
                    </div>
                  </div>
                </div>
              `,
        },

        challenges: {
          title: "Key Challenges and Strategic Solutions",
          content: `
                <div class="space-y-6">
                  <p class="text-lg text-gray-700 leading-relaxed">Jumia faced complex challenges that required innovative solutions and strategic thinking across multiple dimensions of the business.</p>
                  
                  <div class="space-y-6">
                    <div class="bg-red-50 border border-red-200 rounded-lg p-6">
                      <h3 class="text-lg font-semibold text-red-900 mb-4">
                        <AlertCircle class="h-5 w-5 mr-2" />
                        Challenge 1: Trust and Payment Adoption
                      </h3>
                      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 class="font-medium text-red-800 mb-2">The Problem</h4>
                          <ul class="space-y-1 text-red-700 text-sm">
                            <li>• Low trust in online payments across many markets</li>
                            <li>• Limited credit card penetration (5-25%)</li>
                            <li>• Fear of online fraud and scams</li>
                            <li>• Preference for cash transactions</li>
                            <li>• Lack of consumer protection awareness</li>
                          </ul>
                        </div>
                        <div>
                          <h4 class="font-medium text-red-800 mb-2">The Solution</h4>
                          <ul class="space-y-1 text-red-700 text-sm">
                            <li>• Extensive cash-on-delivery network (60-80% of orders)</li>
                            <li>• Gradual digital payment education campaigns</li>
                            <li>• Mobile money integration for familiar payment methods</li>
                            <li>• Strong return and refund policies</li>
                            <li>• Customer testimonials and social proof</li>
                          </ul>
                        </div>
                      </div>
                      <div class="mt-4 p-4 bg-red-100 rounded">
                        <p class="text-red-800 text-sm"><strong>Key Learning:</strong> Trust-building requires time and multiple touchpoints. Start with familiar payment methods and gradually introduce digital alternatives.</p>
                      </div>
                    </div>
    
                    <div class="bg-orange-50 border border-orange-200 rounded-lg p-6">
                      <h3 class="text-lg font-semibold text-orange-900 mb-4">
                        <TrendingUp class="h-5 w-5 mr-2" />
                        Challenge 2: Logistics and Infrastructure Complexity
                      </h3>
                      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 class="font-medium text-orange-800 mb-2">The Problem</h4>
                          <ul class="space-y-1 text-orange-700 text-sm">
                            <li>• Poor addressing systems in many African cities</li>
                            <li>• Unreliable postal services</li>
                            <li>• Varying road infrastructure quality</li>
                            <li>• Security concerns in some regions</li>
                            <li>• High last-mile delivery costs</li>
                          </ul>
                        </div>
                        <div>
                          <h4 class="font-medium text-orange-800 mb-2">The Solution</h4>
                          <ul class="space-y-1 text-orange-700 text-sm">
                            <li>• Hybrid logistics model (owned + partnerships)</li>
                            <li>• Pickup stations in strategic locations</li>
                            <li>• Local delivery partnerships</li>
                            <li>• GPS-based delivery tracking</li>
                            <li>• Community-based delivery agents</li>
                          </ul>
                        </div>
                      </div>
                      <div class="mt-4 p-4 bg-orange-100 rounded">
                        <p class="text-orange-800 text-sm"><strong>Key Learning:</strong> Logistics infrastructure must be built from the ground up. Hybrid models combining owned assets with local partnerships provide optimal coverage.</p>
                      </div>
                    </div>
    
                    <div class="bg-blue-50 border border-blue-200 rounded-lg p-6">
                      <h3 class="text-lg font-semibold text-blue-900 mb-4">
                        <Users class="h-5 w-5 mr-2" />
                        Challenge 3: Supplier Network Management
                      </h3>
                      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 class="font-medium text-blue-800 mb-2">The Problem</h4>
                          <ul class="space-y-1 text-blue-700 text-sm">
                            <li>• Fragmented supplier ecosystem across countries</li>
                            <li>• Varying quality standards and capabilities</li>
                            <li>• Limited technology adoption by suppliers</li>
                            <li>• Complex import/export regulations</li>
                            <li>• Currency fluctuation impacts</li>
                          </ul>
                        </div>
                        <div>
                          <h4 class="font-medium text-blue-800 mb-2">The Solution</h4>
                          <ul class="space-y-1 text-blue-700 text-sm">
                            <li>• Local supplier development programs</li>
                            <li>• Technology training and support</li>
                            <li>• Regional sourcing strategies</li>
                            <li>• Quality assurance frameworks</li>
                            <li>• Long-term partnership agreements</li>
                          </ul>
                        </div>
                      </div>
                      <div class="mt-4 p-4 bg-blue-100 rounded">
                        <p class="text-blue-800 text-sm"><strong>Key Learning:</strong> Supplier development is as important as customer acquisition. Invest in long-term partnerships and capability building.</p>
                      </div>
                    </div>
    
                    <div class="bg-green-50 border border-green-200 rounded-lg p-6">
                      <h3 class="text-lg font-semibold text-green-900 mb-4">
                        <Shield class="h-5 w-5 mr-2" />
                        Challenge 4: Regulatory Compliance Across Markets
                      </h3>
                      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 class="font-medium text-green-800 mb-2">The Problem</h4>
                          <ul class="space-y-1 text-green-700 text-sm">
                            <li>• Different e-commerce regulations per country</li>
                            <li>• Varying import/export requirements</li>
                            <li>• Complex tax structures and reporting</li>
                            <li>• Consumer protection law differences</li>
                            <li>• Data protection and privacy regulations</li>
                          </ul>
                        </div>
                        <div>
                          <h4 class="font-medium text-green-800 mb-2">The Solution</h4>
                          <ul class="space-y-1 text-green-700 text-sm">
                            <li>• Local legal teams in each market</li>
                            <li>• Compliance frameworks and checklists</li>
                            <li>• Regular regulatory monitoring</li>
                            <li>• Government relations programs</li>
                            <li>• Industry association participation</li>
                          </ul>
                        </div>
                      </div>
                      <div class="mt-4 p-4 bg-green-100 rounded">
                        <p class="text-green-800 text-sm"><strong>Key Learning:</strong> Regulatory compliance requires local expertise and proactive engagement. Build relationships with regulators early.</p>
                      </div>
                    </div>
    
                    <div class="bg-purple-50 border border-purple-200 rounded-lg p-6">
                      <h3 class="text-lg font-semibold text-purple-900 mb-4">
                        <Globe class="h-5 w-5 mr-2" />
                        Challenge 5: Cultural Adaptation and Customer Service
                      </h3>
                      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 class="font-medium text-purple-800 mb-2">The Problem</h4>
                          <ul class="space-y-1 text-purple-700 text-sm">
                            <li>• Diverse cultural expectations across markets</li>
                            <li>• Multiple languages and communication styles</li>
                            <li>• Different customer service preferences</li>
                            <li>• Varying levels of digital literacy</li>
                            <li>• Time zone and availability challenges</li>
                          </ul>
                        </div>
                        <div>
                          <h4 class="font-medium text-purple-800 mb-2">The Solution</h4>
                          <ul class="space-y-1 text-purple-700 text-sm">
                            <li>• Distributed customer service centers</li>
                            <li>• Local language support capabilities</li>
                            <li>• Cultural training for support teams</li>
                            <li>• Multiple communication channels (phone, chat, WhatsApp)</li>
                            <li>• Community-based customer education</li>
                          </ul>
                        </div>
                      </div>
                      <div class="mt-4 p-4 bg-purple-100 rounded">
                        <p class="text-purple-800 text-sm"><strong>Key Learning:</strong> Customer service must be deeply localized. Cultural understanding is as important as language capability.</p>
                      </div>
                    </div>
    
                    <div class="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                      <h3 class="text-lg font-semibold text-yellow-900 mb-4">
                        <BarChart3 class="h-5 w-5 mr-2" />
                        Challenge 6: Unit Economics and Profitability
                      </h3>
                      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 class="font-medium text-yellow-800 mb-2">The Problem</h4>
                          <ul class="space-y-1 text-yellow-700 text-sm">
                            <li>• High logistics costs in emerging markets</li>
                            <li>• Lower average order values</li>
                            <li>• Price-sensitive customer base</li>
                            <li>• High customer acquisition costs</li>
                            <li>• Currency devaluation impacts</li>
                          </ul>
                        </div>
                        <div>
                          <h4 class="font-medium text-yellow-800 mb-2">The Solution</h4>
                          <ul class="space-y-1 text-yellow-700 text-sm">
                            <li>• Marketplace model to reduce inventory costs</li>
                            <li>• Logistics optimization and automation</li>
                            <li>• Value-added services (JumiaPay, advertising)</li>
                            <li>• Focus on repeat customers and retention</li>
                            <li>• Operational efficiency improvements</li>
                          </ul>
                        </div>
                      </div>
                      <div class="mt-4 p-4 bg-yellow-100 rounded">
                        <p class="text-yellow-800 text-sm"><strong>Key Learning:</strong> Profitability in emerging markets requires innovative business models and relentless focus on operational efficiency.</p>
                      </div>
                    </div>
                  </div>
    
                  <div class="bg-gray-100 p-6 rounded-lg">
                    <h3 class="text-lg font-semibold text-gray-900 mb-4">Strategic Problem-Solving Framework</h3>
                    <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
                      <div class="text-center">
                        <Target class="h-8 w-8 text-blue-600 mx-auto mb-2" />
                        <h4 class="font-medium text-gray-900 mb-1">Local-First Approach</h4>
                        <p class="text-sm text-gray-600">Understand each market's unique challenges before scaling solutions</p>
                      </div>
                      <div class="text-center">
                        <Users class="h-8 w-8 text-green-600 mx-auto mb-2" />
                        <h4 class="font-medium text-gray-900 mb-1">Partnership Strategy</h4>
                        <p class="text-sm text-gray-600">Leverage local expertise and infrastructure through strategic partnerships</p>
                      </div>
                      <div class="text-center">
                        <Zap class="h-8 w-8 text-purple-600 mx-auto mb-2" />
                        <h4 class="font-medium text-gray-900 mb-1">Technology Innovation</h4>
                        <p class="text-sm text-gray-600">Use technology to overcome infrastructure limitations</p>
                      </div>
                      <div class="text-center">
                        <BarChart3 class="h-8 w-8 text-orange-600 mx-auto mb-2" />
                        <h4 class="font-medium text-gray-900 mb-1">Iterative Learning</h4>
                        <p class="text-sm text-gray-600">Continuously adapt based on market feedback and performance data</p>
                      </div>
                    </div>
                  </div>
                </div>
              `,
        },

        results: {
          title: "Results and Market Impact",
          content: `
                <div class="space-y-6">
                  <p class="text-lg text-gray-700 leading-relaxed">Jumia's localization strategy has delivered significant business results while transforming e-commerce across Africa and creating lasting economic impact.</p>
                  
                  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <div class="bg-blue-50 p-6 rounded-lg text-center">
                      <div class="text-3xl font-bold text-blue-600 mb-2">7.1M</div>
                      <div class="text-sm text-blue-800">Active Customers</div>
                      <div class="text-xs text-blue-600 mt-1">12% YoY growth</div>
                    </div>
                    <div class="bg-green-50 p-6 rounded-lg text-center">
                      <div class="text-3xl font-bold text-green-600 mb-2">$1.3B</div>
                      <div class="text-sm text-green-800">Annual GMV</div>
                      <div class="text-xs text-green-600 mt-1">18% YoY growth</div>
                    </div>
                    <div class="bg-purple-50 p-6 rounded-lg text-center">
                      <div class="text-3xl font-bold text-purple-600 mb-2">100K+</div>
                      <div class="text-sm text-purple-800">Active Sellers</div>
                      <div class="text-xs text-purple-600 mt-1">25% YoY growth</div>
                    </div>
                    <div class="bg-orange-50 p-6 rounded-lg text-center">
                      <div class="text-3xl font-bold text-orange-600 mb-2">11</div>
                      <div class="text-sm text-orange-800">Countries</div>
                      <div class="text-xs text-orange-600 mt-1">Market leader</div>
                    </div>
                  </div>
    
                  <div class="space-y-8">
                    <div class="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg">
                      <h3 class="text-xl font-semibold text-blue-900 mb-4">
                        <TrendingUp class="h-6 w-6 mr-2" />
                        Business Performance Metrics
                      </h3>
                      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 class="font-medium text-blue-800 mb-3">Growth Achievements</h4>
                          <ul class="space-y-2 text-blue-700">
                            <li class="flex justify-between">
                              <span>Market Leadership:</span>
                              <span class="font-semibold">#1 e-commerce platform in Africa</span>
                            </li>
                            <li class="flex justify-between">
                              <span>Customer Base:</span>
                              <span class="font-semibold">7.1M active customers</span>
                            </li>
                            <li class="flex justify-between">
                              <span>Annual GMV:</span>
                              <span class="font-semibold">$1.3B (18% growth)</span>
                            </li>
                            <li class="flex justify-between">
                              <span>Seller Network:</span>
                              <span class="font-semibold">100K+ active sellers</span>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h4 class="font-medium text-blue-800 mb-3">Operational Excellence</h4>
                          <ul class="space-y-2 text-blue-700">
                            <li class="flex justify-between">
                              <span>Delivery Success Rate:</span>
                              <span class="font-semibold">95%+</span>
                            </li>
                            <li class="flex justify-between">
                              <span>Customer Satisfaction:</span>
                              <span class="font-semibold">4.2/5 average rating</span>
                            </li>
                            <li class="flex justify-between">
                              <span>Platform Uptime:</span>
                              <span class="font-semibold">99.9%</span>
                            </li>
                            <li class="flex justify-between">
                              <span>Mobile Traffic:</span>
                              <span class="font-semibold">80% of total traffic</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
    
                    <div class="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-lg">
                      <h3 class="text-xl font-semibold text-green-900 mb-4">
                        <DollarSign class="h-6 w-6 mr-2" />
                        Localization Success Metrics
                      </h3>
                      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 class="font-medium text-green-800 mb-3">Payment Adoption</h4>
                          <ul class="space-y-2 text-green-700">
                            <li class="">
                              <CheckCircle class="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                              <span><strong>Mobile Money:</strong> 60% of digital payments</span>
                            </li>
                            <li class="">
                              <CheckCircle class="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                              <span><strong>Cash on Delivery:</strong> 30% of total orders</span>
                            </li>
                            <li class="">
                              <CheckCircle class="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                              <span><strong>Credit Cards:</strong> 10% of payments</span>
                            </li>
                            <li class="">
                              <CheckCircle class="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                              <span><strong>Digital Growth:</strong> 25% YoY increase in digital payments</span>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h4 class="font-medium text-green-800 mb-3">Language and Cultural Impact</h4>
                          <ul class="space-y-2 text-green-700">
                            <li class="">
                              <Globe class="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                              <span><strong>Local Language Usage:</strong> 40% in key markets</span>
                            </li>
                            <li class="">
                              <Globe class="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                              <span><strong>Cultural Adaptation:</strong> 95% customer satisfaction</span>
                            </li>
                            <li class="">
                              <Globe class="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                              <span><strong>Local Content:</strong> 70% locally sourced products</span>
                            </li>
                            <li class="">
                              <Globe class="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                              <span><strong>Regional Preferences:</strong> 85% market-specific catalog</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
    
                    <div class="bg-gradient-to-r from-purple-50 to-purple-100 p-6 rounded-lg">
                      <h3 class="text-xl font-semibold text-purple-900 mb-4">
                        <Users class="h-6 w-6 mr-2" />
                        Economic and Social Impact
                      </h3>
                      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 class="font-medium text-purple-800 mb-3">SME Empowerment</h4>
                          <ul class="space-y-2 text-purple-700">
                            <li class="">
                              <Star class="h-4 w-4 mr-2 mt-0.5 flex-shrink-0 text-yellow-500" />
                              <span><strong>100,000+ SMEs</strong> enabled to sell online</span>
                            </li>
                            <li class="">
                              <Star class="h-4 w-4 mr-2 mt-0.5 flex-shrink-0 text-yellow-500" />
                              <span><strong>$500M+ revenue</strong> generated for African businesses</span>
                            </li>
                            <li class="">
                              <Star class="h-4 w-4 mr-2 mt-0.5 flex-shrink-0 text-yellow-500" />
                              <span><strong>Digital Skills Training</strong> for 50,000+ sellers</span>
                            </li>
                            <li class="">
                              <Star class="h-4 w-4 mr-2 mt-0.5 flex-shrink-0 text-yellow-500" />
                              <span><strong>Cross-Border Trade</strong> facilitated for 10,000+ businesses</span>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h4 class="font-medium text-purple-800 mb-3">Job Creation and Skills</h4>
                          <ul class="space-y-2 text-purple-700">
                            <li class="">
                              <Users class="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                              <span><strong>50,000+ direct jobs</strong> created across Africa</span>
                            </li>
                            <li class="">
                              <Users class="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                              <span><strong>200,000+ indirect jobs</strong> in logistics and services</span>
                            </li>
                            <li class="">
                              <Users class="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                              <span><strong>Digital Literacy</strong> improved for 1M+ users</span>
                            </li>
                            <li class="">
                              <Users class="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                              <span><strong>Women Empowerment:</strong> 45% of sellers are women</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
    
                    <div class="bg-gradient-to-r from-orange-50 to-orange-100 p-6 rounded-lg">
                      <h3 class="text-xl font-semibold text-orange-900 mb-4">
                        <Globe class="h-6 w-6 mr-2" />
                        Market Transformation Impact
                      </h3>
                      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 class="font-medium text-orange-800 mb-3">E-commerce Ecosystem Development</h4>
                          <ul class="space-y-2 text-orange-700">
                            <li class="">
                              <TrendingUp class="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                              <span><strong>Market Education:</strong> Introduced e-commerce to 10M+ Africans</span>
                            </li>
                            <li class="">
                              <TrendingUp class="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                              <span><strong>Infrastructure Development:</strong> Logistics networks in 11 countries</span>
                            </li>
                            <li class="">
                              <TrendingUp class="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                              <span><strong>Payment Innovation:</strong> Advanced mobile payment adoption</span>
                            </li>
                            <li class="">
                              <TrendingUp class="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                              <span><strong>Competitive Landscape:</strong> Inspired 100+ e-commerce startups</span>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h4 class="font-medium text-orange-800 mb-3">Consumer Behavior Change</h4>
                          <ul class="space-y-2 text-orange-700">
                            <li class="">
                              <Smartphone class="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                              <span><strong>Mobile Commerce:</strong> 80% of transactions on mobile</span>
                            </li>
                            <li class="">
                              <Smartphone class="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                              <span><strong>Digital Payments:</strong> 70% adoption rate</span>
                            </li>
                            <li class="">
                              <Smartphone class="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                              <span><strong>Online Shopping Habits:</strong> 60% repeat customers</span>
                            </li>
                            <li class="">
                              <Smartphone class="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                              <span><strong>Trust in E-commerce:</strong> 85% customer satisfaction</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
    
                    <div class="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-lg">
                      <h3 class="text-xl font-semibold text-gray-900 mb-4">
                        <Award class="h-6 w-6 mr-2" />
                        Technology and Innovation Impact
                      </h3>
                      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 class="font-medium text-gray-800 mb-3">Platform Innovation</h4>
                          <ul class="space-y-2 text-gray-700">
                            <li class="">
                              <Zap class="h-4 w-4 mr-2 mt-0.5 flex-shrink-0 text-yellow-500" />
                              <span><strong>AI-Powered Personalization:</strong> 30% increase in conversion</span>
                            </li>
                            <li class="">
                              <Zap class="h-4 w-4 mr-2 mt-0.5 flex-shrink-0 text-yellow-500" />
                              <span><strong>Mobile Optimization:</strong> 99.9% uptime across all markets</span>
                            </li>
                            <li class="">
                              <Zap class="h-4 w-4 mr-2 mt-0.5 flex-shrink-0 text-yellow-500" />
                              <span><strong>Multi-Language Support:</strong> 20+ languages supported</span>
                            </li>
                            <li class="">
                              <Zap class="h-4 w-4 mr-2 mt-0.5 flex-shrink-0 text-yellow-500" />
                              <span><strong>Progressive Web App:</strong> Offline shopping capabilities</span>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h4 class="font-medium text-gray-800 mb-3">Data and Insights</h4>
                          <ul class="space-y-2 text-gray-700">
                            <li class="">
                              <BarChart3 class="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                              <span><strong>Market Intelligence:</strong> Comprehensive African e-commerce data</span>
                            </li>
                            <li class="">
                              <BarChart3 class="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                              <span><strong>Consumer Insights:</strong> 11-country behavioral analysis</span>
                            </li>
                            <li class="">
                              <BarChart3 class="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                              <span><strong>Trend Forecasting:</strong> AI-driven demand prediction</span>
                            </li>
                            <li class="">
                              <BarChart3 class="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                              <span><strong>Performance Analytics:</strong> Real-time market optimization</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              `,
        },
      },

      keyLessons: [
        {
          title: "Modular Architecture is Essential",
          description:
            "Building a platform that can be customized per market while maintaining core functionality is crucial for multi-country operations.",
          icon: <Target className="h-6 w-6" />,
          details:
            "Jumia's success came from balancing standardization with localization through a modular platform architecture.",
        },
        {
          title: "Payment Localization is Critical",
          description:
            "Success depends on integrating with local payment preferences and building trust through familiar payment methods.",
          icon: <DollarSign className="h-6 w-6" />,
          details:
            "Each market required different payment solutions, from mobile money to cash on delivery, based on local preferences.",
        },
        {
          title: "Logistics Infrastructure is Make-or-Break",
          description:
            "Reliable delivery is essential for customer trust and repeat purchases, requiring hybrid logistics models.",
          icon: <TrendingUp className="h-6 w-6" />,
          details:
            "Jumia invested heavily in logistics infrastructure, combining owned assets with local partnerships for optimal coverage.",
        },
        {
          title: "Local Partnerships are Essential",
          description:
            "Success requires deep local partnerships for suppliers, logistics, payments, and market understanding.",
          icon: <Users className="h-6 w-6" />,
          details:
            "Local partnerships provided market knowledge, operational capabilities, and trust that would be impossible to build independently.",
        },
        {
          title: "Cultural Adaptation Goes Beyond Translation",
          description:
            "Product mix, marketing, user experience, and business practices must reflect local cultural preferences.",
          icon: <Globe className="h-6 w-6" />,
          details:
            "True localization required understanding cultural nuances, shopping behaviors, and social dynamics in each market.",
        },
        {
          title: "Phased Expansion Enables Learning",
          description:
            "Gradual market entry allows for learning and adaptation before scaling to new countries.",
          icon: <CheckCircle className="h-6 w-6" />,
          details:
            "Each phase of expansion built on learnings from previous markets, improving the localization playbook.",
        },
      ],

      pmInsights: [
        "Each market requires dedicated product management attention and local market expertise",
        "User research methodologies must be adapted for different cultural contexts and literacy levels",
        "Payment method adoption varies significantly by country and requires market-specific strategies",
        "Mobile-first design is crucial across all African markets, but implementation varies by infrastructure",
        "Trust-building features (reviews, COD, return policies) are more important than convenience features",
        "Local language support dramatically improves conversion rates and customer satisfaction",
        "Logistics and delivery experience directly impact customer retention and word-of-mouth marketing",
        "Regulatory compliance requires dedicated resources and local legal expertise in each market",
      ],

      downloadableAssets: [
        {
          title: "Jumia Multi-Country Localization Strategy",
          description:
            "Comprehensive 52-page analysis of localization strategies across 11 African markets",
          format: "PDF",
          size: "15.7 MB",
          pages: 52,
        },
        {
          title: "E-commerce Localization Playbook",
          description:
            "Step-by-step guide for localizing e-commerce platforms in emerging markets",
          format: "PDF",
          size: "9.4 MB",
          pages: 38,
        },
        {
          title: "African Payment Methods Integration Guide",
          description:
            "Technical and strategic guide for integrating African payment methods",
          format: "PDF",
          size: "7.2 MB",
          pages: 24,
        },
        {
          title: "Cross-Border Logistics Framework",
          description:
            "Framework for building logistics networks across multiple African countries",
          format: "Excel",
          size: "5.8 MB",
          pages: 18,
        },
      ],

      relatedCaseStudies: [
        {
          id: "mpesa-mobile-payments",
          title: "M-Pesa Mobile Payment Revolution",
          company: "Safaricom",
          readTime: "25 min",
          category: "Fintech",
        },
        {
          id: "flutterwave-api",
          title: "Flutterwave's Cross-Border API",
          company: "Flutterwave",
          readTime: "22 min",
          category: "Fintech",
        },
      ],
    },

    "flutterwave-api": {
      id: "flutterwave-api",
      title: "Flutterwave's Unified Payment API Strategy",
      subtitle:
        "Simplifying payments across Africa's fragmented financial landscape",
      company: "Flutterwave",
      country: "Multi-country (30+ African markets)",
      category: "Fintech",
      readTime: "25 min",
      publishDate: "2024-12-15",
      author: "Chika Okonkwo",
      authorRole: "Head of Product at Flutterwave",
      authorBio:
        "Chika has 10+ years of experience in building payment solutions for African markets, driving Flutterwave's API-first strategy.",
      image:
        "https://images.pexels.com/photos/3184468/pexels-photo.jpg-3184468.jpeg?auto=compress&cs=tinysrgb&w=800",
      heroImage:
        "https://img.freepik.com/free-photo/military-it-professional-gathers-intelligence-from-world-map-projection_482257-89755.jpg?uid=R193310056&ga=GA1.1.1570111543.1742967309&semt=ais_items_boosted&w=740",
      overview: {
        challenge:
          "Africa's payment system with diverse methods, payment methods, currencies, and regulations created barriers for businesses scaling across borders.",
        solution:
          "Flutterwave developed a unified payment API platform that integrates multiple payment methods across Africa, simplifying transactions for businesses.",
        impact:
          "Processed $20B+ in transactions, empowered 1M+ businesses, and facilitated $2B+ in cross-border payments across 30+ countries, boosting financial inclusion.",
        timeline: "2016-2022 (6 years)",
      },
      metrics: [
        {
          label: "Transactions Processed",
          value: "300M+",
          icon: <Users className="h-6 w-6" />,
          growth: "+25% YoY",
        },
        {
          label: "Annual Volume",
          value: "$20B+",
          icon: <DollarSign className="h-6 w-6" />,
          growth: "+15% YoY",
        },
        {
          label: "Countries",
          value: "30+",
          icon: <Globe className="h-6 w-6" />,
          growth: "Expanding",
        },
        {
          label: "Businesses",
          value: "1M+",
          icon: <TrendingUp className="h-6 w-6" />,
          growth: "+20% YoY",
        },
      ],
      sections: {
        problem: {
          title: "The Problem: Fragmented Payment Landscape",
          content: `
            <div class="space-y-6 p-4 bg-white rounded-xl shadow-sm">
              <p class="text-lg text-gray-900 leading-relaxed">Africa's fragmented payment ecosystem posed significant barriers for businesses and consumers seeking to scale across borders.</p>
              <div class="bg-gray-50 p-6 rounded-lg">
                <h3 class="font-semibold text-blue-700 mb-3">Market Complexity</h3>
                <ul class="space-y-2 text-gray-700">
                  <li><strong>500+ languages</strong> - Diverse linguistic barriers</li>
                  <li><strong>30+ currencies</strong> - Complex currency management</li>
                  <li><strong>Varying payment methods</strong> - Mobile money, cards, bank transfers</li>
                  <li><strong>Regulatory diversity</strong> - Different financial regulations</li>
                </ul>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-3">Key Challenges</h3>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="bg-red-50 p-4 rounded-lg">
                  <h4 class="font-medium text-red-600 mb-2">
                    <DollarSign className="h-5 w-5 mr-2">Payment Integration</h4>
                  <ul class="text-sm text-gray-600 space-y-1">
                    <li>• Multiple payment gateways required</li>
                    <li>• High integration costs for SMEs</li>
                    <li>• Inconsistent user experience</li>
                    <li>• Limited cross-border support</li>
                  </ul>
                </div>
                <div class="bg-red-50 p-4 rounded-lg">
                  <h4 class="font-medium text-red-600 mb-2">
                    <Shield class="h-5 w-5 mr-2">Trust and Security</h4>
                    <ul class="text-sm text-gray-600 space-y-1">
                      <li>• High fraud rates in digital payments</li>
                      <li>• Consumer distrust in online transactions</li>
                      <li>• Weak dispute resolution systems</li>
                      <li>• Inconsistent security standards</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          `,
        },
        solution: {
          title: "The Solution: Unified Payment API Platform",
          content: `
             <div class="space-y-6 p-4">
      <p class="text-lg text-gray-900 leading-relaxed">
        Flutterwave created a robust, developer-friendly API platform that unified Africa's payment systems.
      </p>

      <div class="bg-green-50 p-6 rounded-lg">
        <h3 class="font-semibold text-green-700 mb-3">Core Innovation</h3>
        <p class="text-green-600">
          A single API integrating multiple payment methods across Africa.
        </p>
      </div>

      <h3 class="text-xl font-semibold text-gray-900 mb-3">Platform Architecture</h3>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div>
          <h4 class="font-semibold text-gray-900 mb-2">Technical Foundation</h4>
          <div class="flex items-center mb-2">
            
            <span class="text-sm text-gray-700">API-First Design</span>
          </div>
          <div class="bg-white p-3 rounded-lg border">
            <h5 class="font-medium text-gray-600 mb-1">Key Features</h5>
            <ul class="text-sm text-gray-500 space-y-1">
              <li>• RESTful API with comprehensive docs</li>
              <li>• SDKs for Python, JS, etc.</li>
              <li>• Scalable cloud infrastructure</li>
            </ul>
          </div>
        </div>

        <div>
          <h4 class="font-semibold text-gray-900 mb-2">Payment Integration</h4>
          <div class="flex items-center mb-2">
           
            <span class="text-sm text-gray-700">Payment Methods</span>
          </div>
          <div class="bg-white p-3 rounded-lg border">
            <h5 class="font-medium text-gray-600 mb-1">Supported Options</h5>
            <ul class="text-sm text-gray-500 space-y-1">
              <li>• Mobile money, cards, bank transfers</li>
              <li>• 30+ African currencies</li>
              <li>• Cross-border payment support</li>
            </ul>
          </div>
        </div>
      </div>
    </div>`,
        },
        execution: {
          title: "Execution: Execution: Scaling Across Africa",
          content: `
            <div class="space-y-6 p-4">
              <p class="text-lg text-gray-900 leading-relaxed">Flutterwave focused on developer adoption and strategic partnerships.</p>
              <div class="bg-blue-50 p-6 rounded-lg">
                <h3 class="font-semibold text-blue-700 mb-3 ">
                    <Calendar class="h-4 w-4 mr-2">Phase 1: Foundation</h4>
                  <p class="text-blue-600">Launched in Nigeria with card and bank payments, targeting e-commerce.</p>
              </div>
              <div class="bg-green-50 p-6 rounded-lg">
                <p class="font-semibold text-green-700 mb-3">Phase 2: Expansion</p>
                <p class="text-green-600">Expanded to Ghana, Nigeria Kenya, and South Africa.</p>
              </div>
            </div>
          </div>
          `,
        },
        challenges: {
          title: "Key Challenges and Solutions",
          content: `
            <div class="flex flex-col gap-4 p-4">
              <p class="text-lg text-gray-900 leading-relaxed-text">Significant hurdles in building a unified payment platform.</p>
              <div class= "p-6 rounded-lg bg-orange-50">
                <h3 class="font-semibold text-red-600 mb-3">Regulatory Complexity</h3>
                    
                    <p class="text-red-500">Diverse regulations across countries.</p>
              </div>
              <div class="bg-orange-50 p-6 rounded-lg">
                <h3 class="font-semibold text-orange-700 mb-3 flex items-center">Developer Adoption</h3>
                    
                    <p class="text-orange-600">Limited developer familiarity with APIs.</p>
                </div>
              </div>
            </div>
          </div>
          `,
        },
        results: {
          title: "Results and Economic Impact",
          content: `
            <div class="flex flex-col gap-4 p-4">
              <p class="text-lg text-gray-900 leading-relaxed-text">Transformed Africa's digital economy with $20B+ in transactions.</p>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="bg-blue-500 p-4 rounded-lg text-center">
                    <div class="text-2xl font-bold text-white mb-2">300m+</div>
                    <div class="text-sm text-white">Transactions</div>
                </div>
                <div class="bg-green-600 p-50 rounded-lg text-center flex flex-col justify-center items-center">
                    <div class="text-2xl font-bold text-white mb-2">$20B</div>
                    <div class="text-sm text-white">Volume</div>
                 
                </div>
              </div>
            </div>
          </div>
          `,
        },
      },
      keyLessons: [
        {
          title: "Developer-Centric Approach",
          description:
            "Success hinged on empowering developers with robust APIs and tools.",
          icon: <Code className="h6 w-6" />,
          details: "Comprehensive documentation and SDKs drove adoption.",
        },

        {
          title: "Local Expertise",
          description:
            "Deep market knowledge was critical for payment integration.",
          icon: <Globe className="h6 w-6" />,
          details: "Local teams ensured compliance and tailored solutions.",
        },
      ],
      pmInsights: [
        "Developer feedback is crucial for API product development.",
        "Local partnerships accelerate market penetration.",
        "Regulatory compliance requires dedicated product focus.",
        "Scalability planning is essential for payment platforms.",
      ],
      downloadableAssets: [
        {
          title: "Flutterwave API Strategy Deep Dive",
          description: "Analysis of API-first strategy.",
          format: "PDF",
          size: "2 MB",
          pages: 48,
        },
      ],
      relatedCaseStudies: [
        {
          id: "mpesa-mobile-payments",
          title: "M-Pesa Mobile Payment Revolution",
          company: "Safarica",
          readTime: "25 min",
          category: "Fintech",
        },
      ],
    },
  };

  const caseStudy = caseStudies[id as keyof typeof caseStudies];

  if (!caseStudy) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="pt-20 text-center py-16">
          <h1 className="text-2xl font-bold text-gray-900">
            Case Study Not Found
          </h1>
          <p className="text-gray-600 mt-2">
            The requested case study could not be found.
          </p>
        </div>
        <Footer />
      </div>
    );
  }

  const sections = [
    { id: "overview", name: "Overview" },
    { id: "problem", name: "Problem" },
    { id: "solution", name: "Solution" },
    { id: "execution", name: "Execution" },
    { id: "challenges", name: "Challenges" },
    { id: "results", name: "Results" },
    { id: "lessons", name: "Key Lessons" },
  ];

  const handleDownloadClick = (
    assetTitle: string,
    format: string = downloadFormat
  ) => {
    // Simulate file download (replace with actual API call in production)
    const fileUrl = `/assets/${
      caseStudy.id
    }/${assetTitle}.${format.toLowerCase()}`;
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = `${assetTitle}.${format}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    console.log(`Initiating download: ${assetTitle} (${format})`);
  };

  const handleShareClick = () => {
    // Simulate sharing functionality
    const shareData = {
      title: caseStudy.title,
      text: caseStudy.subtitle,
      url: window.location.href,
    };
    if (navigator.share) {
      navigator
        .share(shareData)
        .catch((error) => console.error("Error sharing:", error));
    } else {
      // Fallback: Copy URL to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  const handleBackClick = () => {
    navigate("/learning");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="pt-20">
        {/* Breadcrumb */}
        <div className="bg-white py-4 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <button
                onClick={handleBackClick}
                className="flex items-center hover:text-blue-600 transition-colors"
              >
                <ArrowLeft className="h-4 w-4 mr-1" />
                Back to Learning Hub
              </button>
              <span>/</span>
              <span>Case Studies</span>
              <span>/</span>
              <span className="font-medium text-gray-900">
                {caseStudy.title}
              </span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-12 bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {caseStudy.category}
                  </span>
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="h-4 w-4 mr-1" />
                    {caseStudy.readTime}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(caseStudy.publishDate).toLocaleDateString()}
                  </div>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {caseStudy.title}
                </h1>
                <p className="text-xl text-gray-600 mb-6">
                  {caseStudy.subtitle}
                </p>

                <div className="flex items-center gap-6 mb-6">
                  <div>
                    <div className="font-semibold text-gray-900">
                      {caseStudy.company}
                    </div>
                    <div className="text-sm text-gray-600">
                      {caseStudy.country}
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      {caseStudy.author}
                    </div>
                    <div className="text-sm text-gray-600">
                      {caseStudy.authorRole}
                    </div>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <select
                    value={downloadFormat}
                    onChange={(e) => setDownloadFormat(e.target.value)}
                    className="border border-gray-300 rounded-lg px-3 py-2 text-sm"
                  >
                    <option value="pdf">PDF Format</option>
                    <option value="ppt">PowerPoint</option>
                    <option value="docx">Word Document</option>
                  </select>
                  <button
                    onClick={() =>
                      handleDownloadClick(
                        `${caseStudy.title} - ${downloadFormat.toUpperCase()}`
                      )
                    }
                    className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors duration-200 flex items-center space-x-2"
                  >
                    <Download className="h-5 w-5" />
                    <span>Download Case Study</span>
                  </button>
                  <button
                    onClick={handleShareClick}
                    className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 flex items-center space-x-2"
                  >
                    <Share2 className="h-5 w-5" />
                    <span>Share</span>
                  </button>
                </div>
              </div>

              <div>
                <img
                  src={caseStudy.heroImage}
                  alt={caseStudy.title}
                  className="w-full h-64 object-cover rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Metrics Section */}
        <section className="py-8 bg-white border-b-2 border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {caseStudy.metrics.map((metric: Metric, index: number) => (
                <div key={index} className="text-center">
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <div className="text-blue-600">{metric.icon}</div>
                  </div>
                  <div className="text-2xl font-bold text-gray-900">
                    {metric.value}
                  </div>
                  <div className="text-sm text-gray-600">{metric.label}</div>
                  <div className="text-xs text-green-600 mt-1">
                    {metric.growth}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Table of Contents */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Table of Contents
                </h3>
                <nav className="space-y-1">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => setActiveSection(section.id)}
                      className={`block w-full text-left px-4 py-2 rounded-lg transition-colors text-sm font-medium ${
                        activeSection === section.id
                          ? "bg-blue-600 text-white"
                          : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                      }`}
                    >
                      {section.name}
                    </button>
                  ))}
                </nav>
                {/* Download Assets */}
                <div className="mt-8 bg-white p-6 rounded-xl shadow-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Downloadable Assets
                  </h3>
                  <div className="space-y-4">
                    {caseStudy.downloadableAssets.map(
                      (asset: DownloadableAsset, index: number) => (
                        <div
                          key={index}
                          className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition"
                        >
                          <h4 className="font-medium text-gray-800 text-sm mb-1">
                            {asset.title}
                          </h4>
                          <p className="text-xs text-gray-600 mb-2">
                            {asset.description}
                          </p>
                          <div className="flex items-center justify-between text-xs text-gray-500">
                            <span>
                              {asset.format} • {asset.size} • {asset.pages}{" "}
                              pages
                            </span>
                            <button
                              className="text-blue-600 hover:text-blue-700"
                              onClick={() =>
                                handleDownloadClick(
                                  asset.title,
                                  asset.format.toLowerCase()
                                )
                              }
                            >
                              <Download className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-3">
              {/* Overview Section */}
              {activeSection === "overview" && (
                <div className="prose prose-gray max-w-none bg-white p-8 rounded-xl shadow-lg">
                  <h2 className="text-2xl font-semibold text-blue-600 mb-6">
                    Overview
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                      <h3 className="font-semibold text-red-600 mb-3 flex items-center">
                        <AlertCircle className="h-5 w-5 mr-2" />
                        The Challenge
                      </h3>
                      <p className="text-gray-700">
                        {caseStudy.overview.challenge}
                      </p>
                    </div>
                    <div className="bg-green-100 p-6 rounded-lg border border-green-200">
                      <h3 className="font-semibold text-green-600 mb-3 flex items-center">
                        <Lightbulb className="h-5 w-5 mr-2" />
                        The Solution
                      </h3>
                      <p className="text-gray-600">
                        {caseStudy.overview.solution}
                      </p>
                    </div>
                  </div>
                  <div className="bg-blue-100 p-6 rounded-lg mb-8 border border-blue-200">
                    <h3 className="font-semibold text-blue-600 mb-3 flex items-center">
                      <TrendingUp className="h-5 w-5 mr-2" />
                      The Impact
                    </h3>
                    <p className="text-gray-600">{caseStudy.overview.impact}</p>
                  </div>
                  <div className="bg-gray-100 p-6 rounded-lg mb-8 border border-gray-200">
                    <h3 className="font-semibold text-gray-800 mb-3 flex items-center">
                      <Clock className="h-5 w-5 mr-2" />
                      Timeline
                    </h3>
                    <p className="text-gray-600">
                      {caseStudy.overview.timeline}
                    </p>
                  </div>
                  <div className="bg-gradient-to-r from-blue-100 to-indigo-100 p-6 rounded-lg">
                    <h3 className="font-semibold text-gray-800 mb-4">
                      About the Author
                    </h3>
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 bg-gray-300 rounded-full flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-gray-800">
                          {caseStudy.author}
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          {caseStudy.authorRole}
                        </p>
                        <p className="text-sm text-gray-600">
                          {caseStudy.authorBio}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Other Sections */}
              {activeSection !== "overview" && activeSection !== "lessons" && (
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <h2 className="text-2xl font-semibold text-blue-600 mb-6">
                    {caseStudy.sections[activeSection]?.title}
                  </h2>
                  <div
                    className="prose prose-sm text-gray-700 leading-relaxed"
                    dangerouslySetInnerHTML={{
                      __html: caseStudy.sections[activeSection]?.content || "",
                    }}
                  />
                </div>
              )}

              {/* Key Lessons Section */}
              {activeSection === "lessons" && (
                <div className="bg-white p-4 rounded-xl shadow-lg">
                  <h3 className="text-2xl font-semibold text-blue-600 mb-6">
                    Key Lessons for Product Managers
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    {caseStudy.keyLessons.map(
                      (lesson: KeyLesson, index: number) => (
                        <div
                          key={index}
                          className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition bg-white"
                        >
                          <div className="flex items-start gap-3">
                            <div className="bg-blue-100 p-2 rounded-lg">
                              <div className="text-blue-600">{lesson.icon}</div>
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-800 mb-1">
                                {lesson.title}
                              </h4>
                              <p className="text-sm text-gray-600 mb-2">
                                {lesson.description}
                              </p>
                              <p className="text-sm text-gray-500 italic">
                                {lesson.details}
                              </p>
                            </div>
                          </div>
                        </div>
                      )
                    )}
                  </div>
                  <div className="bg-blue-100 p-6 rounded-lg">
                    <h3 className="font-semibold text-blue-600 mb-4">
                      PM-Specific Insights
                    </h3>
                    <ul className="space-y-2">
                      {caseStudy.pmInsights.map(
                        (insight: string, index: number) => (
                          <li
                            key={index}
                            className="flex items-start text-gray-600"
                          >
                            <CheckCircle className="h-4 w-4 mr-2 mt-1 text-green-500" />
                            <span>{insight}</span>
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Related Case Studies Section */}
        <section className="py-8 bg-gray-100">
          <div className="mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              Related Case Studies
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {caseStudy.relatedCaseStudies.map((related: RelatedCaseStudy) => (
                <a
                  key={related.id}
                  href={`/case-study/${related.id}`}
                  className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-colors"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-blue-400 text-white px-2 py-1 rounded text-xs font-medium">
                      {related.category}
                    </span>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="h-4 w-4 mr-1" />
                      {related.readTime}
                    </div>
                  </div>
                  <h3 className="font-medium text-gray-800 mb-1">
                    {related.title}
                  </h3>
                  <div className="text-sm text-gray-600">{related.company}</div>
                  <div className="mt-2 flex items-center text-blue-500 text-xs font-medium">
                    <span>Read Case Study</span>
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Download CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Download Full Case Study
            </h2>
            <p className="text-lg text-white mb-6 max-w-2xl mx-auto">
              Access detailed metrics, frameworks, and actionable insights for
              your product management practice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => handleDownloadClick("Complete Case Study")}
                className="bg-white text-blue-600 px-6 py-3 rounded-full hover:bg-gray-100 transition-colors font-semibold"
              >
                <span className="flex items-center justify-center space-x-2">
                  <Download className="h-5 w-5" />
                  <span>Download Report</span>
                </span>
              </button>
              <button
                onClick={handleShareClick}
                className="border-2 border-white text-white px-6 py-3 rounded-full hover:bg-white hover:text-blue-600 transition-colors font-semibold"
              >
                <span className="flex items-center justify-center space-x-2">
                  <Share2 className="h-5 w-5" />
                  <span>Share with Team</span>
                </span>
              </button>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default CaseStudyDetailPage;
