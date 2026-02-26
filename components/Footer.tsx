import React from 'react';
import { NavLink } from 'react-router-dom';
import { SOCIAL_LINKS } from '../constants';
import { Mail, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-300 py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-serif text-white mb-2">Let's work together.</h3>
            <p className="text-stone-400 max-w-sm">
              Open to opportunities in UI/UX Design, Product Research, and Data Analytics.
            </p>
          </div>

          <div className="flex gap-6">
            <a href={`mailto:${SOCIAL_LINKS.email}`} className="hover:text-white transition-colors flex flex-col items-center gap-2">
              <div className="p-3 bg-stone-800 rounded-full">
                <Mail size={20} />
              </div>
              <span className="text-xs">Email</span>
            </a>
            <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex flex-col items-center gap-2">
              <div className="p-3 bg-stone-800 rounded-full">
                <Linkedin size={20} />
              </div>
              <span className="text-xs">LinkedIn</span>
            </a>
          </div>
        </div>

        <div className="border-t border-stone-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-stone-500">
          <p>© {new Date().getFullYear()} Chelsea Goh Chiao Xuen.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
             <NavLink to="/" className="hover:text-white">Home</NavLink>
             <NavLink to="/work" className="hover:text-white">Work</NavLink>
             <NavLink to="/contact" className="hover:text-white">Contact</NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;