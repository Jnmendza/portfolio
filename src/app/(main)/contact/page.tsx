"use client";
import React, { useState } from "react";
import TitleBanner from "@/components/TitleBanner";
import { bebasFont } from "@/lib/font";

const ContactPage = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  console.log("TEXT", {
    name,
    email,
    message,
  });
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name || !email || !message) {
      return;
    }

    setStatus("sending");
    setErrorMsg(null);

    try {
      const res = await fetch("/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (!res.ok) {
        // If NextResponse.json({ error }, { status: 500 }) is returned from the handler
        const errorData = await res.json();
        throw new Error(
          errorData.error || "Something went wrong when sending the email"
        );
      }

      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      setStatus("error");
      if (error instanceof Error) {
        setErrorMsg(error.message || "Error submitting form");
      } else {
        setErrorMsg("Error submitting form");
      }
    }
  };

  return (
    <div className='px-6 mt-4 space-y-4'>
      <TitleBanner title='Contact' />
      <div className='grid grid-cols-1 lg:grid-cols-2 bg-primary p-6 rounded-lg'>
        <div className='text-blackBlue'>
          <h1 className={`${bebasFont.className}  text-6xl`}>Get in touch</h1>
          <p className=' w-full lg:w-[200px] text-sm'>
            If you are interested in my work or want to provide feedback about
            this website, I am open to exchanging ideas .
          </p>
        </div>

        <div className='mt-4 lg:mt-0'>
          <form onSubmit={handleSubmit}>
            <div className='space-y-4'>
              <div>
                <label
                  htmlFor='name'
                  className='block text-md font-bold text-mayGray'
                >
                  Name
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  value={name}
                  className='mt-1 block h-8 text-blackBlue p-4 bg-white w-full rounded-md border-black-300 shadow-sm focus:border-blackBlue focus:ring-blackBlue sm:text-sm'
                  required
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <label
                  htmlFor='email'
                  className='block text-md font-bold text-mayGray'
                >
                  Email
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  value={email}
                  className='mt-1 block text-blackBlue p-4 h-8 bg-white w-full rounded-md border-black-300 shadow-sm focus:border-blackBlue focus:ring-blackBlue sm:text-sm'
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label
                  htmlFor='message'
                  className='block text-md font-bold text-mayGray'
                >
                  Message
                </label>
                <textarea
                  id='message'
                  name='message'
                  value={message}
                  rows={4}
                  className='mt-1 block bg-white text-blackBlue w-full min-h-[250px] p-4 rounded-md border-black-300 shadow-sm focus:border-blackBlue focus:ring-blackBlue sm:text-sm'
                  required
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <button
                type='submit'
                className='bg-blackBlue w-full rounded-lg p-2 cursor-pointer transform transition-transform duration-200 hover:scale-105'
              >
                {status === "sending" ? "Sending..." : "Send"}
              </button>
              {status === "success" && (
                <p className='mt-2 text-green-600'>
                  Message sent! Check your email for confirmation.
                </p>
              )}
              {status === "error" && (
                <p className='mt-2 text-red-600'>{errorMsg}</p>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
