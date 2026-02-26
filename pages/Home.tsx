import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate, Link } from 'react-router-dom';
import Section from '../components/Section';
import Button from '../components/Button';
import ProjectCard from '../components/ProjectCard';
import { PROJECTS, SKILLS } from '../constants';
import { Layers, PenTool, Brain, ChevronDown, ArrowRight } from 'lucide-react';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const featuredProjects = PROJECTS.slice(0, 3); // Take first 3

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center relative overflow-hidden px-6 pt-20">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-stone-100 to-transparent -z-10" />
        
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-accent-teal font-medium tracking-wider uppercase mb-4 block">UI/UX Designer</span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-stone-900 leading-[1.1] mb-8">
              Structuring clarity from <span className="italic text-stone-400">complexity.</span>
            </h1>
            <p className="text-xl md:text-2xl text-stone-600 max-w-2xl mb-4 leading-relaxed">
              Hi, I'm <span className="font-serif font-bold italic text-stone-800">Chelsea Goh</span>.
            </p>
            <p className="text-xl md:text-2xl text-stone-600 max-w-2xl mb-10 leading-relaxed">
              I design structured, intuitive experiences that align systems with how people think.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button onClick={() => navigate('/work')} icon>View Work</Button>
              <Button variant="outline" onClick={() => navigate('/contact')}>Contact Me</Button>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-stone-400"
        >
          <span className="text-xs uppercase tracking-widest mb-2">Scroll</span>
          <ChevronDown className="animate-bounce" />
        </motion.div>
      </section>

      {/* What I Do - Pillars */}
      <Section className="bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: <Brain className="w-8 h-8 text-accent-red" />,
                title: "UX Thinking",
                desc: "Rooted in research and behavioral insights. I frame problems before solving them, ensuring every design decision is backed by data."
              },
              {
                icon: <Layers className="w-8 h-8 text-accent-teal" />,
                title: "Systems & Structure",
                desc: "My background in Information Systems helps me organize complexity. I love robust IA, clear user flows, and scalable design systems."
              },
              {
                icon: <PenTool className="w-8 h-8 text-accent-blue" />,
                title: "UI Craft",
                desc: "I don't just make it work; I make it feel right. Focused on visual hierarchy, typography, and polished high-fidelity interfaces."
              }
            ].map((pillar, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl bg-stone-50 border border-stone-100 hover:border-stone-200 transition-colors"
              >
                <div className="mb-6 p-4 bg-white rounded-xl inline-block shadow-sm">
                  {pillar.icon}
                </div>
                <h3 className="text-xl font-bold font-serif mb-4">{pillar.title}</h3>
                <p className="text-stone-600 leading-relaxed">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Selected Work */}
      <Section>
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-accent-teal font-medium uppercase tracking-wider">Selected Work</span>
              <h2 className="text-4xl font-serif font-bold mt-2">Recent Projects</h2>
            </div>
            <div>
            </div>
            <Link to="/work" 
            className="hidden md:flex items-center text-stone-900 font-medium hover:text-accent-teal transition-colors group">
            View All Projects <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          
          <div className="mt-12 text-center md:hidden">
             <Button variant="outline" href="/#/work">View All Projects</Button>
          </div>
        </div>
      </Section>

      {/* Credibility / Skills */}
      <Section className="bg-stone-900 text-stone-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                Equipped for the entire product lifecycle.
              </h2>
              <p className="text-stone-400 text-lg mb-8">
                From ambiguous problem statements to pixel-perfect handoffs, I bring a toolkit adaptable to any stage of design.
              </p>
              <Button variant="secondary" onClick={() => navigate('/about')}>More About Me</Button>
            </div>
            
            <div className="grid grid-cols-2 gap-8">
               <div>
                  <h4 className="text-accent-teal font-bold mb-4 uppercase tracking-wider text-sm">Design</h4>
                  <ul className="space-y-2">
                    {SKILLS.design.map(skill => (
                      <li key={skill} className="text-stone-300">{skill}</li>
                    ))}
                  </ul>
               </div>
               <div>
                  <h4 className="text-accent-red font-bold mb-4 uppercase tracking-wider text-sm">Tech & Data</h4>
                  <ul className="space-y-2">
                    {SKILLS.tech.concat(SKILLS.data).slice(0, 6).map(skill => (
                      <li key={skill} className="text-stone-300">{skill}</li>
                    ))}
                  </ul>
               </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Hero Call to action */}
      <Section>
        <div className="container mx-auto px-6 text-center">
           <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8">Ready to build something great?</h2>
           <p className="text-xl text-stone-600 mb-10 max-w-2xl mx-auto">
             Let’s connect and create impactful, user-centered solutions together.
           </p>
           <Button onClick={() => navigate('/contact')} size="lg">Let's Talk</Button>
        </div>
      </Section>
    </>
  );
};

export default Home;
