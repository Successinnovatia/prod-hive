import React from 'react';
import { Download, BookOpen, Video, FileText, ExternalLink, Star, ArrowRight, Calculator, Target, BarChart3 } from 'lucide-react';

const Resources = () => {
  const handleDownload = (filename: string) => {
    const link = document.createElement('a');
    link.href = `/downloads/${filename}`;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const resourceCategories = [
    {
      title: 'Templates & Frameworks',
      icon: <FileText className="h-6 w-6" />,
      color: 'bg-blue-500',
      href: '/templates',
      resources: [
        { name: 'Product Requirements Document', type: 'Template', downloads: '2.3k', filename: 'african-market-prd-template.pdf' },
        { name: 'User Story Mapping Canvas', type: 'Template', downloads: '1.8k', filename: 'user-story-mapping-canvas.pdf' },
        { name: 'Product Roadmap Template', type: 'Template', downloads: '3.1k', filename: 'product-roadmap-template.pdf' },
        { name: 'Competitive Analysis Framework', type: 'Framework', downloads: '1.5k', filename: 'competitive-analysis-framework.pdf' }
      ]
    },
    {
      title: 'Interactive Tools',
      icon: <Calculator className="h-6 w-6" />,
      color: 'bg-purple-500',
      href: '/tools',
      resources: [
        { name: 'African Market Size Calculator', type: 'Tool', downloads: '4.2k', filename: 'market-size-calculator.pdf' },
        { name: 'Feature Prioritization Matrix', type: 'Tool', downloads: '3.5k', filename: 'feature-prioritization-matrix.pdf' },
        { name: 'PM Metrics Dashboard Builder', type: 'Tool', downloads: '2.7k', filename: 'pm-metrics-dashboard.pdf' },
        { name: 'Stakeholder Mapping Tool', type: 'Tool', downloads: '1.6k', filename: 'stakeholder-mapping-tool.pdf' }
      ]
    },
    {
      title: 'Learning Materials',
      icon: <BookOpen className="h-6 w-6" />,
      color: 'bg-green-500',
      href: '/resources?category=guides',
      resources: [
        { name: 'African Market Research Guide', type: 'Guide', downloads: '1.2k', filename: 'african-market-research-guide.pdf' },
        { name: 'Fintech PM Playbook', type: 'eBook', downloads: '2.8k', filename: 'fintech-pm-playbook.pdf' },
        { name: 'Mobile-First Product Strategy', type: 'Guide', downloads: '1.9k', filename: 'mobile-ux-guide.pdf' },
        { name: 'Cross-Cultural User Research', type: 'Guide', downloads: '1.1k', filename: 'cross-cultural-research-guide.pdf' }
      ]
    }
  ];

  const featuredResources = [
    {
      title: 'The Complete African PM Toolkit',
      description: 'Everything you need to succeed as a product manager in Africa - templates, frameworks, and guides.',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.9,
      downloads: '12k+',
      price: 'Free',
      filename: 'pm-africa-toolkit.zip'
    },
    {
      title: 'Fintech Product Management Guide',
      description: 'Comprehensive guide to building fintech products in emerging markets with regulatory insights.',
      image: 'https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.8,
      downloads: '8.5k+',
      price: 'Free',
      filename: 'fintech-strategy-canvas.pdf'
    }
  ];

  return (
    <section id="resources" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            PM Resources & Tools
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access our comprehensive library of templates, interactive tools, and guides specifically 
            designed for African product managers and those transitioning into PM roles.
          </p>
        </div>

        {/* Featured Resources */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {featuredResources.map((resource, index) => (
            <div key={index} className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <img 
                  src={resource.image} 
                  alt={resource.title}
                  className="w-full md:w-32 h-32 object-cover rounded-lg"
                />
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{resource.title}</h3>
                  <p className="text-gray-600 mb-4">{resource.description}</p>
                  <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 mr-1" />
                      <span className="text-sm text-gray-700">{resource.rating}</span>
                    </div>
                    <div className="text-sm text-gray-600">{resource.downloads} downloads</div>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium">
                      {resource.price}
                    </span>
                  </div>
                  <button 
                    onClick={() => handleDownload(resource.filename)}
                    className="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition-colors duration-200 flex items-center space-x-2"
                  >
                    <Download className="h-4 w-4" />
                    <span>Download Now</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Resource Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {resourceCategories.map((category, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-all duration-200">
              <div className="flex items-center mb-6">
                <div className={`${category.color} p-3 rounded-lg mr-4`}>
                  <div className="text-white">{category.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
              </div>
              <div className="space-y-4">
                {category.resources.map((resource, resourceIndex) => (
                  <div key={resourceIndex} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                    <div>
                      <h4 className="font-medium text-gray-900">{resource.name}</h4>
                      <p className="text-sm text-gray-600">{resource.type}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs text-gray-500">{resource.downloads}</span>
                      <button 
                        onClick={() => handleDownload(resource.filename)}
                        className="p-1 text-orange-600 hover:text-orange-700"
                      >
                        <Download className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <a 
                href={category.href}
                className="w-full mt-4 text-orange-600 hover:text-orange-700 font-medium flex items-center justify-center space-x-1"
              >
                <span>View All {category.title}</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Explore Our Complete Resource Library
          </h3>
          <p className="text-xl mb-6 opacity-90">
            Access hundreds of templates, interactive tools, and guides. Contribute your own resources 
            and help the community grow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/resources"
              className="bg-white text-orange-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-semibold flex items-center space-x-2"
            >
              <span>Browse All Resources</span>
              <ArrowRight className="h-5 w-5" />
            </a>
            <a 
              href="/tools"
              className="bg-white text-orange-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-semibold flex items-center space-x-2"
            >
              <span>Try Interactive Tools</span>
              <Calculator className="h-5 w-5" />
            </a>
            <a 
              href="/contribute"
              className="border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-orange-600 transition-all duration-200 font-semibold"
            >
              Contribute Content
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;