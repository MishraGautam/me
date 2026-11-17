import React from 'react';
import { 
  Code, 
  Terminal, 
  Layers, 
  Database, 
  Cpu, 
  Sparkles 
} from 'lucide-react';
import * as Constants from '../Constants';

export default function SkillsTab() {
  return (
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

      {/* Badges Grid */}
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
  );
}
