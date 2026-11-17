import React, { useState, useMemo } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Download, 
  ExternalLink, 
  Github, 
  Linkedin, 
  Twitter, 
  Instagram, 
  Briefcase, 
  GraduationCap, 
  Award, 
  GitPullRequest, 
  Code, 
  Layers, 
  Database, 
  Cpu, 
  CheckCircle2, 
  Menu, 
  X, 
  Search,
  MessageSquare,
  Sparkles,
  Terminal
} from 'lucide-react';
import * as Constants from './Constants';

// Helper component for fallback images
const SafeImage = ({ src, alt, className, fallbackIcon: FallbackIcon }) => {
  const [error, setError] = useState(false);
  if (error || !src) {
    return (
      <div className={`${className} flex items-center justify-center bg-slate-800 border border-slate-700 text-indigo-400`}>
        <FallbackIcon className="w-6 h-6" />
      </div>
    );
  }
  return (
    <img 
      src={src} 
      alt={alt} 
      className={className} 
      onError={() => setError(true)} 
    />
  );
};

export default function App() {
  const [activeTab, setActiveTab] = useState('skills');
  const [projectSearch, setProjectSearch] = useState('');
  const [selectedLanguageFilter, setSelectedLanguageFilter] = useState('All');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);

  // Tabs navigation config
  const tabs = [
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'projects', label: 'Projects', icon: Terminal },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'certifications', label: 'Certifications', icon: Award },
    { id: 'opensource', label: 'Open Source', icon: GitPullRequest },
    { id: 'about', label: 'About Me', icon: Sparkles },
  ];

  // Extract unique languages/tags for projects filter
  const projectLanguages = useMemo(() => {
    const langs = new Set(['All']);
    Constants.GithubProjects.forEach(p => {
      if (p.languages) {
        p.languages.split(',').forEach(l => langs.add(l.trim()));
      }
    });
    return Array.from(langs);
  }, []);

  // Filter projects based on search + tag selector
  const filteredProjects = useMemo(() => {
    return Constants.GithubProjects.filter(project => {
      const matchesSearch = project.projectName.toLowerCase().includes(projectSearch.toLowerCase()) ||
                            project.languages.toLowerCase().includes(projectSearch.toLowerCase());
      const matchesLang = selectedLanguageFilter === 'All' || 
                          project.languages.split(',').map(l => l.trim()).includes(selectedLanguageFilter);
      return matchesSearch && matchesLang;
    });
  }, [projectSearch, selectedLanguageFilter]);

  // Handle WhatsApp action
  const handleWhatsApp = () => {
    const formattedNum = Constants.whatAppNumber.replace(/[^0-9+]/g, '');
    window.open(`https://wa.me/${formattedNum.replace('+', '')}`, '_blank');
  };

  return (
    <div className="relative min-h-screen bg-[#020617] text-slate-100 overflow-x-hidden selection:bg-indigo-500 selection:text-white">
      {/* Decorative Blur Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-indigo-900/20 blur-[120px] pointer-events-none animate-pulse-slow"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-purple-900/20 blur-[120px] pointer-events-none animate-pulse-slow" style={{ animationDelay: '4s' }}></div>
      <div className="absolute top-[40%] right-[20%] w-[400px] h-[400px] rounded-full bg-cyan-900/15 blur-[120px] pointer-events-none animate-pulse-slow" style={{ animationDelay: '2s' }}></div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 py-6 md:py-12 relative z-10">
        
        {/* Header (Mobile Navigation bar) */}
        <header className="flex items-center justify-between lg:hidden mb-6 bg-slate-900/60 backdrop-blur-md p-4 rounded-2xl border border-slate-800">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-indigo-500">
              <img src="https://i.postimg.cc/qMM74xFH/profile-photo.jpg" alt="Gautam Mishra" className="w-full h-full object-cover" />
            </div>
            <div>
              <h2 className="text-sm font-bold tracking-wide">{Constants.Name}</h2>
              <p className="text-xs text-indigo-400 font-medium">Sr. Software Engineer</p>
            </div>
          </div>
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-slate-800 border border-slate-700 hover:bg-slate-700 transition"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-slate-100" /> : <Menu className="w-6 h-6 text-slate-100" />}
          </button>
        </header>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden mb-6 bg-slate-900/90 backdrop-blur-lg rounded-2xl p-4 border border-slate-800 space-y-2 animate-fadeIn">
            {tabs.map(tab => {
              const TabIcon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`flex items-center w-full space-x-3 px-4 py-3 rounded-xl text-sm font-semibold transition ${
                    activeTab === tab.id 
                      ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/20' 
                      : 'text-slate-400 hover:bg-slate-800 hover:text-slate-100'
                  }`}
                >
                  <TabIcon className="w-5 h-5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          
          {/* LEFT PANEL: PROFILE CARD (col-span 4) */}
          <aside className="lg:col-span-4 lg:sticky lg:top-8 self-start">
            <div className="glass-panel rounded-3xl p-6 md:p-8 flex flex-col items-center text-center shadow-xl">
              
              {/* Profile Avatar with elegant ring */}
              <div className="relative group mb-6">
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 blur-md opacity-70 group-hover:opacity-100 transition duration-500 animate-spin-slow"></div>
                <div className="relative w-36 h-36 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-slate-950 bg-slate-900">
                  <img 
                    src="https://i.postimg.cc/qMM74xFH/profile-photo.jpg" 
                    alt={Constants.Name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>
              </div>

              {/* Identity */}
              <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white mb-2">
                {Constants.Name}
              </h1>
              
              {/* Professional Title Badges */}
              <div className="space-y-1 mb-6">
                <p className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
                  Sr. Software Engineer
                </p>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-950/80 text-indigo-300 border border-indigo-900/60">
                  Full Stack Developer (MERN)
                </span>
              </div>

              {/* Divider */}
              <hr className="w-full border-slate-800 mb-6" />

              {/* Contact Information Details */}
              <div className="w-full space-y-4 text-left text-sm mb-8">
                <div className="flex items-center space-x-3 text-slate-300 hover:text-white transition group">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 group-hover:border-indigo-500/50 group-hover:bg-indigo-950/20 text-indigo-400 transition">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="truncate">
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Email Address</p>
                    <a href={`mailto:${Constants.EmailAddress}`} className="font-semibold block truncate hover:underline text-slate-200">
                      {Constants.EmailAddress}
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3 text-slate-300 hover:text-white transition group">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 group-hover:border-indigo-500/50 group-hover:bg-indigo-950/20 text-indigo-400 transition">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Primary Call</p>
                    <a href={`tel:${Constants.PhoneNumber}`} className="font-semibold text-slate-200 hover:underline">
                      {Constants.PhoneNumber}
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3 text-slate-300 hover:text-white transition group cursor-pointer" onClick={handleWhatsApp}>
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 group-hover:border-green-500/50 group-hover:bg-green-950/20 text-green-400 transition">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">WhatsApp chat</p>
                    <span className="font-semibold text-slate-200 hover:underline flex items-center gap-1.5">
                      {Constants.whatAppNumber}
                      <span className="w-2 h-2 rounded-full bg-green-500 animate-ping"></span>
                    </span>
                  </div>
                </div>

                <div className="flex items-center space-x-3 text-slate-300 transition group">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-indigo-400 transition">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Location</p>
                    <p className="font-semibold text-slate-200">{Constants.Home}</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="w-full flex flex-col gap-3 mb-6">
                <a 
                  href="https://drive.google.com/file/d/1az-VXPOy49x3dSLTVS1d9NJEjN-kVGWc/view?usp=sharing" 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center justify-center w-full px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white font-bold text-sm tracking-wide shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/30 hover:brightness-110 active:scale-95 transition"
                >
                  <Download className="w-4.5 h-4.5 mr-2" />
                  Download Resume
                </a>
              </div>

              {/* Social Channels with customized hover states */}
              <div className="flex items-center justify-center gap-3">
                <a 
                  href="https://www.linkedin.com/in/gautam-mishra-846655149" 
                  target="_blank" 
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-indigo-400 hover:border-indigo-500/30 hover:bg-indigo-950/10 active:scale-90 transition"
                  title="LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="https://github.com/MishraGautam" 
                  target="_blank" 
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 hover:bg-slate-800/30 active:scale-90 transition"
                  title="GitHub Profile"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a 
                  href="https://instagram.com/really__famous?igshid=ZDdkNTZiNTM=" 
                  target="_blank" 
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-pink-400 hover:border-pink-500/30 hover:bg-pink-950/10 active:scale-90 transition"
                  title="Instagram Profile"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="https://twitter.com/gautamfamous?t=pa7J3w7VYTMAJdmmH24Tmg&s=09" 
                  target="_blank" 
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/30 hover:bg-cyan-950/10 active:scale-90 transition"
                  title="Twitter Profile"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>

            </div>
          </aside>

          {/* RIGHT PANEL: MAIN WORKSPACE CONTENT (col-span 8) */}
          <main className="lg:col-span-8 flex flex-col space-y-6">
            
            {/* Tab Switching Navigation Header (Desktop Only) */}
            <nav className="hidden lg:flex items-center space-x-1 p-1.5 bg-slate-900/60 backdrop-blur-md rounded-2xl border border-slate-800 shadow-sm">
              {tabs.map(tab => {
                const TabIcon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-2 px-4.5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition duration-200 ${
                      activeTab === tab.id 
                        ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20' 
                        : 'text-slate-400 hover:bg-slate-800/50 hover:text-slate-100'
                    }`}
                  >
                    <TabIcon className="w-4 h-4" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </nav>

            {/* Dynamic Content Panel Card */}
            <section className="glass-panel rounded-3xl p-6 md:p-8 min-h-[550px] shadow-xl flex flex-col justify-start text-left bg-slate-950/40">
              
              {/* TAB 1: SKILLS */}
              {activeTab === 'skills' && (
                <div className="space-y-8 animate-fadeIn">
                  <div className="border-b border-slate-800 pb-4">
                    <h2 className="text-2xl font-extrabold text-white flex items-center gap-2">
                      <Code className="w-6 h-6 text-indigo-500" />
                      Professional Skill Matrix
                    </h2>
                    <p className="text-sm text-slate-400 mt-1">A visual breakdown of core technical proficiencies, frameworks, and tools acquired over years of development experience.</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Programming Languages */}
                    <div className="space-y-4.5 bg-slate-900/40 p-5 rounded-2xl border border-slate-900">
                      <h3 className="text-base font-bold text-slate-200 flex items-center gap-2 mb-3">
                        <Terminal className="w-5 h-5 text-indigo-400" />
                        Programming Languages
                      </h3>
                      {Constants.ProgrammingSkills.map(skill => (
                        <div key={skill.language} className="space-y-1.5">
                          <div className="flex justify-between text-sm font-semibold">
                            <span className="text-slate-300">{skill.language}</span>
                            <span className="text-indigo-400">{skill.progress}%</span>
                          </div>
                          <div className="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-1000"
                              style={{ width: `${skill.progress}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Markup Languages */}
                    <div className="space-y-4.5 bg-slate-900/40 p-5 rounded-2xl border border-slate-900">
                      <h3 className="text-base font-bold text-slate-200 flex items-center gap-2 mb-3">
                        <Layers className="w-5 h-5 text-indigo-400" />
                        Markup Languages
                      </h3>
                      {Constants.MarkUpSkills.map(skill => (
                        <div key={skill.language} className="space-y-1.5">
                          <div className="flex justify-between text-sm font-semibold">
                            <span className="text-slate-300">{skill.language}</span>
                            <span className="text-purple-400">{skill.progress}%</span>
                          </div>
                          <div className="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-1000"
                              style={{ width: `${skill.progress}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Frameworks List */}
                  <div className="bg-slate-900/40 p-5 rounded-2xl border border-slate-900 space-y-4">
                    <h3 className="text-base font-bold text-slate-200 flex items-center gap-2">
                      <Layers className="w-5 h-5 text-indigo-400" />
                      Frameworks & Platforms
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {Constants.Frameworks.map(fw => (
                        <div key={fw.language} className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
                          <span className="text-xs font-bold tracking-wider text-indigo-400 uppercase">{fw.language}</span>
                          <p className="text-sm text-slate-300 mt-1 font-medium">{fw.frameworks}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Badges Grid (Databases, Caches, Tools, IDEs) */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Databases & Caches */}
                    <div className="bg-slate-900/40 p-5 rounded-2xl border border-slate-900 space-y-4">
                      <h3 className="text-base font-bold text-slate-200 flex items-center gap-2">
                        <Database className="w-5 h-5 text-indigo-400" />
                        Data Services
                      </h3>
                      <div className="space-y-3">
                        <div>
                          <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1.5">Databases</p>
                          <div className="flex flex-wrap gap-2">
                            {Constants.Databases.map(db => (
                              <span key={db} className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 text-slate-200 border border-slate-700">{db}</span>
                            ))}
                          </div>
                        </div>
                        <div>
                          <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1.5">Caching & Queues</p>
                          <div className="flex flex-wrap gap-2">
                            {Constants.Caches.map(cache => (
                              <span key={cache} className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 text-indigo-300 border border-slate-700/60">{cache}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Tools & Environments */}
                    <div className="bg-slate-900/40 p-5 rounded-2xl border border-slate-900 space-y-4">
                      <h3 className="text-base font-bold text-slate-200 flex items-center gap-2">
                        <Cpu className="w-5 h-5 text-indigo-400" />
                        Tools & Workspaces
                      </h3>
                      <div className="space-y-3">
                        <div>
                          <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1.5">Developer Tools</p>
                          <div className="flex flex-wrap gap-1.5">
                            {Constants.Tools.map(tool => (
                              <span key={tool} className="px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-slate-800/80 text-slate-300 border border-slate-700/50">{tool}</span>
                            ))}
                          </div>
                        </div>
                        <div>
                          <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1.5">Favorite IDEs</p>
                          <div className="flex flex-wrap gap-1.5">
                            {Constants.IDE.map(ide => (
                              <span key={ide} className="px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-slate-800/80 text-slate-300 border border-slate-700/50">{ide}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Exploring Technologies */}
                  <div className="p-4 rounded-2xl bg-indigo-950/20 border border-indigo-900/40 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 rounded-lg bg-indigo-900/50 text-indigo-300">
                        <Sparkles className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-100">Exploring & Expanding Knowledge</h4>
                        <p className="text-xs text-indigo-300 font-medium">Actively learning and prototyping with modern tech stacks:</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      {Constants.Tech.map(tech => (
                        <span key={tech} className="px-3 py-1.5 rounded-lg text-xs font-bold bg-indigo-600 text-white shadow-md shadow-indigo-600/10">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 2: EXPERIENCE */}
              {activeTab === 'experience' && (
                <div className="space-y-8 animate-fadeIn">
                  <div className="border-b border-slate-800 pb-4">
                    <h2 className="text-2xl font-extrabold text-white flex items-center gap-2">
                      <Briefcase className="w-6 h-6 text-indigo-500" />
                      Professional History
                    </h2>
                    <p className="text-sm text-slate-400 mt-1">A timeline of my professional journey in web, mobile and back-end architecture.</p>
                  </div>

                  {/* Vertical Timeline */}
                  <div className="relative pl-6 md:pl-8 border-l-2 border-slate-800 space-y-12">
                    {Constants.ExperienceObject.map((exp, index) => (
                      <div key={index} className="relative group">
                        
                        {/* Dot indicator */}
                        <div className="absolute -left-[31px] md:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-4 border-indigo-500 group-hover:scale-125 group-hover:bg-indigo-500 transition duration-300 shadow"></div>
                        
                        {/* Experience Card */}
                        <div className="glass-panel rounded-2xl p-5 md:p-6 glass-panel-hover shadow-lg">
                          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                            <div className="flex items-center space-x-4">
                              <SafeImage 
                                src={exp.imageSrc} 
                                alt={exp.company} 
                                className="w-12 h-12 rounded-xl object-contain bg-white p-1"
                                fallbackIcon={Briefcase}
                              />
                              <div>
                                <h3 className="text-lg font-bold text-white group-hover:text-indigo-400 transition">{exp.company}</h3>
                                <p className="text-sm font-semibold text-indigo-300">{exp.role}</p>
                              </div>
                            </div>
                            <span className="self-start md:self-center px-3 py-1 rounded-full text-xs font-bold bg-slate-800 text-indigo-300 border border-slate-700">
                              {exp.date}
                            </span>
                          </div>

                          <p className="text-slate-300 text-sm leading-relaxed mb-4">
                            {exp.desc}
                          </p>

                          {/* Quick Highlights / Stack representation */}
                          <div className="flex flex-wrap gap-1.5">
                            {index === 0 ? (
                              <>
                                <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-slate-900 text-slate-300 border border-slate-800">NodeJS</span>
                                <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-slate-900 text-slate-300 border border-slate-800">ReactJS</span>
                                <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-slate-900 text-slate-300 border border-slate-800">React Native</span>
                                <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-slate-900 text-slate-300 border border-slate-800">MongoDB</span>
                                <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-slate-900 text-slate-300 border border-slate-800">Blockchain</span>
                                <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-slate-900 text-slate-300 border border-slate-800">Team Leadership</span>
                              </>
                            ) : (
                              <>
                                <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-slate-900 text-slate-300 border border-slate-800">JavaScript ES6</span>
                                <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-slate-900 text-slate-300 border border-slate-800">ReactJS</span>
                                <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-slate-900 text-slate-300 border border-slate-800">HTML5 / CSS3</span>
                                <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-slate-900 text-slate-300 border border-slate-800">SCSS</span>
                                <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-slate-900 text-slate-300 border border-slate-800">Backend APIs</span>
                              </>
                            )}
                          </div>
                        </div>

                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 3: PROJECTS */}
              {activeTab === 'projects' && (
                <div className="space-y-6 animate-fadeIn">
                  <div className="border-b border-slate-800 pb-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <h2 className="text-2xl font-extrabold text-white flex items-center gap-2">
                        <Terminal className="w-6 h-6 text-indigo-500" />
                        Software Projects
                      </h2>
                      <p className="text-sm text-slate-400 mt-1">Explore deployed applications, mobile apps, and opensource demos.</p>
                    </div>

                    {/* Filter and Search Box */}
                    <div className="relative w-full md:w-72">
                      <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <input 
                        type="text" 
                        placeholder="Search projects..."
                        value={projectSearch}
                        onChange={(e) => setProjectSearch(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 bg-slate-900 border border-slate-850 rounded-xl text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition"
                      />
                    </div>
                  </div>

                  {/* Filter Pills */}
                  <div className="flex flex-wrap gap-2 pb-2">
                    {projectLanguages.map(lang => (
                      <button
                        key={lang}
                        onClick={() => setSelectedLanguageFilter(lang)}
                        className={`px-3.5 py-1.5 rounded-lg text-xs font-bold tracking-wide transition ${
                          selectedLanguageFilter === lang 
                            ? 'bg-indigo-600 text-white' 
                            : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        {lang}
                      </button>
                    ))}
                  </div>

                  {/* Grid of Modern Cards */}
                  {filteredProjects.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {filteredProjects.map((project, i) => (
                        <div key={i} className="glass-panel rounded-2xl p-5 flex flex-col justify-between glass-panel-hover shadow-lg">
                          <div>
                            <div className="flex items-start justify-between mb-3">
                              <h3 className="text-base font-bold text-white leading-snug hover:text-indigo-400 transition">
                                {project.projectName}
                              </h3>
                              <span className="px-2 py-0.5 rounded bg-indigo-950 text-indigo-300 text-[10px] font-bold uppercase border border-indigo-900">
                                No. {project.sr}
                              </span>
                            </div>
                            
                            {/* Visual representation of tags */}
                            <div className="flex flex-wrap gap-1.5 mb-4">
                              {project.languages.split(',').map((tag, tIdx) => (
                                <span key={tIdx} className="px-2 py-1 rounded bg-slate-900 text-slate-400 text-[10px] font-semibold border border-slate-800/80">
                                  {tag.trim()}
                                </span>
                              ))}
                            </div>
                          </div>

                          <div className="flex items-center justify-between border-t border-slate-900 pt-3 mt-auto">
                            <span className="text-xs text-slate-500 font-medium">Live Deployment</span>
                            <a 
                              href={project.projectLink} 
                              target="_blank" 
                              rel="noreferrer"
                              className="inline-flex items-center text-xs font-bold text-indigo-400 hover:text-indigo-300 gap-1 group"
                            >
                              Open Link
                              <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition duration-200" />
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12 bg-slate-900/20 border border-dashed border-slate-800 rounded-2xl">
                      <Terminal className="w-12 h-12 text-slate-700 mx-auto mb-3" />
                      <p className="text-slate-400 font-semibold">No projects found matching current filters.</p>
                      <button 
                        onClick={() => { setProjectSearch(''); setSelectedLanguageFilter('All'); }}
                        className="mt-2 text-xs font-bold text-indigo-400 hover:underline"
                      >
                        Reset filters
                      </button>
                    </div>
                  )}
                </div>
              )}

              {/* TAB 4: EDUCATION */}
              {activeTab === 'education' && (
                <div className="space-y-8 animate-fadeIn">
                  <div className="border-b border-slate-800 pb-4">
                    <h2 className="text-2xl font-extrabold text-white flex items-center gap-2">
                      <GraduationCap className="w-6 h-6 text-indigo-500" />
                      Academic Background
                    </h2>
                    <p className="text-sm text-slate-400 mt-1">Formal academic achievements and technical educational milestones.</p>
                  </div>

                  <div className="relative pl-6 md:pl-8 border-l-2 border-slate-800 space-y-12">
                    {Constants.EducationObject.map((edu, index) => (
                      <div key={index} className="relative group">
                        {/* Dot */}
                        <div className="absolute -left-[31px] md:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-4 border-indigo-500 group-hover:scale-125 group-hover:bg-indigo-500 transition duration-300 shadow"></div>

                        <div className="glass-panel rounded-2xl p-5 md:p-6 glass-panel-hover shadow-lg">
                          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                            <div className="flex items-center space-x-4">
                              <SafeImage 
                                src={edu.imageSrc} 
                                alt={edu.college} 
                                className="w-12 h-12 rounded-xl object-contain bg-white p-1"
                                fallbackIcon={GraduationCap}
                              />
                              <div>
                                <h3 className="text-base font-bold text-white group-hover:text-indigo-400 transition">{edu.college}</h3>
                                <p className="text-sm font-semibold text-indigo-300">{edu.role}</p>
                              </div>
                            </div>
                            <span className="self-start md:self-center px-3 py-1 rounded-full text-xs font-bold bg-slate-800 text-indigo-300 border border-slate-700 whitespace-nowrap">
                              {edu.date}
                            </span>
                          </div>

                          <p className="text-slate-300 text-sm leading-relaxed">
                            {edu.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 5: CERTIFICATIONS */}
              {activeTab === 'certifications' && (
                <div className="space-y-6 animate-fadeIn">
                  <div className="border-b border-slate-800 pb-4">
                    <h2 className="text-2xl font-extrabold text-white flex items-center gap-2">
                      <Award className="w-6 h-6 text-indigo-500" />
                      Professional Certifications
                    </h2>
                    <p className="text-sm text-slate-400 mt-1">Credentials, technical modules and core certifications achieved during professional self-growth.</p>
                  </div>

                  {/* Grid of Certificates */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {Constants.AwardsObject.map((award, i) => (
                      <div 
                        key={i} 
                        className="glass-panel rounded-2xl p-3 flex flex-col justify-between glass-panel-hover shadow-lg group cursor-pointer"
                        onClick={() => setSelectedCert(award)}
                      >
                        <div className="relative rounded-xl overflow-hidden aspect-video bg-slate-900 border border-slate-800">
                          <img 
                            src={award.src} 
                            alt={award.altText} 
                            className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                          />
                          <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition duration-300">
                            <span className="px-3 py-1.5 rounded-lg bg-indigo-600 text-white font-semibold text-xs shadow-md">Click to view</span>
                          </div>
                        </div>
                        <div className="pt-3 pb-1 px-1">
                          <h4 className="text-xs font-bold tracking-wide text-slate-300 uppercase truncate">
                            {award.altText.replace(/_/g, ' ')}
                          </h4>
                          <p className="text-[10px] font-semibold text-indigo-400 mt-0.5">Verified Credential</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Lightbox Modal */}
                  {selectedCert && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md animate-fadeIn">
                      <div className="relative max-w-3xl w-full bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl p-4">
                        <button 
                          onClick={() => setSelectedCert(null)}
                          className="absolute right-4 top-4 p-2.5 rounded-full bg-slate-850 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-700 shadow transition"
                        >
                          <X className="w-5 h-5" />
                        </button>
                        
                        <div className="p-3">
                          <img 
                            src={selectedCert.src} 
                            alt={selectedCert.altText} 
                            className="w-full max-h-[70vh] rounded-xl object-contain border border-slate-950"
                          />
                          <div className="mt-4 flex items-center justify-between px-2">
                            <div>
                              <h3 className="text-base font-bold text-white capitalize">{selectedCert.altText.replace(/_/g, ' ')}</h3>
                              <p className="text-xs text-indigo-400 font-semibold">Technical Certificate</p>
                            </div>
                            <a 
                              href={selectedCert.src} 
                              target="_blank" 
                              rel="noreferrer"
                              className="inline-flex items-center text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-500 px-4 py-2 rounded-xl transition"
                            >
                              Open Raw Image
                              <ExternalLink className="w-4 h-4 ml-1.5" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* TAB 6: OPEN SOURCE */}
              {activeTab === 'opensource' && (
                <div className="space-y-6 animate-fadeIn">
                  <div className="border-b border-slate-800 pb-4">
                    <h2 className="text-2xl font-extrabold text-white flex items-center gap-2">
                      <GitPullRequest className="w-6 h-6 text-indigo-500" />
                      Open Source Contributions
                    </h2>
                    <p className="text-sm text-slate-400 mt-1">Track record of pull requests submitted to various ecosystem libraries.</p>
                  </div>

                  {/* Pull requests cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {Constants.PRObject.map((pr, i) => (
                      <div key={i} className="glass-panel rounded-2xl p-5 flex flex-col justify-between glass-panel-hover shadow-lg">
                        <div>
                          <div className="flex items-center justify-between mb-3">
                            <span className="text-xs font-bold tracking-wider text-indigo-400 uppercase">{pr.repoName}</span>
                            <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold border ${
                              pr.status === 'Merged' 
                                ? 'bg-green-950/30 text-green-400 border-green-900/60' 
                                : 'bg-blue-950/30 text-blue-400 border-blue-900/60'
                            }`}>
                              <CheckCircle2 className="w-3 h-3 mr-1" />
                              {pr.status}
                            </span>
                          </div>

                          <h3 className="text-sm font-semibold text-slate-200 line-clamp-2 leading-relaxed mb-4">
                            Submitted pull request to improve {pr.repoName} features or configurations.
                          </h3>
                        </div>

                        <div className="flex flex-col space-y-2.5 pt-3 border-t border-slate-900/60">
                          <a 
                            href={pr.repoLink} 
                            target="_blank" 
                            rel="noreferrer"
                            className="inline-flex items-center text-xs text-slate-400 hover:text-indigo-400 transition"
                          >
                            <Github className="w-3.5 h-3.5 mr-1.5" />
                            View Repository
                          </a>
                          <a 
                            href={pr.pullRequest} 
                            target="_blank" 
                            rel="noreferrer"
                            className="inline-flex items-center text-xs font-bold text-indigo-400 hover:text-indigo-300"
                          >
                            <GitPullRequest className="w-3.5 h-3.5 mr-1.5" />
                            View Pull Request
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 7: ABOUT ME */}
              {activeTab === 'about' && (
                <div className="space-y-6 animate-fadeIn">
                  <div className="border-b border-slate-800 pb-4">
                    <h2 className="text-2xl font-extrabold text-white flex items-center gap-2">
                      <Sparkles className="w-6 h-6 text-indigo-500" />
                      About Gautam Mishra
                    </h2>
                    <p className="text-sm text-slate-400 mt-1">Get to know the professional developer behind the stack.</p>
                  </div>

                  <div className="space-y-5 text-slate-300 text-sm md:text-base leading-relaxed">
                    <p>
                      Hello visitor! My name is <strong className="text-white">Gautam Mishra</strong>, and I am a <strong className="text-white">Senior Software Engineer cum Full Stack Developer</strong> based in Mumbai, India.
                    </p>
                    <p>
                      With several years of industry experience, I have developed a deep, solid understanding of web, mobile, and backend architectures. I specialize in building highly responsive websites and robust API servers using the MERN stack (<strong className="text-indigo-400">MongoDB, Express, React, Node.js</strong>) alongside building native-feeling mobile applications with <strong className="text-indigo-400">React Native</strong> for both iOS and Android.
                    </p>
                    <p>
                      Throughout my career, I've had the privilege of working in fast-paced agile environments, taking projects from basic architectural drafts all the way to production deployment on the iOS App Store and Google Play Store. I've also successfully mentored and led developer teams to achieve outstanding project goals.
                    </p>
                    
                    {/* Professional value pillars */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                      <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                        <h4 className="text-xs font-extrabold tracking-wider text-indigo-400 uppercase mb-1">Architecture & Implementation</h4>
                        <p className="text-xs text-slate-400">Responsible for designing end-to-end stack layouts, high-performance API structures, and fluid client-side states.</p>
                      </div>
                      <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                        <h4 className="text-xs font-extrabold tracking-wider text-indigo-400 uppercase mb-1">Team Leadership & Mentorship</h4>
                        <p className="text-xs text-slate-400">Guided and mentored 9+ developers on task allocations, engineering standards, code reviews, and releases.</p>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-900">
                      <p className="text-slate-400 text-xs italic">
                        Thank you for visiting my portfolio. I am confident in my ability to bring high technical excellence, structured leadership, and creative problem-solving to any tech workspace. Let's build something world-class together!
                      </p>
                    </div>
                  </div>
                </div>
              )}

            </section>
          </main>

        </div>

        {/* Global Footer */}
        <footer className="mt-16 pt-8 border-t border-slate-900 text-center text-slate-500 text-xs space-y-2">
          <p>© {new Date().getFullYear()} Gautam Mishra. All rights reserved.</p>
          <p className="text-slate-600">Built using React 18, Tailwind CSS, Vite & Lucide Icons.</p>
        </footer>

      </div>
    </div>
  );
}
