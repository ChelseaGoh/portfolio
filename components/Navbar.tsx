import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Work', path: '/work' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-stone-50/90 backdrop-blur-md border-b border-stone-200">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <NavLink to="/" className="text-2xl font-serif font-bold tracking-tight text-stone-900">
          chelsea<span className="text-accent-teal">.</span>
        </NavLink>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors hover:text-accent-teal ${
                  isActive ? 'text-accent-teal' : 'text-stone-600'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-stone-600 hover:text-stone-900"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Scroll Progress Bar */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1 bg-accent-teal origin-left"
        style={{ scaleX }}
      />

      {/* Mobile Nav */}
      <motion.div
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={{
          open: { height: "auto", opacity: 1, display: "block" },
          closed: { height: 0, opacity: 0, transitionEnd: { display: "none" } }
        }}
        className="md:hidden bg-stone-50 border-b border-stone-200 overflow-hidden"
      >
        <nav className="flex flex-col p-6 space-y-4">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-lg font-medium ${
                  isActive ? 'text-accent-teal' : 'text-stone-600'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>
      </motion.div>
    </header>
  );
};

export default Navbar;