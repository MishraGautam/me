import React from 'react';
import { Briefcase } from 'lucide-react';
import * as Constants from '../Constants';
import SafeImage from './SafeImage';

export default function ExperienceTab() {
  return (
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
  );
}
