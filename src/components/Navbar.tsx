"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Check, Copy } from "lucide-react";
import { Logo } from "./Logo";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasCopied, setHasCopied] = useState(false);

  const email = "contact@jonathanmendoza.dev";

  const navLinks = [
    { name: "Projects", href: "/#projects" },
    { name: "About", href: "/#about" },
  ];

  // Function to handle the clipboard copy and visual feedback
  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setHasCopied(true);

      // Reset the button after 2 seconds
      setTimeout(() => {
        setHasCopied(false);
      }, 2000);
    } catch (err) {
      console.error("Failed to copy email", err);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className='fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800/50'
    >
      <div className='flex items-center justify-between px-6 py-4 md:px-12 lg:px-24'>
        {/* Logo */}
        <Link
          href='/'
          className='flex items-center hover:opacity-80 transition-opacity z-50'
        >
          <Logo width={40} height={40} />
        </Link>

        {/* Desktop Navigation */}
        <div className='hidden md:flex items-center gap-8'>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className='text-sm font-medium text-zinc-400 hover:text-zinc-50 transition-colors'
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className='hidden md:flex items-center gap-4'>
          <Link
            href='https://qtmkwwvomuvavuoaqjcn.supabase.co/storage/v1/object/public/portfolio/main/Jonathan%20Mendoza%20-%20Resume.pdf'
            target='_blank'
            className='text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors'
          >
            Resume
          </Link>

          {/* New Copy Email Button (Desktop) */}
          <button
            onClick={handleCopyEmail}
            className='flex items-center gap-2 bg-zinc-100 text-zinc-950 px-4 py-2 rounded-full text-sm font-medium hover:bg-zinc-300 transition-colors w-[130px] justify-center cursor-pointer'
          >
            {hasCopied ? (
              <>
                <Check className='w-4 h-4 text-green-600' />
                <span>Copied!</span>
              </>
            ) : (
              <>
                <Copy className='w-4 h-4' />
                <span>Copy Email</span>
              </>
            )}
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className='md:hidden z-50 text-zinc-50 p-2 -mr-2'
          onClick={() => setIsOpen(!isOpen)}
          aria-label='Toggle menu'
        >
          {isOpen ? <X className='w-6 h-6' /> : <Menu className='w-6 h-6' />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className='md:hidden absolute top-0 left-0 w-full bg-zinc-950 flex flex-col items-center justify-center gap-8 border-b border-zinc-800'
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className='text-2xl font-syne font-bold text-zinc-400 hover:text-zinc-50 transition-colors'
              >
                {link.name}
              </Link>
            ))}
            <div className='flex flex-col items-center gap-6 mt-4'>
              <Link
                href='https://qtmkwwvomuvavuoaqjcn.supabase.co/storage/v1/object/public/portfolio/main/Jonathan%20Mendoza%20-%20Resume.pdf'
                target='_blank'
                onClick={() => setIsOpen(false)}
                className='text-lg font-medium text-cyan-400'
              >
                View Resume
              </Link>

              {/* New Copy Email Button (Mobile) */}
              <button
                onClick={handleCopyEmail}
                className='flex items-center justify-center gap-2 bg-zinc-100 text-zinc-950 px-8 py-3 rounded-full text-lg font-medium hover:bg-zinc-300 transition-colors w-[200px] cursor-pointer'
              >
                {hasCopied ? (
                  <>
                    <Check className='w-5 h-5 text-green-600' />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className='w-5 h-5' />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
