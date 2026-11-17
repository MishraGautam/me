import React from 'react';
import { GraduationCap } from 'lucide-react';
import * as Constants from '../Constants';
import SafeImage from './SafeImage';

export default function EducationTab() {
  return (
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
  );
}
