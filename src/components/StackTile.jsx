import React from 'react';
import { motion } from 'framer-motion';
import { Cpu } from 'lucide-react';

const StackTile = ({ onOpen }) => {
    const techStack = ['Python', 'TypeScript', 'React', 'Django', 'Node.js', 'C++', 'C#', 'SQL', 'Docker', 'Azure', 'LLMs', 'RAG', 'n8n', 'Git'];

    return (
        <motion.div
            layoutId="stack"
            onClick={() => onOpen('stack')}
            className="col-span-1 md:col-span-2 bg-neutral-900/30 border border-neutral-800 rounded-[2rem] p-6 overflow-hidden relative flex flex-col justify-center cursor-pointer hover:border-sky-500/50 transition-colors duration-500 group"
            whileHover={{ y: -2 }}
        >
            <div className="absolute inset-0 bg-gradient-to-r from-sky-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="flex justify-between items-center mb-6 px-2 relative z-10">
                <h3 className="text-sm font-bold text-neutral-400 uppercase tracking-wider flex items-center gap-2">
                    <Cpu size={18} className="text-sky-500" /> Technical Arsenal
                </h3>
                <span className="text-[10px] text-sky-500/70 font-mono opacity-0 group-hover:opacity-100 transition-opacity">Click to expand</span>
            </div>

            <div className="relative w-full overflow-hidden mask-gradient pointer-events-none z-10">
                <div className="flex whitespace-nowrap animate-scroll">
                    {[...Array(2)].map((_, i) => (
                        <div key={i} className="flex gap-3 mx-3">
                            {techStack.map((tech) => (
                                <span key={`${i}-${tech}`} className="px-4 py-2 bg-neutral-950/50 text-sm rounded-xl text-neutral-300 border border-neutral-800 font-mono whitespace-nowrap">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default StackTile;
