import {
  Target,
  Users,
  Globe,
  Award,
  Heart,
  Lightbulb,
  TrendingUp,
  MapPin,
  Linkedin,
  Twitter,
  Mail,
  ArrowRight,
  CheckCircle,
  Star,
  Building,
  BookOpen,
  Briefcase,
  MessageCircle,
  Shield,
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const AboutPage = () => {
  const stats = [
    {
      value: "500+",
      label: "Community Members",
      icon: <Users className="h-6 w-6" />,
    },
    {
      value: "85%",
      label: "Job Placement Rate",
      icon: <TrendingUp className="h-6 w-6" />,
    },
    {
      value: "12",
      label: "Countries Served",
      icon: <Globe className="h-6 w-6" />,
    },
    {
      value: "50+",
      label: "Partner Companies",
      icon: <Building className="h-6 w-6" />,
    },
  ];

  const values = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Community First",
      description:
        "We believe in the power of community to drive individual and collective success. Every decision we make prioritizes the needs and growth of our members.",
      color: "bg-red-500",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "African Excellence",
      description:
        "We celebrate and amplify African innovation, recognizing the unique strengths and perspectives that African product managers bring to the global tech ecosystem.",
      color: "bg-green-500",
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Continuous Learning",
      description:
        "The tech landscape evolves rapidly. We foster a culture of continuous learning, adaptation, and knowledge sharing to keep our community at the forefront.",
      color: "bg-yellow-500",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Inclusive Growth",
      description:
        "We are committed to creating opportunities for everyone, regardless of background, gender, or previous experience. Diversity drives innovation.",
      color: "bg-blue-500",
    },
  ];

  const team = [
    {
      name: "Oghenetega Apollos",
      role: "Founder & CEO",
      location: "Lagos, Nigeria",
      bio: "Former Senior PM at Flutterwave with 8+ years building fintech products across West Africa. Passionate about democratizing product management education.",
      image: "/images/about-img-1.jpg",
      linkedin: "#",
      twitter: "#",
      achievements: [
        "Built payment products serving 10M+ users",
        "Led product teams across 5 countries",
        "Mentored 50+ aspiring PMs",
      ],
    },
    {
      name: "David Ochieng",
      role: "Head of Programs",
      location: "Nairobi, Kenya",
      bio: "Product leader at Safaricom with deep expertise in mobile money and financial inclusion. Designs our curriculum and mentorship programs.",
      image:
        "https://img.freepik.com/free-photo/portrait-expressive-young-man-wearing-formal-suit_273609-6942.jpg?uid=R193310056&ga=GA1.1.1570111543.1742967309&semt=ais_items_boosted&w=740",
      linkedin: "#",
      twitter: "#",
      achievements: [
        "Launched M-Pesa business features",
        "Scaled products to 30M+ users",
        "Expert in mobile-first product design",
      ],
    },
    {
      name: "Fatima Al-Zahra",
      role: "Head of Community",
      location: "Cairo, Egypt",
      bio: "Former Product Director at Jumia with experience scaling e-commerce across 11 African countries. Leads our community initiatives and events.",
      image:
        "https://img.freepik.com/free-photo/happy-businesswoman-with-hand-chin_1262-20885.jpg?uid=R193310056&ga=GA1.1.1570111543.1742967309&semt=ais_items_boosted&w=740",
      linkedin: "#",
      twitter: "#",
      achievements: [
        "Grew user engagement by 150%",
        "Led localization for 11 markets",
        "Built cross-cultural product teams",
      ],
    },
    {
      name: "Kwame Asante",
      role: "Head of Partnerships",
      location: "Accra, Ghana",
      bio: "Senior PM at Interswitch with expertise in B2B products and enterprise solutions. Manages relationships with hiring partners and corporate clients.",
      image:
        "https://img.freepik.com/premium-photo/judge-lawyer-mature-black-man-with-portrait-city-justice-formal-law-pride-professional-legal-advocate-with-face-attorney-courthouse-advisor-corporate-consultant_590464-457427.jpg?uid=R193310056&ga=GA1.1.1570111543.1742967309&semt=ais_items_boosted&w=740",
      linkedin: "#",
      twitter: "#",
      achievements: [
        "Built B2B platforms for 1000+ businesses",
        "Established partnerships across West Africa",
        "Expert in enterprise product strategy",
      ],
    },
    {
      name: "Aisha Mwangi",
      role: "Head of Content",
      location: "Kigali, Rwanda",
      bio: "Product strategist and content creator with experience at multiple African startups. Creates our educational content and resources.",
      image:
        "https://img.freepik.com/free-photo/businesswoman-executive-professional-success-concept_53876-137644.jpg?uid=R193310056&ga=GA1.1.1570111543.1742967309&semt=ais_items_boosted&w=740",
      linkedin: "#",
      twitter: "#",
      achievements: [
        "Created 100+ educational resources",
        "Built content strategies for 5 startups",
        "Expert in product storytelling",
      ],
    },
    {
      name: "Zara Hassan",
      role: "Head of Research",
      location: "Lagos, Nigeria",
      bio: "User research specialist with deep expertise in African markets. Leads our market research initiatives and user experience studies.",
      image:
        "https://img.freepik.com/free-photo/medium-shot-woman-working-as-lawyer_23-2151202449.jpg?uid=R193310056&ga=GA1.1.1570111543.1742967309&semt=ais_items_boosted&w=740",
      linkedin: "#",
      twitter: "#",
      achievements: [
        "Conducted research across 15 African markets",
        "Published 20+ market insights reports",
        "Expert in cross-cultural user research",
      ],
    },
  ];

  const milestones = [
    {
      year: "2022",
      title: "ProdHive Founded",
      description:
        "Started as a small WhatsApp group of 20 product managers sharing experiences and job opportunities.",
      icon: <Target className="h-6 w-6" />,
    },
    {
      year: "2022",
      title: "First Cohort Launched",
      description:
        "Launched our first 12-week transition program with 25 participants from 5 countries.",
      icon: <BookOpen className="h-6 w-6" />,
    },
    {
      year: "2023",
      title: "Community Growth",
      description:
        "Reached 200 members and established partnerships with major African tech companies.",
      icon: <Users className="h-6 w-6" />,
    },
    {
      year: "2023",
      title: "Resource Library Launch",
      description:
        "Created comprehensive library of templates, tools, and guides for African product managers.",
      icon: <Lightbulb className="h-6 w-6" />,
    },
    {
      year: "2024",
      title: "Job Board & Salary Guide",
      description:
        "Launched dedicated job board and comprehensive salary guide for African PM roles.",
      icon: <Briefcase className="h-6 w-6" />,
    },
    {
      year: "2024",
      title: "500+ Members",
      description:
        "Reached 500+ community members across 12 countries with 85% job placement rate.",
      icon: <Award className="h-6 w-6" />,
    },
  ];

  const partners = [
    {
      name: "Flutterwave",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTapojSnWH-n-WcVbMRNLe7dfFkBxaT7X8fFg&s",
    },
    {
      name: "Paystack",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShqlEP0qWHv6nFrvoiGj1SSyyVuKhVr1-VwA&s",
    },
    {
      name: "Safaricom",
      logo: "https://totaltele.com/wp-content/uploads/2023/08/safaricom-logo.jpeg",
    },
    {
      name: "Jumia",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx-6scFSoduBe_U7LTSX44fEKceQ2nVlG4sg&s",
    },
    {
      name: "Interswitch",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK_GVI7mJt8bTmhxgPs9ehsZ4i-Pps7X3lgA&s",
    },
    {
      name: "Andela",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCLjry1dL1j1VeRKaa_0M9eFzsSiQ_1ScpuA&s",
    },
    {
      name: "Standard Bank",
      logo: "https://cdn.worldvectorlogo.com/logos/standard-bank.svg",
    },
    {
      name: "MTN",
      logo: "https://cdn.worldvectorlogo.com/logos/mtn-new-logo.svg",
    },
  ];

  const impact = [
    {
      metric: "500+",
      description: "Professionals successfully transitioned to PM roles",
      icon: <Users className="h-8 w-8" />,
    },
    {
      metric: "$2.5M+",
      description: "Total salary increase achieved by our alumni",
      icon: <TrendingUp className="h-8 w-8" />,
    },
    {
      metric: "50+",
      description: "Companies now employing our graduates",
      icon: <Building className="h-8 w-8" />,
    },
    {
      metric: "12",
      description: "African countries with active community members",
      icon: <Globe className="h-8 w-8" />,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 md:pt-40 pb-16 bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Empowering Africa's
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-blue-600">
                {" "}
                Product Leaders
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              We're building the largest community of product managers across
              Africa, providing the education, resources, and network needed to
              succeed in the global tech ecosystem.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register">
                <button className="bg-orange-600 text-white px-8 py-4 rounded-lg hover:bg-orange-700 transition-all duration-200 hover:scale-105 flex items-center justify-center space-x-2">
                  <span>Join Our Mission</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
              </Link>
              <a
                href="#team"
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-orange-600 hover:text-orange-600 transition-all duration-200"
              >
                Meet Our Team
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-orange-600">{stat.icon}</div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-xl text-gray-700 mb-6">
                To democratize access to product management education and
                opportunities across Africa, empowering the next generation of
                African product leaders to build solutions that transform their
                communities and compete globally.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Education First
                    </h3>
                    <p className="text-gray-600">
                      Providing world-class product management education
                      tailored for African markets
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Community Driven
                    </h3>
                    <p className="text-gray-600">
                      Building a supportive network where members learn from and
                      support each other
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Impact Focused
                    </h3>
                    <p className="text-gray-600">
                      Measuring success by the career growth and impact of our
                      community members
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="African tech professionals collaborating"
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and shape our community
              culture
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all duration-300"
              >
                <div
                  className={`${value.color} w-16 h-16 rounded-lg flex items-center justify-center mb-6 text-white`}
                >
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From a small WhatsApp group to Africa's largest PM community
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-orange-200"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex items-center ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  <div
                    className={`w-1/2 ${
                      index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"
                    }`}
                  >
                    <div className="bg-white p-6 rounded-xl shadow-sm">
                      <div className="text-orange-600 font-bold text-lg mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="relative z-10 flex items-center justify-center w-12 h-12 bg-orange-600 rounded-full text-white">
                    {milestone.icon}
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-white" id="team">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experienced product leaders from across Africa, united by a
              passion for education and community building
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-center mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
                  />
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-orange-600 font-medium mb-1">
                    {member.role}
                  </p>
                  <div className="flex items-center justify-center text-gray-500 text-sm">
                    <MapPin className="h-4 w-4 mr-1" />
                    {member.location}
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {member.bio}
                </p>

                <div className="mb-4">
                  <h4 className="font-medium text-gray-900 mb-2">
                    Key Achievements:
                  </h4>
                  <ul className="space-y-1">
                    {member.achievements.map(
                      (achievement, achievementIndex) => (
                        <li
                          key={achievementIndex}
                          className="text-xs text-gray-600 flex items-center"
                        >
                          <Star className="h-3 w-3 text-yellow-400 mr-2 flex-shrink-0" />
                          {achievement}
                        </li>
                      )
                    )}
                  </ul>
                </div>

                <div className="flex justify-center space-x-3">
                  <a
                    href={member.linkedin}
                    className="p-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors duration-200"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a
                    href={member.twitter}
                    className="p-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors duration-200"
                  >
                    <Twitter className="h-4 w-4" />
                  </a>
                  <button className="p-2 bg-orange-100 text-orange-600 rounded-lg hover:bg-orange-200 transition-colors duration-200">
                    <Mail className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Measuring success through the growth and achievements of our
              community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impact.map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm text-center hover:shadow-md transition-shadow duration-200"
              >
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-orange-600">{item.icon}</div>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {item.metric}
                </div>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Partners
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Working with Africa's leading tech companies to create
              opportunities for our community
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 grayscale hover:grayscale-0"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-full h-12 object-contain"
                />
                <p className="text-xs text-gray-600 text-center mt-2 font-medium">
                  {partner.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-orange-500 to-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Join Our Mission
          </h2>
          <p className="text-xl text-white opacity-90 mb-8 max-w-2xl mx-auto">
            Whether you're looking to transition into product management,
            advance your PM career, or contribute to the African tech ecosystem,
            there's a place for you in our community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <button className="bg-white text-orange-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-semibold flex items-center space-x-2">
                <Users className="h-5 w-5" />
                <span>Join Community</span>
              </button>
            </Link>
            <Link to="/support">
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-orange-600 transition-all duration-200 font-semibold flex items-center space-x-2">
                <MessageCircle className="h-5 w-5" />
                <span>Partner With Us</span>
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
