import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, BrainCircuit, Library, Monitor } from 'lucide-react';

const ProjectsTile = ({ onOpen, items }) => {
    return (
        <motion.div
            layoutId="projects"
            onClick={() => onOpen('projects')}
            className="col-span-1 md:col-span-4 md:row-span-2 bg-gradient-to-br from-neutral-900/40 via-neutral-900/20 to-neutral-900/10 border border-neutral-800 rounded-[2rem] p-8 relative overflow-hidden group cursor-pointer hover:border-emerald-500/50 transition-all duration-500"
            whileHover={{ y: -2 }}
        >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(circle_at_top_right,_rgba(16,185,129,0.15),_transparent_50%)]"></div>
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-emerald-500/10 blur-[100px] rounded-full opacity-50 pointer-events-none"></div>

            <div className="relative z-10 flex flex-col gap-8 h-full">
                <div className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                        <p className="text-[11px] font-bold tracking-[0.4em] uppercase text-emerald-500/70 mb-2">Selected Work</p>
                        <h3 className="text-3xl md:text-4xl font-bold text-white font-sans">Projects</h3>
                        <p className="text-neutral-400 text-sm mt-3 max-w-2xl font-light leading-relaxed">
                            AI-first platforms, automation pipelines, and systems shipped end-to-end. Tap to see full technical breakdowns.
                        </p>
                    </div>
                    <div className="bg-neutral-900/80 px-5 py-2 rounded-full text-xs font-medium text-emerald-400 border border-emerald-500/20 flex items-center gap-2 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300 shadow-lg shadow-emerald-900/20">
                        View All <ArrowUpRight size={14} />
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-auto">
                    {items.slice(0, 3).map((project, idx) => (
                        <div
                            key={project.title}
                            className="bg-neutral-950/40 border border-neutral-800 rounded-2xl p-5 flex flex-col gap-4 hover:bg-neutral-900/60 hover:border-emerald-500/30 transition-all duration-300 group/card backdrop-blur-sm"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 group-hover/card:scale-110 transition-transform duration-300">
                                    {idx === 0 ? <BrainCircuit size={20} /> : idx === 1 ? <Library size={20} /> : <Monitor size={20} />}
                                </div>
                                <div>
                                    <p className="text-white text-sm font-bold">{project.title}</p>
                                    <p className="text-[10px] text-emerald-500/70 uppercase tracking-widest font-semibold">Build</p>
                                </div>
                            </div>
                            <p className="text-xs text-neutral-400 leading-relaxed line-clamp-2 font-light">
                                {project.headline}
                            </p>
                            <div className="flex flex-wrap gap-1.5 text-[10px] text-neutral-500 mt-auto">
                                {project.tags.slice(0, 3).map((tag) => (
                                    <span key={tag} className="px-2 py-1 bg-neutral-900/80 rounded-md border border-neutral-800/50">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectsTile;
