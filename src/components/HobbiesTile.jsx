import React from 'react';
import { motion } from 'framer-motion';
import { Dumbbell } from 'lucide-react';

const HobbiesTile = () => {
    return (
        <motion.div
            className="col-span-1 bg-neutral-900/30 border border-neutral-800 rounded-[2rem] p-6 relative overflow-hidden group hover:border-orange-500/50 transition-colors duration-500 flex flex-col justify-between"
            whileHover={{ y: -2 }}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <h3 className="text-neutral-400 text-sm font-bold uppercase tracking-wider mb-4 relative z-10">Hobbies</h3>

            <div className="space-y-4 relative z-10">
                <div className="flex items-center gap-3 group/item">
                    <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-orange-500 group-hover/item:bg-orange-500 group-hover/item:text-white transition-colors duration-300">
                        <Dumbbell size={18} />
                    </div>
                    <span className="text-neutral-300 font-medium text-sm group-hover/item:text-white transition-colors">Gym</span>
                </div>
                <div className="flex items-center gap-3 group/item">
                    <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-orange-500 group-hover/item:bg-orange-500 group-hover/item:text-white transition-colors duration-300">
                        <span className="text-lg">🏓</span>
                    </div>
                    <span className="text-neutral-300 font-medium text-sm group-hover/item:text-white transition-colors">Ping Pong</span>
                </div>
            </div>
        </motion.div>
    );
};

export default HobbiesTile;
