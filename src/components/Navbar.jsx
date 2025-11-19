import React from 'react';
import { motion } from 'framer-motion';
import { User, Briefcase, Folder, Layers, Mail, Home } from 'lucide-react';

const Navbar = ({ selectedTile, onSelect }) => {
    const navItems = [
        { label: 'Profile', key: 'profile', icon: <User size={18} /> },
        { label: 'Experience', key: 'experience', icon: <Briefcase size={18} /> },
        { label: 'Projects', key: 'projects', icon: <Folder size={18} /> },
        { label: 'Stack', key: 'stack', icon: <Layers size={18} /> },
        { label: 'Contact', key: 'contact', icon: <Mail size={18} /> },
    ];

    return (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-fit px-4">
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, type: 'spring', stiffness: 260, damping: 20 }}
                className="bg-neutral-900/80 backdrop-blur-xl border border-neutral-800/50 rounded-full p-1.5 shadow-2xl shadow-black/50 flex items-center gap-1"
            >
                {navItems.map((item) => {
                    const isActive = selectedTile === item.key;
                    return (
                        <button
                            key={item.key}
                            onClick={() => onSelect(item.key)}
                            className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${isActive ? 'text-white' : 'text-neutral-400 hover:text-neutral-200 hover:bg-white/5'
                                }`}
                        >
                            {isActive && (
                                <motion.div
                                    layoutId="nav-pill"
                                    className="absolute inset-0 bg-neutral-800 rounded-full border border-neutral-700 shadow-inner"
                                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                            <span className="relative z-10 flex items-center gap-2">
                                {item.icon}
                                <span className="hidden sm:inline">{item.label}</span>
                            </span>
                        </button>
                    );
                })}
            </motion.nav>
        </div>
    );
};

export default Navbar;
