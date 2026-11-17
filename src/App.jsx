import React, { useState } from 'react';
import {
  Menu,
  X,
  Code,
  Briefcase,
  Terminal,
  GraduationCap,
  Award,
  Sparkles
} from 'lucide-react';

// Import modular components
import ProfileCard from './components/ProfileCard';
import SkillsTab from './components/SkillsTab';
import ExperienceTab from './components/ExperienceTab';
import ProjectsTab from './components/ProjectsTab';
import EducationTab from './components/EducationTab';
import CertificationsTab from './components/CertificationsTab';
import AboutTab from './components/AboutTab';
import * as Constants from './Constants';

export default function App() {
  const [activeTab, setActiveTab] = useState('skills');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Tabs configurations
  const tabs = [
    { id: 'skills', label: 'Skills', icon: Code, component: SkillsTab },
    { id: 'experience', label: 'Experience', icon: Briefcase, component: ExperienceTab },
    { id: 'projects', label: 'Projects', icon: Terminal, component: ProjectsTab },
    { id: 'education', label: 'Education', icon: GraduationCap, component: EducationTab },
    { id: 'certifications', label: 'Certifications', icon: Award, component: CertificationsTab },
    { id: 'about', label: 'About Me', icon: Sparkles, component: AboutTab },
  ];

  // Find current active component
  const ActiveComponent = tabs.find(t => t.id === activeTab)?.component || SkillsTab;

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
            <ProfileCard />
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
              {/* Dynamic render of active tab component */}
              <ActiveComponent />
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
