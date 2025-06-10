import  { useState } from 'react';
import { Search, Filter, Download, Star, Eye, Calendar, User} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ResourcesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedType, setSelectedType] = useState('all');

  const handleDownload = (filename: string) => {
    const link = document.createElement('a');
    link.href = `/downloads/${filename}`;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const categories = [
    { id: 'all', name: 'All Categories', count: 47 },
    { id: 'templates', name: 'Templates & Frameworks', count: 15 },
    { id: 'guides', name: 'Learning Materials', count: 18 },
    { id: 'videos', name: 'Video Content', count: 12 },
    { id: 'tools', name: 'Tools & Software', count: 8 },
    { id: 'case-studies', name: 'Case Studies', count: 6 }
  ];

  const resourceTypes = [
    { id: 'all', name: 'All Types' },
    { id: 'free', name: 'Free Resources' },
    { id: 'premium', name: 'Premium Content' },
    { id: 'member-only', name: 'Member Only' }
  ];

  const resources = [
    {
      id: 1,
      title: 'Product Requirements Document Template',
      description: 'Comprehensive PRD template specifically designed for African market products with regulatory considerations.',
      category: 'templates',
      type: 'free',
      format: 'Google Docs',
      downloads: 3247,
      rating: 4.9,
      author: 'Amara Kone',
      date: '2024-12-15',
      tags: ['PRD', 'Documentation', 'Planning'],
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=400',
      featured: true,
      filename: 'african-market-prd-template.pdf'
    },
    {
      id: 2,
      title: 'African Fintech Market Analysis Framework',
      description: 'Deep dive framework for analyzing fintech opportunities across different African markets.',
      category: 'guides',
      type: 'premium',
      format: 'PDF + Excel',
      downloads: 1856,
      rating: 4.8,
      author: 'David Ochieng',
      date: '2024-12-10',
      tags: ['Fintech', 'Market Research', 'Strategy'],
      image: 'https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=400',
      featured: true,
      filename: 'fintech-strategy-canvas.pdf'
    },
    {
      id: 3,
      title: 'Mobile-First Product Strategy Playbook',
      description: 'Complete guide to building mobile-first products for emerging markets with limited connectivity.',
      category: 'guides',
      type: 'free',
      format: 'PDF',
      downloads: 2934,
      rating: 4.7,
      author: 'Fatima Al-Zahra',
      date: '2024-12-08',
      tags: ['Mobile', 'Strategy', 'Emerging Markets'],
      image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=400',
      featured: false,
      filename: 'mobile-ux-guide.pdf'
    },
    {
      id: 4,
      title: 'User Research in Africa: Cultural Considerations',
      description: 'Comprehensive guide to conducting user research across diverse African cultures and languages.',
      category: 'guides',
      type: 'member-only',
      format: 'Interactive Guide',
      downloads: 1423,
      rating: 4.9,
      author: 'Kwame Asante',
      date: '2024-12-05',
      tags: ['User Research', 'Culture', 'Methodology'],
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400',
      featured: false,
      filename: 'cross-cultural-research-guide.pdf'
    },
    {
      id: 5,
      title: 'Product Roadmap Template for Agile Teams',
      description: 'Flexible roadmap template that adapts to changing priorities in fast-moving African tech companies.',
      category: 'templates',
      type: 'free',
      format: 'Figma + Notion',
      downloads: 2156,
      rating: 4.6,
      author: 'Aisha Mwangi',
      date: '2024-12-03',
      tags: ['Roadmap', 'Agile', 'Planning'],
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=400',
      featured: false,
      filename: 'product-roadmap-template.pdf'
    },
    {
      id: 6,
      title: 'PM Transition Masterclass Series',
      description: '8-part video series covering everything from technical skills to stakeholder management.',
      category: 'videos',
      type: 'premium',
      format: 'Video Series',
      downloads: 4521,
      rating: 4.9,
      author: 'ProdHive Team',
      date: '2024-11-28',
      tags: ['Career Transition', 'Video Course', 'Comprehensive'],
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400',
      featured: true,
      filename: 'pm-transition-masterclass.pdf'
    }
  ];

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;
    const matchesType = selectedType === 'all' || resource.type === selectedType;
    
    return matchesSearch && matchesCategory && matchesType;
  });

  const featuredResources = resources.filter(resource => resource.featured);

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'free': return 'bg-green-100 text-green-800';
      case 'premium': return 'bg-orange-100 text-orange-800';
      case 'member-only': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'free': return 'Free';
      case 'premium': return 'Premium';
      case 'member-only': return 'Members Only';
      default: return type;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              PM Resources Library
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Access our comprehensive collection of templates, guides, and tools specifically 
              designed for African product managers and those transitioning into PM roles.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search resources, templates, guides..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
              <button className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors duration-200 flex items-center space-x-2">
                <Filter className="h-5 w-5" />
                <span>Filter</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredResources.map((resource) => (
              <div key={resource.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <img 
                  src={resource.image} 
                  alt={resource.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(resource.type)}`}>
                      {getTypeLabel(resource.type)}
                    </span>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 mr-1" />
                      <span className="text-sm text-gray-600">{resource.rating}</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{resource.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{resource.description}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {resource.author}
                    </div>
                    <div className="flex items-center">
                      <Download className="h-4 w-4 mr-1" />
                      {resource.downloads.toLocaleString()}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {resource.tags.slice(0, 2).map((tag, index) => (
                      <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button 
                    onClick={() => handleDownload(resource.filename)}
                    className="w-full bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-700 transition-colors duration-200 flex items-center justify-center space-x-2"
                  >
                    <Download className="h-4 w-4" />
                    <span>Download Resource</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filters and Resources Grid */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filters */}
            <div className="lg:w-1/4">
              <div className="bg-white p-6 rounded-xl shadow-sm sticky top-24">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
                <div className="space-y-2 mb-6">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-colors duration-200 flex items-center justify-between ${
                        selectedCategory === category.id 
                          ? 'bg-orange-100 text-orange-800' 
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <span>{category.name}</span>
                      <span className="text-sm text-gray-500">{category.count}</span>
                    </button>
                  ))}
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-4">Type</h3>
                <div className="space-y-2">
                  {resourceTypes.map((type) => (
                    <button
                      key={type.id}
                      onClick={() => setSelectedType(type.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-colors duration-200 ${
                        selectedType === type.id 
                          ? 'bg-orange-100 text-orange-800' 
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {type.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Resources Grid */}
            <div className="lg:w-3/4">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">
                  All Resources ({filteredResources.length})
                </h2>
                <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm">
                  <option>Most Downloaded</option>
                  <option>Newest First</option>
                  <option>Highest Rated</option>
                  <option>A-Z</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredResources.map((resource) => (
                  <div key={resource.id} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-all duration-200">
                    <div className="flex items-start gap-4">
                      <img 
                        src={resource.image} 
                        alt={resource.title}
                        className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-2">
                          <span className={`px-2 py-1 rounded text-xs font-medium ${getTypeColor(resource.type)}`}>
                            {getTypeLabel(resource.type)}
                          </span>
                          <div className="flex items-center">
                            <Star className="h-3 w-3 text-yellow-400 mr-1" />
                            <span className="text-xs text-gray-600">{resource.rating}</span>
                          </div>
                        </div>
                        <h3 className="font-semibold text-gray-900 mb-1 truncate">{resource.title}</h3>
                        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{resource.description}</p>
                        <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                          <div className="flex items-center">
                            <User className="h-3 w-3 mr-1" />
                            {resource.author}
                          </div>
                          <div className="flex items-center">
                            <Calendar className="h-3 w-3 mr-1" />
                            {new Date(resource.date).toLocaleDateString()}
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-xs text-gray-500">
                            <Download className="h-3 w-3 mr-1" />
                            {resource.downloads.toLocaleString()} downloads
                          </div>
                          <div className="flex space-x-2">
                            <button className="p-1 text-gray-400 hover:text-orange-600">
                              <Eye className="h-4 w-4" />
                            </button>
                            <button 
                              onClick={() => handleDownload(resource.filename)}
                              className="p-1 text-gray-400 hover:text-orange-600"
                            >
                              <Download className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {filteredResources.length === 0 && (
                <div className="text-center py-12">
                  <div className="text-gray-400 mb-4">
                    <Search className="h-16 w-16 mx-auto" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No resources found</h3>
                  <p className="text-gray-600">Try adjusting your search terms or filters</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ResourcesPage;