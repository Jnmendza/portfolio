"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathname = usePathname();
  const links = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
  ];
  return (
    <nav className='absolute w-full p-4 md:p-6 z-[100]'>
      <div className='flex justify-between md:justify-center space-x-8 md:space-x-14 px-4 md:px-0'>
        {links.map((link, index) => (
          <Link
            href={link.href}
            key={index}
            className={`cursor-pointer font-bold hover:text-primary hover:scale-[1.02] ${
              pathname === link.href ? "text-primary" : "text-white"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
