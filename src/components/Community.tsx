import { Link } from "react-router-dom";
import {
  MessageCircle,
  Calendar,
  MapPin,
  Briefcase,
  Users,
  Heart,
} from "lucide-react";

const Community = () => {
  const communityFeatures = [
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "Discussion Forums",
      description: "Connect with fellow PMs, ask questions, and share insights",
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Regular Events",
      description: "Monthly meetups, workshops, and networking sessions",
    },
    {
      icon: <Briefcase className="h-6 w-6" />,
      title: "Job Board",
      description: "Exclusive PM job opportunities across Africa",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Mentorship",
      description: "Connect with experienced PMs for career guidance",
    },
  ];

  const upcomingEvents = [
    {
      title: "Product Strategy Workshop",
      date: "March 15, 2025",
      location: "Lagos, Nigeria",
      type: "Workshop",
    },
    {
      title: "PM Career Panel Discussion",
      date: "March 22, 2025",
      location: "Virtual",
      type: "Panel",
    },
    {
      title: "Fintech Product Deep Dive",
      date: "March 29, 2025",
      location: "Nairobi, Kenya",
      type: "Meetup",
    },
  ];

  return (
    <section
      id="community"
      className="py-20 bg-gradient-to-br from-blue-50 to-purple-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Join Africa's Premier PM Community
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with product managers across the continent. Share
            experiences, learn from others, and grow your career in a supportive
            community.
          </p>
        </div>

        {/* Community Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {communityFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-1"
            >
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <div className="text-blue-600">{feature.icon}</div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Community Stats */}
        <div className="bg-white rounded-2xl p-8 mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">
                500+
              </div>
              <div className="text-gray-600">Active Members</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">12</div>
              <div className="text-gray-600">Countries</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
              <div className="text-gray-600">Companies</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">24</div>
              <div className="text-gray-600">Events/Year</div>
            </div>
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Upcoming Events
            </h3>
            <div className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        {event.title}
                      </h4>
                      <div className="flex items-center text-gray-600 mb-1">
                        <Calendar className="h-4 w-4 mr-2" />
                        {event.date}
                      </div>
                      <div className="flex items-center text-gray-600">
                        <MapPin className="h-4 w-4 mr-2" />
                        {event.location}
                      </div>
                    </div>
                    <span className="bg-orange-100 text-orange-800 text-sm px-3 py-1 rounded-full">
                      {event.type}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-8 rounded-2xl">
            <div className="flex items-center mb-4">
              <Heart className="h-8 w-8 mr-3" />
              <h3 className="text-2xl font-bold">Why Our Community?</h3>
            </div>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                Africa-focused discussions and case studies
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                Local market insights and opportunities
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                Cultural context in product development
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                Strong alumni network across the continent
              </li>
            </ul>
            <Link to="/register">
              <button className="bg-white text-orange-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-semibold">
                Join Community Today
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
