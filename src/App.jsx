import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ArrowUpRight, 
  Terminal,
  Cpu,
  Globe,
  Database,
  Copy,
  Check,
  Code2,
  Briefcase,
  GraduationCap,
  BrainCircuit,
  Library
} from 'lucide-react';

const Portfolio = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText('mmustafakamran@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-neutral-200 p-4 md:p-8 font-sans selection:bg-indigo-500/30">
      
      {/* Custom CSS for animations */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 25s linear infinite;
        }
        .fade-in-up {
          animation: fadeInUp 0.5s ease-out forwards;
          opacity: 0;
          transform: translateY(20px);
        }
        @keyframes fadeInUp {
          to { opacity: 1; transform: translateY(0); }
        }
        .delay-100 { animation-delay: 100ms; }
        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 300ms; }
        .delay-400 { animation-delay: 400ms; }
        .delay-500 { animation-delay: 500ms; }
      `}</style>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 md:grid-rows-4 gap-4 auto-rows-[180px]">

        {/* --- 1. HERO PROFILE (2x2) [Top Left] --- */}
        <div className="col-span-1 md:col-span-2 md:row-span-2 bg-neutral-900/50 border border-neutral-800 rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden group fade-in-up">
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-indigo-500/5 via-transparent to-purple-500/5 group-hover:from-indigo-500/10 group-hover:to-purple-500/10 transition-colors duration-500"></div>
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl transition-all duration-500 group-hover:scale-110"></div>
          
          <div className="relative z-10">
            <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-violet-600 rounded-2xl mb-6 flex items-center justify-center text-white shadow-lg shadow-indigo-500/20 ring-1 ring-white/10">
               <Terminal size={32} /> 
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-2">Muhammad Mustafa Kamran</h1>
            <p className="text-indigo-400 font-medium mb-4 flex items-center gap-2">
              <Code2 size={16} /> Software Engineer
            </p>
            <p className="text-neutral-400 text-sm leading-relaxed max-w-md">
              Specializing in <span className="text-neutral-200">AI Agents, RAG Systems, and Full Stack Automation</span>. Experienced in orchestrating workflows (n8n) and building scalable data pipelines.
            </p>
          </div>

          <div className="flex gap-3 mt-6 relative z-10">
            <button className="bg-white text-black px-6 py-2.5 rounded-full font-bold text-sm hover:scale-105 transition-transform shadow-[0_0_20px_rgba(255,255,255,0.3)]">
              View Resume
            </button>
            <button 
              onClick={handleCopy}
              className="bg-neutral-800 text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-neutral-700 transition-colors flex items-center gap-2 border border-neutral-700"
            >
              {copied ? (
                <>Copied! <Check size={14} className="text-green-400" /></>
              ) : (
                <>Email Me <Copy size={14} /></>
              )}
            </button>
          </div>
        </div>

        {/* --- 2. EXPERIENCE (2x2) [Top Right] --- */}
        <div className="col-span-1 md:col-span-2 md:row-span-2 bg-neutral-900/50 border border-neutral-800 rounded-3xl p-8 flex flex-col relative group hover:border-indigo-500/50 transition-colors fade-in-up delay-100">
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-indigo-900/10 via-transparent to-transparent opacity-50"></div>
          
          <div className="flex items-center justify-between mb-6 relative z-10">
            <h3 className="text-2xl font-bold text-white flex items-center gap-2">
              <Briefcase size={24} className="text-indigo-500"/> Experience
            </h3>
            <span className="px-3 py-1 bg-indigo-500/10 text-indigo-400 text-xs rounded-full border border-indigo-500/20">3 Positions</span>
          </div>
          
          <div className="space-y-6 relative h-full overflow-y-auto pr-2 custom-scrollbar z-10">
            {/* Connecting Line */}
            <div className="absolute left-[19px] top-2 bottom-2 w-[2px] bg-neutral-800"></div>

            {[
              { 
                role: 'Software Engineering Intern', 
                company: 'CARE (Islamabad)', 
                year: 'Jun 2025 – Aug 2025', 
                active: true,
                desc: 'Engineered AI call automation agents with RAG & n8n. Reduced manual processing by 70%.' 
              },
              { 
                role: 'Software Engineering Intern', 
                company: 'ElementalTV (Remote)', 
                year: 'May 2025 – Jun 2025', 
                active: false,
                desc: 'Built auto-data pipelines for AdOps processing 10k+ daily metrics. Improved accuracy by 95%.'
              },
              { 
                role: 'Head of Marketing', 
                company: 'Computing Society', 
                year: 'Sep 2023 – Present', 
                active: false,
                desc: 'Led cross-functional team of 18 members. Managed campaigns with 500K+ impressions.'
              }
            ].map((job, i) => (
              <div key={i} className="relative pl-12 group/item">
                <div className={`absolute left-[12px] top-1.5 w-4 h-4 rounded-full border-2 z-10 bg-neutral-900 transition-colors duration-300 ${job.active ? 'border-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)]' : 'border-neutral-600 group-hover/item:border-neutral-400'}`}></div>
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className={`text-base font-bold transition-colors ${job.active ? 'text-white' : 'text-neutral-300 group-hover/item:text-white'}`}>{job.role}</h4>
                    <p className="text-xs text-indigo-400 font-mono mb-1">{job.company}</p>
                  </div>
                  <span className="text-[10px] text-neutral-500 font-mono bg-neutral-800 px-2 py-1 rounded hidden sm:block">{job.year}</span>
                </div>
                <p className="text-sm text-neutral-400 leading-snug mt-1">{job.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* --- 3. FEATURED PROJECT (2x1) [Middle Left] --- */}
        <div className="col-span-1 md:col-span-2 bg-neutral-900/50 border border-neutral-800 rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden group hover:border-emerald-500/50 transition-all duration-500 fade-in-up delay-200 cursor-pointer">
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <div className="flex justify-between items-start relative z-10">
            <div className="bg-emerald-500/10 p-2.5 rounded-xl text-emerald-400 ring-1 ring-emerald-500/20">
              <BrainCircuit size={24} />
            </div>
            <div className="bg-neutral-800/50 backdrop-blur px-3 py-1 rounded-full text-xs text-neutral-300 border border-neutral-700 flex items-center gap-1">
              Featured <ArrowUpRight size={12} />
            </div>
          </div>

          <div className="relative z-10 mt-4">
            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">ParhaiPartner</h3>
            <p className="text-neutral-400 text-sm mb-4 max-w-lg">
              AI-Powered Academic Platform. Integrated Large Language Models with RAG to generate personalized study materials. Designed role-based access for 500+ users.
            </p>
            <div className="flex flex-wrap gap-2">
              {['React', 'Django REST', 'PostgreSQL', 'LLMs', 'RAG'].map(tag => (
                <span key={tag} className="px-2 py-1 bg-neutral-800 rounded-md text-xs text-neutral-300 font-mono border border-neutral-700/50">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* --- 4. TECH STACK (2x1) [Middle Right] --- */}
        <div className="col-span-1 md:col-span-2 bg-neutral-900/50 border border-neutral-800 rounded-3xl p-6 overflow-hidden relative fade-in-up delay-300 flex flex-col justify-center">
           <div className="flex justify-between items-center mb-6 px-2">
             <h3 className="text-sm font-bold text-neutral-500 uppercase tracking-wider flex items-center gap-2">
               <Cpu size={16}/> Technical Arsenal
             </h3>
             <span className="text-[10px] text-neutral-600">Scrolls automatically</span>
           </div>
           
           <div className="relative w-full overflow-hidden mask-gradient">
             <div className="flex whitespace-nowrap animate-scroll">
               {[...Array(2)].map((_, i) => (
                 <div key={i} className="flex gap-2 mx-2">
                   {['Python', 'TypeScript', 'React', 'Django', 'Node.js', 'C++', 'C#', 'SQL', 'Docker', 'Azure', 'LLMs', 'RAG', 'n8n', 'Git', 'PostgreSQL', 'MongoDB', 'FastAPI'].map((tech) => (
                     <span key={tech} className="px-4 py-2 bg-neutral-800 text-sm rounded-xl text-neutral-300 border border-neutral-700/50 hover:border-neutral-500 transition-colors">
                       {tech}
                     </span>
                   ))}
                 </div>
               ))}
             </div>
           </div>
           
           {/* Fade edges for scroll */}
           <div className="absolute left-0 top-12 bottom-0 w-12 bg-gradient-to-r from-neutral-900 to-transparent pointer-events-none"></div>
           <div className="absolute right-0 top-12 bottom-0 w-12 bg-gradient-to-l from-neutral-900 to-transparent pointer-events-none"></div>
        </div>

        {/* --- 5. SECONDARY PROJECT (1x1) [Bottom Left] --- */}
        <div className="col-span-1 bg-neutral-900/50 border border-neutral-800 rounded-3xl p-6 flex flex-col justify-between group hover:border-rose-500/50 transition-colors fade-in-up delay-400 hover:bg-neutral-900">
          <div className="flex justify-between">
            <div className="bg-rose-500/10 w-fit p-2 rounded-lg text-rose-400">
              <Library size={20} />
            </div>
            <ArrowUpRight size={16} className="text-neutral-600 group-hover:text-white" />
          </div>
          <div>
            <h3 className="font-bold text-white group-hover:text-rose-400 transition-colors">Library System</h3>
            <p className="text-xs text-neutral-500 mt-1">Flask, SQLite & REST APIs.</p>
            <p className="text-[10px] text-neutral-600 mt-2">90% Code Coverage</p>
          </div>
        </div>

        {/* --- 6. SOCIAL LINKS (1x1) [Bottom Middle] --- */}
        <div className="col-span-1 bg-neutral-900/50 border border-neutral-800 rounded-3xl p-6 flex flex-col justify-center gap-3 fade-in-up delay-400">
          <a href="https://github.com/MMMustafaKamran" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between bg-neutral-800/50 p-3 rounded-2xl hover:bg-white hover:text-black transition-all duration-300 group border border-transparent hover:border-neutral-200">
            <div className="flex items-center gap-3">
              <Github size={20} className="text-white group-hover:text-black transition-colors"/>
              <span className="font-bold text-sm">GitHub</span>
            </div>
            <ArrowUpRight size={16} className="text-neutral-500 group-hover:text-black" />
          </a>
          <a href="https://linkedin.com/in/mustafaKamran03" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between bg-neutral-800/50 p-3 rounded-2xl hover:bg-[#0077b5] hover:text-white transition-all duration-300 group border border-transparent hover:border-[#0077b5]">
            <div className="flex items-center gap-3">
              <Linkedin size={20} className="text-white group-hover:text-white transition-colors"/>
              <span className="font-bold text-sm">LinkedIn</span>
            </div>
            <ArrowUpRight size={16} className="text-neutral-500 group-hover:text-white" />
          </a>
        </div>

        {/* --- 7. CONTACT CTA (2x1) [Bottom Right] --- */}
        <div className="col-span-1 md:col-span-2 bg-indigo-600 rounded-3xl p-8 flex items-center justify-between relative overflow-hidden group fade-in-up delay-500 cursor-pointer hover:bg-indigo-700 transition-colors">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
          <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-colors"></div>
          
          <div className="relative z-10">
            <h2 className="text-2xl font-bold text-white mb-1">Let's work together.</h2>
            <p className="text-indigo-200 text-sm font-medium">Open for Fall 2025 Opportunities.</p>
          </div>

          <a href="mailto:mmustafakamran@gmail.com" className="relative z-10 bg-white text-indigo-600 p-4 rounded-full hover:scale-110 transition-transform shadow-xl">
            <Mail size={24} />
          </a>
        </div>

      </div>
    </div>
  );
};

export default Portfolio;