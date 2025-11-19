import React from 'react';
import { motion } from 'framer-motion';
import { Play, SkipBack, SkipForward } from 'lucide-react';

const SpotifyTile = () => {
    return (
        <motion.div
            className="col-span-1 bg-neutral-900/30 border border-neutral-800 rounded-[2rem] p-4 relative overflow-hidden group flex flex-col justify-between hover:border-neutral-700 transition-colors duration-500"
            whileHover={{ y: -2 }}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-neutral-800/10 via-transparent to-transparent"></div>

            <div className="relative z-10 flex items-center gap-3">
                <div className="w-12 h-12 bg-neutral-800 rounded-lg flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-300">
                    <span className="text-xl">🎵</span>
                </div>
                <div>
                    <div className="flex items-center gap-2 mb-1">
                        <span className="w-1.5 h-1.5 bg-neutral-500 rounded-full animate-pulse"></span>
                        <span className="text-[9px] font-bold text-neutral-500 uppercase tracking-wider">Now Playing</span>
                    </div>
                    <h3 className="text-white font-bold text-sm leading-tight">Coding Mode</h3>
                    <p className="text-neutral-400 text-xs font-medium">Lo-Fi Beats</p>
                </div>
            </div>

            <div className="relative z-10 mt-4">
                <div className="w-full h-0.5 bg-neutral-800 rounded-full mb-3 overflow-hidden">
                    <div className="w-2/3 h-full bg-neutral-600 rounded-full"></div>
                </div>
                <div className="flex items-center justify-between text-neutral-400">
                    <SkipBack size={16} className="hover:text-white cursor-pointer transition-colors" />
                    <div className="w-8 h-8 bg-neutral-800 rounded-full flex items-center justify-center hover:bg-neutral-700 hover:scale-110 transition-all cursor-pointer">
                        <Play size={14} fill="currentColor" className="ml-0.5 text-white" />
                    </div>
                    <SkipForward size={16} className="hover:text-white cursor-pointer transition-colors" />
                </div>
            </div>
        </motion.div>
    );
};

export default SpotifyTile;
