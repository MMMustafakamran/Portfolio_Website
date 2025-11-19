import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const DetailModal = ({ detail, onClose }) => {
    if (!detail) return null;

    return (
        <AnimatePresence>
            {detail && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                    >
                        {/* Modal Content */}
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="w-full max-w-4xl h-[85vh] bg-[#0a0a0a] border border-neutral-800 rounded-3xl shadow-2xl relative overflow-hidden flex flex-col"
                        >
                            {/* Fixed Backgrounds */}
                            <div className={`absolute inset-0 ${detail.accent} opacity-10 pointer-events-none`} />
                            <div className="absolute inset-0 bg-noise opacity-50 pointer-events-none" />

                            {/* Header - Fixed at top */}
                            <div className="relative z-20 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-neutral-800 p-4 flex items-center justify-between gap-4 shrink-0">
                                <h2 className="text-xl md:text-2xl font-bold text-white">{detail.title}</h2>
                                <button
                                    onClick={onClose}
                                    className="p-2 bg-neutral-800/50 rounded-full text-neutral-400 hover:text-white hover:bg-neutral-700 transition-colors ring-1 ring-neutral-700"
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            {/* Scrollable Body */}
                            <div className="relative z-10 p-6 md:p-10 text-neutral-300 overflow-y-auto custom-scrollbar grow">
                                {detail.body}
                            </div>
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default DetailModal;
