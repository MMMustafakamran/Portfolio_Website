import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Code2, Check, Copy } from 'lucide-react';

const HeroTile = ({ onOpen, toggleProfile }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = (e) => {
        e.stopPropagation();
        navigator.clipboard.writeText('mmustafakamran@gmail.com');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <motion.div
            layoutId="profile"
            onClick={() => onOpen('profile')}
            className="col-span-1 md:col-span-2 md:row-span-2 bg-neutral-900/30 border border-neutral-800 rounded-[2rem] p-8 flex flex-col justify-between relative overflow-hidden group cursor-pointer hover:border-indigo-500/50 transition-colors duration-500"
            whileHover={{ y: -2 }}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-purple-500/5 group-hover:from-indigo-500/10 group-hover:to-purple-500/10 transition-colors duration-500" />
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-indigo-500/20 rounded-full blur-[100px] transition-all duration-500 group-hover:bg-indigo-500/30" />

            <div className="relative z-10">
                <div className="flex items-start justify-between mb-8">
                    <div className="w-20 h-20 rounded-2xl overflow-hidden shadow-lg shadow-indigo-500/20 ring-2 ring-white/5">
                        <img
                            src="https://github.com/MMMustafaKamran.png"
                            alt="Profile"
                            className="w-full h-full object-cover"
                            onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex' }}
                        />
                        <div className="hidden w-full h-full bg-gradient-to-br from-indigo-600 to-violet-600 items-center justify-center text-white">
                            <Terminal size={32} />
                        </div>
                    </div>
                    <div className="bg-neutral-950/50 px-3 py-1.5 rounded-full border border-neutral-800 backdrop-blur-sm">
                        <span className="text-xs font-medium text-emerald-400 flex items-center gap-2">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                            </span>
                            Available for work
                        </span>
                    </div>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-3 font-sans">
                    Muhammad Mustafa Kamran
                </h1>
                <p className="text-indigo-400 font-medium mb-6 flex items-center gap-2 text-lg">
                    <Code2 size={20} /> Software Engineer
                </p>
                <p className="text-neutral-400 text-base leading-relaxed max-w-md font-light">
                    Specializing in <span className="text-neutral-200 font-medium">AI Agents, RAG Systems</span>, and <span className="text-neutral-200 font-medium">Full Stack Automation</span>.
                </p>
            </div>

            <div className="flex gap-3 mt-8 relative z-10">
                <button
                    onClick={(e) => { e.stopPropagation(); onOpen('profile'); }}
                    className="bg-white text-black px-6 py-3 rounded-full font-bold text-sm hover:scale-105 transition-transform shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                >
                    More About Me
                </button>
                <button
                    onClick={handleCopy}
                    className="bg-neutral-800/80 text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-neutral-700 transition-colors flex items-center gap-2 border border-neutral-700 backdrop-blur-md"
                >
                    {copied ? (
                        <>Copied! <Check size={16} className="text-emerald-400" /></>
                    ) : (
                        <>Email Me <Copy size={16} /></>
                    )}
                </button>
            </div>
        </motion.div>
    );
};

export default HeroTile;
