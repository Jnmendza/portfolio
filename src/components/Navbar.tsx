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
    <nav className='p-6 z-100'>
      <div className='flex justify-center space-x-16 '>
        {links.map((link, index) => (
          <Link
            href={link.href}
            key={index}
            className={`cursor-pointer hover:text-primary font-bold ${
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
