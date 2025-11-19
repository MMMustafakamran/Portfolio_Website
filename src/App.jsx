import React, { useEffect, useState } from 'react';
import {
  Github,
  Linkedin,
  Mail,
  ArrowUpRight,
  MapPin,
  Terminal,
  Cpu,
  Globe,
  Database,
  Music,
  Copy,
  Check,
  Code2,
} from 'lucide-react';

const EMAIL = 'your.email@example.com';

const App = () => {
  const [time, setTime] = useState(
    new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
  );
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(EMAIL);
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
          animation: scroll 20s linear infinite;
        }
        .equalizer-bar {
          animation: equalizer 1s ease-in-out infinite;
        }
        @keyframes equalizer {
          0%, 100% { height: 20%; }
          50% { height: 100%; }
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
        <div className="col-span-1 md:col-span-2 md:row-span-2 bg-neutral-900/50 border border-neutral-800 rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden group fade-in-up">
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-indigo-500/5 via-transparent to-purple-500/5 group-hover:from-indigo-500/10 group-hover:to-purple-500/10 transition-colors duration-500"></div>
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl transition-all duration-500 group-hover:scale-110"></div>

          <div className="relative z-10">
            <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-violet-600 rounded-2xl mb-6 flex items-center justify-center text-white shadow-lg shadow-indigo-500/20 ring-1 ring-white/10">
              <Terminal size={32} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-2">John Doe</h1>
            <p className="text-indigo-400 font-medium mb-4 flex items-center gap-2">
              <Code2 size={16} /> Full Stack Developer
            </p>
            <p className="text-neutral-400 text-sm leading-relaxed max-w-sm">
              I craft scalable, high-performance digital experiences. Currently focused on <span className="text-white font-medium">Distributed Systems</span> and <span className="text-white font-medium">React Ecosystems</span>.
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
                <>
                  Copied! <Check size={14} className="text-green-400" />
                </>
              ) : (
                <>
                  Email Me <Copy size={14} />
                </>
              )}
            </button>
          </div>
        </div>

        <div className="col-span-1 bg-neutral-900/50 border border-neutral-800 rounded-3xl p-6 flex flex-col items-center justify-center relative overflow-hidden group fade-in-up delay-100 hover:border-neutral-600 transition-colors">
          <div className="absolute inset-0 opacity-20">
            <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" stroke="currentColor">
              <path d="M0 20 L100 20 M20 0 L20 100 M50 0 L50 100 M80 0 L80 100 M0 50 L100 50 M0 80 L100 80" strokeWidth="0.5" className="text-neutral-500" />
            </svg>
          </div>

          <div className="relative flex items-center justify-center mb-3">
            <div className="absolute w-12 h-12 bg-emerald-500/20 rounded-full animate-ping"></div>
            <div className="relative z-10 bg-neutral-950 p-3 rounded-full border border-neutral-800 shadow-xl">
              <MapPin className="text-emerald-500" size={20} />
            </div>
          </div>

          <h3 className="relative z-10 font-bold text-white">San Francisco</h3>
          <p className="relative z-10 text-xs text-neutral-500 font-mono mt-1">{time} PST</p>
        </div>

        <div className="col-span-1 bg-neutral-900/50 border border-neutral-800 rounded-3xl p-6 flex flex-col justify-center gap-3 fade-in-up delay-200">
          <a href="#" className="flex items-center justify-between bg-neutral-800/50 p-3 rounded-2xl hover:bg-white hover:text-black transition-all duration-300 group border border-transparent hover:border-neutral-200">
            <div className="flex items-center gap-3">
              <Github size={20} className="text-white group-hover:text-black transition-colors" />
              <span className="font-bold text-sm">GitHub</span>
            </div>
            <ArrowUpRight size={16} className="text-neutral-500 group-hover:text-black" />
          </a>
          <a href="#" className="flex items-center justify-between bg-neutral-800/50 p-3 rounded-2xl hover:bg-[#0077b5] hover:text-white transition-all duration-300 group border border-transparent hover:border-[#0077b5]">
            <div className="flex items-center gap-3">
              <Linkedin size={20} className="text-white group-hover:text-white transition-colors" />
              <span className="font-bold text-sm">LinkedIn</span>
            </div>
            <ArrowUpRight size={16} className="text-neutral-500 group-hover:text-white" />
          </a>
        </div>

        <div className="col-span-1 md:col-span-2 bg-neutral-900/50 border border-neutral-800 rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden group hover:border-emerald-500/50 transition-all duration-500 fade-in-up delay-300 cursor-pointer">
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          <div className="flex justify-between items-start relative z-10">
            <div className="bg-emerald-500/10 p-2.5 rounded-xl text-emerald-400 ring-1 ring-emerald-500/20">
              <Globe size={24} />
            </div>
            <div className="bg-neutral-800/50 backdrop-blur px-3 py-1 rounded-full text-xs text-neutral-300 border border-neutral-700">
              Featured Project
            </div>
          </div>

          <div className="relative z-10 mt-4">
            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">AlgoVisualizer</h3>
            <p className="text-neutral-400 text-sm mb-4 max-w-md">
              A real-time sorting algorithm visualizer built to help students understand Big-O notation through interactive animations.
            </p>
            <div className="flex flex-wrap gap-2">
              {['React', 'Tailwind', 'Vite', 'Algorithms'].map((tag) => (
                <span key={tag} className="px-2 py-1 bg-neutral-800 rounded-md text-xs text-neutral-300 font-mono border border-neutral-700/50">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="col-span-1 bg-neutral-900/50 border border-neutral-800 rounded-3xl p-6 overflow-hidden relative fade-in-up delay-400 flex flex-col justify-center">
          <h3 className="text-xs font-bold text-neutral-500 uppercase tracking-wider mb-6 text-center">My Stack</h3>

          <div className="relative w-full overflow-hidden mask-gradient">
            <div className="flex whitespace-nowrap animate-scroll">
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex gap-2 mx-2">
                  {['React', 'Node.js', 'TS', 'Next', 'Python', 'AWS', 'Docker', 'Git'].map((tech) => (
                    <span key={tech} className="px-3 py-1.5 bg-neutral-800 text-xs rounded-lg text-neutral-300 border border-neutral-700/50">
                      {tech}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="absolute left-0 top-12 bottom-0 w-8 bg-gradient-to-r from-neutral-900 to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-12 bottom-0 w-8 bg-gradient-to-l from-neutral-900 to-transparent pointer-events-none"></div>
        </div>

        <div className="col-span-1 md:row-span-2 bg-neutral-900/50 border border-neutral-800 rounded-3xl p-6 flex flex-col relative group hover:border-indigo-500/50 transition-colors fade-in-up delay-200">
          <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
            <Cpu size={20} className="text-indigo-500" /> Experience
          </h3>

          <div className="space-y-8 relative h-full">
            <div className="absolute left-[7px] top-3 bottom-3 w-[2px] bg-neutral-800"></div>

            {[
              { role: 'Frontend Intern', company: 'TechCorp', year: '2024', active: true },
              { role: 'Freelance Dev', company: 'Self Employed', year: '2023', active: false },
              { role: 'CS Student', company: 'University', year: '2021-25', active: false },
            ].map((job, i) => (
              <div key={i} className="relative pl-8 group/item">
                <div
                  className={`absolute left-0 top-1.5 w-4 h-4 rounded-full border-2 z-10 bg-neutral-900 transition-colors duration-300 ${
                    job.active
                      ? 'border-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)]'
                      : 'border-neutral-600 group-hover/item:border-neutral-400'
                  }`}
                ></div>
                <h4
                  className={`text-sm font-bold transition-colors ${
                    job.active ? 'text-white' : 'text-neutral-400 group-hover/item:text-white'
                  }`}
                >
                  {job.role}
                </h4>
                <p className="text-xs text-neutral-500 font-mono mb-1">
                  {job.company} • {job.year}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-1 bg-neutral-900/50 border border-neutral-800 rounded-3xl p-6 flex flex-col justify-between group hover:border-rose-500/50 transition-colors fade-in-up delay-400 hover:bg-neutral-900">
          <div className="flex justify-between">
            <div className="bg-rose-500/10 w-fit p-2 rounded-lg text-rose-400">
              <Database size={20} />
            </div>
            <ArrowUpRight size={16} className="text-neutral-600 group-hover:text-white" />
          </div>
          <div>
            <h3 className="font-bold text-white group-hover:text-rose-400 transition-colors">Cloud CLI</h3>
            <p className="text-xs text-neutral-500 mt-1">Rust-based server tool.</p>
          </div>
        </div>

        <div className="col-span-1 bg-gradient-to-br from-[#1DB954] to-[#191414] rounded-3xl p-6 flex flex-col justify-between text-white relative overflow-hidden fade-in-up delay-500 group cursor-pointer">
          <div className="absolute right-[-20px] bottom-[-20px] opacity-20 group-hover:opacity-30 transition-opacity transform group-hover:scale-110 duration-500">
            <Music size={100} />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 bg-black/20 w-fit px-2 py-1 rounded-full backdrop-blur-sm">
              <div className="flex items-end gap-[2px] h-3">
                <div className="w-1 bg-white/80 rounded-sm equalizer-bar" style={{ animationDuration: '0.8s' }}></div>
                <div className="w-1 bg-white/80 rounded-sm equalizer-bar" style={{ animationDuration: '1.1s' }}></div>
                <div className="w-1 bg-white/80 rounded-sm equalizer-bar" style={{ animationDuration: '0.6s' }}></div>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wide opacity-90">Listening</span>
            </div>
          </div>

          <div>
            <p className="text-xs font-medium opacity-80 mb-1">Deep Focus Playlist</p>
            <p className="font-bold text-lg leading-tight truncate">Lofi Beats 2025</p>
          </div>
        </div>

        <div className="col-span-1 md:col-span-2 bg-indigo-600 rounded-3xl p-8 flex items-center justify-between relative overflow-hidden group fade-in-up delay-500 cursor-pointer hover:bg-indigo-700 transition-colors">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
          <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-colors"></div>

          <div className="relative z-10">
            <h2 className="text-2xl font-bold text-white mb-1">Let's work together.</h2>
            <p className="text-indigo-200 text-sm font-medium">Open for Fall 2025 Internships.</p>
          </div>

          <div className="relative z-10 bg-white text-indigo-600 p-4 rounded-full hover:scale-110 transition-transform shadow-xl">
            <Mail size={24} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;


