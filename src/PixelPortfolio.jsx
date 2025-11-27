import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useSpring, useTransform, useVelocity, useMotionValueEvent } from 'framer-motion';
import { Github, Linkedin, Mail, Terminal, Cpu, Globe, ExternalLink, Code2, ChevronDown, User, Layers, Briefcase, Clock, Send, BookOpen, Monitor } from 'lucide-react';
import PixelAvatar from './components/PixelAvatar';

// --- SECTION WRAPPER ---
const SectionWrapper = ({ children, id, className }) => {
    return (
        <section id={id} className={`min-h-screen flex flex-col justify-center relative ${className}`}>
            {/* Dotted Border Top */}
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" style={{
                backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 8px, rgba(6, 182, 212, 0.3) 8px, rgba(6, 182, 212, 0.3) 16px)'
            }} aria-hidden="true"></div>
            {/* Dotted Border Bottom */}
            <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" style={{
                backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 8px, rgba(6, 182, 212, 0.3) 8px, rgba(6, 182, 212, 0.3) 16px)'
            }} aria-hidden="true"></div>
            <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                {children}
            </motion.div>
        </section>
    );
};

// --- NAVIGATION POINT COMPONENT ---
const NavigationPoint = ({ point, smoothProgress, scrollToSection }) => {
    const backgroundColor = useTransform(
        smoothProgress,
        [point.progress - 0.03, point.progress],
        ["#1e293b", "#06b6d4"]
    );
    const borderColor = useTransform(
        smoothProgress,
        [point.progress - 0.03, point.progress],
        ["#475569", "#22d3ee"]
    );

    return (
        <button
            onClick={() => scrollToSection(point.id)}
            className="absolute z-10 flex items-center group focus:outline-none"
            style={{ top: point.top, left: '50%' }}
            aria-label={`Navigate to ${point.label} section`}
        >
            {/* The Dot on the road with Icon inside */}
            <motion.div
                style={{
                    backgroundColor,
                    borderColor
                }}
                className="w-8 h-8 rounded-full border-2 -ml-[16px] group-hover:scale-125 transition-transform cursor-pointer shadow-lg z-20 bg-slate-900 flex items-center justify-center relative"
            >
                <point.icon 
                    size={14} 
                    className="text-cyan-200 group-hover:text-cyan-400 transition-colors z-10"
                    aria-hidden="true"
                />
            </motion.div>

            {/* Label (Always visible) - Text only */}
            <div className="absolute left-6 opacity-100 transition-opacity text-[10px] font-mono tracking-widest text-cyan-200 bg-slate-900/90 px-2 py-1 rounded border border-slate-800 pointer-events-none whitespace-nowrap">
                {point.label}
            </div>
        </button>
    );
};

// --- MAIN COMPONENT ---

export default function PixelPilotPortfolio() {
    const { scrollY, scrollYProgress } = useScroll();
    const scrollVelocity = useVelocity(scrollY);

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Transform smoothProgress to height percentage for progress bar
    const progressBarHeight = useTransform(smoothProgress, (value) => `${value * 100}%`);

    const [avatarState, setAvatarState] = useState('waving');
    const [avatarDialogue, setAvatarDialogue] = useState("Hi! Welcome");
    const [landingProgress, setLandingProgress] = useState(0);
    const [isLandingLocked, setIsLandingLocked] = useState(true);
    
    // Use refs to track previous values and prevent unnecessary updates
    const previousDialogueRef = useRef(avatarDialogue);
    const previousStateRef = useRef(avatarState);
    const lastUpdateTimeRef = useRef(0);
    const hasSetWalkingDialogueRef = useRef(false);

    // Avatar Position Logic for Landing
    // Avatar starts inside the avatar frame (left column ~34%) and moves to left sidebar (8%) and first checkpoint (15%) as user scrolls
    const avatarXLanding = `${34 - (landingProgress * 26)}%`; // 34% (inside frame) -> 8% (sidebar)
    const avatarYLanding = `${50 - (landingProgress * 35)}%`; // 50% (center) -> 15% (first checkpoint - hero)

    const avatarX = useTransform(smoothProgress,
        [0, 0.12, 0.37, 0.62, 0.82, 0.96, 1],
        ["8%", "8%", "8%", "8%", "8%", "8%", "8%"]
    );

    const avatarY = useTransform(smoothProgress,
        [0, 0.12, 0.37, 0.62, 0.82, 0.96, 1],
        ["15%", "15%", "35%", "55%", "75%", "92%", "92%"]
    );

    const finalAvatarX = isLandingLocked ? avatarXLanding : avatarX;
    const finalAvatarY = isLandingLocked ? avatarYLanding : avatarY;

    // Landing page scroll lock - Avatar walks to sidebar on scroll
    useEffect(() => {
        const handleWheel = (e) => {
            if (isLandingLocked) {
                e.preventDefault();
                setLandingProgress(prev => {
                    const delta = e.deltaY / 800; // Slightly faster progression
                    const newProgress = Math.max(0, Math.min(1, prev + delta));

                    // Change avatar to walking when user starts scrolling (progress > 0)
                    if (newProgress > 0 && prev === 0) {
                        setAvatarState('walking');
                        if (!hasSetWalkingDialogueRef.current) {
                            setAvatarDialogue("Let me show you around!");
                            hasSetWalkingDialogueRef.current = true;
                        }
                    } else if (newProgress > 0 && newProgress < 1) {
                        // Keep walking state during transition - don't update dialogue
                        setAvatarState('walking');
                    }

                    // When avatar reaches sidebar (progress = 1), unlock scrolling
                    if (newProgress >= 1 && prev < 1) {
                        // Small delay to ensure avatar reaches position
                        setTimeout(() => {
                            const backendDialogue = "I build scalable backend systems.";
                            // Update refs FIRST to prevent flickering when scroll handler starts
                            previousDialogueRef.current = backendDialogue;
                            previousStateRef.current = 'idle';
                            lastUpdateTimeRef.current = Date.now() + 200; // Add extra buffer
                            hasSetWalkingDialogueRef.current = false; // Reset for next time
                            
                            // Then update state
                            setIsLandingLocked(false);
                            setAvatarState('idle');
                            setAvatarDialogue(backendDialogue);
                            
                            // Smooth scroll to hero section
                            document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });
                        }, 300);
                    }

                    return newProgress;
                });
            }
        };

        window.addEventListener('wheel', handleWheel, { passive: false });
        return () => window.removeEventListener('wheel', handleWheel, { passive: false });
    }, [isLandingLocked]);

    // Logic to determine Avatar State and Dialogue - NO WALKING, keep section animations
    useMotionValueEvent(scrollYProgress, "change", (progress) => {
        if (isLandingLocked) return;

        // Debounce updates to prevent flickering (only update every 150ms)
        const now = Date.now();
        if (now - lastUpdateTimeRef.current < 150) return;
        
        let newState = avatarState;
        let newDialogue = avatarDialogue;
        
        // Update based on section - match checkpoint progress values
        // Using checkpoint progress values for consistency
        if (progress < 0.12) {
            newState = 'idle';
            newDialogue = "I build scalable backend systems.";
        } else if (progress < 0.37) {
            newState = 'reading';
            newDialogue = "Here are the tools I use to build.";
        } else if (progress < 0.62) {
            newState = 'working';
            newDialogue = "Check out some of my recent projects.";
        } else if (progress < 0.82) {
            newState = 'reading';
            newDialogue = "My professional journey so far.";
        } else if (progress < 0.96) {
            newState = 'reading';
            newDialogue = "My professional journey so far.";
        } else {
            newState = 'contact';
            newDialogue = "Let's build something together!";
        }
        
        // Only update if state or dialogue actually changed
        // Also check if dialogue is different from current to prevent unnecessary updates
        if ((newState !== previousStateRef.current || newDialogue !== previousDialogueRef.current) &&
            newDialogue !== avatarDialogue) {
            previousStateRef.current = newState;
            previousDialogueRef.current = newDialogue;
            lastUpdateTimeRef.current = now;
            setAvatarState(newState);
            setAvatarDialogue(newDialogue);
        }
    });

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-cyan-500 selection:text-slate-900 overflow-x-hidden">

            {/* --- AVATAR OVERLAY --- */}
            <motion.div
                style={{
                    left: finalAvatarX,
                    top: finalAvatarY,
                    x: "-50%",
                    y: "-50%"
                }}
                className="fixed z-50 pointer-events-none hidden md:block"
            >
                <div className={`transform ${isLandingLocked ? 'scale-[2.5]' : 'scale-150'}`}>
                    <PixelAvatar 
                        state={avatarState} 
                        dialogue={isLandingLocked && landingProgress === 0 && avatarState === 'waving' ? "Hi! Welcome" : avatarDialogue} 
                    />
                </div>
            </motion.div>

            {/* --- MINIMAL SIDEBAR (Navigation Rail) --- */}
            <div className="hidden lg:block fixed left-0 top-0 h-full w-24 border-r border-slate-800 bg-slate-950/80 backdrop-blur-sm z-40" style={{ opacity: 1, transition: 'opacity 0.5s' }}>

                <div className="relative h-full w-full flex justify-center">

                    {/* THE MAIN ROAD (Minimal Line) */}
                    <div className="absolute h-full w-[2px] bg-slate-800 flex justify-center">
                        {/* The Lit Path (Progress Bar) */}
                        <motion.div
                            style={{ height: progressBarHeight }}
                            className="w-full bg-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.8)] absolute top-0"
                        />
                    </div>

                    {/* CHECKPOINTS (Interactive Navigation) */}
                    {[
                        { top: '15%', progress: 0.12, icon: User, label: "Start", id: "hero" },
                        { top: '35%', progress: 0.37, icon: Layers, label: "Stack", id: "stack" },
                        { top: '55%', progress: 0.62, icon: Briefcase, label: "Work", id: "projects" },
                        { top: '75%', progress: 0.82, icon: Clock, label: "Hist", id: "experience" },
                        { top: '92%', progress: 0.96, icon: Send, label: "End", id: "contact" }
                    ].map((point, i) => (
                        <NavigationPoint
                            key={i}
                            point={point}
                            smoothProgress={smoothProgress}
                            scrollToSection={scrollToSection}
                        />
                    ))}

                </div>
            </div>

            {/* --- MAIN CONTENT AREA --- */}
            <main className="lg:ml-24 w-full lg:w-[calc(100%-6rem)] relative">

                {/* Mobile Nav Header */}
                <nav className="lg:hidden fixed top-0 w-full bg-slate-950/90 backdrop-blur-md border-b border-slate-800 z-40 p-4 flex justify-between items-center" role="navigation" aria-label="Main navigation">
                    <span className="font-mono text-cyan-400 font-bold">DEV.PIXEL</span>
                    <div className="flex gap-4">
                        <a href="#contact" className="text-sm hover:text-cyan-400" aria-label="Navigate to contact section">Contact</a>
                    </div>
                </nav>

                {/* LANDING SECTION */}
                <section id="landing" className="h-screen flex items-center justify-center relative overflow-hidden" aria-label="Landing section">
                    {/* Pixel Art Background Grid */}
                    <div className="absolute inset-0 opacity-10" aria-hidden="true">
                        <div className="absolute inset-0" style={{
                            backgroundImage: `
                                linear-gradient(rgba(6, 182, 212, 0.15) 2px, transparent 2px),
                                linear-gradient(90deg, rgba(6, 182, 212, 0.15) 2px, transparent 2px)
                            `,
                            backgroundSize: '32px 32px',
                            animation: 'gridMove 20s linear infinite'
                        }}></div>
                    </div>

                    {/* Pixel Art Border Decoration */}
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" style={{
                        backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 8px, rgba(6, 182, 212, 0.3) 8px, rgba(6, 182, 212, 0.3) 16px)'
                    }} aria-hidden="true"></div>
                    <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" style={{
                        backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 8px, rgba(6, 182, 212, 0.3) 8px, rgba(6, 182, 212, 0.3) 16px)'
                    }} aria-hidden="true"></div>

                    {/* Gradient Orbs - Subtle */}
                    <motion.div
                        className="absolute top-1/4 right-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"
                        animate={{
                            x: [0, 50, 0],
                            y: [0, 30, 0],
                            scale: [1, 1.1, 1],
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        aria-hidden="true"
                    />

                    {/* Main Content - Split Layout */}
                    <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            {/* Left Side - Avatar Frame (stays visible) */}
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="hidden md:flex flex-col items-center justify-center relative"
                            >
                                {/* Pixel Art Frame - Always visible */}
                                <div className="relative">
                                    {/* Pixel border effect */}
                                    <div className="absolute -inset-4 border-4 border-cyan-500/30" style={{
                                        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
                                        boxShadow: 'inset 0 0 20px rgba(6, 182, 212, 0.2), 0 0 40px rgba(6, 182, 212, 0.1)'
                                    }}></div>
                                    <div className="relative bg-slate-900/50 backdrop-blur-sm p-8 border-4 border-cyan-500/50">
                                        {/* Pixel dots decoration */}
                                        <div className="absolute -top-2 -left-2 w-4 h-4 bg-cyan-400"></div>
                                        <div className="absolute -top-2 -right-2 w-4 h-4 bg-cyan-400"></div>
                                        <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-cyan-400"></div>
                                        <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-cyan-400"></div>
                                        
                                        {/* Placeholder - invisible avatar for spacing */}
                                        <div className="transform scale-[2.5] opacity-0">
                                            <PixelAvatar state="waving" dialogue={undefined} />
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Scroll Indicator Below Avatar Frame */}
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 1.2 }}
                                    className="mt-8 flex flex-col items-center gap-3"
                                >
                                    <motion.button
                                        animate={{ y: [0, 8, 0] }}
                                        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                                        onClick={() => scrollToSection('hero')}
                                        className="flex flex-col items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer group"
                                        aria-label="Scroll to next section"
                                    >
                                        <span className="text-sm font-mono tracking-widest uppercase font-bold">SCROLL</span>
                                        <motion.div
                                            animate={{ y: [0, 4, 0] }}
                                            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                                        >
                                            <ChevronDown size={24} className="group-hover:text-cyan-300 transition-colors drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]" aria-hidden="true" />
                                        </motion.div>
                                        <div className="w-1 h-10 bg-gradient-to-b from-cyan-500 to-transparent"></div>
                                    </motion.button>
                                </motion.div>
                            </motion.div>

                            {/* Right Side - Text Content */}
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className="text-center md:text-left space-y-6"
                            >
                                {/* Pixel Art Badge */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.6 }}
                                    className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border-2 border-cyan-500/50 backdrop-blur-sm"
                                    style={{
                                        boxShadow: 'inset 0 0 10px rgba(6, 182, 212, 0.2), 0 0 20px rgba(6, 182, 212, 0.1)'
                                    }}
                                >
                                    <div className="w-3 h-3 bg-cyan-400" style={{ imageRendering: 'pixelated' }}></div>
                                    <span className="text-cyan-400 text-sm font-mono tracking-wider">AVAILABLE FOR OPPORTUNITIES</span>
                                </motion.div>

                                {/* Main Heading with Pixel Art Style */}
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.8 }}
                                    className="space-y-4"
                                >
                                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
                                        <span className="block text-slate-100 mb-2">Hi, I'm</span>
                                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500 animate-gradient">
                                            Mustafa Kamran
                                        </span>
                                    </h1>
                                    <div className="flex items-center gap-3 justify-center md:justify-start">
                                        <div className="h-1 w-12 bg-cyan-500"></div>
                                        <h2 className="text-2xl md:text-3xl text-cyan-300 font-mono">Software Engineer</h2>
                                        <div className="h-1 w-12 bg-cyan-500"></div>
                                    </div>
                                </motion.div>

                                {/* Description */}
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.8, delay: 1 }}
                                    className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-xl mx-auto md:mx-0"
                                >
                                    Final-year CS student building scalable backend systems with AI. 
                                    <span className="text-cyan-400 font-semibold"> Crafting automation workflows</span> that save hours for real teams.
                                </motion.p>

                                {/* CTA Buttons with Pixel Art Style */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 1.2 }}
                                    className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-4"
                                >
                                    <motion.button
                                        whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(6, 182, 212, 0.5)' }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => scrollToSection('hero')}
                                        className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-slate-950 font-bold border-2 border-cyan-400 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all flex items-center gap-2"
                                        style={{ imageRendering: 'pixelated' }}
                                        aria-label="Explore portfolio"
                                    >
                                        <span>EXPLORE</span>
                                        <ChevronDown size={18} aria-hidden="true" />
                                    </motion.button>
                                    <motion.a
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        href="mailto:mmustafakamran@gmail.com"
                                        className="px-8 py-4 border-2 border-cyan-500/50 text-cyan-400 font-bold hover:bg-cyan-500/10 transition-all flex items-center gap-2 backdrop-blur-sm"
                                        style={{ imageRendering: 'pixelated' }}
                                        aria-label="Send email"
                                    >
                                        <Mail size={18} aria-hidden="true" />
                                        <span>GET IN TOUCH</span>
                                    </motion.a>
                                </motion.div>

                                {/* Tech Stack with Pixel Style */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.8, delay: 1.4 }}
                                    className="flex flex-wrap items-center justify-center md:justify-start gap-2 pt-6"
                                >
                                    {['React', 'TypeScript', 'Python', 'AI/LLMs'].map((tech, i) => (
                                        <motion.span
                                            key={tech}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: 1.6 + i * 0.1 }}
                                            className="px-3 py-1.5 bg-slate-900/70 border-2 border-slate-700 text-xs font-mono text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 transition-colors"
                                            style={{ imageRendering: 'pixelated' }}
                                        >
                                            {tech}
                                        </motion.span>
                                    ))}
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>

                </section>

                {/* SECTION 1: HERO */}
                <SectionWrapper id="hero" className="px-6 md:px-20 py-20 border-b border-slate-900/50">
                    <div className="max-w-3xl">
                        <div className="flex items-center gap-2 text-cyan-400 font-mono mb-6 bg-cyan-950/30 w-fit px-3 py-1 rounded-full border border-cyan-900">
                            <Terminal size={14} aria-hidden="true" />
                            <span className="text-xs">System.Initialize()</span>
                        </div>
                        <h1 className="text-5xl md:text-8xl font-bold tracking-tight mb-8 text-slate-100 leading-tight">
                            Muhammad <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500">
                                Mustafa Kamran
                            </span>
                        </h1>
                        <h2 className="text-2xl text-cyan-200 mb-6 font-mono">Software Engineer</h2>
                        <p className="text-xl text-slate-400 leading-relaxed max-w-2xl mb-10 border-l-2 border-cyan-500/50 pl-6">
                            Final-year CS student obsessed with fusing modern AI (LLMs, RAG) with reliable backend systems.
                            Enjoy orchestrating workflows that save hours for real teams.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <a href="mailto:mmustafakamran@gmail.com" className="px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all flex items-center gap-2 group" aria-label="Send email to Muhammad Mustafa Kamran">
                                <Mail size={18} className="group-hover:animate-bounce" aria-hidden="true" /> Contact Me
                            </a>
                            <a href="https://github.com/MMMustafaKamran" target="_blank" rel="noopener noreferrer" className="px-8 py-4 border border-slate-700 hover:border-cyan-500/50 hover:bg-slate-900 text-slate-300 rounded transition-colors flex items-center gap-2" aria-label="Visit GitHub profile (opens in new tab)">
                                <Github size={18} aria-hidden="true" /> GitHub
                            </a>
                        </div>
                    </div>

                    {/* Scroll indicator */}
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500"
                        aria-hidden="true"
                    >
                        <ChevronDown aria-hidden="true" />
                    </motion.div>
                </SectionWrapper>

                {/* SECTION 2: STACK */}
                <SectionWrapper id="stack" className="px-6 md:px-20 py-24 border-b border-slate-900/50 bg-slate-950/30">
                    <h2 className="text-sm font-mono text-cyan-500 mb-8 uppercase tracking-widest flex items-center gap-2">
                        <Layers size={14} aria-hidden="true" /> Tech Stack
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pl-0 md:pl-32"> {/* Added padding-left for avatar space */}
                        {['JavaScript', 'TypeScript', 'Python', 'React', 'Django REST', 'Node.js', 'PostgreSQL', 'Docker', 'LLMs', 'RAG', 'Tailwind', 'Framer Motion'].map((tech, i) => (
                            <motion.div
                                key={tech}
                                whileHover={{ scale: 1.05, borderColor: "rgba(6,182,212,0.5)" }}
                                className="p-4 border border-slate-800 bg-slate-900/50 rounded flex items-center gap-3 cursor-default group"
                            >
                                <div className="w-2 h-2 bg-slate-700 group-hover:bg-cyan-400 rounded-full transition-colors shadow-[0_0_10px_rgba(6,182,212,0)] group-hover:shadow-[0_0_10px_rgba(6,182,212,0.8)]" />
                                <span className="font-mono text-sm group-hover:text-white transition-colors">{tech}</span>
                            </motion.div>
                        ))}
                    </div>
                </SectionWrapper>

                {/* SECTION 3: WORK */}
                <SectionWrapper id="projects" className="px-6 md:px-20 py-32">
                    <div className="mb-16 flex items-end gap-4 pl-0 md:pl-32">
                        <h2 className="text-4xl md:text-6xl font-bold">Selected Work</h2>
                        <div className="h-4 w-4 rounded-full bg-cyan-500 mb-2 animate-pulse" aria-hidden="true"></div>
                    </div>

                    <div className="space-y-32 pl-0 md:pl-32">
                        {/* Project 1 */}
                        <div className="group relative grid md:grid-cols-12 gap-8 items-center">
                            <div className="md:col-span-7 relative z-10">
                                <div className="rounded-xl overflow-hidden border border-slate-800 bg-slate-900 aspect-video group-hover:border-cyan-500/50 transition-all duration-500 shadow-2xl group-hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] flex items-center justify-center" aria-hidden="true">
                                    <BookOpen size={64} className="text-slate-700 group-hover:text-cyan-400 transition-colors duration-500" aria-hidden="true" />
                                </div>
                            </div>
                            <div className="md:col-span-5 relative z-20 md:-ml-12">
                                <div className="bg-slate-900/90 backdrop-blur border border-slate-800 p-8 rounded-xl shadow-xl hover:border-cyan-500/30 transition-colors">
                                    <h3 className="text-2xl font-bold text-cyan-400 mb-4">ParhaiPartner</h3>
                                    <p className="text-slate-400 mb-6 leading-relaxed">
                                        AI-powered academic workspace with 500+ users. Features a Retrieval-Augmented Generation tutor that ingests course material to craft quizzes and study plans.
                                    </p>
                                    <ul className="flex flex-wrap gap-3 text-xs font-mono text-slate-500 mb-8">
                                        <li className="bg-slate-800 px-2 py-1 rounded">React</li>
                                        <li className="bg-slate-800 px-2 py-1 rounded">Django REST</li>
                                        <li className="bg-slate-800 px-2 py-1 rounded">LLMs/RAG</li>
                                    </ul>
                                    <div className="flex gap-6">
                                        <a href="https://parhaipartner.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-bold hover:text-cyan-400 transition-colors" aria-label="View ParhaiPartner live demo (opens in new tab)"><ExternalLink size={16} aria-hidden="true" /> Live Demo</a>
                                        <a href="https://github.com/MMMustafaKamran/parhaipartner" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-bold hover:text-cyan-400 transition-colors" aria-label="View ParhaiPartner source code on GitHub (opens in new tab)"><Github size={16} aria-hidden="true" /> Source Code</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Project 2 */}
                        <div className="group relative grid md:grid-cols-12 gap-8 items-center">
                            <div className="md:col-span-5 relative z-20 md:text-right md:-mr-12 order-2 md:order-1">
                                <div className="bg-slate-900/90 backdrop-blur border border-slate-800 p-8 rounded-xl shadow-xl hover:border-cyan-500/30 transition-colors">
                                    <h3 className="text-2xl font-bold text-cyan-400 mb-4">Library Management System</h3>
                                    <p className="text-slate-400 mb-6 leading-relaxed">
                                        Flask + SQLite system streamlining book circulation. Achieved 90% automated test coverage via PyTest + Playwright integration suites.
                                    </p>
                                    <ul className="flex flex-wrap gap-3 text-xs font-mono text-slate-500 mb-8 md:justify-end">
                                        <li className="bg-slate-800 px-2 py-1 rounded">Flask</li>
                                        <li className="bg-slate-800 px-2 py-1 rounded">SQLite</li>
                                        <li className="bg-slate-800 px-2 py-1 rounded">PyTest</li>
                                    </ul>
                                    <div className="flex gap-6 md:justify-end">
                                        <a href="https://github.com/MMMustafaKamran/library-management" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-bold hover:text-cyan-400 transition-colors" aria-label="View Library Management System source code on GitHub (opens in new tab)"><Github size={16} aria-hidden="true" /> Source Code</a>
                                    </div>
                                </div>
                            </div>
                            <div className="md:col-span-7 relative z-10 order-1 md:order-2">
                                <div className="rounded-xl overflow-hidden border border-slate-800 bg-slate-900 aspect-video group-hover:border-cyan-500/50 transition-all duration-500 shadow-2xl group-hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] flex items-center justify-center" aria-hidden="true">
                                    <Code2 size={64} className="text-slate-700 group-hover:text-cyan-400 transition-colors duration-500" aria-hidden="true" />
                                </div>
                            </div>
                        </div>

                        {/* Project 3 */}
                        <div className="group relative grid md:grid-cols-12 gap-8 items-center">
                            <div className="md:col-span-7 relative z-10">
                                <div className="rounded-xl overflow-hidden border border-slate-800 bg-slate-900 aspect-video group-hover:border-cyan-500/50 transition-all duration-500 shadow-2xl group-hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] flex items-center justify-center" aria-hidden="true">
                                    <Monitor size={64} className="text-slate-700 group-hover:text-cyan-400 transition-colors duration-500" aria-hidden="true" />
                                </div>
                            </div>
                            <div className="md:col-span-5 relative z-20 md:-ml-12">
                                <div className="bg-slate-900/90 backdrop-blur border border-slate-800 p-8 rounded-xl shadow-xl hover:border-cyan-500/30 transition-colors">
                                    <h3 className="text-2xl font-bold text-cyan-400 mb-4">Job Portal</h3>
                                    <p className="text-slate-400 mb-6 leading-relaxed">
                                        JavaFX desktop portal built on MVC architecture. Implemented applicant & recruiter dashboards with filtering, approvals, and analytics.
                                    </p>
                                    <ul className="flex flex-wrap gap-3 text-xs font-mono text-slate-500 mb-8">
                                        <li className="bg-slate-800 px-2 py-1 rounded">JavaFX</li>
                                        <li className="bg-slate-800 px-2 py-1 rounded">MySQL</li>
                                        <li className="bg-slate-800 px-2 py-1 rounded">MVC</li>
                                    </ul>
                                    <div className="flex gap-6">
                                        <a href="https://github.com/MMMustafaKamran/job-portal" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-bold hover:text-cyan-400 transition-colors" aria-label="View Job Portal source code on GitHub (opens in new tab)"><Github size={16} aria-hidden="true" /> Source Code</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </SectionWrapper>

                {/* SECTION 4: EXPERIENCE */}
                <SectionWrapper id="experience" className="px-6 md:px-20 py-24 bg-slate-900/20">
                    <h2 className="text-3xl font-bold mb-16 flex items-center gap-4 pl-0 md:pl-32">
                        <Clock className="text-cyan-500" aria-hidden="true" /> Experience
                    </h2>
                    <div className="space-y-16 border-l-2 border-slate-800 ml-3 pl-10 relative md:ml-32">
                        {[
                            { role: 'Software Engineering Intern', company: 'CARE', time: 'Jun 2025 - Aug 2025', desc: 'Engineered AI call automation agents with RAG & n8n. Reduced manual processing by 70%. Integrated LLMs with Retrieval-Augmented Generation workflows handling 1K+ daily interactions.' },
                            { role: 'Software Engineering Intern', company: 'ElementalTV', time: 'May 2025 - Jun 2025', desc: 'Built auto-data pipelines for AdOps processing 10k+ daily metrics. Automated REST integrations (Google Ads, Meta Business Suite) with Python ETL.' }
                        ].map((job, i) => (
                            <article key={i} className="relative group">
                                {/* Timeline Dot */}
                                <span className="absolute -left-[51px] top-1 h-6 w-6 rounded-full border-4 border-slate-900 bg-slate-700 group-hover:bg-cyan-500 transition-colors shadow-[0_0_0_4px_rgba(15,23,42,1)]" aria-hidden="true"></span>

                                <h3 className="text-2xl font-bold text-slate-200 group-hover:text-cyan-400 transition-colors">{job.role}</h3>
                                <p className="text-cyan-500 font-mono text-sm mb-4 mt-1">{job.company} | {job.time}</p>
                                <p className="text-slate-400 max-w-lg leading-relaxed">{job.desc}</p>
                            </article>
                        ))}
                    </div>
                </SectionWrapper>

                {/* SECTION 5: FOOTER */}
                <SectionWrapper id="contact" className="min-h-[70vh] px-6 md:px-20 bg-gradient-to-b from-slate-950 to-slate-900 border-t border-slate-900">
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="text-5xl md:text-7xl font-bold mb-8">Ready to launch?</h2>
                        <p className="text-slate-400 mb-12 text-xl leading-relaxed">
                            I'm currently available for freelance work and open to new opportunities. Let's build something extraordinary.
                        </p>
                        <a href="mailto:mmustafakamran@gmail.com" className="inline-block px-10 py-5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xl rounded shadow-[0_0_30px_rgba(6,182,212,0.4)] transition-all transform hover:-translate-y-1" aria-label="Send email to Muhammad Mustafa Kamran">
                            Say Hello
                        </a>

                        <div className="flex justify-center gap-10 mt-20 text-slate-500">
                            <a href="https://github.com/MMMustafaKamran" target="_blank" rel="noopener noreferrer" aria-label="Visit GitHub profile (opens in new tab)">
                                <Github size={24} className="hover:text-cyan-400 cursor-pointer transition-colors hover:scale-110 transform" aria-hidden="true" />
                            </a>
                            <a href="https://www.linkedin.com/in/mustafaKamran03" target="_blank" rel="noopener noreferrer" aria-label="Visit LinkedIn profile (opens in new tab)">
                                <Linkedin size={24} className="hover:text-cyan-400 cursor-pointer transition-colors hover:scale-110 transform" aria-hidden="true" />
                            </a>
                            <a href="https://github.com/MMMustafaKamran" target="_blank" rel="noopener noreferrer" aria-label="Visit personal website (opens in new tab)">
                                <Globe size={24} className="hover:text-cyan-400 cursor-pointer transition-colors hover:scale-110 transform" aria-hidden="true" />
                            </a>
                        </div>

                        <div className="mt-24 text-xs font-mono text-slate-600">
                            Designed & Built by Muhammad Mustafa Kamran <br />
                            Pixel Pilot Engine v2.0
                        </div>
                    </div>
                </SectionWrapper>

            </main>
        </div>
    );
}
