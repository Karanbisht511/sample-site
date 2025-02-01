// Types and Interfaces
interface SubmenuItem {
  name: string;
  link: string;
}

interface DropdownItem {
  name: string;
  link: string;
  hasSubmenu?: boolean;
  submenuItems?: SubmenuItem[];
}

interface NavItem {
  name: string;
  link: string;
  hasDropdown?: boolean;
  dropdownItems?: DropdownItem[];
}

interface HeaderProps {
  // Add any props if needed
}

import { useState, useEffect } from "react";
import { ChevronDown, ChevronRight, Menu } from "lucide-react";
import { Link } from "react-router";

const Header: React.FC<HeaderProps> = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState<string | null>(null);
  const activeNavItem: string = "Home";
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState<number>(0);

  const navItems: NavItem[] = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "/aboutus" },
    { 
      name: "Portfolio",
      link: "/portfolio",
      hasDropdown: true,
      dropdownItems: [
        { 
          name: "Single Project", 
          link: "/portfolio/single-project",
          hasSubmenu: true,
          submenuItems: [
            { name: "Wide Slider", link: "/portfolio/single-project/wide-slider" },
            { name: "Small Slider", link: "/portfolio/single-project/small-slider" },
            { name: "Full Width Slider", link: "/portfolio/single-project/full-width-slider" },
            { name: "Gallery", link: "/portfolio/single-project/gallery" }
          ]
        },
        { 
          name: "Grid Layouts", 
          link: "/portfolio/grid-layouts",
          hasSubmenu: true,
          submenuItems: [
            { name: "Masonry Images", link: "/portfolio/grid-layouts/masonry-images" },
            { name: "Full Width Video", link: "/portfolio/grid-layouts/full-width-video" },
            { name: "Left Sidebar", link: "/portfolio/grid-layouts/left-sidebar" },
            { name: "Right Sidebar", link: "/portfolio/grid-layouts/right-sidebar" },
            { name: "Left and Right Sidebars", link: "/portfolio/grid-layouts/both-sidebars" },
            { name: "Sticky Sidebar", link: "/portfolio/grid-layouts/sticky-sidebar" },
            { name: "Extended", link: "/portfolio/grid-layouts/extended" }
          ]
        },
        { name: "Masonry Layouts", link: "/portfolio/masonry-layouts" },
        { name: "Sidebar Layouts", link: "/portfolio/sidebar-layouts" },
        { name: "Ajax", link: "/portfolio/ajax" },
        { name: "Extra", link: "/portfolio/extra" }
      ]
    },
    { name: "Services", link: "/services" },
    { name: "Why Mindspan", link: "/" },
    { name: "The Team", link: "/" },
  ];

  useEffect(() => {
    const controlNavbar = (): void => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsMobileMenuOpen(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  const handleLinkClick = (): void => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
    setActiveSubDropdown(null);
  };

  const handleDropdownToggle = (itemName: string): void => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
    setActiveSubDropdown(null);
  };

  const handleSubDropdownToggle = (itemName: string, event: React.MouseEvent): void => {
    event.stopPropagation();
    setActiveSubDropdown(activeSubDropdown === itemName ? null : itemName);
  };

  const renderDropdownItems = (item: DropdownItem) => (
    <div
      key={item.name}
      className="relative group/submenu"
      onMouseEnter={(e) => item.hasSubmenu && handleSubDropdownToggle(item.name, e)}
    >
      <Link
        to={item.link}
        className="flex items-center justify-between px-4 py-2 text-white hover:bg-gray-800 hover:text-orange-500"
        onClick={handleLinkClick}
      >
        {item.name}
        {item.hasSubmenu && <ChevronRight className="w-4 h-4" />}
      </Link>
      {item.hasSubmenu && activeSubDropdown === item.name && (
        <div className="absolute top-0 left-full bg-gray-900 min-w-[240px] py-2">
          {item.submenuItems?.map((submenuItem) => (
            <Link
              key={submenuItem.name}
              to={submenuItem.link}
              className="block px-4 py-2 text-white hover:bg-gray-800 hover:text-orange-500"
              onClick={handleLinkClick}
            >
              {submenuItem.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );

  const renderMobileDropdownItems = (item: DropdownItem) => (
    <div key={item.name}>
      <div
        className="flex items-center justify-between py-2 text-gray-600 hover:text-orange-500"
        onClick={(e) => item.hasSubmenu && handleSubDropdownToggle(item.name, e)}
      >
        <Link
          to={item.link}
          onClick={() => !item.hasSubmenu && handleLinkClick()}
        >
          {item.name}
        </Link>
        {item.hasSubmenu && (
          <ChevronDown className={`w-4 h-4 transition-transform ${
            activeSubDropdown === item.name ? "rotate-180" : ""
          }`} />
        )}
      </div>
      {item.hasSubmenu && activeSubDropdown === item.name && (
        <div className="pl-4">
          {item.submenuItems?.map((submenuItem) => (
            <Link
              key={submenuItem.name}
              to={submenuItem.link}
              onClick={handleLinkClick}
              className="block py-2 text-gray-600 hover:text-orange-500"
            >
              {submenuItem.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );

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
              <div key={item.name} className="relative group">
                <Link
                  to={item.link}
                  className={`flex items-center text-white hover:text-orange-500 transition-colors ${
                    activeNavItem === item.name ? "text-orange-500" : ""
                  }`}
                  onClick={() => !item.hasDropdown && handleLinkClick()}
                  onMouseEnter={() => item.hasDropdown && handleDropdownToggle(item.name)}
                >
                  {item.name}
                  {item.hasDropdown && <ChevronDown className="ml-1 w-4 h-4" />}
                </Link>
                {item.hasDropdown && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 bg-gray-900 min-w-[240px] py-2 mt-1">
                    {item.dropdownItems?.map(renderDropdownItems)}
                  </div>
                )}
              </div>
            ))}
            <button className="bg-orange-500 text-white px-6 py-2 hover:bg-orange-600 transition-colors">
              <Link to="/contactus" onClick={handleLinkClick}>
                Contact Us
              </Link>
            </button>
          </div>

          {/* Mobile Menu Controls */}
          <div className="flex lg:hidden items-center space-x-4">
            <button className="bg-orange-500 text-white px-6 py-2 hover:bg-orange-600 transition-colors">
              <Link to="/contactus" onClick={handleLinkClick}>
                Contact Us
              </Link>
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
              <nav className="space-y-4">
                {navItems.map((item) => (
                  <div key={item.name} className="border-b border-gray-100">
                    <div
                      className="py-4"
                      onClick={() => item.hasDropdown && handleDropdownToggle(item.name)}
                    >
                      <Link
                        to={item.hasDropdown ? "#" : item.link}
                        onClick={() => !item.hasDropdown && handleLinkClick()}
                        className={`flex items-center justify-between ${
                          activeNavItem === item.name
                            ? "text-orange-500"
                            : "text-gray-900"
                        }`}
                      >
                        {item.name.toUpperCase()}
                        {item.hasDropdown && (
                          <ChevronDown className={`w-4 h-4 transition-transform ${
                            activeDropdown === item.name ? "rotate-180" : ""
                          }`} />
                        )}
                      </Link>
                    </div>
                    {item.hasDropdown && activeDropdown === item.name && (
                      <div className="pl-4 pb-4">
                        {item.dropdownItems?.map(renderMobileDropdownItems)}
                      </div>
                    )}
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