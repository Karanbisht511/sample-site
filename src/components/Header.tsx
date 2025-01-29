import { useState, useEffect } from "react";
import { ChevronDown, Menu, Settings } from "lucide-react";
import { Link } from "react-router";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const activeNavItem = "Home";
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navItems = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "/aboutus" },
    { name: "Services", link: "/services" },
    { name: "Blog", link: "/blog" },
    { name: "Portfolio", link: "/portfolio", hasDropdown: true },
    { name: "Elements", link: "#", hasDropdown: true },
  ];

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        // Scrolling UP or at top of page
        setIsVisible(true);
      } else {
        // Scrolling DOWN
        setIsVisible(false);
        // Close mobile menu if open
        setIsMobileMenuOpen(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", controlNavbar);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`fixed w-full bg-gray-900 transition-transform duration-300 z-50 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Desktop Navigation */}
      <div className="container mx-auto px-6">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="text-white text-3xl font-bold tracking-wider">
            PORTO
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.link}
                className={`flex items-center text-white hover:text-orange-500 transition-colors ${
                  activeNavItem === item.name ? "text-orange-500" : ""
                }`}
              >
                {item.name}
                {item.hasDropdown && <ChevronDown className="ml-1 w-4 h-4" />}
              </Link>
            ))}
            <button className="bg-orange-500 text-white px-6 py-2 hover:bg-orange-600 transition-colors">
              <Link to="/contactus">Contact Us</Link>
            </button>
          </div>

          {/* Mobile Menu Controls */}
          <div className="flex lg:hidden items-center space-x-4">
            <button className="bg-orange-500 text-white px-6 py-2 hover:bg-orange-600 transition-colors">
              Contact Us
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="bg-orange-500 p-2 text-white hover:bg-orange-600 transition-colors"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white absolute w-full">
          <div className="container mx-auto px-6">
            <div className="py-4">
              {/* Settings Icon */}
              <div className="absolute left-6 top-4">
                <Settings className="w-5 h-5 text-gray-500" />
              </div>

              {/* Navigation Items */}
              <nav className="space-y-4">
                {navItems.map((item) => (
                  <div
                    key={item.name}
                    className="border-b border-gray-100 py-4"
                  >
                    <Link
                      to={item.link}
                      className={`flex items-center justify-between ${
                        item.name === "HOME"
                          ? "text-white bg-orange-500 -mx-6 px-6 py-2"
                          : "text-gray-900"
                      }`}
                    >
                      {item.name.toUpperCase()}
                      {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                    </Link>
                  </div>
                ))}
              </nav>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
