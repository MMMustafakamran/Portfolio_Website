import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const ExperienceTile = ({ onOpen, items }) => {
    return (
        <motion.div
            layoutId="experience"
            onClick={() => onOpen('experience')}
            className="col-span-1 md:col-span-2 md:row-span-2 bg-neutral-900/30 border border-neutral-800 rounded-[2rem] p-8 flex flex-col relative group transition-all duration-500 cursor-pointer hover:border-indigo-500/50 overflow-hidden"
            whileHover={{ y: -2 }}
        >
            <div className="absolute inset-0 bg-gradient-to-bl from-indigo-500/5 via-transparent to-transparent group-hover:from-indigo-500/10 transition-colors duration-500" />

            <div className="flex items-center justify-between mb-8 relative z-10">
                <h3 className="text-2xl font-bold text-white flex items-center gap-3 font-sans">
                    <div className="p-2 bg-indigo-500/10 rounded-lg text-indigo-400">
                        <Briefcase size={20} />
                    </div>
                    Experience
                </h3>
                <span className="px-3 py-1 bg-neutral-800/50 text-neutral-400 text-xs rounded-full border border-neutral-700 group-hover:bg-indigo-500 group-hover:text-white group-hover:border-indigo-500 transition-all duration-300">
                    Expand
                </span>
            </div>

            <div className="space-y-8 relative h-full overflow-hidden mask-gradient-y pr-2 z-10 pointer-events-none">
                <div className="absolute left-[19px] top-2 bottom-2 w-[2px] bg-neutral-800/50"></div>

                {items.map((job, i) => (
                    <div key={i} className="relative pl-12 group/item">
                        <div className={`absolute left-[12px] top-1.5 w-4 h-4 rounded-full border-2 z-10 bg-neutral-900 transition-all duration-300 ${job.active ? 'border-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.5)] scale-110' : 'border-neutral-700 group-hover/item:border-neutral-500'}`}></div>
                        <div className="flex justify-between items-start mb-1">
                            <div>
                                <h4 className={`text-base font-bold transition-colors ${job.active ? 'text-white' : 'text-neutral-300 group-hover/item:text-white'}`}>{job.role}</h4>
                                <p className="text-xs text-indigo-400 font-mono">{job.company}</p>
                            </div>
                            <span className="text-[10px] text-neutral-500 font-mono bg-neutral-800/50 px-2 py-1 rounded border border-neutral-800 hidden sm:block">{job.year}</span>
                        </div>
                        <p className="text-sm text-neutral-400 leading-relaxed line-clamp-2">{job.desc}</p>
                    </div>
                ))}
            </div>
        </motion.div>
    );
};

export default ExperienceTile;
