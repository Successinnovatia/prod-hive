import { useState } from 'react';
import { Menu, X, Target, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const location = useLocation();

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

  const isActive = (href: string, dropdown?: { href: string }[]) => {
    if (location.pathname === href) return true;
    if (dropdown?.some((item) => location.pathname.startsWith(item.href))) return true;
    return false;
  };

  return (
    <header className="fixed w-full bg-background/80 backdrop-blur-xl border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="/" className="flex items-center space-x-2">
            <div className="bg-tech-gradient p-2 rounded-lg shadow-glow">
              <Target className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight text-foreground">TechPod</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => {
              const active = isActive(item.href, item.dropdown);
              return (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <div 
                    className="relative"
                    onMouseEnter={() => setIsResourcesOpen(true)}
                    onMouseLeave={() => setIsResourcesOpen(false)}
                  >
                    <button className={`flex items-center font-medium transition-colors duration-180 ${active ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}>
                      {item.name}
                      <ChevronDown className="h-4 w-4 ml-1" />
                    </button>
                    {isResourcesOpen && (
                      <div
                        className="absolute top-full left-0 mt-2 w-48 rounded-lg shadow-lg border border-border py-2 z-50"
                        style={{ backgroundColor: 'hsl(var(--card))' }}
                      >
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.href}
                            className={`block px-4 py-2 transition-colors duration-180 ${
                              location.pathname === dropdownItem.href
                                ? 'text-primary bg-primary/10'
                                : 'text-foreground hover:text-primary hover:bg-muted'
                            }`}
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={`font-medium transition-colors duration-180 ${active ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            )})}
          </nav>

          <div className="hidden md:flex items-center space-x-3">
            <ThemeToggle />
            <Link
              to="/signin"
              className="text-muted-foreground hover:text-foreground font-medium transition-colors duration-180"
            >
              Sign In
            </Link>
            <Link
              to="/register"
              className="bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 shadow-glow transition-all duration-180"
            >
              Join Program
            </Link>
          </div>

          <div className="flex items-center space-x-1 md:hidden">
            <ThemeToggle />
            <button
              className="p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-foreground" />
              ) : (
                <Menu className="h-6 w-6 text-foreground" />
              )}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="space-y-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.href}
                    className="block px-4 py-2 text-muted-foreground hover:text-primary hover:bg-muted rounded-lg transition-colors duration-180"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.dropdown && (
                    <div className="ml-4 space-y-1">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          to={dropdownItem.href}
                          className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-muted rounded-lg transition-colors duration-180"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="px-4 pt-4 space-y-2">
                <Link 
                  to="/signin"
                  className="block w-full text-left text-muted-foreground hover:text-foreground font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign In
                </Link>
                <Link
                  to="/register"
                  className="block w-full bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 shadow-glow transition-all duration-180 text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Join Program
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
