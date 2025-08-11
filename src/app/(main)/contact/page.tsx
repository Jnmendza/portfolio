"use client";

import React, { useRef, useState } from "react";
import TitleBanner from "@/components/TitleBanner";
import { bebasFont } from "@/lib/font";
import { toast } from "sonner";

type FieldErrors = { name?: string; email?: string; message?: string };

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const validate = (): FieldErrors => {
    const e: FieldErrors = {};
    if (!name.trim()) e.name = "Name is required.";
    if (!email.trim()) e.email = "Email is required.";
    else if (!emailRegex.test(email.trim())) e.email = "Enter a valid email.";
    if (!message.trim()) e.message = "Message is required.";
    return e;
  };

  const focusFirstError = (e: FieldErrors) => {
    if (e.name) nameRef.current?.focus();
    else if (e.email) emailRef.current?.focus();
    else if (e.message) messageRef.current?.focus();
  };

  const handleSubmit = async (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();

    const v = validate();
    if (Object.keys(v).length) {
      setErrors(v);
      toast.error("Please fix the highlighted fields.");
      focusFirstError(v);
      return;
    }

    setErrors({});
    setStatus("sending");

    try {
      await toast.promise(
        (async () => {
          const res = await fetch("/api/email", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, message }),
          });
          if (!res.ok) {
            const errorData = await res.json().catch(() => ({}));
            throw new Error(
              errorData.error || "Something went wrong when sending the email"
            );
          }
        })(),
        {
          loading: "Sending…",
          success: "Message sent! Check your email for confirmation.",
          error: (e) =>
            e instanceof Error ? e.message : "Failed to send message",
        }
      );

      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setStatus("error");
    } finally {
      // keep success state briefly if you want; otherwise reset:
      setTimeout(() => setStatus("idle"), 500);
    }
  };

  // onBlur validators for instant feedback
  const onBlurField = (field: keyof FieldErrors) => () => {
    const v = validate();
    setErrors((prev) => ({ ...prev, [field]: v[field] }));
  };

  const inputBase =
    "mt-1 block w-full rounded-md bg-white text-blackBlue p-4 shadow-sm focus:border-blackBlue focus:ring-blackBlue sm:text-sm";
  const errText = "mt-1 text-red-600 text-sm";

  return (
    <div className='px-6 mt-4 space-y-4'>
      <TitleBanner title='Contact' />
      <div className='grid grid-cols-1 lg:grid-cols-2 bg-primary p-6 rounded-lg'>
        <div className='text-blackBlue'>
          <h1 className={`${bebasFont.className} text-6xl`}>Get in touch</h1>
          <p className='w-full lg:w-[200px] text-sm'>
            If you are interested in my work or want to provide feedback about
            this website, I am open to exchanging ideas.
          </p>
        </div>

        <div className='mt-4 lg:mt-0'>
          <form onSubmit={handleSubmit} noValidate>
            <div className='space-y-4'>
              <div>
                <label
                  htmlFor='name'
                  className='block text-md font-bold text-mayGray'
                >
                  Name
                </label>
                <input
                  ref={nameRef}
                  type='text'
                  id='name'
                  name='name'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  onBlur={onBlurField("name")}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  className={`${inputBase} ${errors.name ? "border border-red-500" : ""} h-8`}
                  required
                />
                {errors.name && (
                  <p id='name-error' className={errText}>
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor='email'
                  className='block text-md font-bold text-mayGray'
                >
                  Email
                </label>
                <input
                  ref={emailRef}
                  type='email'
                  id='email'
                  name='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onBlur={onBlurField("email")}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  className={`${inputBase} ${errors.email ? "border border-red-500" : ""} h-8`}
                  required
                />
                {errors.email && (
                  <p id='email-error' className={errText}>
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor='message'
                  className='block text-md font-bold text-mayGray'
                >
                  Message
                </label>
                <textarea
                  ref={messageRef}
                  id='message'
                  name='message'
                  value={message}
                  rows={4}
                  onChange={(e) => setMessage(e.target.value)}
                  onBlur={onBlurField("message")}
                  aria-invalid={!!errors.message}
                  aria-describedby={
                    errors.message ? "message-error" : undefined
                  }
                  className={`${inputBase} ${errors.message ? "border border-red-500" : ""} min-h-[250px]`}
                  required
                />
                {errors.message && (
                  <p id='message-error' className={errText}>
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                type='submit'
                className='bg-blackBlue w-full rounded-lg p-2 cursor-pointer transform transition-transform duration-200 hover:scale-105 disabled:opacity-60'
                disabled={status === "sending"}
              >
                {status === "sending" ? "Sending..." : "Send"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
