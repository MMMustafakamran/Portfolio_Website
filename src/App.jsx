import React, { useState, useEffect } from 'react';
import { LayoutGroup, motion } from 'framer-motion';
import { Github, Mail, Globe, GraduationCap, Code2, Server, Database, HardDrive, Monitor, ArrowUpRight } from 'lucide-react';

import Navbar from './components/Navbar';
import HeroTile from './components/HeroTile';
import ExperienceTile from './components/ExperienceTile';
import ProjectsTile from './components/ProjectsTile';
import StackTile from './components/StackTile';
import SocialTile from './components/SocialTile';
import ContactTile from './components/ContactTile';
import SpotifyTile from './components/SpotifyTile';
import HobbiesTile from './components/HobbiesTile';
import LocationTile from './components/LocationTile';
import ExtracurricularsTile from './components/ExtracurricularsTile';
import DetailModal from './components/DetailModal';

const Portfolio = () => {
  const [selectedTile, setSelectedTile] = useState(null);

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
    }
  ];

  const projectItems = [
    {
      title: 'ParhaiPartner',
      headline: 'AI-powered academic workspace with 500+ users.',
      tags: ['React', 'Django REST', 'PostgreSQL', 'LLMs', 'RAG', 'RBAC'],
      bullets: [
        'Full-stack platform with JWT auth, multi-role RBAC, and async content generation workers.',
        'Retrieval-Augmented Generation tutor that ingests course material to craft quizzes and study plans.',
        'Teacher validation workflow reduced AI content errors by 85% and keeps academic integrity intact.'
      ]
    },
    {
      title: 'Library Management System',
      headline: 'Flask + SQLite system streamlining book circulation.',
      tags: ['Flask', 'SQLite', 'REST APIs', 'PyTest', 'Agile'],
      bullets: [
        'Designed REST endpoints for CRUD operations with policy-based authorization layers.',
        'Achieved 90% automated test coverage via PyTest + Playwright integration suites.',
        'Led 3-person scrum team, owning sprint planning and Git-based release workflow.'
      ]
    },
    {
      title: 'Job Portal',
      headline: 'JavaFX desktop portal built on MVC architecture.',
      tags: ['JavaFX', 'MVC', 'MySQL', 'CI/CD'],
      bullets: [
        'Implemented applicant & recruiter dashboards with filtering, approvals, and analytics.',
        'Optimized SQL queries and caching to cut listing load time by 40%.'
      ]
    }
  ];

  const detailContent = {
    profile: {
      badge: 'Profile Insight',
      title: 'About Me',
      subtitle: 'Final-year CS student building AI-first products with practical impact.',
      accent: 'bg-gradient-to-r from-indigo-500 via-purple-500 to-transparent',
      body: (
        <div className="grid md:grid-cols-[220px_minmax(0,1fr)] gap-10 items-start">
          <div className="w-full flex flex-col items-center text-center md:text-left">
            <img
              src="https://github.com/MMMustafaKamran.png"
              alt="Profile"
              className="w-full max-w-[200px] rounded-2xl shadow-2xl shadow-indigo-500/20 mb-6 border border-white/5"
              onError={(e) => { e.target.style.display = 'none' }}
            />
            <div className="space-y-3 text-sm text-neutral-400 w-full">
              <a href="https://github.com/MMMustafaKamran" target="_blank" rel="noreferrer" className="flex items-center justify-center md:justify-start gap-3 hover:text-white transition-colors p-3 hover:bg-neutral-800/50 rounded-xl border border-transparent hover:border-neutral-700">
                <Github size={18} /> @MMMustafaKamran
              </a>
              <div className="flex items-center justify-center md:justify-start gap-3 p-3 text-neutral-300">
                <Mail size={18} /> mmustafakamran@gmail.com
              </div>
            </div>
          </div>
          <div className="space-y-8 text-lg leading-relaxed text-neutral-300 font-light">
            <p>
              I'm <strong className="text-white font-semibold">Muhammad Mustafa Kamran</strong>, obsessed with fusing modern AI (LLMs, RAG) with reliable backend systems. I enjoy orchestrating workflows that save hours for real teams.
            </p>
            <p>
              Recent work includes automation agents, data pipelines, and full-stack academic platforms served to hundreds of users. I thrive in ambiguous spaces where I can design systems end-to-end.
            </p>
            <div className="pt-8 border-t border-neutral-800">
              <h4 className="text-sm uppercase tracking-[0.3em] text-indigo-400 mb-4 flex items-center gap-2 font-bold">
                <GraduationCap size={18} /> Education
              </h4>
              <div className="bg-neutral-800/30 p-6 rounded-2xl border border-neutral-700/50 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                <div>
                  <p className="font-bold text-white text-xl">FAST NUCES, Islamabad</p>
                  <p className="text-neutral-400">BS Computer Science</p>
                </div>
                <span className="px-3 py-1 bg-neutral-900 rounded-full text-xs text-neutral-500 border border-neutral-800">Expected 2026</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    experience: {
      badge: 'Journey',
      title: 'Professional Experience',
      subtitle: 'Impact snapshots from internships and leadership roles.',
      accent: 'bg-gradient-to-r from-indigo-500 via-blue-500 to-transparent',
      body: (
        <div className="space-y-8 relative">
          <div className="absolute left-[11px] top-3 bottom-3 w-0.5 bg-neutral-800"></div>
          {experienceItems.map((job, i) => (
            <div key={job.role + i} className="relative pl-12">
              <div className="absolute left-0 top-2 w-6 h-6 rounded-full bg-neutral-900 border-2 border-indigo-500 z-10 shadow-[0_0_15px_rgba(99,102,241,0.5)]"></div>
              <div className="flex flex-wrap gap-x-3 gap-y-1 items-center text-sm font-mono text-indigo-400 mb-2">
                <span className="font-bold text-white text-base">{job.company}</span>
                <span className="text-neutral-600">•</span>
                <span>{job.location}</span>
                <span className="text-neutral-600">•</span>
                <span className="text-neutral-300 bg-neutral-800/50 px-2 py-0.5 rounded">{job.year}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{job.role}</h3>
              <p className="text-neutral-300 text-base mb-4 italic font-light border-l-2 border-neutral-800 pl-4">{job.desc}</p>
              <ul className="space-y-2">
                {job.bullets.map((point, idx) => (
                  <li key={idx} className="flex gap-4 text-neutral-400 leading-relaxed text-sm">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-500/50 flex-shrink-0"></span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )
    },
    projects: {
      badge: 'Case Studies',
      title: 'Projects',
      subtitle: 'A sampling of AI, automation, and platform builds.',
      accent: 'bg-gradient-to-r from-emerald-500 via-teal-500 to-transparent',
      body: (
        <div className="grid grid-cols-1 gap-4">
          {projectItems.map((project) => (
            <div key={project.title} className="bg-neutral-900/40 border border-neutral-800 rounded-3xl p-6 hover:bg-neutral-900/60 transition-colors group">
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors">{project.title}</h3>
                <div className="px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
                  Build
                </div>
              </div>
              <p className="text-neutral-300 text-base mb-6 font-medium">{project.headline}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1.5 bg-neutral-950 rounded-lg text-xs border border-neutral-800 text-neutral-400 font-mono">
                    {tag}
                  </span>
                ))}
              </div>

              <ul className="grid md:grid-cols-2 gap-3">
                {project.bullets.map((point, idx) => (
                  <li key={idx} className="flex gap-3 text-sm text-neutral-400 bg-neutral-900/50 p-3 rounded-xl border border-neutral-800/50">
                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )
    },
    stack: {
      badge: 'Capability Map',
      title: 'Technical Stack',
      subtitle: 'Tools I ship with daily—front to back, infra included.',
      accent: 'bg-gradient-to-r from-sky-500 via-blue-600 to-transparent',
      body: (
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { icon: <Code2 size={20} />, title: 'Languages', skills: ['JavaScript', 'TypeScript', 'Python', 'C++', 'C#', 'SQL'] },
            { icon: <Monitor size={20} />, title: 'Frontend', skills: ['React', 'Redux', 'Tailwind', 'Responsive UI', 'Framer Motion'] },
            { icon: <Server size={20} />, title: 'Backend', skills: ['Django REST', 'Flask', 'Node.js', 'FastAPI', 'Microservices'] },
            { icon: <Database size={20} />, title: 'Data', skills: ['PostgreSQL', 'MongoDB', 'Query Optimization'] },
            { icon: <Globe size={20} />, title: 'AI / Automation', skills: ['LLMs', 'RAG', 'OpenAI API', 'n8n', 'LangChain'] },
            { icon: <HardDrive size={20} />, title: 'Ops & Cloud', skills: ['Docker', 'CI/CD', 'Azure', 'Observability'] }
          ].map(section => (
            <div key={section.title} className="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-6 hover:border-sky-500/30 transition-colors group">
              <div className="flex items-center gap-3 text-sky-400 font-bold mb-4 text-lg group-hover:text-sky-300">
                {section.icon}
                {section.title}
              </div>
              <div className="flex flex-wrap gap-2 text-sm text-neutral-300">
                {section.skills.map(skill => (
                  <span key={skill} className="px-3 py-1.5 bg-neutral-950 rounded-lg border border-neutral-800 text-xs text-neutral-400 hover:text-white hover:border-neutral-600 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )
    },
    contact: {
      badge: 'Let\'s Talk',
      title: 'Contact',
      subtitle: 'Reach out for collaborations, internships, or freelance gigs.',
      accent: 'bg-gradient-to-r from-indigo-500 via-violet-500 to-transparent',
      body: (
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h4 className="text-sm uppercase tracking-[0.4em] text-indigo-400 font-bold">Direct lines</h4>
            <div className="bg-neutral-900/60 border border-neutral-800 rounded-3xl p-8 space-y-4 hover:bg-neutral-900 transition-colors group">
              <div className="text-neutral-500 text-xs uppercase tracking-widest font-semibold">Email</div>
              <a href="mailto:mmustafakamran@gmail.com" className="block text-white text-xl md:text-2xl font-bold hover:text-indigo-400 transition-colors break-all">
                mmustafakamran@gmail.com
              </a>
              <p className="text-emerald-400 text-xs flex items-center gap-2 font-medium bg-emerald-500/10 w-fit px-3 py-1 rounded-full border border-emerald-500/20">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                Replies within 24h
              </p>
            </div>

            <div className="bg-neutral-900/60 border border-neutral-800 rounded-3xl p-8 space-y-4 hover:bg-neutral-900 transition-colors">
              <div className="text-neutral-500 text-xs uppercase tracking-widest font-semibold">LinkedIn</div>
              <a href="https://linkedin.com/in/mustafaKamran03" target="_blank" rel="noreferrer" className="block text-white text-xl md:text-2xl font-bold hover:text-indigo-400 transition-colors">
                linkedin.com/in/mustafaKamran03
              </a>
              <p className="text-neutral-500 text-xs">DMs open</p>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-sm uppercase tracking-[0.4em] text-indigo-400 font-bold">Social</h4>
            <div className="bg-neutral-900/60 border border-neutral-800 rounded-3xl p-6 flex flex-col gap-4">
              {[
                { label: 'GitHub', href: 'https://github.com/MMMustafaKamran' },
                { label: 'LinkedIn', href: 'https://linkedin.com/in/mustafaKamran03' },
                { label: 'Portfolio Source', href: '#' },
              ].map((link) => (
                <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="text-neutral-300 hover:text-white transition-colors flex items-center justify-between group p-4 hover:bg-neutral-800 rounded-2xl border border-transparent hover:border-neutral-700">
                  <span className="flex items-center gap-4 font-medium">
                    {link.label === 'GitHub' ? <Github size={20} /> : <Globe size={20} />}
                    {link.label}
                  </span>
                  <div className="bg-neutral-800 p-2 rounded-full group-hover:bg-white group-hover:text-black transition-colors">
                    <ArrowUpRight size={16} />
                  </div>
                </a>
              ))}
            </div>
            <div className="bg-neutral-900/40 border border-neutral-800/50 rounded-2xl p-6 text-sm text-neutral-500 flex items-center justify-center gap-3">
              <Globe size={16} />
              Based in Islamabad (PKT) – open to remote.
            </div>
          </div>
        </div>
      )
    },
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-neutral-200 p-4 md:p-8 font-sans selection:bg-indigo-500/30 relative">
      <Navbar selectedTile={selectedTile} onSelect={setSelectedTile} />

      {/* Global Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-noise"></div>
        <div className="absolute inset-0 bg-code-accent"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] opacity-50"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 mt-20 md:mt-24">
        <LayoutGroup>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[180px]">
            <HeroTile onOpen={setSelectedTile} toggleProfile={() => setSelectedTile('profile')} />
            <ExperienceTile onOpen={setSelectedTile} items={experienceItems} />
            <ProjectsTile onOpen={setSelectedTile} items={projectItems} />
            <StackTile onOpen={setSelectedTile} />
            <SocialTile />
            <ContactTile onOpen={setSelectedTile} />
            <SpotifyTile />
            <HobbiesTile />
            <LocationTile />
            <ExtracurricularsTile />
          </div>
        </LayoutGroup>
      </div>

      <DetailModal
        detail={detailContent[selectedTile]}
        onClose={() => setSelectedTile(null)}
      />
    </div>
  );
};

export default Portfolio;