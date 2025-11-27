import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PixelAvatar = ({ state, dialogue }) => {
    // Enhanced Palette
    const skin = "#8D5524";
    const skinShadow = "#6F431B";
    const hair = "#0F172A";
    const hairHighlight = "#1E293B";
    const glassesFrame = "#000000";
    const glassesLens = "#38BDF8";
    const jacket = "#334155";
    const jacketShadow = "#1E293B";
    const jacketHighlight = "#475569";
    const shirt = "#F8FAFC";
    const shirtShadow = "#CBD5E1";
    const pants = "#1E293B";
    const shoes = "#000000";

    // Animation States
    const [idleAction, setIdleAction] = useState('none');
    const [idleTimer, setIdleTimer] = useState(0);

    // Idle Timer System
    useEffect(() => {
        if (state === 'idle') {
            const timer = setInterval(() => {
                setIdleTimer(prev => prev + 1);
            }, 1000);
            return () => clearInterval(timer);
        } else {
            setIdleTimer(0);
            setIdleAction('none');
        }
    }, [state]);

    // Trigger Idle Action after 5 seconds
    useEffect(() => {
        if (idleTimer === 5) {
            const actions = ['gameboy', 'coffee', 'sleep'];
            const randomAction = actions[Math.floor(Math.random() * actions.length)];
            setIdleAction(randomAction);
        }
    }, [idleTimer]);

    // --- SUB-COMPONENTS ---

    const HeadFront = () => (
        <g>
            {/* Neck */}
            <rect x="29" y="34" width="6" height="4" fill={skinShadow} />
            {/* Face Shape */}
            <rect x="24" y="10" width="16" height="24" fill={skin} />
            <rect x="22" y="14" width="20" height="16" fill={skin} />
            <rect x="23" y="14" width="1" height="4" fill={skinShadow} />

            {/* Detailed Face Features */}
            {/* Eyes (behind glasses, but adding detail) */}
            <rect x="26" y="20" width="2" height="2" fill="#3E2723" />
            <rect x="36" y="20" width="2" height="2" fill="#3E2723" />

            {/* Nose */}
            <rect x="31" y="24" width="2" height="1" fill={skinShadow} opacity="0.5" />

            {/* Mouth (Smile) */}
            <rect x="29" y="28" width="6" height="1" fill="#3E2723" />
            <rect x="28" y="27" width="1" height="1" fill="#3E2723" opacity="0.5" />
            <rect x="35" y="27" width="1" height="1" fill="#3E2723" opacity="0.5" />

            {/* Hair */}
            <rect x="22" y="8" width="20" height="6" fill={hair} />
            <rect x="24" y="8" width="8" height="2" fill={hairHighlight} />
            <rect x="20" y="10" width="4" height="8" fill={hair} />
            <rect x="40" y="10" width="4" height="8" fill={hair} />
            <rect x="26" y="6" width="4" height="2" fill={hair} />
            <rect x="34" y="6" width="4" height="2" fill={hair} />

            {/* Glasses */}
            <rect x="23" y="18" width="18" height="2" fill={glassesFrame} />
            <rect x="23" y="18" width="6" height="5" fill={glassesLens} opacity="0.6" />
            <rect x="24" y="19" width="2" height="2" fill="white" opacity="0.4" />
            <rect x="35" y="18" width="6" height="5" fill={glassesLens} opacity="0.6" />
            <rect x="36" y="19" width="2" height="2" fill="white" opacity="0.4" />
            <rect x="23" y="18" width="1" height="5" fill={glassesFrame} />
            <rect x="29" y="18" width="1" height="5" fill={glassesFrame} />
            <rect x="34" y="18" width="1" height="5" fill={glassesFrame} />
            <rect x="40" y="18" width="1" height="5" fill={glassesFrame} />
            <rect x="30" y="19" width="4" height="1" fill={glassesFrame} />
        </g>
    );

    const LegsStanding = () => (
        <g>
            <rect x="24" y="56" width="6" height="16" fill={pants} />
            <rect x="34" y="56" width="6" height="16" fill={pants} />
            <rect x="23" y="72" width="8" height="3" fill={shoes} />
            <rect x="34" y="72" width="8" height="3" fill={shoes} />
        </g>
    );

    const LegsWalking = () => (
        <g>
            <animateTransform
                attributeName="transform"
                type="translate"
                values="0 0; 0 -1; 0 0"
                dur="0.4s"
                repeatCount="indefinite"
            />
            {/* Left Leg */}
            <rect x="24" y="56" width="6" height="16" fill={pants}>
                <animate attributeName="height" values="16;14;16" dur="0.4s" repeatCount="indefinite" />
            </rect>
            <rect x="23" y="72" width="8" height="3" fill={shoes}>
                <animate attributeName="y" values="72;70;72" dur="0.4s" repeatCount="indefinite" />
            </rect>

            {/* Right Leg */}
            <rect x="34" y="56" width="6" height="16" fill={pants}>
                <animate attributeName="height" values="14;16;14" dur="0.4s" repeatCount="indefinite" />
            </rect>
            <rect x="34" y="72" width="8" height="3" fill={shoes}>
                <animate attributeName="y" values="70;72;70" dur="0.4s" repeatCount="indefinite" />
            </rect>
        </g>
    );

    const SpeechBubble = ({ text }) => (
        <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            className="absolute -top-24 left-1/2 -translate-x-1/2 bg-white text-slate-900 p-3 rounded-xl shadow-xl border-2 border-slate-900 min-w-[150px] text-center z-50 pointer-events-none"
        >
            <p className="font-mono text-xs font-bold leading-tight">{text}</p>
            {/* Bubble Tail */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-r-2 border-b-2 border-slate-900 transform rotate-45"></div>
        </motion.div>
    );

    // --- RENDER LOGIC ---

    const renderAvatarBody = () => {
        if (state === 'walking' || (state === 'idle' && idleAction === 'none')) {
            return (
                <>
                    <HeadFront />
                    {/* Front Body */}
                    <rect x="22" y="36" width="20" height="20" fill={jacket} />
                    <rect x="30" y="36" width="4" height="20" fill={shirt} />
                    <rect x="30" y="36" width="1" height="20" fill={shirtShadow} />
                    <rect x="22" y="36" width="2" height="20" fill={jacketHighlight} />
                    <rect x="40" y="36" width="2" height="20" fill={jacketHighlight} />
                    <rect x="23" y="48" width="4" height="1" fill={jacketShadow} />
                    <rect x="37" y="48" width="4" height="1" fill={jacketShadow} />

                    {/* Arms Hanging */}
                    <rect x="18" y="38" width="4" height="16" fill={jacket} />
                    <rect x="18" y="54" width="4" height="4" fill={skin} />
                    <rect x="42" y="38" width="4" height="16" fill={jacket} />
                    <rect x="42" y="54" width="4" height="4" fill={skin} />

                    {state === 'walking' ? <LegsWalking /> : <LegsStanding />}
                </>
            );
        }

        if (state === 'idle') {
            let idleContent = null;
            let extraElements = null;

            if (idleAction === 'gameboy') {
                idleContent = (
                    <g>
                        <rect x="20" y="42" width="10" height="4" fill={jacket} />
                        <rect x="34" y="42" width="10" height="4" fill={jacket} />
                        <rect x="28" y="40" width="8" height="10" fill="#94A3B8" />
                        <rect x="29" y="42" width="6" height="4" fill="#10B981" />
                        <rect x="26" y="42" width="2" height="4" fill={skin} />
                        <rect x="36" y="42" width="2" height="4" fill={skin} />
                    </g>
                );
            } else if (idleAction === 'coffee') {
                idleContent = (
                    <g>
                        <rect x="18" y="38" width="4" height="16" fill={jacket} />
                        <rect x="18" y="54" width="4" height="4" fill={skin} />
                        <rect x="42" y="38" width="4" height="10" fill={jacket} />
                        <rect x="40" y="48" width="8" height="2" fill={jacket} />
                        <rect x="38" y="44" width="6" height="8" fill="#F8FAFC" />
                        <rect x="42" y="46" width="2" height="4" fill="#F8FAFC" />
                        <rect x="40" y="48" width="4" height="4" fill={skin} />
                        <g className="animate-pulse">
                            <rect x="39" y="40" width="1" height="3" fill="#FFF" opacity="0.5" />
                            <rect x="41" y="38" width="1" height="3" fill="#FFF" opacity="0.5" />
                        </g>
                    </g>
                );
            } else if (idleAction === 'sleep') {
                extraElements = (
                    <g className="animate-bounce" style={{ animationDuration: '3s' }}>
                        <text x="45" y="10" fontFamily="monospace" fontSize="8" fill="white" opacity="0.8">Z</text>
                        <text x="52" y="6" fontFamily="monospace" fontSize="6" fill="white" opacity="0.6">z</text>
                    </g>
                );
                idleContent = (
                    <g>
                        <rect x="18" y="38" width="4" height="16" fill={jacket} />
                        <rect x="42" y="38" width="4" height="16" fill={jacket} />
                        <rect x="18" y="54" width="4" height="4" fill={skin} />
                        <rect x="42" y="54" width="4" height="4" fill={skin} />
                        <rect x="24" y="14" width="16" height="20" fill={hair} /> {/* Head Bowed */}
                    </g>
                );
            }

            return (
                <>
                    {extraElements}
                    {idleAction === 'sleep' ? null : <HeadFront />}
                    <rect x="22" y="36" width="20" height="20" fill={jacket} />
                    <rect x="30" y="36" width="4" height="20" fill={shirt} />
                    <rect x="30" y="36" width="1" height="20" fill={shirtShadow} />
                    <rect x="22" y="36" width="2" height="20" fill={jacketHighlight} />
                    <rect x="40" y="36" width="2" height="20" fill={jacketHighlight} />
                    <rect x="23" y="48" width="4" height="1" fill={jacketShadow} />
                    <rect x="37" y="48" width="4" height="1" fill={jacketShadow} />
                    <LegsStanding />
                    {idleContent}
                </>
            );
        }

        // Fallback for Working/Reading/Contact
        if (state === 'working') {
            return (
                <>
                    <HeadFront />
                    <rect x="16" y="50" width="32" height="2" fill="#334155" />
                    <rect x="22" y="36" width="20" height="16" fill={jacket} />
                    <rect x="30" y="36" width="4" height="16" fill={shirt} />
                    <rect x="22" y="52" width="20" height="6" fill={pants} />
                    <rect x="20" y="36" width="24" height="14" fill="#1E293B" />
                    <rect x="28" y="40" width="8" height="8" fill="#06B6D4" opacity="0.5" />
                    <rect x="18" y="44" width="4" height="8" fill={jacket} />
                    <rect x="42" y="44" width="4" height="8" fill={jacket} />
                    <rect x="20" y="51" width="6" height="3" fill={skin} />
                    <rect x="38" y="51" width="6" height="3" fill={skin} />
                </>
            );
        }

        if (state === 'reading') {
            return (
                <>
                    <HeadFront />
                    <rect x="22" y="36" width="20" height="20" fill={jacket} />
                    <rect x="30" y="36" width="4" height="20" fill={shirt} />
                    <LegsStanding />
                    <rect x="24" y="48" width="16" height="12" fill="#F1F5F9" />
                    <rect x="24" y="48" width="2" height="12" fill="#475569" />
                    <rect x="38" y="48" width="2" height="12" fill="#475569" />
                    <rect x="20" y="38" width="4" height="12" fill={jacket} />
                    <rect x="40" y="38" width="4" height="12" fill={jacket} />
                    <rect x="22" y="50" width="4" height="4" fill={skin} />
                    <rect x="38" y="50" width="4" height="4" fill={skin} />
                </>
            );
        }

        // Contact State
        return (
            <>
                <HeadFront />
                <rect x="22" y="36" width="20" height="20" fill={jacket} />
                <rect x="30" y="36" width="4" height="20" fill={shirt} />
                <LegsStanding />
                <rect x="18" y="38" width="4" height="14" fill={jacket} />
                <rect x="42" y="38" width="4" height="14" fill={jacket} />
                <rect x="26" y="46" width="12" height="8" fill="#F8FAFC" />
                <rect x="34" y="48" width="2" height="2" fill="#EF4444" />
                <rect x="24" y="48" width="4" height="4" fill={skin} />
                <rect x="36" y="48" width="4" height="4" fill={skin} />
            </>
        );
    };

    return (
        <div className="relative">
            <AnimatePresence>
                {dialogue && <SpeechBubble text={dialogue} />}
            </AnimatePresence>
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" className="drop-shadow-2xl">
                {renderAvatarBody()}
            </svg>
        </div>
    );
};

export default PixelAvatar;
