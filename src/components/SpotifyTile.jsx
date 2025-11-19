import React from 'react';
import { motion } from 'framer-motion';
import { Play, SkipBack, SkipForward, Volume2 } from 'lucide-react';

const SpotifyTile = () => {
    return (
        <motion.div
            className="col-span-1 md:col-span-2 bg-[#1DB954] rounded-[2rem] p-6 relative overflow-hidden group flex flex-col justify-between"
            whileHover={{ y: -2 }}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent"></div>
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-black/10 rounded-full blur-2xl"></div>

            <div className="relative z-10 flex items-center gap-4">
                <div className="w-16 h-16 bg-neutral-900 rounded-xl shadow-lg flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-300">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-500 animate-pulse"></div>
                    <span className="relative z-10 text-2xl">🎵</span>
                </div>
                <div>
                    <div className="flex items-center gap-2 mb-1">
                        <span className="w-2 h-2 bg-black rounded-full animate-pulse"></span>
                        <span className="text-[10px] font-bold text-black/60 uppercase tracking-wider">Now Playing</span>
                    </div>
                    <h3 className="text-white font-bold text-lg leading-tight">Coding Mode</h3>
                    <p className="text-black/70 text-sm font-medium">Lo-Fi Beats</p>
                </div>
            </div>

            <div className="relative z-10 mt-6">
                <div className="w-full h-1 bg-black/20 rounded-full mb-4 overflow-hidden">
                    <div className="w-2/3 h-full bg-white rounded-full"></div>
                </div>
                <div className="flex items-center justify-between text-white">
                    <SkipBack size={20} className="hover:opacity-70 cursor-pointer transition-opacity" />
                    <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                        <Play size={18} fill="white" className="ml-1" />
                    </div>
                    <SkipForward size={20} className="hover:opacity-70 cursor-pointer transition-opacity" />
                </div>
            </div>
        </motion.div>
    );
};

export default SpotifyTile;
