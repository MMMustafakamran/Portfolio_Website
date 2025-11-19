import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

const ContactTile = ({ onOpen }) => {
    return (
        <motion.button
            layoutId="contact"
            onClick={() => onOpen('contact')}
            className="col-span-1 md:col-span-1 bg-indigo-600 rounded-[2rem] p-6 flex flex-col justify-between relative overflow-hidden group cursor-pointer text-left w-full h-full"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
        >
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
            <div className="absolute -left-10 -bottom-10 w-32 h-32 bg-white/20 rounded-full blur-2xl group-hover:bg-white/30 transition-colors duration-500"></div>

            <div className="relative z-10 bg-white/10 w-fit p-3 rounded-2xl backdrop-blur-md border border-white/20 mb-auto group-hover:scale-110 transition-transform duration-300">
                <Mail size={24} className="text-white" />
            </div>

            <div className="relative z-10 mt-4">
                <h2 className="text-xl font-bold text-white mb-1">Let's Talk</h2>
                <p className="text-indigo-200 text-xs font-medium tracking-wide uppercase">Open for work</p>
            </div>
        </motion.button>
    );
};

export default ContactTile;
