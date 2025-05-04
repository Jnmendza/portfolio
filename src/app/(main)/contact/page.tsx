import TitleBanner from "@/components/TitleBanner";
import { bebasFont } from "@/lib/font";
import React from "react";

const ContactPage = () => {
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
          <form action='submit'>
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
                  className='mt-1 block h-8 text-blackBlue p-4 bg-white w-full rounded-md border-black-300 shadow-sm focus:border-blackBlue focus:ring-blackBlue sm:text-sm'
                  required
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
                  className='mt-1 block text-blackBlue p-4 h-8 bg-white w-full rounded-md border-black-300 shadow-sm focus:border-blackBlue focus:ring-blackBlue sm:text-sm'
                  required
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
                  rows={4}
                  className='mt-1 block bg-white text-blackBlue w-full min-h-[250px] p-4 rounded-md border-black-300 shadow-sm focus:border-blackBlue focus:ring-blackBlue sm:text-sm'
                  required
                ></textarea>
              </div>
              <button
                type='submit'
                className='bg-blackBlue w-full rounded-lg p-2 cursor-pointer transform transition-transform duration-200 hover:scale-110'
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
