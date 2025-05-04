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
    <nav className='absolute w-full p-6 z-100'>
      <div className='flex justify-center space-x-16 '>
        {links.map((link, index) => (
          <Link
            href={link.href}
            key={index}
            className={`cursor-pointer font-bold hover:text-primary transform transition-transform duration-200 hover:scale-110 ${
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
