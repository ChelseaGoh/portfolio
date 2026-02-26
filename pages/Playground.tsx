import React from 'react';
import Section from '../components/Section';
import { PLAYGROUND_ITEMS } from '../constants';
import { motion } from 'framer-motion';

const Playground: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen">
      <Section className="!py-12">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Playground</h1>
            <p className="text-stone-600 text-lg">
              A collection of UI explorations, motion studies, and half-baked ideas. 
              This is where I experiment without a brief.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {PLAYGROUND_ITEMS.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-stone-100"
              >
                <div className="aspect-square bg-stone-100 relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/40 transition-colors duration-300 flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 font-medium translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      View Experiment
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-stone-900">{item.title}</h3>
                    <span className="text-xs text-stone-400 font-mono">{item.date}</span>
                  </div>
                  <p className="text-sm text-stone-500">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Playground;