import React, { useState, useMemo } from 'react';
import { Terminal, Search, ExternalLink } from 'lucide-react';
import * as Constants from '../Constants';

export default function ProjectsTab() {
  const [projectSearch, setProjectSearch] = useState('');
  const [selectedLanguageFilter, setSelectedLanguageFilter] = useState('All');

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

  return (
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
  );
}
