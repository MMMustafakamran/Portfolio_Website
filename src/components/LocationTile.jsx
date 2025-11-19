import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const LocationTile = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <motion.div
            className="col-span-1 bg-neutral-900/30 border border-neutral-800 rounded-[2rem] p-6 relative overflow-hidden group hover:border-white/20 transition-colors duration-500 flex flex-col justify-between min-h-[180px]"
            whileHover={{ y: -2 }}
        >
            <div className="absolute inset-0 bg-[url('https://api.mapbox.com/styles/v1/mapbox/dark-v10/static/73.0479,33.6844,11,0/300x300?access_token=pk.eyJ1IjoiZXhhbXBsZSIsImEiOiJja2Z6Ynd2a3MwM3JvMnJ0Y255b3E2YnF0In0.example')] bg-cover bg-center opacity-20 grayscale group-hover:grayscale-0 group-hover:opacity-30 transition-all duration-500"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/50 to-transparent"></div>

            <div className="relative z-10 flex justify-end">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_#10b981]"></div>
            </div>

            <div className="relative z-10">
                <h3 className="text-3xl font-bold text-white font-mono mb-1">
                    {time.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })}
                </h3>
                <div className="flex items-center gap-2 text-neutral-400 text-xs font-medium">
                    <MapPin size={12} className="text-emerald-500" />
                    Islamabad, PK
                </div>
            </div>
        </motion.div>
    );
};

export default LocationTile;
