import React from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Download, 
  Linkedin, 
  Github, 
  Instagram, 
  Twitter, 
  MessageSquare 
} from 'lucide-react';
import * as Constants from '../Constants';

export default function ProfileCard() {
  const handleWhatsApp = () => {
    const formattedNum = Constants.whatAppNumber.replace(/[^0-9+]/g, '');
    window.open(`https://wa.me/${formattedNum.replace('+', '')}`, '_blank');
  };

  return (
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

      {/* Social Channels */}
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
  );
}
