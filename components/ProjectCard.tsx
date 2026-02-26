import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Link to={`/work/${project.id}`} className="group block h-full">
      <motion.div 
        className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col border border-stone-100"
        whileHover={{ y: -5 }}
      >
        <div className="relative overflow-hidden aspect-[4/3]">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/10 transition-colors duration-300" />
          
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
            <ArrowUpRight className="w-5 h-5 text-stone-900" />
          </div>
        </div>

        <div className="p-6 flex flex-col flex-grow">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="text-xs font-semibold tracking-wide text-accent-teal uppercase">{project.category}</span>
          </div>
          
          <h3 className="text-xl md:text-2xl font-serif font-bold text-stone-900 mb-2 group-hover:text-accent-teal transition-colors">
            {project.title}
          </h3>
          
          <p className="text-stone-600 mb-4 line-clamp-2">
            {project.shortDescription}
          </p>

          <div className="mt-auto pt-4 border-t border-stone-100 flex flex-wrap gap-2">
             {project.tags.slice(0, 3).map(tag => (
               <span key={tag} className="text-xs text-stone-500 bg-stone-100 px-2 py-1 rounded-md">
                 {tag}
               </span>
             ))}
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default ProjectCard;