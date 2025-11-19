import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, BrainCircuit, Library, Monitor, Code, Terminal, Cpu } from 'lucide-react';

const ProjectsTile = ({ onOpen, items }) => {
    return (
        <motion.div
            layoutId="projects"
            onClick={() => onOpen('projects')}
            className="col-span-1 md:col-span-4 md:row-span-2 bg-gradient-to-br from-neutral-900/40 via-neutral-900/20 to-neutral-900/10 border border-neutral-800 rounded-[2rem] p-6 md:p-8 relative overflow-hidden group cursor-pointer hover:border-emerald-500/50 transition-all duration-500 flex flex-col"
            whileHover={{ y: -2 }}
        >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(circle_at_top_right,_rgba(16,185,129,0.15),_transparent_50%)]"></div>
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-emerald-500/10 blur-[100px] rounded-full opacity-50 pointer-events-none"></div>

            <div className="relative z-10 flex flex-col h-full">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                    <div>
                        <div className="flex items-center gap-2 mb-1">
                            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                            <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-emerald-500/70">Selected Work</p>
                        </div>
                        <h3 className="text-3xl font-bold text-white font-sans">Projects</h3>
                    </div>
                    <div className="bg-neutral-900/80 px-4 py-1.5 rounded-full text-xs font-medium text-emerald-400 border border-emerald-500/20 flex items-center gap-2 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300 shadow-lg shadow-emerald-900/20">
                        View All <ArrowUpRight size={14} />
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-auto">
                    {items.slice(0, 3).map((project, idx) => (
                        <div
                            key={project.title}
                            className="bg-neutral-950/60 border border-neutral-800 rounded-xl p-4 flex flex-col gap-3 hover:bg-neutral-900/80 hover:border-emerald-500/30 transition-all duration-300 group/card backdrop-blur-sm relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"></div>

                            <div className="flex items-start justify-between relative z-10">
                                <div className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-emerald-400 group-hover/card:scale-110 group-hover/card:border-emerald-500/30 transition-all duration-300 shadow-inner">
                                    {idx === 0 ? <BrainCircuit size={20} /> : idx === 1 ? <Library size={20} /> : <Monitor size={20} />}
                                </div>
                                <ArrowUpRight size={14} className="text-neutral-600 group-hover/card:text-emerald-400 transition-colors" />
                            </div>

                            <div className="relative z-10">
                                <h4 className="text-white text-sm font-bold mb-1 group-hover/card:text-emerald-300 transition-colors">{project.title}</h4>
                                <p className="text-[11px] text-neutral-400 leading-relaxed line-clamp-2 font-light h-8">
                                    {project.headline}
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-1.5 text-[10px] text-neutral-500 mt-auto relative z-10 pt-2 border-t border-white/5">
                                {project.tags.slice(0, 2).map((tag) => (
                                    <span key={tag} className="px-1.5 py-0.5 bg-neutral-900 rounded border border-neutral-800 text-neutral-400">
                                        {tag}
                                    </span>
                                ))}
                                {project.tags.length > 2 && (
                                    <span className="px-1.5 py-0.5 bg-neutral-900 rounded border border-neutral-800 text-neutral-500">+{project.tags.length - 2}</span>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectsTile;
