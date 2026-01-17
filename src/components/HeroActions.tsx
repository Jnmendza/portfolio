"use client";

import { useState } from "react";
import { Copy, Check, FileDown } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const HeroActions = () => {
  const [isCopied, setIsCopied] = useState(false);
  const email = "me@jonathanmendoza.dev";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className='flex gap-4 pt-2'>
      {/* Resume Button */}
      <a
        href='https://qtmkwwvomuvavuoaqjcn.supabase.co/storage/v1/object/public/portfolio/main/J.Mendoza-resume.pdf'
        target='_blank'
        rel='noopener noreferrer'
        className='inline-flex items-center cursor-pointer justify-center gap-2 px-5 py-2.5 rounded-lg bg-slate-100 text-slate-900 font-medium hover:bg-white transition-colors border border-transparent'
      >
        <FileDown className='w-4 h-4' />
        Download Resume
      </a>

      {/* Copy Email Button */}
      <button
        onClick={handleCopy}
        className='inline-flex items-center cursor-pointer justify-center gap-2 px-5 py-2.5 rounded-lg bg-slate-800 text-slate-200 font-medium hover:bg-slate-700 hover:text-white transition-all border border-slate-700 active:scale-95'
      >
        {isCopied ? (
          <>
            <Check className='w-4 h-4 text-emerald-400' />
            <span className='text-emerald-400'>Copied!</span>
          </>
        ) : (
          <>
            <Copy className='w-4 h-4' />
            <span>Copy Email</span>
          </>
        )}
      </button>

      <a
        href='https://www.linkedin.com/in/jnmendza/'
        target='_blank'
        rel='noopener noreferrer'
        className='inline-flex items-center cursor-pointer justify-center px-4 py-2.5 rounded-lg bg-slate-800 text-slate-400 hover:text-[#0A66C2] hover:bg-slate-700 transition-all border border-slate-700'
      >
        <FaLinkedin className='w-6 h-6' />
      </a>

      <a
        href='https://github.com/jnmendza'
        target='_blank'
        rel='noopener noreferrer'
        className='inline-flex items-center cursor-pointer justify-center px-4 py-2.5 rounded-lg bg-slate-800 text-slate-400 hover:text-[#0A66C2] hover:bg-slate-700 transition-all border border-slate-700'
      >
        <FaGithub className='w-6 h-6' />
      </a>
    </div>
  );
};
