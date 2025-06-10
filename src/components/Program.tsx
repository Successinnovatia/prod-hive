import React from "react";
import { CheckCircle, Clock, Users, Trophy } from "lucide-react";
import { Link } from "react-router-dom";
const Program = () => {
  const modules = [
    {
      week: "Weeks 1-2",
      title: "Product Management Foundations",
      topics: [
        "PM Role & Responsibilities",
        "Product Strategy",
        "Market Research",
        "User Research Methods",
      ],
    },
    {
      week: "Weeks 3-4",
      title: "User Experience & Design",
      topics: [
        "User Journey Mapping",
        "Wireframing & Prototyping",
        "Design Thinking",
        "Usability Testing",
      ],
    },
    {
      week: "Weeks 5-6",
      title: "Data & Analytics",
      topics: [
        "Product Analytics",
        "A/B Testing",
        "KPI Tracking",
        "Data-Driven Decisions",
      ],
    },
    {
      week: "Weeks 7-8",
      title: "Technical Collaboration",
      topics: [
        "Working with Engineers",
        "Technical Requirements",
        "Agile Methodology",
        "Sprint Planning",
      ],
    },
    {
      week: "Weeks 9-10",
      title: "Go-to-Market Strategy",
      topics: [
        "Product Launch",
        "Marketing Collaboration",
        "Pricing Strategy",
        "Customer Feedback",
      ],
    },
    {
      week: "Weeks 11-12",
      title: "Leadership & Growth",
      topics: [
        "Stakeholder Management",
        "Product Roadmapping",
        "Team Leadership",
        "Career Development",
      ],
    },
  ];

  const features = [
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Flexible Schedule",
      description:
        "Evening and weekend sessions designed for working professionals",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Expert Mentorship",
      description:
        "Learn from experienced PMs at top African and international companies",
    },
    {
      icon: <Trophy className="h-6 w-6" />,
      title: "Real Projects",
      description: "Work on actual product challenges from partner companies",
    },
  ];

  return (
    <section id="program" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Transition Program
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our 12-week intensive program is designed specifically for African
            tech professionals looking to transition into product management
            roles.
          </p>
        </div>

        {/* Program Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-orange-600">{feature.icon}</div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Curriculum */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Program Curriculum
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {modules.map((module, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex items-center mb-4">
                  <span className="bg-orange-600 text-white text-sm px-3 py-1 rounded-full font-medium">
                    {module.week}
                  </span>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  {module.title}
                </h4>
                <ul className="space-y-2">
                  {module.topics.map((topic, topicIndex) => (
                    <li
                      key={topicIndex}
                      className="flex items-center text-gray-600"
                    >
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/register">
              <button className="bg-orange-600 text-white px-8 py-3 rounded-lg hover:bg-orange-700 transition-colors duration-200">
                Enroll Now - Next Cohort Starts Soon
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Program;
