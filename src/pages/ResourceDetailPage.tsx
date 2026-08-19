import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { 
  Download, Star, Eye, Calendar, User, Tag, Share2, 
  BookOpen, FileText, Video, Heart, MessageCircle,
  ArrowLeft, ExternalLink, CheckCircle
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ResourceDetailPage = () => {
  const { id } = useParams();
  const [isDownloaded, setIsDownloaded] = useState(false);
  const [rating, setRating] = useState(0);

  // Mock data - in real app, this would come from API
  const resource = {
    id: 1,
    title: 'Product Requirements Document Template',
    description: 'Comprehensive PRD template specifically designed for African market products with regulatory considerations and cultural context.',
    longDescription: `This comprehensive Product Requirements Document (PRD) template has been specifically crafted for product managers working in African markets. It includes sections for regulatory compliance, cultural considerations, and market-specific requirements that are often overlooked in generic templates.

The template covers everything from initial product vision to detailed feature specifications, with special attention to:
- Regulatory requirements across different African countries
- Cultural sensitivity and localization needs
- Infrastructure limitations and offline-first considerations
- Payment method preferences and financial inclusion aspects
- Language and accessibility requirements

This template has been used by product teams at major African tech companies including Flutterwave, Paystack, and Jumia, and has been refined based on real-world experience building products for African markets.`,
    category: 'templates',
    type: 'free',
    format: 'Google Docs + Notion',
    fileSize: '2.4 MB',
    downloads: 3247,
    views: 12543,
    rating: 4.9,
    totalRatings: 156,
    author: {
      name: 'Amara Kone',
      role: 'Senior Product Manager at Flutterwave',
      avatar: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=100',
      bio: 'Product leader with 8+ years experience building fintech products across West Africa.'
    },
    date: '2024-12-15',
    lastUpdated: '2024-12-20',
    tags: ['PRD', 'Documentation', 'Planning', 'Africa', 'Fintech'],
    image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800',
    preview: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600',
    featured: true,
    whatYouGet: [
      'Complete PRD template with 15+ sections',
      'African market considerations checklist',
      'Regulatory compliance framework',
      'Cultural adaptation guidelines',
      'Real-world examples from successful African products',
      'Bonus: Stakeholder communication templates'
    ],
    requirements: [
      'Google Docs or Microsoft Word',
      'Basic understanding of product management',
      'Familiarity with your target market'
    ]
  };

  const relatedResources = [
    {
      id: 2,
      title: 'User Story Mapping Canvas',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=300',
      downloads: 1856,
      rating: 4.7
    },
    {
      id: 3,
      title: 'Product Roadmap Template',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=300',
      downloads: 2934,
      rating: 4.8
    },
    {
      id: 4,
      title: 'Competitive Analysis Framework',
      image: 'https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=300',
      downloads: 1423,
      rating: 4.6
    }
  ];

  const reviews = [
    {
      id: 1,
      user: 'David Ochieng',
      role: 'Product Manager at Safaricom',
      avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=100',
      rating: 5,
      date: '2024-12-18',
      comment: 'This template saved me weeks of work. The African market considerations are spot-on and helped me avoid several pitfalls.'
    },
    {
      id: 2,
      user: 'Fatima Al-Zahra',
      role: 'Product Lead at Jumia',
      avatar: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=100',
      rating: 5,
      date: '2024-12-16',
      comment: 'Excellent template! The regulatory compliance section is particularly valuable for cross-border products.'
    },
    {
      id: 3,
      user: 'Kwame Asante',
      role: 'Senior PM at Interswitch',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100',
      rating: 4,
      date: '2024-12-14',
      comment: 'Great starting point for any African product. Would love to see more industry-specific variations.'
    }
  ];

  const handleDownload = () => {
    setIsDownloaded(true);
    // In real app, trigger actual download
  };

  const handleRating = (newRating: number) => {
    setRating(newRating);
    // In real app, submit rating to API
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'free': return 'bg-success/15 text-success';
      case 'premium': return 'bg-primary/10 text-primary';
      case 'member-only': return 'bg-purple-100 text-purple-800';
      default: return 'bg-muted text-foreground';
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
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-20">
        {/* Breadcrumb */}
        <div className="bg-muted py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <button className="flex items-center hover:text-primary">
                <ArrowLeft className="h-4 w-4 mr-1" />
                Back to Resources
              </button>
              <span>/</span>
              <span>Templates</span>
              <span>/</span>
              <span className="text-foreground">{resource.title}</span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Resource Header */}
              <div className="mb-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(resource.type)}`}>
                    {getTypeLabel(resource.type)}
                  </span>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-warning mr-1" />
                    <span className="font-medium">{resource.rating}</span>
                    <span className="text-muted-foreground ml-1">({resource.totalRatings} reviews)</span>
                  </div>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{resource.title}</h1>
                <p className="text-xl text-muted-foreground mb-6">{resource.description}</p>
                
                {/* Author Info */}
                <div className="flex items-center gap-4 p-4 bg-muted rounded-lg">
                  <img 
                    src={resource.author.avatar} 
                    alt={resource.author.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-foreground">{resource.author.name}</h3>
                    <p className="text-sm text-muted-foreground">{resource.author.role}</p>
                    <p className="text-sm text-muted-foreground">{resource.author.bio}</p>
                  </div>
                </div>
              </div>

              {/* Resource Preview */}
              <div className="mb-8">
                <img 
                  src={resource.preview} 
                  alt="Resource preview"
                  className="w-full h-64 object-cover rounded-lg shadow-sm"
                />
              </div>

              {/* Description */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">About This Resource</h2>
                <div className="prose prose-gray max-w-none">
                  {resource.longDescription.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="text-foreground mb-4">{paragraph}</p>
                  ))}
                </div>
              </div>

              {/* What You Get */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">What You'll Get</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {resource.whatYouGet.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Requirements */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Requirements</h2>
                <ul className="space-y-2">
                  {resource.requirements.map((req, index) => (
                    <li key={index} className="flex items-center gap-2 text-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      {req}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Reviews */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">Reviews & Ratings</h2>
                
                {/* Rating Summary */}
                <div className="bg-muted p-6 rounded-lg mb-6">
                  <div className="flex items-center gap-8">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-foreground">{resource.rating}</div>
                      <div className="flex items-center justify-center mb-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`h-4 w-4 ${i < Math.floor(resource.rating) ? 'text-warning fill-current' : 'text-gray-300'}`} />
                        ))}
                      </div>
                      <div className="text-sm text-muted-foreground">{resource.totalRatings} reviews</div>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-foreground mb-2">Rate this resource:</div>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <button
                            key={i}
                            onClick={() => handleRating(i + 1)}
                            className={`h-6 w-6 ${i < rating ? 'text-warning' : 'text-gray-300'} hover:text-warning`}
                          >
                            <Star className="h-full w-full fill-current" />
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Individual Reviews */}
                <div className="space-y-6">
                  {reviews.map((review) => (
                    <div key={review.id} className="border-b border-border pb-6">
                      <div className="flex items-start gap-4">
                        <img 
                          src={review.avatar} 
                          alt={review.user}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="font-semibold text-foreground">{review.user}</h4>
                            <span className="text-sm text-muted-foreground">•</span>
                            <span className="text-sm text-muted-foreground">{review.role}</span>
                          </div>
                          <div className="flex items-center gap-2 mb-2">
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className={`h-3 w-3 ${i < review.rating ? 'text-warning fill-current' : 'text-gray-300'}`} />
                              ))}
                            </div>
                            <span className="text-sm text-muted-foreground">{review.date}</span>
                          </div>
                          <p className="text-foreground">{review.comment}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Download Card */}
                <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
                  <div className="text-center mb-6">
                    <img 
                      src={resource.image} 
                      alt={resource.title}
                      className="w-full h-32 object-cover rounded-lg mb-4"
                    />
                    <h3 className="font-semibold text-foreground mb-2">{resource.title}</h3>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <div>Format: {resource.format}</div>
                      <div>Size: {resource.fileSize}</div>
                      <div>Updated: {new Date(resource.lastUpdated).toLocaleDateString()}</div>
                    </div>
                  </div>
                  
                  {!isDownloaded ? (
                    <button 
                      onClick={handleDownload}
                      className="w-full bg-primary text-primary-foreground py-3 rounded-lg hover:bg-primary/90 transition-colors duration-200 flex items-center justify-center space-x-2 mb-4"
                    >
                      <Download className="h-5 w-5" />
                      <span>Download Now</span>
                    </button>
                  ) : (
                    <div className="w-full bg-success/15 text-success py-3 rounded-lg flex items-center justify-center space-x-2 mb-4">
                      <CheckCircle className="h-5 w-5" />
                      <span>Downloaded</span>
                    </div>
                  )}
                  
                  <div className="flex space-x-2">
                    <button className="flex-1 border border-input text-foreground py-2 rounded-lg hover:bg-accent transition-colors duration-200 flex items-center justify-center space-x-1">
                      <Heart className="h-4 w-4" />
                      <span>Save</span>
                    </button>
                    <button className="flex-1 border border-input text-foreground py-2 rounded-lg hover:bg-accent transition-colors duration-200 flex items-center justify-center space-x-1">
                      <Share2 className="h-4 w-4" />
                      <span>Share</span>
                    </button>
                  </div>
                </div>

                {/* Stats */}
                <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
                  <h3 className="font-semibold text-foreground mb-4">Resource Stats</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Download className="h-4 w-4 text-muted-foreground mr-2" />
                        <span className="text-sm text-muted-foreground">Downloads</span>
                      </div>
                      <span className="font-medium">{resource.downloads.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Eye className="h-4 w-4 text-muted-foreground mr-2" />
                        <span className="text-sm text-muted-foreground">Views</span>
                      </div>
                      <span className="font-medium">{resource.views.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 text-muted-foreground mr-2" />
                        <span className="text-sm text-muted-foreground">Published</span>
                      </div>
                      <span className="font-medium">{new Date(resource.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>

                {/* Tags */}
                <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
                  <h3 className="font-semibold text-foreground mb-4">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {resource.tags.map((tag, index) => (
                      <span key={index} className="bg-muted text-foreground px-3 py-1 rounded-full text-sm hover:bg-primary/10 hover:text-primary cursor-pointer transition-colors duration-200">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Related Resources */}
                <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
                  <h3 className="font-semibold text-foreground mb-4">Related Resources</h3>
                  <div className="space-y-4">
                    {relatedResources.map((related) => (
                      <div key={related.id} className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent cursor-pointer transition-colors duration-200">
                        <img 
                          src={related.image} 
                          alt={related.title}
                          className="w-12 h-12 object-cover rounded"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-foreground text-sm truncate">{related.title}</h4>
                          <div className="flex items-center text-xs text-muted-foreground">
                            <Download className="h-3 w-3 mr-1" />
                            {related.downloads.toLocaleString()}
                            <Star className="h-3 w-3 ml-2 mr-1 text-warning" />
                            {related.rating}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ResourceDetailPage;