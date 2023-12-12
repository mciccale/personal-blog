'use client';

import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import MainContainer from '../components/main-container';
import TextSection from '../components/text-section';

interface Inputs {
  from_email: string;
  from_name: string;
  message: string;
}

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = () => {
    if (!formRef.current) return;

    emailjs
      .sendForm(
        'service_kzlv6bj',
        'template_tph2hat',
        formRef.current,
        'NcYU0OlZD7OwyvERX'
      )
      .then((res) => console.log(res.text))
      .catch((err) => console.error(err.text));

    reset();
  };

  return (
    <MainContainer>
      <TextSection>
        <form
          noValidate
          ref={formRef}
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-10"
        >
          <input
            className="rounded-lg border-2 border-solid border-blue-200 p-3 focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            type="text"
            placeholder="Name"
            {...register('from_name', { required: true })}
          />
          {errors.from_name && (
            <span className="font-semibold text-red-500">
              Please specify a name
            </span>
          )}
          <input
            className="rounded-lg border-2 border-solid border-blue-200 p-3 focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            type="email"
            placeholder="your@email.com"
            {...register('from_email', {
              required: true,
              pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
            })}
          />
          {errors.from_email && (
            <span className="font-semibold text-red-500">
              Please specify a valid email address
            </span>
          )}
          <textarea
            className="rounded-lg border-2 border-solid border-blue-200 p-3 focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="Message"
            {...register('message', { required: true })}
          />
          {errors.message && (
            <span className="font-semibold text-red-500">
              Please specify a message
            </span>
          )}
          <button
            className="rounded-lg bg-blue-200 p-6 font-semibold hover:bg-blue-400 hover:shadow-lg"
            type="submit"
          >
            Send Message
          </button>
        </form>
      </TextSection>
    </MainContainer>
  );
}
