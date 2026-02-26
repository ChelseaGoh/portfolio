
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';
import Section from '../components/Section';
import Lightbox from '../components/Lightbox';
import { ArrowLeft, ArrowRight, Maximize2 } from 'lucide-react';

const CaseStudy: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = PROJECTS.find(p => p.id === id);
  
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState<string[]>([]);

  // Find next project for navigation
  const currentIndex = PROJECTS.findIndex(p => p.id === id);
  const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const handleImageClick = (item: { image?: string; detailImages?: string[] }) => {
    // If detailImages exist, use them. Otherwise, fall back to the main image.
    const imagesToView = item.detailImages && item.detailImages.length > 0 
      ? item.detailImages 
      : (item.image ? [item.image] : []);

    if (imagesToView.length > 0) {
      setLightboxImages(imagesToView);
      setLightboxOpen(true);
    }
  };

  if (!project) return null;

  return (
    <>
      <div className="bg-stone-50 min-h-screen">
        {/* 1. Editorial Header */}
        <div className="pt-32 pb-12 md:pt-48 md:pb-20 container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-5xl"
          >
            <button 
              onClick={() => navigate('/work')} 
              className="group flex items-center text-stone-500 hover:text-stone-900 mb-8 transition-colors text-sm font-medium tracking-wide"
            >
              <ArrowLeft className="mr-2 w-4 h-4 transition-transform group-hover:-translate-x-1" /> Back to Work
            </button>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-stone-900 mb-8 leading-[1.1]">
              {project.title}
            </h1>
            <p className="text-xl md:text-2xl text-stone-600 max-w-2xl leading-relaxed">
              {project.shortDescription}
            </p>
          </motion.div>

          {/* Metadata Grid - Clean, Bordered */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-8 border-t border-stone-200"
          >
            <div>
              <span className="block text-xs font-bold text-stone-400 uppercase tracking-widest mb-2">Role</span>
              <span className="text-stone-900 font-medium">{project.role}</span>
            </div>
            <div>
              <span className="block text-xs font-bold text-stone-400 uppercase tracking-widest mb-2">Platform/Type</span>
              <span className="text-stone-900 font-medium">{project.tags[0]}</span>
            </div>
            <div className="col-span-2">
              <span className="block text-xs font-bold text-stone-400 uppercase tracking-widest mb-2">Tools</span>
              <span className="text-stone-900 font-medium">{project.tools?.slice(0, 4).join(', ')}</span>
            </div>
          </motion.div>
        </div>

        {/* 2. Hero Image - Massive & Cinematic */}
        <div className="container mx-auto px-4 md:px-6 mb-24 md:mb-32">
          <motion.div
             initial={{ opacity: 0, scale: 0.98 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ delay: 0.4, duration: 1 }}
             className="aspect-video w-full rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl"
          >
            <img src={project.image} alt="Hero" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </motion.div>
        </div>

        {/* 3. The Story begins */}
        <article className="max-w-none">
          
          {/* Overview & Context */}
          <Section className="!py-0 mb-24 md:mb-40">
            <div className="container mx-auto px-6 grid md:grid-cols-12 gap-12">
              <div className="md:col-span-4">
                <h3 className="text-sm font-bold text-accent-teal uppercase tracking-widest mb-4">The Context</h3>
                <h2 className="text-3xl font-serif font-bold text-stone-900">Project Overview</h2>
              </div>
              <div className="md:col-span-8">
                <p className="text-lg md:text-xl text-stone-600 leading-relaxed mb-12">
                  {project.overview}
                </p>
                
                {/* Problem / Solution Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white p-8 rounded-2xl border border-stone-100 shadow-sm">
                    <h4 className="text-lg font-bold mb-3 text-stone-900">The Problem</h4>
                    {Array.isArray(project.problem) ? (
                      <ul className="space-y-2">
                        {project.problem.map((point, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-stone-600">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent-teal mt-2 shrink-0" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-stone-600">{project.problem}</p>
                    )}
                  </div>
                  <div className="bg-stone-900 p-8 rounded-2xl shadow-sm text-stone-100">
                    <h4 className="text-lg font-bold mb-3 text-white">The Outcome</h4>
                    <p className="text-stone-300">{project.outcome}</p>
                  </div>
                </div>
              </div>
            </div>
          </Section>

          {/* 4. Research & User Scenario (TEXT-ONLY LAYOUT) */}
          {project.research && (
            <Section className="!py-0 mb-24 md:mb-40">
               <div className="container mx-auto px-6">
                  <div className="border-t border-stone-200 pt-20">
                     <div className="flex flex-col md:flex-row gap-16">
                       <div className="md:w-1/3">
                          <h3 className="text-sm font-bold text-accent-teal uppercase tracking-widest mb-4">Research & Insights</h3>
                          <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-6">
                            Understanding the User
                          </h2>
                          <p className="text-stone-600 leading-relaxed">
                            To design the right solution, we first had to understand the people we were designing for. We identified key personas and mapped their existing journeys to find friction points.
                          </p>
                       </div>
                       
                       <div className="md:w-2/3 flex flex-col gap-8">
                         {project.research.map((item, index) => (
                           <div key={index} className={`p-8 md:p-10 rounded-xl border ${item.type === 'persona' ? 'bg-stone-900 text-stone-50 border-stone-900 shadow-xl' : 'bg-white text-stone-900 border-stone-200 shadow-sm'}`}>
                              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                                <div>
                                  <span className={`text-xs font-bold uppercase tracking-widest mb-2 block ${item.type === 'persona' ? 'text-accent-teal' : 'text-stone-400'}`}>
                                    {item.type === 'persona' ? 'Target Persona' : 'User Scenario'}
                                  </span>
                                  <h4 className="text-3xl font-serif font-bold leading-tight">{item.title}</h4>
                                  {item.subtitle && <p className={`text-sm mt-2 font-medium tracking-wide uppercase ${item.type === 'persona' ? 'text-stone-400' : 'text-stone-500'}`}>{item.subtitle}</p>}
                                </div>
                              </div>

                              <div className="h-px w-full bg-current opacity-10 mb-6"></div>

                              <p className={`text-lg mb-8 leading-relaxed font-serif ${item.type === 'persona' ? 'text-stone-300 italic' : 'text-stone-600'}`}>
                                "{item.content}"
                              </p>

                              {item.items && (
                                <div className={`grid ${item.type === 'persona' ? 'grid-cols-1 gap-3' : 'gap-0'}`}>
                                  {item.items.map((listItem, i) => (
                                    <div key={i} className={`flex gap-4 ${item.type === 'scenario' ? 'pb-6 last:pb-0 relative' : 'items-center'}`}>
                                       {item.type === 'scenario' && (
                                         <>
                                           {/* Timeline Line */}
                                           <div className="absolute left-[11px] top-8 bottom-0 w-px bg-stone-200 last:hidden"></div>
                                           <div className="w-6 h-6 rounded-full bg-accent-teal text-white flex items-center justify-center text-xs font-bold shrink-0 relative z-10 mt-1">
                                             {i + 1}
                                           </div>
                                         </>
                                       )}
                                       {item.type === 'persona' && (
                                          <div className="w-1.5 h-1.5 rounded-full bg-accent-teal shrink-0"></div>
                                       )}
                                       <span className={`${item.type === 'persona' ? 'text-stone-300' : 'text-stone-700'} text-base`}>
                                         {listItem}
                                       </span>
                                    </div>
                                  ))}
                                </div>
                              )}
                           </div>
                         ))}
                       </div>
                     </div>
                  </div>
               </div>
            </Section>
          )}

          {/* Process Section */}
          {project.process && (
            <Section className="mb-24 md:mb-40 bg-white border-y border-stone-200 !py-32 md:!py-48">
              <div className="container mx-auto px-6">
                <div className="max-w-2xl mb-20 md:mb-24">
                   <h3 className="text-sm font-bold text-accent-teal uppercase tracking-widest mb-4">The Process</h3>
                   <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900">How we got there</h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                  {project.process.map((step, i) => (
                    <div key={i} className="relative p-10 rounded-2xl border border-stone-200 bg-stone-50 hover:shadow-xl hover:bg-white hover:border-stone-300 transition-all duration-300 group">
                      <span className="absolute top-6 right-6 text-6xl font-serif font-bold text-stone-200 group-hover:text-stone-100 transition-colors pointer-events-none select-none">
                        {i + 1}
                      </span>
                      <h4 className="text-xl font-bold mb-4 mt-2 text-stone-900 relative z-10">{step.title}</h4>
                      {Array.isArray(step.description) ? (
                        step.description[0].trim().endsWith(':') ? (
                          <div className="relative z-10">
                            <p className="text-stone-600 leading-relaxed text-sm md:text-base mb-3">{step.description[0]}</p>
                            <ul className="space-y-2">
                              {step.description.slice(1).map((point, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-sm md:text-base text-stone-600 leading-relaxed">
                                  <span className="w-1.5 h-1.5 rounded-full bg-accent-teal mt-2 shrink-0" />
                                  <span>{point}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ) : (
                          <ul className="space-y-2 relative z-10">
                            {step.description.map((point, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-sm md:text-base text-stone-600 leading-relaxed">
                                <span className="w-1.5 h-1.5 rounded-full bg-accent-teal mt-2 shrink-0" />
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                        )
                      ) : (
                        <p className="text-stone-600 leading-relaxed text-sm md:text-base relative z-10">{step.description}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </Section>
          )}

          {/* UX Decisions / Structure - OPTIMIZED FOR DIAGRAMS */}
          {project.uxDecisions && (
            <Section className="!py-0 mb-24 md:mb-40">
               <div className="container mx-auto px-6 space-y-16 md:space-y-32">
                 {project.uxDecisions.map((item, i) => {
                   // Check if image exists (and is not empty string)
                   const hasImage = !!item.image;
                   const hasImages = !!item.images && item.images.length > 0;

                   if (!hasImage && !hasImages) {
                     // Text-only layout for "no figure" requirement
                     return (
                       <div key={i} className="max-w-4xl mx-auto bg-white p-10 md:p-14 rounded-3xl shadow-sm border border-stone-100 relative overflow-hidden group hover:shadow-md transition-shadow duration-300">
                          {/* Decorative Number */}
                          <div className="absolute top-0 right-0 p-8 opacity-10 font-serif text-9xl font-bold text-stone-300 select-none group-hover:opacity-20 transition-opacity">
                            0{i+1}
                          </div>

                          <div className="relative z-10">
                            <span className="text-accent-teal font-bold text-xs md:text-sm mb-4 block uppercase tracking-widest">
                              {project.category === 'Information Architecture' ? 'Structure & Systems' : 'Key Finding'}
                            </span>
                            <h3 className="text-2xl md:text-4xl font-serif font-bold mb-8 text-stone-900 leading-tight pr-16">
                              {item.title}
                            </h3>
                            
                            {Array.isArray(item.description) ? (
                              item.description[0].trim().endsWith(':') ? (
                                <div>
                                  <p className="text-xl md:text-2xl text-stone-600 leading-relaxed font-light mb-6">{item.description[0]}</p>
                                  <ul className="space-y-4">
                                    {item.description.slice(1).map((point, idx) => (
                                      <li key={idx} className="flex items-start gap-4 text-lg md:text-xl text-stone-600 font-light leading-relaxed">
                                        <span className="w-1.5 h-1.5 rounded-full bg-accent-teal mt-2.5 shrink-0" />
                                        <span>{point}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ) : (
                                <ul className="space-y-4">
                                  {item.description.map((point, idx) => (
                                    <li key={idx} className="flex items-start gap-4 text-lg md:text-xl text-stone-600 font-light leading-relaxed">
                                      <span className="w-1.5 h-1.5 rounded-full bg-accent-teal mt-2.5 shrink-0" />
                                      <span>{point}</span>
                                    </li>
                                  ))}
                                </ul>
                              )
                            ) : (
                              <>
                                <div className="w-16 h-1 bg-stone-200 mb-8"></div>
                                <p className="text-xl md:text-2xl text-stone-600 leading-relaxed font-light">
                                  {item.description}
                                </p>
                              </>
                            )}
                          </div>
                       </div>
                     );
                   }

                   // Original split layout for items with images
                   return (
                   <div key={i} className={`flex flex-col md:flex-row gap-12 md:gap-20 items-center ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                     <div className="md:w-1/2">
                        <span className="text-accent-teal font-bold text-sm mb-4 block">
                          {project.category === 'Information Architecture' ? 'Structure & Systems' : `Key Findings & Decisions 0${i+1}`}
                        </span>
                        <h3 className="text-3xl md:text-4xl font-serif font-bold mb-6">{item.title}</h3>
                        
                        {Array.isArray(item.description) ? (
                          item.description[0].trim().endsWith(':') ? (
                            <div>
                              <p className="text-lg text-stone-600 leading-relaxed mb-3">{item.description[0]}</p>
                              <ul className="space-y-3">
                                {item.description.slice(1).map((point, idx) => (
                                  <li key={idx} className="flex items-start gap-3 text-lg text-stone-600 leading-relaxed">
                                    <span className="w-1.5 h-1.5 rounded-full bg-accent-teal mt-2.5 shrink-0" />
                                    <span>{point}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ) : (
                            <ul className="space-y-3">
                              {item.description.map((point, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-lg text-stone-600 leading-relaxed">
                                  <span className="w-1.5 h-1.5 rounded-full bg-accent-teal mt-2.5 shrink-0" />
                                  <span>{point}</span>
                                </li>
                              ))}
                            </ul>
                          )
                        ) : (
                          <p className="text-lg text-stone-600 leading-relaxed">{item.description}</p>
                        )}
                     </div>
                     <div className="md:w-1/2 w-full">
                       {hasImages ? (
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                           {item.images!.map((img, imgIdx) => (
                             <div 
                               key={imgIdx}
                               onClick={() => handleImageClick({ image: img })}
                               className="group relative aspect-[3/4] bg-white rounded-2xl overflow-hidden shadow-xl border border-stone-200 cursor-pointer"
                             >
                                <img 
                                  src={img} 
                                  alt={`${item.title} ${imgIdx + 1}`} 
                                  referrerPolicy="no-referrer"
                                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/10 transition-colors duration-300 flex items-center justify-center">
                                   <div className="bg-white/90 backdrop-blur px-4 py-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-2">
                                     <Maximize2 className="w-4 h-4 text-stone-900" />
                                   </div>
                                </div>
                             </div>
                           ))}
                         </div>
                       ) : (
                         <div 
                           onClick={() => handleImageClick(item)}
                           className="group relative aspect-[4/3] bg-white rounded-2xl overflow-hidden shadow-xl border border-stone-200 cursor-pointer"
                         >
                            <img 
                              src={item.image} 
                              alt={item.title} 
                              referrerPolicy="no-referrer"
                              className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/10 transition-colors duration-300 flex items-center justify-center">
                               <div className="bg-white/90 backdrop-blur px-5 py-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-2">
                                 <span className="text-sm font-bold text-stone-900">
                                   {item.detailImages && item.detailImages.length > 0 ? 'View Details' : 'Zoom In'}
                                 </span>
                                 <Maximize2 className="w-4 h-4 text-stone-900" />
                               </div>
                            </div>
                         </div>
                       )}
                       
                       {/* Caption for Diagram */}
                       <div className="mt-4 text-center">
                          <span className="text-xs text-stone-400 uppercase tracking-widest">Figure {i+1}: {item.title}</span>
                       </div>
                     </div>
                   </div>
                   );
                 })}
               </div>
            </Section>
          )}

          {/* Full Width Visual Break 2 - UI Showcase (Conditional) */}
          {project.uiExecution && project.uiExecution.length > 0 && (
            <div className="bg-stone-50 py-24 md:py-32 mb-24 md:mb-40 text-stone-900">
               <div className="container mx-auto px-4 md:px-6">
                 <div className="bg-white rounded-[2rem] md:rounded-[3rem] p-8 md:p-20 shadow-2xl border border-stone-100">
                   
                   <div className="text-center mb-16 md:mb-24 max-w-3xl mx-auto">
                     <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 text-stone-900">{project.uiExecution[0].title}</h2>
                     {Array.isArray(project.uiExecution[0].description) ? (
                       project.uiExecution[0].description[0].trim().endsWith(':') ? (
                         <div className="text-left inline-block bg-stone-50 p-6 md:p-8 rounded-2xl border border-stone-100">
                           <p className="text-stone-600 text-lg md:text-xl leading-relaxed mb-4">{project.uiExecution[0].description[0]}</p>
                           <ul className="space-y-3">
                             {project.uiExecution[0].description.slice(1).map((point, idx) => (
                               <li key={idx} className="flex items-start gap-3 text-stone-600 text-lg">
                                 <span className="w-2 h-2 rounded-full bg-accent-teal mt-2.5 shrink-0" />
                                 <span>{point}</span>
                               </li>
                             ))}
                           </ul>
                         </div>
                       ) : (
                         <ul className="space-y-3 text-left inline-block bg-stone-50 p-6 md:p-8 rounded-2xl border border-stone-100">
                           {project.uiExecution[0].description.map((point, idx) => (
                             <li key={idx} className="flex items-start gap-3 text-stone-600 text-lg">
                               <span className="w-2 h-2 rounded-full bg-accent-teal mt-2.5 shrink-0" />
                               <span>{point}</span>
                             </li>
                           ))}
                         </ul>
                       )
                     ) : (
                       <p className="text-stone-600 text-lg md:text-xl leading-relaxed">
                         {project.uiExecution[0].description}
                       </p>
                     )}
                   </div>
                   
                   <div className="flex flex-col gap-12 md:gap-24 items-center">
                      {(project.uiExecution?.[0]?.images || ['ui1', 'ui2', 'ui3']).map((img, idx) => (
                         <div key={idx} className="w-full rounded-xl overflow-hidden shadow-sm border border-stone-100 bg-stone-50">
                            <img 
                              src={img.startsWith('http') ? img : `https://picsum.photos/seed/${project.id}-ui-${idx}/1200/800`} 
                              alt="UI Screen" 
                              referrerPolicy="no-referrer"
                              className="w-full h-auto object-contain" 
                            />
                         </div>
                      ))}
                   </div>

                   {/* Prototype Link */}
                   {project.prototypeLink && (
                     <div className="mt-16 text-center">
                       <a 
                         href={project.prototypeLink} 
                         target="_blank" 
                         rel="noopener noreferrer"
                         className="inline-flex items-center gap-2 px-8 py-4 bg-stone-900 text-white rounded-full font-medium hover:bg-stone-800 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-300"
                       >
                         View Interactive Prototype <ArrowRight className="w-4 h-4" />
                       </a>
                     </div>
                   )}

                 </div>
               </div>
            </div>
          )}

          {/* Key Takeaways & Next */}
          <Section className="!py-0 pb-24 md:pb-32">
            <div className="container mx-auto px-6">
              <div className="max-w-3xl mx-auto text-center mb-32">
                 <h3 className="text-sm font-bold text-stone-400 uppercase tracking-widest mb-8">Key Takeaways</h3>
                 {Array.isArray(project.keyTakeaways) ? (
                   <div className="space-y-6">
                     {project.keyTakeaways.map((para, idx) => (
                       <blockquote key={idx} className="text-2xl md:text-3xl font-serif font-medium leading-tight text-stone-900">
                         "{para}"
                       </blockquote>
                     ))}
                   </div>
                 ) : (
                   <blockquote className="text-3xl md:text-4xl font-serif font-medium leading-tight text-stone-900 mb-8">
                     "{project.keyTakeaways}"
                   </blockquote>
                 )}
                 <div className="w-16 h-1 bg-accent-teal mx-auto mt-8" />
              </div>

              {/* Next Project Card */}
              <div 
                onClick={() => navigate(`/work/${nextProject.id}`)}
                className="cursor-pointer group relative rounded-3xl overflow-hidden bg-stone-900 aspect-[21/9] flex items-center justify-center text-center"
              >
                 <img 
                   src={nextProject.image} 
                   alt="Next" 
                   referrerPolicy="no-referrer"
                   className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-30 transition-opacity duration-500" 
                 />
                 <div className="relative z-10 p-8">
                   <span className="text-stone-400 uppercase tracking-widest text-sm font-bold mb-4 block">Next Project</span>
                   <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 group-hover:scale-105 transition-transform duration-300">
                     {nextProject.title}
                   </h2>
                   <span className="inline-flex items-center text-white font-medium border-b border-white pb-1 group-hover:text-accent-teal group-hover:border-accent-teal transition-colors">
                     View Case Study <ArrowRight className="ml-2 w-4 h-4" />
                   </span>
                 </div>
              </div>
            </div>
          </Section>
        </article>
      </div>

      <Lightbox 
        images={lightboxImages} 
        isOpen={lightboxOpen} 
        onClose={() => setLightboxOpen(false)} 
      />
    </>
  );
};

export default CaseStudy;
