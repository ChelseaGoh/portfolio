import React from 'react';
import Section from '../components/Section';
import { EXPERIENCES, SKILLS } from '../constants';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen">
      {/* Intro */}
      <Section className="!py-12">
        <div className="container mx-auto px-6">
           <div className="grid md:grid-cols-12 gap-12">
             <div className="md:col-span-5">
               <motion.div 
                 initial={{ opacity: 0, scale: 0.95 }}
                 animate={{ opacity: 1, scale: 1 }}
                 transition={{ duration: 0.5 }}
                 className="aspect-[3/4] rounded-3xl overflow-hidden bg-stone-200"
               >
                 <img src="https://drive.google.com/thumbnail?id=1WeXroxsN-eAUx_jQA3SAgk48WyWJs_KG&sz=w2000" alt="Chelsea Goh" className="w-full h-full object-cover" />
               </motion.div>
             </div>
             
             <div className="md:col-span-7 flex flex-col justify-center">
               <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
                 I didn't start with colors or components.
               </h1>
               <h2 className="text-xl md:text-2xl text-stone-500 font-medium mb-8">
                 I started by paying attention to how people search, think, and make decisions.
               </h2>
               <div className="prose prose-lg text-stone-600 leading-relaxed">
                 <p className="mb-4">
                   I am a graduate in <strong>Information Management and Information Systems</strong> who enjoys designing digital products at the intersection of research, structure, and user experience.
                 </p>
                 <p>
                   This background shapes how I design today: by organizing complexity, reducing friction, and creating digital experiences that feel intuitive, clear, and human-centered.
                 </p>
               </div>
             </div>
           </div>
        </div>
      </Section>

      {/* Philosophy */}
      <Section className="bg-stone-900 text-white">
        <div className="container mx-auto px-6 text-center max-w-4xl">
           <span className="text-accent-teal uppercase tracking-widest font-bold text-sm mb-4 block">My Philosophy</span>
           <h2 className="text-3xl md:text-5xl font-serif leading-tight mb-8">
             "Good UI/UX design works best when users don’t have to think about it."
           </h2>
           <div className="text-stone-400 text-lg space-y-6">
             <p>
               To me, the core of UI/UX design is understanding real user needs and translating them into products that genuinely help.
             </p>
             <p>
               When design works well, users may not consciously notice the intention behind a feature, but they can feel the smoothness as their explicit and implicit needs are naturally supported.
             </p>
           </div>
        </div>
      </Section>

      {/* Education & Experience */}
      <Section>
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Education */}
          <h2 className="text-3xl font-serif font-bold mb-10">Education</h2>
          <div className="space-y-12 mb-32">
            {/* Peking University */}
            <div className="flex flex-col md:flex-row gap-4 md:gap-12 border-l-2 border-stone-200 pl-6 relative">
              <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent-teal" />
              <div className="md:w-1/3">
                <h3 className="font-bold text-lg">Peking University</h3>
                <span className="text-stone-500 text-sm">2021 — 2025</span>
              </div>
              <div className="md:w-2/3">
                 <h4 className="text-xl font-serif text-stone-800 mb-1">Bachelor of Management</h4>
                 <p className="text-stone-600 mb-4">Major: Information Management & Information System</p>
                 <div className="text-stone-600 text-sm">
                   <span className="font-bold block mb-1 uppercase tracking-wider text-xs text-stone-400">Relevant Coursework</span>
                   HCI, UX, Information Architecture, Information Analysis & Decision-making, MIS, Interactive Information Retrieval
                 </div>
              </div>
            </div>

            {/* High School */}
            <div className="flex flex-col md:flex-row gap-4 md:gap-12 border-l-2 border-stone-200 pl-6 relative">
              <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-stone-300" />
              <div className="md:w-1/3">
                <h3 className="font-bold text-lg">Chonghwa Independent High School, KL</h3>
                <span className="text-stone-500 text-sm">2015 — 2020</span>
              </div>
              <div className="md:w-2/3">
                 {/* Removed SPM/UEC details */}
              </div>
            </div>
          </div>

          {/* Achievements */}
          <h2 className="text-3xl font-serif font-bold mb-10">Achievements</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-32">
            <div className="bg-white p-8 rounded-2xl border border-stone-100 shadow-sm">
                <span className="text-accent-teal font-bold text-sm uppercase tracking-wider mb-2 block">Poster Presentation</span>
                <h3 className="font-bold text-lg mb-2 text-stone-900">When Generative AI Mixes Languages: Multilingual Users’ Code-Switching Behavior in Human–LLM Interaction</h3>
                <p className="text-stone-500 text-sm">ACM CHI 2026 (Accepted)</p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-stone-100 shadow-sm">
                <span className="text-accent-teal font-bold text-sm uppercase tracking-wider mb-2 block">Scholarship</span>
                <h3 className="font-bold text-lg mb-2 text-stone-900">Beijing Government Scholarship (BGS)</h3>
                <p className="text-stone-500 text-sm">Awarded for academic performance</p>
            </div>
          </div>

          <h2 className="text-3xl font-serif font-bold mb-10">Experience</h2>
          <div className="space-y-12">
            {EXPERIENCES.map((exp, i) => (
              <div key={i} className="flex flex-col md:flex-row gap-4 md:gap-12 border-l-2 border-stone-200 pl-6 relative">
                <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent-teal" />
                <div className="md:w-1/3">
                  <h3 className="font-bold text-lg">{exp.company}</h3>
                  <span className="text-stone-500 text-sm">{exp.period}</span>
                </div>
                <div className="md:w-2/3">
                   <h4 className="text-xl font-serif text-stone-800 mb-3">{exp.role}</h4>
                   <ul className="list-disc list-inside space-y-2 text-stone-600">
                     {exp.description.map((desc, idx) => (
                       <li key={idx}>{desc}</li>
                     ))}
                   </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Skills Grid */}
      <Section className="bg-stone-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-serif font-bold mb-10 text-center">Toolkit</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="font-bold mb-4 text-accent-teal">Design</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {SKILLS.design.map(s => <span key={s} className="px-3 py-1 bg-stone-100 rounded-full text-sm">{s}</span>)}
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="font-bold mb-4 text-accent-blue">Technical</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {SKILLS.tech.map(s => <span key={s} className="px-3 py-1 bg-stone-100 rounded-full text-sm">{s}</span>)}
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="font-bold mb-4 text-accent-red">Data & Research</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {SKILLS.data.map(s => <span key={s} className="px-3 py-1 bg-stone-100 rounded-full text-sm">{s}</span>)}
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default About;