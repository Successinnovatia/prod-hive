
import { Quote, MapPin, Briefcase, ArrowRight, Star } from "lucide-react";
import { Link } from "react-router-dom";

const Success = () => {
  const successStories = [
    {
      name: "Amara Kone",
      role: "Senior Product Manager",
      company: "Flutterwave",
      location: "Lagos, Nigeria",
      previousRole: "Software Engineer",
      image:
        "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=400",
      quote:
        "The program gave me the confidence and skills to transition from engineering to product management. The African context was particularly valuable.",
      achievement: "Led mobile payments product serving 10M+ users",
      timeframe: "6 months after graduation",
    },
    {
      name: "David Ochieng",
      role: "Product Manager",
      company: "Safaricom",
      location: "Nairobi, Kenya",
      previousRole: "Business Analyst",
      image:
        "https://img.freepik.com/free-photo/medium-shot-male-flight-attendant-posing_23-2150312701.jpg?uid=R193310056&ga=GA1.1.1570111543.1742967309&semt=ais_items_boosted&w=740",
      quote:
        "The mentorship and real-world projects prepared me perfectly for the challenges of product management in the fintech space.",
      achievement: "Launched M-Pesa business feature",
      timeframe: "4 months after graduation",
    },
    {
      name: "Fatima Al-Zahra",
      role: "Product Lead",
      company: "Jumia",
      location: "Cairo, Egypt",
      previousRole: "UX Designer",
      image:
        "https://img.freepik.com/free-photo/happy-successful-muslim-businesswoman-posing-outside_74855-2007.jpg?uid=R193310056&ga=GA1.1.1570111543.1742967309&semt=ais_items_boosted&w=740",
      quote:
        "Learning from other African PMs and understanding local market dynamics was invaluable for my transition and success.",
      achievement: "Grew user engagement by 150%",
      timeframe: "8 months after graduation",
    },
  ];

  const metrics = [
    { value: "500+", label: "Successful Transitions", icon: "🎯" },
    { value: "85%", label: "Job Placement Rate", icon: "📈" },
    { value: "40%", label: "Average Salary Increase", icon: "💰" },
    { value: "12", label: "Countries Represented", icon: "🌍" },
  ];

  const companies = [
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
  ];

  return (
    <section
      id="success"
      className="py-20 bg-gradient-to-br from-blue-50 to-purple-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the professionals who successfully transitioned to product
            management and are now leading products across Africa's top
            companies.
          </p>
        </div>

        {/* Success Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="text-center bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div className="text-3xl mb-2">{metric.icon}</div>
              <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
                {metric.value}
              </div>
              <div className="text-gray-600 text-sm md:text-base">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        {/* Success Stories */}
        <div className="space-y-8 mb-16">
          {successStories.map((story, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row items-center gap-8 bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className="lg:w-1/3">
                <img
                  src={story.image}
                  alt={story.name}
                  className="w-48 h-48 object-cover rounded-full mx-auto shadow-lg"
                />
              </div>
              <div className="lg:w-2/3 text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start mb-4">
                  <Quote className="h-8 w-8 text-orange-500 mr-2" />
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                </div>
                <blockquote className="text-lg text-gray-700 mb-6 italic">
                  "{story.quote}"
                </blockquote>
                <div className="space-y-2 mb-4">
                  <h3 className="text-xl font-bold text-gray-900">
                    {story.name}
                  </h3>
                  <p className="text-orange-600 font-semibold">
                    {story.role} at {story.company}
                  </p>
                  <div className="flex items-center justify-center lg:justify-start text-gray-600 space-x-4">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {story.location}
                    </div>
                    <div className="flex items-center">
                      <Briefcase className="h-4 w-4 mr-1" />
                      Previously: {story.previousRole}
                    </div>
                  </div>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-green-800 font-semibold">
                    🎉 {story.achievement}
                  </p>
                  <p className="text-green-600 text-sm">{story.timeframe}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Partner Companies */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Our Alumni Work At
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {companies.map((company, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 grayscale hover:grayscale-0"
              >
                <img
                  src={company.logo}
                  alt={company.name}
                  className="w-16 h-16 object-cover rounded mx-auto"
                />
                <p className="text-sm text-gray-600 mt-2 font-medium">
                  {company.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Write Your Success Story?
          </h3>
          <p className="text-xl mb-6 opacity-90">
            Join hundreds of professionals who have successfully transitioned to
            product management.
          </p>
          <Link to="/register">
            <button className="bg-white text-orange-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-200 font-semibold flex items-center space-x-2 mx-auto">
              <span>Start Your Journey Today</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Success;
