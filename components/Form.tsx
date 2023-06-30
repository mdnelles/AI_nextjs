import Link from "next/link";
import React from "react";
import Image from "next/image";

interface FormProps {
   type: string;
   post: { prompt: string; tag: string };
   submitting: boolean;
   handleSubmit: (e: any) => void;
   setPost: any;
}
const Form = ({ type, post, setPost, submitting, handleSubmit }: FormProps) => {
   return (
      <section className='w-full max-w-full flex-start flex-col'>
         <h1 className='head_text text-left'>
            <span className='blue_gradient'>{type} Post</span>
         </h1>
         <p className='desc text-left max-w-md'>
            {type} ChatGPT prompt and leave it on the wall for others to see.
         </p>

         <form
            onSubmit={handleSubmit}
            className='mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism'
         >
            <label>
               <span className='font-satoshi font-semibold text-base text-gray-700'>
                  Your AI Prompt
               </span>

               <textarea
                  value={post.prompt}
                  onChange={(e) => setPost({ ...post, prompt: e.target.value })}
                  placeholder='Write your post here'
                  required
                  className='form_textarea '
               />
            </label>

            <label>
               <span className='font-satoshi font-semibold text-base text-gray-700'>
                  Field of Prompt <span className='font-normal'></span>
               </span>
               <input
                  value={post.tag}
                  onChange={(e) => setPost({ ...post, tag: e.target.value })}
                  type='text'
                  placeholder='#Tag'
                  required
                  className='form_input'
               />
            </label>

            <div className='flex-end mx-3 mb-5 gap-4'>
               <Link href='/' className='text-gray-500 text-sm'>
                  Cancel
               </Link>

               <button
                  type='submit'
                  disabled={submitting}
                  className='px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white'
               >
                  {submitting ? (
                     <>
                        <svg
                           className='mr-3 h-5 w-5 animate-spin text-white'
                           xmlns='http://www.w3.org/2000/svg'
                           fill='none'
                           viewBox='0 0 24 24'
                        >
                           <circle
                              className='opacity-25'
                              cx='12'
                              cy='12'
                              r='10'
                              stroke='currentColor'
                              strokeWidth='4'
                           ></circle>
                           <path
                              className='opacity-75'
                              fill='currentColor'
                              d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                           ></path>
                        </svg>
                     </>
                  ) : (
                     type
                  )}
               </button>
            </div>
         </form>
      </section>
   );
};

export default Form;
