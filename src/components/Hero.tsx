import { ArrowRight, Users, BookOpen, Award } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="pt-32 md:pt-40 pb-16 bg-gradient-to-br from-blue-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Transform Your Tech Career into
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-blue-600">
              {" "}
              Product Management
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Join Africa's premier community of product managers. Get the skills,
            network, and mentorship you need to successfully transition from any
            tech role to product management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <button className="bg-orange-600 text-white px-8 py-4 rounded-lg hover:bg-orange-700 transition-all duration-200 hover:scale-105 flex items-center justify-center space-x-2">
                <span>Start Your Journey</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </Link>
            <a href="#community" className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-orange-600 hover:text-orange-600 transition-all duration-200">
              Explore Community
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
            <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Users className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">500+</h3>
            <p className="text-gray-600">Community Members</p>
          </div>
          <div className="text-center bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
            <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
              <BookOpen className="h-6 w-6 text-orange-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">12 Weeks</h3>
            <p className="text-gray-600">Intensive Program</p>
          </div>
          <div className="text-center bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
            <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Award className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">85%</h3>
            <p className="text-gray-600">Success Rate</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
