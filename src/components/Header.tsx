import { useState } from 'react';
import { Menu, X, Target, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);

  const navigation = [
    { name: 'About', href: '/about' },
    { 
      name: 'Resources', 
      href: '/resources',
      dropdown: [
        { name: 'All Resources', href: '/resources' },
        { name: 'Templates', href: '/templates' },
        { name: 'Tools', href: '/tools' },
        { name: 'Learning Hub', href: '/learning' },
        { name: 'Contribute', href: '/contribute' }
      ]
    },
    { name: 'Jobs', href: '/jobs' },
    { name: 'Salary Guide', href: '/salary-guide' }
  ];

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="/" className="flex items-center space-x-2">
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-2 rounded-lg">
              <Target className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">ProdHive</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <div 
                    className="relative"
                    onMouseEnter={() => setIsResourcesOpen(true)}
                    onMouseLeave={() => setIsResourcesOpen(false)}
                  >
                    <button className="flex items-center text-gray-700 hover:text-orange-600 font-medium transition-colors duration-200">
                      {item.name}
                      <ChevronDown className="h-4 w-4 ml-1" />
                    </button>
                    {isResourcesOpen && (
                      <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2">
                        {item.dropdown.map((dropdownItem) => (
                          <a
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="block px-4 py-2 text-gray-700 hover:text-orange-600 hover:bg-gray-50 transition-colors duration-200"
                          >
                            {dropdownItem.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    href={item.href}
                    className="text-gray-700 hover:text-orange-600 font-medium transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="/signin"
              className="text-gray-700 hover:text-orange-600 font-medium transition-colors duration-200"
            >
              Sign In
            </a>
            <a 
              href="/register"
              className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors duration-200"
            >
              Join Program
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="space-y-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  <a
                    href={item.href}
                    className="block px-4 py-2 text-gray-700 hover:text-orange-600 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                  {item.dropdown && (
                    <div className="ml-4 space-y-1">
                      {item.dropdown.map((dropdownItem) => (
                        <a
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          className="block px-4 py-2 text-sm text-gray-600 hover:text-orange-600 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {dropdownItem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="px-4 pt-4 space-y-2">
                <a 
                  href="/signin"
                  className="block w-full text-left text-gray-700 hover:text-orange-600 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign In
                </a>
                <a 
                  href="/register"
                  className="block w-full bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors duration-200 text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Join Program
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;