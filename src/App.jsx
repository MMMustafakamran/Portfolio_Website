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
  Library,
  X,
  Monitor,
  HardDrive,
  Server
} from 'lucide-react';

// --- Expanded Card / Modal Component ---
const ExpandedCard = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="bg-neutral-900 border border-neutral-800 w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-3xl p-6 md:p-10 relative shadow-2xl animate-in zoom-in-95 duration-200 custom-scrollbar"
        onClick={e => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 bg-neutral-800 rounded-full text-neutral-400 hover:text-white hover:bg-neutral-700 transition-colors"
        >
          <X size={20} />
        </button>
        
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 pb-4 border-b border-neutral-800">
          {title}
        </h2>
        
        <div className="text-neutral-300">
          {children}
        </div>
      </div>
    </div>
  );
};

const Portfolio = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
  const [copied, setCopied] = useState(false);
  const [selectedTile, setSelectedTile] = useState(null);

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
          onClick={() => setSelectedTile('profile')}
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
            <button className="bg-white text-black px-6 py-2.5 rounded-full font-bold text-sm hover:scale-105 transition-transform shadow-[0_0_20px_rgba(255,255,255,0.3)]">
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
          onClick={() => setSelectedTile('experience')}
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

        {/* --- 3. FEATURED PROJECT (2x1) --- */}
        <div 
          onClick={() => setSelectedTile('project-parhai')}
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
          onClick={() => setSelectedTile('stack')}
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
          onClick={() => setSelectedTile('project-library')}
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

      {/* --- EXPANSION MODALS --- */}
      
      {/* Profile Expansion */}
      <ExpandedCard 
        isOpen={selectedTile === 'profile'} 
        onClose={() => setSelectedTile(null)}
        title="About Me"
      >
        <div className="grid md:grid-cols-3 gap-8">
          <div className="col-span-1">
             <img 
               src="https://github.com/MMMustafaKamran.png" 
               alt="Profile" 
               className="w-full rounded-2xl shadow-lg mb-4"
             />
             <div className="space-y-2">
               <a href="https://github.com/MMMustafaKamran" target="_blank" className="flex items-center gap-2 text-neutral-400 hover:text-white"><Github size={18}/> @MMMustafaKamran</a>
               <div className="flex items-center gap-2 text-neutral-400"><Mail size={18}/> mmustafakamran@gmail.com</div>
             </div>
          </div>
          <div className="col-span-2 space-y-4 text-lg text-neutral-300 leading-relaxed">
            <p>
              Hi, I'm <strong>Muhammad Mustafa Kamran</strong>, a final-year Computer Science student at FAST NUCES, Islamabad.
            </p>
            <p>
              I have a deep passion for <strong>Software Engineering, AI Agents, and Automation</strong>. My journey has involved building intelligent systems that save time and improve accuracy—whether it's automating ad operations or creating AI-powered academic assistants.
            </p>
            <p>
              I specialize in bridging the gap between modern AI (LLMs, RAG) and robust backend engineering (Django, REST APIs). I love solving complex problems involving distributed systems and data pipelines.
            </p>
            <div className="pt-4">
               <h3 className="text-white font-bold mb-2">Education</h3>
               <p>Bachelor of Computer Science</p>
               <p className="text-indigo-400">FAST NUCES, Islamabad (Expected 2026)</p>
            </div>
          </div>
        </div>
      </ExpandedCard>

      {/* Experience Expansion */}
      <ExpandedCard 
        isOpen={selectedTile === 'experience'} 
        onClose={() => setSelectedTile(null)}
        title="Professional Experience"
      >
         <div className="space-y-12 relative">
            <div className="absolute left-4 top-2 bottom-2 w-0.5 bg-neutral-800"></div>

            {[
              { 
                role: 'Software Engineering Intern', 
                company: 'Center for Advanced Research in Engineering (CARE)', 
                location: 'Islamabad, Pakistan',
                year: 'Jun 2025 – Aug 2025', 
                details: [
                  'Engineered intelligent call automation agent integrating Large Language Models with Retrieval-Augmented Generation (RAG) and n8n workflow orchestration, processing 1000+ daily interactions with 85% accuracy.',
                  'Architected full-stack automation platform with RESTful API integration across 10+ third-party services, implementing event-driven workflows that reduced manual processing time by 70%.',
                  'Designed normalized database schemas (3NF) using ER modeling and reverse engineering, implementing strategic indexing that improved query performance by 45%.'
                ]
              },
              { 
                role: 'Software Engineering Intern', 
                company: 'ElementalTV', 
                location: 'Remote',
                year: 'May 2025 – Jun 2025', 
                details: [
                  'Engineered automated data pipeline for AdOps operations integrating Python with REST APIs (Google Ads, Meta Business Suite), processing 10,000+ daily metrics and reducing manual retrieval time by 80%.',
                  'Developed ETL workflows with data transformation, validation, and deduplication logic, improving reporting accuracy by 95% and eliminating 15+ hours of weekly manual work.'
                ]
              },
              { 
                role: 'Head of Marketing', 
                company: 'Computing Society (FAST NUCES)', 
                location: 'Islamabad, Pakistan',
                year: 'Sep 2023 – Present', 
                details: [
                  'Led cross-functional team of 18 members to organize four major technical events including hackathons and tech talks.',
                  'Managed digital marketing campaigns achieving 500K+ impressions and 300% increase in engagement.'
                ]
              }
            ].map((job, i) => (
              <div key={i} className="relative pl-12">
                <div className="absolute left-2 top-2 w-4 h-4 rounded-full bg-indigo-500 shadow-[0_0_0_4px_rgba(0,0,0,1)]"></div>
                <h3 className="text-xl font-bold text-white">{job.role}</h3>
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-indigo-400 font-mono mb-3">
                  <span>{job.company}</span>
                  <span>•</span>
                  <span>{job.location}</span>
                  <span>•</span>
                  <span>{job.year}</span>
                </div>
                <ul className="list-disc pl-4 space-y-2 text-neutral-300">
                  {job.details.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
         </div>
      </ExpandedCard>

      {/* ParhaiPartner Project Expansion */}
      <ExpandedCard 
        isOpen={selectedTile === 'project-parhai'} 
        onClose={() => setSelectedTile(null)}
        title="ParhaiPartner"
      >
        <div className="space-y-6">
           <p className="text-xl text-indigo-300 font-medium">AI-Powered Academic Platform</p>
           <div className="flex flex-wrap gap-2">
             {['React', 'Django REST', 'PostgreSQL', 'LLMs', 'RAG', 'JWT', 'RBAC'].map(tag => (
                <span key={tag} className="px-3 py-1 bg-neutral-800 rounded-lg text-sm border border-neutral-700 text-neutral-300">{tag}</span>
             ))}
           </div>
           
           <div className="space-y-4 text-neutral-300 leading-relaxed">
             <p>
               ParhaiPartner is a comprehensive academic platform serving 500+ users, designed to connect Students, Teachers, and Counsellors.
             </p>
             <h4 className="text-white font-bold text-lg mt-4">Key Technical Achievements:</h4>
             <ul className="list-disc pl-5 space-y-2">
               <li>
                 <strong>Full-Stack Architecture:</strong> Built a robust React frontend coupled with a scalable Django REST Framework backend. Implemented secure JWT authentication and granular Role-Based Access Control (RBAC).
               </li>
               <li>
                 <strong>AI Integration (RAG):</strong> Integrated Large Language Models with Retrieval-Augmented Generation to create a personalized tutor. The system ingests course materials and generates tailored quizzes and study summaries.
               </li>
               <li>
                 <strong>Quality Assurance:</strong> Designed a teacher-validation workflow that reduced AI-generated content errors by 85%, ensuring academic integrity.
               </li>
             </ul>
           </div>
        </div>
      </ExpandedCard>

      {/* Library Project Expansion */}
      <ExpandedCard 
        isOpen={selectedTile === 'project-library'} 
        onClose={() => setSelectedTile(null)}
        title="Library Management System"
      >
        <div className="space-y-6">
           <div className="flex flex-wrap gap-2">
             {['Flask', 'SQLite', 'HTML/CSS', 'JavaScript', 'RESTful APIs', 'Agile'].map(tag => (
                <span key={tag} className="px-3 py-1 bg-neutral-800 rounded-lg text-sm border border-neutral-700 text-neutral-300">{tag}</span>
             ))}
           </div>
           
           <div className="space-y-4 text-neutral-300 leading-relaxed">
             <p>
               A full-stack web application designed to streamline library operations, including book tracking, borrowing workflows, and user management.
             </p>
             <ul className="list-disc pl-5 space-y-2">
               <li>
                 <strong>Backend Engineering:</strong> Developed RESTful API endpoints using Flask to handle CRUD operations for books and users.
               </li>
               <li>
                 <strong>Testing & Quality:</strong> Achieved 90% code coverage through rigorous unit and integration testing.
               </li>
               <li>
                 <strong>Leadership:</strong> Led a 3-person Agile Scrum team, managing tasks via Trello and version control via Git.
               </li>
             </ul>
           </div>
        </div>
      </ExpandedCard>

      {/* Tech Stack Expansion */}
      <ExpandedCard 
        isOpen={selectedTile === 'stack'} 
        onClose={() => setSelectedTile(null)}
        title="Technical Skills"
      >
        <div className="grid md:grid-cols-2 gap-8">
          {[
             { category: "Languages", skills: ["JavaScript", "TypeScript", "Python", "C++", "C#", "SQL", "HTML5/CSS3"] },
             { category: "Frontend", skills: ["React", "Redux", "Tailwind CSS", "Bootstrap", "Responsive Design", "jQuery"] },
             { category: "Backend", skills: ["Django REST Framework", "Flask", "Node.js", "Express.js", "RESTful APIs", "Microservices"] },
             { category: "Database", skills: ["PostgreSQL", "MongoDB", "SQL Server", "Database Design", "Query Optimization"] },
             { category: "AI / ML", skills: ["Large Language Models (LLMs)", "RAG", "OpenAI API", "Vector Embeddings"] },
             { category: "DevOps & Tools", skills: ["Git", "GitHub", "Docker", "CI/CD", "n8n Workflow Automation", "Postman"] },
             { category: "Cloud & Architecture", skills: ["Azure", "OAuth 2.0", "Webhooks", "Event-Driven Architecture"] }
          ].map((section, i) => (
            <div key={i} className="bg-neutral-800/30 p-6 rounded-2xl border border-neutral-800">
              <h3 className="text-indigo-400 font-bold mb-4 flex items-center gap-2">
                {i === 0 ? <Code2 size={18}/> : i === 2 ? <Server size={18}/> : i === 3 ? <Database size={18}/> : <Monitor size={18}/>}
                {section.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {section.skills.map(skill => (
                  <span key={skill} className="px-3 py-1 bg-neutral-900 rounded-lg text-sm text-neutral-300 border border-neutral-700">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </ExpandedCard>

    </div>
  );
};

export default Portfolio;