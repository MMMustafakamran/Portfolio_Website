import React, { useState, useEffect, useRef } from 'react';
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
  Library,
  X,
  Monitor,
  HardDrive,
  Server
} from 'lucide-react';

const DetailPanel = ({ detail, onClose }) => {
  if (!detail) return null;

  return (
    <div className="mt-8">
      <div className="relative bg-neutral-900/80 border border-neutral-800 rounded-3xl p-6 md:p-10 overflow-hidden">
        <div className={`absolute inset-0 ${detail.accent} opacity-40 blur-3xl pointer-events-none`} />
        <div className="absolute inset-0 rounded-3xl border border-white/5 pointer-events-none"></div>
        <div className="relative z-10 flex items-start justify-between gap-4">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-neutral-500">{detail.badge}</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">{detail.title}</h2>
            {detail.subtitle && <p className="text-neutral-400 mt-3 text-sm md:text-base">{detail.subtitle}</p>}
          </div>
          <button 
            onClick={onClose}
            className="p-2 bg-neutral-800 rounded-full text-neutral-400 hover:text-white hover:bg-neutral-700 transition-colors"
          >
            <X size={18} />
          </button>
        </div>
        <div className="relative z-10 mt-8 space-y-8 text-neutral-300">
          {detail.body}
        </div>
      </div>
    </div>
  );
};

const Portfolio = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
  const [copied, setCopied] = useState(false);
  const [selectedTile, setSelectedTile] = useState(null);
  const detailRef = useRef(null);

  const experienceItems = [
    { 
      role: 'Software Engineering Intern', 
      company: 'CARE (Islamabad)', 
      location: 'Islamabad, Pakistan',
      year: 'Jun 2025 – Aug 2025', 
      active: true,
      desc: 'Engineered AI call automation agents with RAG & n8n. Reduced manual processing by 70%.',
      bullets: [
        'Integrated LLMs with Retrieval-Augmented Generation workflows handling 1K+ daily interactions at 85% accuracy.',
        'Built event-driven automation platform wiring 10+ third-party services, cutting manual processing time by 70%.',
        'Designed normalized PostgreSQL schemas with indexes that improved query speed by 45%.'
      ]
    },
    { 
      role: 'Software Engineering Intern', 
      company: 'ElementalTV (Remote)', 
      location: 'Remote',
      year: 'May 2025 – Jun 2025', 
      active: false,
      desc: 'Built auto-data pipelines for AdOps processing 10k+ daily metrics. Improved accuracy by 95%.',
      bullets: [
        'Automated REST integrations (Google Ads, Meta Business Suite) processing 10K+ metrics daily with Python ETL.',
        'Implemented validation & deduplication layers that improved reporting accuracy by 95%.'
      ]
    },
    { 
      role: 'Head of Marketing', 
      company: 'Computing Society', 
      location: 'Islamabad, Pakistan',
      year: 'Sep 2023 – Present', 
      active: false,
      desc: 'Led cross-functional team of 18 members. Managed campaigns with 500K+ impressions.',
      bullets: [
        'Led 18-person team delivering 4 flagship tech events, including hackathons and tech talks.',
        'Scaled digital campaigns to 500K+ impressions and 300% engagement growth.'
      ]
    }
  ];

  const detailContent = {
    profile: {
      badge: 'Profile Insight',
      title: 'About Me',
      subtitle: 'Final-year CS student building AI-first products with practical impact.',
      accent: 'bg-gradient-to-r from-indigo-500/30 via-purple-500/10 to-transparent',
      body: [
        <div key="profile-grid" className="grid md:grid-cols-3 gap-8 items-start">
          <div className="col-span-1">
            <img 
              src="https://github.com/MMMustafaKamran.png" 
              alt="Profile" 
              className="w-full rounded-2xl shadow-lg mb-4 border border-white/5"
            />
            <div className="space-y-2 text-sm text-neutral-400">
              <a href="https://github.com/MMMustafaKamran" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-white">
                <Github size={18}/> @MMMustafaKamran
              </a>
              <div className="flex items-center gap-2">
                <Mail size={18}/> mmustafakamran@gmail.com
              </div>
            </div>
          </div>
          <div className="col-span-2 space-y-4 text-lg leading-relaxed text-neutral-200">
            <p>
              I'm <strong>Muhammad Mustafa Kamran</strong>, obsessed with fusing modern AI (LLMs, RAG) with reliable backend systems. I enjoy orchestrating workflows that save hours for real teams.
            </p>
            <p>
              Recent work includes automation agents, data pipelines, and full-stack academic platforms served to hundreds of users. I thrive in ambiguous spaces where I can design systems end-to-end.
            </p>
            <div className="pt-2">
              <h4 className="text-sm uppercase tracking-[0.3em] text-indigo-400 mb-2">Education</h4>
              <p>FAST NUCES, Islamabad — <span className="text-neutral-400">BS Computer Science (Expected 2026)</span></p>
            </div>
          </div>
        </div>
      ]
    },
    experience: {
      badge: 'Journey',
      title: 'Professional Experience',
      subtitle: 'Impact snapshots from internships and leadership roles.',
      accent: 'bg-gradient-to-r from-indigo-500/30 via-slate-900 to-transparent',
      body: [
        <div key="experience" className="space-y-10">
          {experienceItems.map((job, i) => (
            <div key={job.role + i} className="relative pl-8">
              <div className="absolute left-0 top-2 w-5 h-5 rounded-full bg-indigo-500 shadow-[0_0_20px_rgba(99,102,241,0.4)]"></div>
              <div className="flex flex-wrap gap-2 items-center text-sm font-mono text-indigo-300">
                <span>{job.company}</span>
                <span>•</span>
                <span>{job.location}</span>
                <span>•</span>
                <span>{job.year}</span>
              </div>
              <h3 className="text-xl font-bold text-white mt-2">{job.role}</h3>
              <p className="text-neutral-400 text-sm mt-2">{job.desc}</p>
              <ul className="list-disc pl-5 mt-3 space-y-2 text-sm text-neutral-300">
                {job.bullets.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ]
    },
    'project-parhai': {
      badge: 'Case Study',
      title: 'ParhaiPartner',
      subtitle: 'AI-powered academic platform serving 500+ students, mentors, and counsellors.',
      accent: 'bg-gradient-to-r from-emerald-500/20 via-transparent to-teal-500/10',
      body: [
        <div key="parhai" className="space-y-6">
          <div className="flex flex-wrap gap-2">
            {['React', 'Django REST', 'PostgreSQL', 'LLMs', 'RAG', 'JWT', 'RBAC'].map(tag => (
              <span key={tag} className="px-3 py-1 bg-neutral-800 rounded-lg text-sm border border-neutral-700 text-neutral-200">
                {tag}
              </span>
            ))}
          </div>
          <p className="text-neutral-200">
            ParhaiPartner connects students, teachers, and counsellors in one workspace. I led the system design, AI integration, and delivery.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm text-neutral-300">
            <li><strong>LLM Tutor:</strong> Retrieval-Augmented Generation ingesting course material to craft quizzes, summaries, and study plans.</li>
            <li><strong>Access Control:</strong> Multi-role RBAC with JWT sessions and teacher validation loops that cut AI errors by 85%.</li>
            <li><strong>Scalability:</strong> Async task workers for content generation and normalized relational schema for analytics.</li>
          </ul>
        </div>
      ]
    },
    'project-library': {
      badge: 'Case Study',
      title: 'Library Management System',
      subtitle: 'Full-stack app streamlining book circulation with 90%+ automated test coverage.',
      accent: 'bg-gradient-to-r from-rose-500/30 via-transparent to-orange-500/10',
      body: [
        <div key="library" className="space-y-6">
          <div className="flex flex-wrap gap-2">
            {['Flask', 'SQLite', 'REST APIs', 'JavaScript', 'Agile'].map(tag => (
              <span key={tag} className="px-3 py-1 bg-neutral-800 rounded-lg text-sm border border-neutral-700 text-neutral-200">
                {tag}
              </span>
            ))}
          </div>
          <p className="text-neutral-200">
            Built for university libraries to manage borrowing workflows, user roles, and inventory history.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm text-neutral-300">
            <li>Designed REST endpoints for CRUD operations with policy-based authorization.</li>
            <li>Achieved 90% coverage via PyTest and Playwright integration suites.</li>
            <li>Led three-person scrum team, handling sprint planning and Git workflows.</li>
          </ul>
        </div>
      ]
    },
    stack: {
      badge: 'Capability Map',
      title: 'Technical Stack',
      subtitle: 'Tools I ship with daily—front to back, infra included.',
      accent: 'bg-gradient-to-r from-sky-500/20 via-transparent to-violet-500/20',
      body: [
        <div key="stack-grid" className="grid md:grid-cols-2 gap-6">
          {[
            { icon: <Code2 size={18}/>, title: 'Languages', skills: ['JavaScript', 'TypeScript', 'Python', 'C++', 'C#', 'SQL'] },
            { icon: <Monitor size={18}/>, title: 'Frontend', skills: ['React', 'Redux', 'Tailwind', 'Responsive UI'] },
            { icon: <Server size={18}/>, title: 'Backend', skills: ['Django REST', 'Flask', 'Node.js', 'FastAPI', 'Microservices'] },
            { icon: <Database size={18}/>, title: 'Data', skills: ['PostgreSQL', 'MongoDB', 'Query Optimization'] },
            { icon: <Globe size={18}/>, title: 'AI / Automation', skills: ['LLMs', 'RAG', 'OpenAI API', 'n8n'] },
            { icon: <HardDrive size={18}/>, title: 'Ops & Cloud', skills: ['Docker', 'CI/CD', 'Azure', 'Observability'] }
          ].map(section => (
            <div key={section.title} className="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-4">
              <div className="flex items-center gap-2 text-indigo-300 font-semibold mb-3">
                {section.icon}
                {section.title}
              </div>
              <div className="flex flex-wrap gap-2 text-sm text-neutral-300">
                {section.skills.map(skill => (
                  <span key={skill} className="px-2 py-1 bg-neutral-800 rounded-lg border border-neutral-700">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      ]
    }
  };

  const toggleTile = (tile) => {
    setSelectedTile((prev) => (prev === tile ? null : tile));
  };

  const activeDetail = detailContent[selectedTile];

  useEffect(() => {
    if (selectedTile && detailRef.current) {
      detailRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [selectedTile]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleCopy = (e) => {
    e.stopPropagation();
    navigator.clipboard.writeText('mmustafakamran@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleProfileToggle = (e) => {
    e.stopPropagation();
    toggleTile('profile');
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-neutral-200 p-4 md:p-8 font-sans selection:bg-indigo-500/30">
      
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
        
        /* Custom Scrollbar for modal content */
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #171717;
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #404040;
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #525252;
        }
      `}</style>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 md:grid-rows-4 gap-4 auto-rows-[180px]">

        {/* --- 1. HERO PROFILE (2x2) --- */}
        <div 
          onClick={() => toggleTile('profile')}
          className="col-span-1 md:col-span-2 md:row-span-2 bg-neutral-900/50 border border-neutral-800 rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden group fade-in-up cursor-pointer hover:border-neutral-600 transition-colors"
        >
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-indigo-500/5 via-transparent to-purple-500/5 group-hover:from-indigo-500/10 group-hover:to-purple-500/10 transition-colors duration-500"></div>
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl transition-all duration-500 group-hover:scale-110"></div>
          
          <div className="relative z-10">
            <div className="flex items-start justify-between mb-6">
              <div className="w-20 h-20 rounded-2xl overflow-hidden shadow-lg shadow-indigo-500/20 ring-2 ring-white/10">
                 <img 
                   src="https://github.com/MMMustafaKamran.png" 
                   alt="Profile" 
                   className="w-full h-full object-cover"
                   onError={(e) => {e.target.style.display='none'; e.target.nextSibling.style.display='flex'}}
                 />
                 <div className="hidden w-full h-full bg-gradient-to-br from-indigo-600 to-violet-600 items-center justify-center text-white">
                   <Terminal size={32} /> 
                 </div>
              </div>
              <div className="bg-neutral-800/50 px-3 py-1 rounded-full border border-neutral-700 backdrop-blur-sm">
                <span className="text-xs font-medium text-green-400 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                  Available for Work
                </span>
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-2">Muhammad Mustafa Kamran</h1>
            <p className="text-indigo-400 font-medium mb-4 flex items-center gap-2">
              <Code2 size={16} /> Software Engineer
            </p>
            <p className="text-neutral-400 text-sm leading-relaxed max-w-md">
              Specializing in <span className="text-neutral-200">AI Agents, RAG Systems, and Full Stack Automation</span>. Experienced in orchestrating workflows and building scalable data pipelines.
            </p>
          </div>

          <div className="flex gap-3 mt-6 relative z-10">
            <button 
              onClick={handleProfileToggle}
              className="bg-white text-black px-6 py-2.5 rounded-full font-bold text-sm hover:scale-105 transition-transform shadow-[0_0_20px_rgba(255,255,255,0.3)]"
            >
              More About Me
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

        {/* --- 2. EXPERIENCE (2x2) --- */}
        <div 
          onClick={() => toggleTile('experience')}
          className="col-span-1 md:col-span-2 md:row-span-2 bg-neutral-900/50 border border-neutral-800 rounded-3xl p-8 flex flex-col relative group hover:border-indigo-500/50 transition-colors fade-in-up delay-100 cursor-pointer"
        >
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-indigo-900/10 via-transparent to-transparent opacity-50"></div>
          
          <div className="flex items-center justify-between mb-6 relative z-10">
            <h3 className="text-2xl font-bold text-white flex items-center gap-2">
              <Briefcase size={24} className="text-indigo-500"/> Experience
            </h3>
            <span className="px-3 py-1 bg-indigo-500/10 text-indigo-400 text-xs rounded-full border border-indigo-500/20 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
              Click to Expand
            </span>
          </div>
          
          <div className="space-y-6 relative h-full overflow-y-auto pr-2 custom-scrollbar z-10 pointer-events-none">
            <div className="absolute left-[19px] top-2 bottom-2 w-[2px] bg-neutral-800"></div>

            {experienceItems.map((job, i) => (
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

        {/* --- 3. FEATURED PROJECT (2x1) --- */}
        <div 
          onClick={() => toggleTile('project-parhai')}
          className="col-span-1 md:col-span-2 bg-neutral-900/50 border border-neutral-800 rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden group hover:border-emerald-500/50 transition-all duration-500 fade-in-up delay-200 cursor-pointer"
        >
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <div className="flex justify-between items-start relative z-10">
            <div className="bg-emerald-500/10 p-2.5 rounded-xl text-emerald-400 ring-1 ring-emerald-500/20">
              <BrainCircuit size={24} />
            </div>
            <div className="bg-neutral-800/50 backdrop-blur px-3 py-1 rounded-full text-xs text-neutral-300 border border-neutral-700 flex items-center gap-1 group-hover:bg-emerald-500/20 group-hover:text-emerald-300 transition-colors">
              View Details <ArrowUpRight size={12} />
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

        {/* --- 4. TECH STACK (2x1) --- */}
        <div 
          onClick={() => toggleTile('stack')}
          className="col-span-1 md:col-span-2 bg-neutral-900/50 border border-neutral-800 rounded-3xl p-6 overflow-hidden relative fade-in-up delay-300 flex flex-col justify-center cursor-pointer hover:border-neutral-500 transition-colors"
        >
           <div className="flex justify-between items-center mb-6 px-2">
             <h3 className="text-sm font-bold text-neutral-500 uppercase tracking-wider flex items-center gap-2">
               <Cpu size={16}/> Technical Arsenal
             </h3>
             <span className="text-[10px] text-neutral-600">Click to see all</span>
           </div>
           
           <div className="relative w-full overflow-hidden mask-gradient pointer-events-none">
             <div className="flex whitespace-nowrap animate-scroll">
               {[...Array(2)].map((_, i) => (
                 <div key={i} className="flex gap-2 mx-2">
                   {['Python', 'TypeScript', 'React', 'Django', 'Node.js', 'C++', 'C#', 'SQL', 'Docker', 'Azure', 'LLMs', 'RAG', 'n8n', 'Git', 'PostgreSQL', 'MongoDB', 'FastAPI'].map((tech) => (
                     <span key={tech} className="px-4 py-2 bg-neutral-800 text-sm rounded-xl text-neutral-300 border border-neutral-700/50">
                       {tech}
                     </span>
                   ))}
                 </div>
               ))}
             </div>
           </div>
           
           <div className="absolute left-0 top-12 bottom-0 w-12 bg-gradient-to-r from-neutral-900 to-transparent pointer-events-none"></div>
           <div className="absolute right-0 top-12 bottom-0 w-12 bg-gradient-to-l from-neutral-900 to-transparent pointer-events-none"></div>
        </div>

        {/* --- 5. SECONDARY PROJECT (1x1) --- */}
        <div 
          onClick={() => toggleTile('project-library')}
          className="col-span-1 bg-neutral-900/50 border border-neutral-800 rounded-3xl p-6 flex flex-col justify-between group hover:border-rose-500/50 transition-colors fade-in-up delay-400 hover:bg-neutral-900 cursor-pointer"
        >
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

        {/* --- 6. SOCIAL LINKS (1x1) --- */}
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

        {/* --- 7. CONTACT CTA (2x1) --- */}
        <a 
          href="mailto:mmustafakamran@gmail.com" 
          className="col-span-1 md:col-span-2 bg-indigo-600 rounded-3xl p-8 flex items-center justify-between relative overflow-hidden group fade-in-up delay-500 cursor-pointer hover:bg-indigo-700 transition-colors"
        >
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
          <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-colors"></div>
          
          <div className="relative z-10">
            <h2 className="text-2xl font-bold text-white mb-1">Let's work together.</h2>
            <p className="text-indigo-200 text-sm font-medium">Open for Fall 2025 Opportunities.</p>
          </div>

          <div className="relative z-10 bg-white text-indigo-600 p-4 rounded-full hover:scale-110 transition-transform shadow-xl">
            <Mail size={24} />
          </div>
        </a>

      </div>

      {activeDetail && (
        <div ref={detailRef}>
          <DetailPanel detail={activeDetail} onClose={() => setSelectedTile(null)} />
        </div>
      )}

    </div>
  );
};

export default Portfolio;