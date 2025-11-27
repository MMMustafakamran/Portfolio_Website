import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, useTransform, useVelocity, useMotionValueEvent } from 'framer-motion';
import { Github, Linkedin, Mail, Terminal, Cpu, Globe, ExternalLink, Code2, ChevronDown, User, Layers, Briefcase, Clock, Send, BookOpen, Monitor } from 'lucide-react';
import PixelAvatar from './components/PixelAvatar';

// --- SECTION WRAPPER ---
const SectionWrapper = ({ children, id, className }) => {
    return (
        <section id={id} className={`min-h-screen flex flex-col justify-center ${className}`}>
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

// --- MAIN COMPONENT ---

export default function PixelPilotPortfolio() {
    const { scrollY, scrollYProgress } = useScroll();
    const scrollVelocity = useVelocity(scrollY);

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const [avatarState, setAvatarState] = useState('idle');
    const [avatarDialogue, setAvatarDialogue] = useState('');

    // Avatar Position Logic
    // We'll use fixed positioning relative to the viewport, but controlled by scroll progress
    // to simulate "walking" through the page.

    // X Position: Moves from center (Hero) to side (Stack) and stays there
    const avatarX = useTransform(smoothProgress,
        [0, 0.1, 0.2, 0.8, 1],
        ["50%", "50%", "10%", "10%", "50%"] // Center -> Center -> Left -> Left -> Center
    );

    // Y Position: Moves down slightly as we scroll
    const avatarY = useTransform(smoothProgress,
        [0, 0.2, 0.8, 1],
        ["20%", "50%", "50%", "80%"]
    );

    // Logic to determine Avatar State and Dialogue
    useMotionValueEvent(scrollY, "change", (latest) => {
        const velocity = scrollVelocity.get();
        const progress = scrollYProgress.get();

        // 1. Sliding/Walking State
        if (Math.abs(velocity) > 5) {
            setAvatarState('walking');
            setAvatarDialogue(''); // Silence while moving
        } else {
            const timer = setTimeout(() => {
                if (progress < 0.1) {
                    setAvatarState('idle');
                    setAvatarDialogue("Hi! I'm Mustafa, welcome to my portfolio.");
                } else if (progress < 0.3) {
                    setAvatarState('reading');
                    setAvatarDialogue("Here are the tools I use to build.");
                } else if (progress < 0.6) {
                    setAvatarState('working');
                    setAvatarDialogue("Check out some of my recent projects.");
                } else if (progress < 0.85) {
                    setAvatarState('reading');
                    setAvatarDialogue("My professional journey so far.");
                } else {
                    setAvatarState('contact');
                    setAvatarDialogue("Let's build something together!");
                }
            }, 200);
            return () => clearTimeout(timer);
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
                    left: avatarX,
                    top: avatarY,
                    x: "-50%", // Center the avatar on its coordinate
                    y: "-50%"
                }}
                className="fixed z-50 pointer-events-none hidden md:block transition-all duration-500 ease-out"
            >
                <div className="transform scale-150">
                    <PixelAvatar state={avatarState} dialogue={avatarDialogue} />
                </div>
            </motion.div>

            {/* --- MINIMAL SIDEBAR (Navigation Rail) --- */}
            <div className="hidden lg:block fixed left-0 top-0 h-full w-24 border-r border-slate-800 bg-slate-950/80 backdrop-blur-sm z-40">

                <div className="relative h-full w-full flex justify-center">

                    {/* THE MAIN ROAD (Minimal Line) */}
                    <div className="absolute h-full w-[2px] bg-slate-800 flex justify-center">
                        {/* The Lit Path (Progress Bar) */}
                        <motion.div
                            style={{ height: smoothProgress.get() * 100 + "%" }}
                            className="w-full bg-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.8)] absolute top-0"
                        />
                    </div>

                    {/* CHECKPOINTS (Interactive Navigation) */}
                    {[
                        { top: '5%', icon: User, label: "Start", id: "hero" },
                        { top: '25%', icon: Layers, label: "Stack", id: "stack" },
                        { top: '50%', icon: Briefcase, label: "Work", id: "projects" },
                        { top: '80%', icon: Clock, label: "Hist", id: "experience" },
                        { top: '95%', icon: Send, label: "End", id: "contact" }
                    ].map((point, i) => (
                        <button
                            key={i}
                            onClick={() => scrollToSection(point.id)}
                            className="absolute z-10 flex items-center group focus:outline-none"
                            style={{ top: point.top, left: '50%' }}
                        >
                            {/* The Dot on the road */}
                            <motion.div
                                style={{
                                    backgroundColor: useTransform(smoothProgress, [parseFloat(point.top) / 100 - 0.05, parseFloat(point.top) / 100], ["#1e293b", "#06b6d4"]),
                                    borderColor: useTransform(smoothProgress, [parseFloat(point.top) / 100 - 0.05, parseFloat(point.top) / 100], ["#475569", "#22d3ee"])
                                }}
                                className="w-3 h-3 rounded-full border-2 -ml-[6px] group-hover:scale-150 transition-transform cursor-pointer shadow-lg z-20 bg-slate-900"
                            />

                            {/* Tooltip Label (Shows on Hover) */}
                            <div className="absolute left-6 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2 text-[10px] font-mono tracking-widest text-cyan-200 bg-slate-900/90 px-2 py-1 rounded border border-slate-800 pointer-events-none whitespace-nowrap">
                                <point.icon size={12} />
                                {point.label}
                            </div>
                        </button>
                    ))}

                </div>
            </div>

            {/* --- MAIN CONTENT AREA --- */}
            <main className="lg:ml-24 w-full lg:w-[calc(100%-6rem)] relative">

                {/* Mobile Nav Header */}
                <nav className="lg:hidden fixed top-0 w-full bg-slate-950/90 backdrop-blur-md border-b border-slate-800 z-40 p-4 flex justify-between items-center">
                    <span className="font-mono text-cyan-400 font-bold">DEV.PIXEL</span>
                    <div className="flex gap-4">
                        <a href="#contact" className="text-sm hover:text-cyan-400">Contact</a>
                    </div>
                </nav>

                {/* SECTION 1: HERO */}
                <SectionWrapper id="hero" className="px-6 md:px-20 py-20 border-b border-slate-900/50">
                    <div className="max-w-3xl">
                        <div className="flex items-center gap-2 text-cyan-400 font-mono mb-6 bg-cyan-950/30 w-fit px-3 py-1 rounded-full border border-cyan-900">
                            <Terminal size={14} />
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
                            <a href="mailto:mmustafakamran@gmail.com" className="px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all flex items-center gap-2 group">
                                <Mail size={18} className="group-hover:animate-bounce" /> Contact Me
                            </a>
                            <a href="https://github.com/MMMustafaKamran" target="_blank" rel="noopener noreferrer" className="px-8 py-4 border border-slate-700 hover:border-cyan-500/50 hover:bg-slate-900 text-slate-300 rounded transition-colors flex items-center gap-2">
                                <Github size={18} /> GitHub
                            </a>
                        </div>
                    </div>

                    {/* Scroll indicator */}
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500"
                    >
                        <ChevronDown />
                    </motion.div>
                </SectionWrapper>

                {/* SECTION 2: STACK */}
                <SectionWrapper id="stack" className="px-6 md:px-20 py-24 border-b border-slate-900/50 bg-slate-950/30">
                    <h2 className="text-sm font-mono text-cyan-500 mb-8 uppercase tracking-widest flex items-center gap-2">
                        <Layers size={14} /> Tech Stack
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
                        <div className="h-4 w-4 rounded-full bg-cyan-500 mb-2 animate-pulse"></div>
                    </div>

                    <div className="space-y-32 pl-0 md:pl-32">
                        {/* Project 1 */}
                        <div className="group relative grid md:grid-cols-12 gap-8 items-center">
                            <div className="md:col-span-7 relative z-10">
                                <div className="rounded-xl overflow-hidden border border-slate-800 bg-slate-900 aspect-video group-hover:border-cyan-500/50 transition-all duration-500 shadow-2xl group-hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] flex items-center justify-center">
                                    <BookOpen size={64} className="text-slate-700 group-hover:text-cyan-400 transition-colors duration-500" />
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
                                        <a href="#" className="flex items-center gap-2 text-sm font-bold hover:text-cyan-400 transition-colors"><ExternalLink size={16} /> Live Demo</a>
                                        <a href="#" className="flex items-center gap-2 text-sm font-bold hover:text-cyan-400 transition-colors"><Github size={16} /> Source Code</a>
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
                                        <a href="#" className="flex items-center gap-2 text-sm font-bold hover:text-cyan-400 transition-colors"><ExternalLink size={16} /> Live Demo</a>
                                        <a href="#" className="flex items-center gap-2 text-sm font-bold hover:text-cyan-400 transition-colors"><Github size={16} /> Source Code</a>
                                    </div>
                                </div>
                            </div>
                            <div className="md:col-span-7 relative z-10 order-1 md:order-2">
                                <div className="rounded-xl overflow-hidden border border-slate-800 bg-slate-900 aspect-video group-hover:border-cyan-500/50 transition-all duration-500 shadow-2xl group-hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] flex items-center justify-center">
                                    <Code2 size={64} className="text-slate-700 group-hover:text-cyan-400 transition-colors duration-500" />
                                </div>
                            </div>
                        </div>

                        {/* Project 3 */}
                        <div className="group relative grid md:grid-cols-12 gap-8 items-center">
                            <div className="md:col-span-7 relative z-10">
                                <div className="rounded-xl overflow-hidden border border-slate-800 bg-slate-900 aspect-video group-hover:border-cyan-500/50 transition-all duration-500 shadow-2xl group-hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] flex items-center justify-center">
                                    <Monitor size={64} className="text-slate-700 group-hover:text-cyan-400 transition-colors duration-500" />
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
                                        <a href="#" className="flex items-center gap-2 text-sm font-bold hover:text-cyan-400 transition-colors"><ExternalLink size={16} /> Live Demo</a>
                                        <a href="#" className="flex items-center gap-2 text-sm font-bold hover:text-cyan-400 transition-colors"><Github size={16} /> Source Code</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </SectionWrapper>

                {/* SECTION 4: EXPERIENCE */}
                <SectionWrapper id="experience" className="px-6 md:px-20 py-24 bg-slate-900/20">
                    <h2 className="text-3xl font-bold mb-16 flex items-center gap-4 pl-0 md:pl-32">
                        <Clock className="text-cyan-500" /> Experience
                    </h2>
                    <div className="space-y-16 border-l-2 border-slate-800 ml-3 pl-10 relative md:ml-32">
                        {[
                            { role: 'Software Engineering Intern', company: 'CARE', time: 'Jun 2025 - Aug 2025', desc: 'Engineered AI call automation agents with RAG & n8n. Reduced manual processing by 70%. Integrated LLMs with Retrieval-Augmented Generation workflows handling 1K+ daily interactions.' },
                            { role: 'Software Engineering Intern', company: 'ElementalTV', time: 'May 2025 - Jun 2025', desc: 'Built auto-data pipelines for AdOps processing 10k+ daily metrics. Automated REST integrations (Google Ads, Meta Business Suite) with Python ETL.' }
                        ].map((job, i) => (
                            <div key={i} className="relative group">
                                {/* Timeline Dot */}
                                <span className="absolute -left-[51px] top-1 h-6 w-6 rounded-full border-4 border-slate-900 bg-slate-700 group-hover:bg-cyan-500 transition-colors shadow-[0_0_0_4px_rgba(15,23,42,1)]"></span>

                                <h3 className="text-2xl font-bold text-slate-200 group-hover:text-cyan-400 transition-colors">{job.role}</h3>
                                <p className="text-cyan-500 font-mono text-sm mb-4 mt-1">{job.company} | {job.time}</p>
                                <p className="text-slate-400 max-w-lg leading-relaxed">{job.desc}</p>
                            </div>
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
                        <a href="mailto:mmustafakamran@gmail.com" className="inline-block px-10 py-5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xl rounded shadow-[0_0_30px_rgba(6,182,212,0.4)] transition-all transform hover:-translate-y-1">
                            Say Hello
                        </a>

                        <div className="flex justify-center gap-10 mt-20 text-slate-500">
                            <a href="https://github.com/MMMustafaKamran" target="_blank" rel="noopener noreferrer">
                                <Github size={24} className="hover:text-cyan-400 cursor-pointer transition-colors hover:scale-110 transform" />
                            </a>
                            <a href="https://linkedin.com/in/mustafaKamran03" target="_blank" rel="noopener noreferrer">
                                <Linkedin size={24} className="hover:text-cyan-400 cursor-pointer transition-colors hover:scale-110 transform" />
                            </a>
                            <Globe size={24} className="hover:text-cyan-400 cursor-pointer transition-colors hover:scale-110 transform" />
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
