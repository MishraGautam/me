import React from 'react';
import { GitPullRequest, CheckCircle2, Github } from 'lucide-react';
import * as Constants from '../Constants';

export default function OpenSourceTab() {
  return (
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
  );
}
