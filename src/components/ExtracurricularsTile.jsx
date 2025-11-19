import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Award } from 'lucide-react';

const ExtracurricularsTile = () => {
    const [isHovered, setIsHovered] = useState(false);
    const controls = useAnimation();

    const items = [
        { title: 'Head of Marketing', org: 'FAST NUCES' },
        { title: 'Table Tennis Team', org: 'FAST' },
    ];

    // Duplicate items for seamless loop
    const duplicatedItems = [...items, ...items];

    // Calculate scroll distance: each item is approximately 60px (p-4 = 16px top/bottom + content) + 12px gap
    const itemHeight = 72; // Approximate height per item including gap
    const scrollDistance = itemHeight * items.length;

    useEffect(() => {
        if (isHovered) {
            controls.stop();
        } else {
            controls.start({
                y: [0, -scrollDistance],
                transition: {
                    duration: 6,
                    repeat: Infinity,
                    ease: 'linear',
                },
            });
        }
    }, [isHovered, controls, scrollDistance]);

    // Start animation on mount
    useEffect(() => {
        controls.start({
            y: [0, -scrollDistance],
            transition: {
                duration: 6,
                repeat: Infinity,
                ease: 'linear',
            },
        });
    }, [controls, scrollDistance]);

    return (
        <motion.div
            className="col-span-1 bg-neutral-900/30 border border-neutral-800 rounded-[2rem] p-6 relative overflow-hidden group hover:border-amber-500/50 transition-colors duration-500 flex flex-col"
            whileHover={{ y: -2 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative z-10 flex-shrink-0 mb-4">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-amber-500/10 rounded-lg text-amber-400">
                        <Award size={18} />
                    </div>
                    <h3 className="text-neutral-400 text-sm font-bold uppercase tracking-wider">Extracurriculars</h3>
                </div>
            </div>

            <div className="relative z-10 flex-1 overflow-hidden">
                <motion.div
                    className="space-y-3"
                    animate={controls}
                    style={{
                        willChange: 'transform',
                    }}
                >
                    {duplicatedItems.map((item, idx) => (
                        <div
                            key={idx}
                            className="bg-neutral-800/30 rounded-xl p-4 border border-neutral-800/50 group/item hover:border-amber-500/30 transition-colors"
                        >
                            <h4 className="text-white font-bold text-sm mb-1">{item.title}</h4>
                            <p className="text-amber-400 text-xs font-mono">{item.org}</p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </motion.div>
    );
};

export default ExtracurricularsTile;

