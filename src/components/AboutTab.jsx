import React from 'react';
import { Sparkles } from 'lucide-react';
import * as Constants from '../Constants';

export default function AboutTab() {
  return (
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
          Hello visitor! My name is <strong className="text-white">{Constants.Name}</strong>, and I am a <strong className="text-white">Senior Software Engineer cum Full Stack Developer</strong> based in Mumbai, India.
        </p>
        <p>
          With several years of industry experience, I have developed a deep, solid understanding of web, mobile, and backend architectures. I specialize in building highly responsive websites and robust API servers using the MERN stack (<strong className="text-indigo-400">MongoDB, Express, React, Node.js</strong>) alongside building native-feeling mobile applications with <strong className="text-indigo-400">React Native</strong> for both iOS and Android.
        </p>
        <p>
          Throughout my career, I've had the privilege of work in fast-paced agile environments, taking projects from basic architectural drafts all the way to production deployment on the iOS App Store and Google Play Store. I've also successfully mentored and led developer teams to achieve outstanding project goals.
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
  );
}
