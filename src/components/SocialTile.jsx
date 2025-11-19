import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, ArrowUpRight } from 'lucide-react';

const SocialTile = () => {
    return (
        <motion.div
            className="col-span-1 bg-neutral-900/30 border border-neutral-800 rounded-[2rem] p-6 flex flex-col justify-center gap-4 relative overflow-hidden group hover:border-neutral-600 transition-colors duration-500"
            whileHover={{ y: -2 }}
        >
            <a
                href="https://github.com/MMMustafaKamran"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between bg-neutral-950/50 p-4 rounded-2xl hover:bg-white hover:text-black transition-all duration-300 group/item border border-neutral-800 hover:border-white"
            >
                <div className="flex items-center gap-3">
                    <Github size={20} className="text-white group-hover/item:text-black transition-colors" />
                    <span className="font-bold text-sm">GitHub</span>
                </div>
                <ArrowUpRight size={16} className="text-neutral-500 group-hover/item:text-black" />
            </a>

            <a
                href="https://linkedin.com/in/mustafaKamran03"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between bg-neutral-950/50 p-4 rounded-2xl hover:bg-[#0077b5] hover:text-white transition-all duration-300 group/item border border-neutral-800 hover:border-[#0077b5]"
            >
                <div className="flex items-center gap-3">
                    <Linkedin size={20} className="text-white group-hover/item:text-white transition-colors" />
                    <span className="font-bold text-sm">LinkedIn</span>
                </div>
                <ArrowUpRight size={16} className="text-neutral-500 group-hover/item:text-white" />
            </a>
        </motion.div>
    );
};

export default SocialTile;
