import Link from "next/link";
import { FileQuestion, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className='flex flex-col items-center justify-center min-h-[70vh] px-4 text-center space-y-8'>
      {/* 1. Icon Container */}
      <div className='relative'>
        {/* Glow effect */}
        <div className='absolute inset-0 bg-indigo-500/20 blur-xl rounded-full' />
        <div className='relative p-6 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl'>
          <FileQuestion className='w-12 h-12 text-indigo-400' />
        </div>
      </div>

      {/* 2. Text Content */}
      <div className='space-y-3'>
        <h1 className='text-4xl font-bold text-slate-100 tracking-tight sm:text-5xl'>
          Page not found
        </h1>
        <p className='text-lg text-slate-400 max-w-md mx-auto leading-relaxed'>
          Sorry, we couldn’t find the page you’re looking for. It might have
          been moved, deleted, or never existed.
        </p>
      </div>

      {/* 3. Action Button */}
      <Link
        href='/'
        className='inline-flex items-center gap-2 px-6 py-3 bg-slate-100 text-slate-900 hover:bg-white rounded-xl font-medium transition-all shadow-lg shadow-white/5 active:scale-95'
      >
        <ArrowLeft className='w-4 h-4' />
        Back to Home
      </Link>
    </div>
  );
}
