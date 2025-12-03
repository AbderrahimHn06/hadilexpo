import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "الرئيسية", href: "#" },
  { name: "خدماتنا", href: "#examples" },
  { name: "أعمالنا", href: "#portfolio" },
  { name: "اطلب الآن", href: "#order-form" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#"
            onClick={() => handleNavClick("#")}
            className="text-2xl font-bold text-primary"
          >
            إنجاز
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <button
            onClick={() => handleNavClick("#order-form")}
            className="hidden md:block bg-primary text-primary-foreground px-6 py-2.5 rounded-lg font-bold hover:opacity-90 transition-opacity"
          >
            ابدأ الآن
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-card border-t border-border py-4 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className="text-foreground hover:text-primary transition-colors font-medium py-2 text-right"
                >
                  {link.name}
                </button>
              ))}
              <button
                onClick={() => handleNavClick("#order-form")}
                className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-bold mt-2"
              >
                ابدأ الآن
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
