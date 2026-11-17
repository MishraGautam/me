import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { Award, X, ExternalLink } from 'lucide-react';
import * as Constants from '../Constants';

export default function CertificationsTab() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
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

      {/* Lightbox Modal rendered via React Portal at body level */}
      {selectedCert && createPortal(
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md animate-fadeIn">
          <div className="relative max-w-3xl w-full bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl p-4 md:p-6 max-h-[95vh] flex flex-col justify-between">
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute right-4 top-4 p-2.5 rounded-full bg-slate-850 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-700 shadow transition z-10"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="p-1 flex flex-col items-center justify-center overflow-hidden flex-1 mt-6">
              <img
                src={selectedCert.src}
                alt={selectedCert.altText}
                className="max-w-full max-h-[65vh] md:max-h-[70vh] rounded-xl object-contain border border-slate-950 shadow-lg"
              />
            </div>
            
            <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-slate-800 pt-4 px-2">
              <div>
                <h3 className="text-sm md:text-base font-bold text-white capitalize">{selectedCert.altText.replace(/_/g, ' ')}</h3>
                <p className="text-xs text-indigo-400 font-semibold">Technical Certificate</p>
              </div>
              <a
                href={selectedCert.src}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-500 px-4 py-2.5 rounded-xl transition whitespace-nowrap"
              >
                Open Raw Image
                <ExternalLink className="w-4 h-4 ml-1.5" />
              </a>
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}
