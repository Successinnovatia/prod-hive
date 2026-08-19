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
      className="py-20 bg-gradient-to-br from-background via-primary/5 to-accent/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Join Africa's Premier PM Community
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
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
              className="bg-card p-6 rounded-lg border border-border shadow-sm hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-glow transition-all duration-180"
            >
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <div className="text-primary">{feature.icon}</div>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Community Stats */}
        <div className="bg-card border border-border rounded-2xl p-8 mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">
                500+
              </div>
              <div className="text-muted-foreground">Active Members</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">12</div>
              <div className="text-muted-foreground">Countries</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
              <div className="text-muted-foreground">Companies</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">24</div>
              <div className="text-muted-foreground">Events/Year</div>
            </div>
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Upcoming Events
            </h3>
            <div className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <div
                  key={index}
                  className="bg-card p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">
                        {event.title}
                      </h4>
                      <div className="flex items-center text-muted-foreground mb-1">
                        <Calendar className="h-4 w-4 mr-2" />
                        {event.date}
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <MapPin className="h-4 w-4 mr-2" />
                        {event.location}
                      </div>
                    </div>
                    <span className="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full">
                      {event.type}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-cta via-primary to-accent text-white p-8 rounded-2xl">
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
              <button className="bg-card text-primary px-6 py-3 rounded-lg hover:bg-muted transition-colors duration-200 font-semibold">
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
