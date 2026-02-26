import React from 'react';
import Section from '../components/Section';
import { SOCIAL_LINKS } from '../constants';
import Button from '../components/Button';
import { Mail, Linkedin, Copy } from 'lucide-react';

const Contact: React.FC = () => {
  const copyEmail = () => {
    navigator.clipboard.writeText(SOCIAL_LINKS.email);
    alert('Email copied to clipboard!');
  };

  return (
    <div className="pt-24 min-h-screen flex flex-col justify-center">
      <Section>
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <span className="text-accent-teal uppercase tracking-widest font-bold mb-6 block">Get In Touch</span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-10 text-stone-900">
            Build something <br/> meaningful together.
          </h1>
          <p className="text-xl text-stone-600 mb-12 max-w-2xl mx-auto">
            I’m currently open to full-time roles in UI/UX Design and Product Research — feel free to reach out, I’d love to connect.
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-16">
            <div className="bg-white p-8 rounded-2xl border border-stone-200 hover:border-accent-teal transition-colors flex flex-col items-center">
              <Mail className="w-10 h-10 text-stone-900 mb-4" />
              <h3 className="font-bold text-lg mb-2">Email Me</h3>
              <p className="text-stone-500 mb-6">{SOCIAL_LINKS.email}</p>
              <div className="flex gap-2">
                <Button variant="outline" onClick={() => window.location.href = `mailto:${SOCIAL_LINKS.email}`} className="text-sm px-4 py-2">
                  Send Mail
                </Button>
                <button onClick={copyEmail} className="p-3 border-2 border-stone-200 rounded-full hover:bg-stone-100 transition-colors">
                  <Copy size={18} />
                </button>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-stone-200 hover:border-accent-blue transition-colors flex flex-col items-center">
              <Linkedin className="w-10 h-10 text-stone-900 mb-4" />
              <h3 className="font-bold text-lg mb-2">Connect</h3>
              <p className="text-stone-500 mb-6">View my professional network.</p>
              <Button variant="outline" href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="text-sm px-4 py-2">
                LinkedIn Profile
              </Button>
            </div>
          </div>
          
        </div>
      </Section>
    </div>
  );
};

export default Contact;