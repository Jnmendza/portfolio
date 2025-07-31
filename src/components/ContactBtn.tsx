import Link from "next/link";
import React from "react";
import { IoIosSend } from "react-icons/io";

const ContactBtn = ({ className }: { className?: string }) => {
  return (
    <Link
      href={"/contact"}
      className={` flex items-center justify-center rounded-lg px-4 py-2 bg-primary border-black border-2 border-solid cursor-pointer transform transition-transform duration-200 hover:scale-105 ${className}`}
    >
      <p className='font-bold mr-2'>Contact Me</p>
      <IoIosSend size={20} />{" "}
    </Link>
  );
};

export default ContactBtn;
