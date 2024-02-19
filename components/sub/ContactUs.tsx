"use client";
import { sendEmailTest } from '@/app/_actions/mail/contactEmail';
import React from 'react'
import { IoMail } from 'react-icons/io5';
import { toast } from 'sonner';
import { z } from 'zod';

export const FormSchem = z.object({
  email: z.string().email(),
  userFirstname: z.string(),
  textarea: z.string()
});

export default function ContactUs() {

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;

    const dataForm: {
      email: string,
      userFirstname: string,
      textarea: string
    } = {
      email: form.email.value,
      userFirstname: form.userFirstname.value,
      textarea: form.textarea.value
    };
    console.log(dataForm);

    try {
      toast.promise(sendEmailTest(dataForm), {
        loading: 'Sending Email',
        success: 'Email Sent',
        error: 'Failed to send email'
      });
       // Reset form fields after successful email send
       form.email.value = '';
       form.userFirstname.value = '';
       form.textarea.value = '';
    } catch (e) {
      toast.error('Failed to send email');
    }

  }

  return (
    <div id='contact' className='w-screen flex flex-col items-center justify-center py-24 md:px-8 bg-gray-900 bg-opacity-50'>
      <div className='text-center pb-8'>
      <IoMail className="text-4xl text-white mx-auto mb-2" />
        <h1 className='text-4xl text-white'>
          Contact Us</h1>
        <p className='text-white py-2 text-justify font-extralight px-12 md:px-24'>We love to hear from you. Please fill out the form below and well get back to you as soon as possible.</p>
      </div>
      <div className="form-container w-[85%] md:w-[70%]">

        <form className="form" onSubmit={sendEmail}>
          <div className="form-group">
            <label htmlFor='email'>Email</label>
            <input required name="email" id="email" type="text" />
          </div>
          <div className='form-group'>
            <label htmlFor="userFirstname">Name</label>
            <input required name="userFirstname" id="userFirstname" type="text" />
          </div>
          <div className="form-group">
            <label htmlFor='textarea'>How Can We Help You?</label>
            <textarea required id="textarea" name="textarea"></textarea>
          </div>
          <button type='submit' className="p-2 rounded-md hover:bg-purple-600 transition duration-200">Send email</button>
        </form>
      </div>
      <p className='text-white pt-4'>If you have more questions you can see our politics <a target='_blank' href='https://peridot-strand-b88.notion.site/Komu-Arcade-Support-47306b9651a8422fbf1588e42d46e13a' className='cursor-pointer hover:text-purple-500 underline'>here</a>?</p>

    </div>
  );
}
