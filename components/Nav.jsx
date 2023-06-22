"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Nav = () => {
   const { data: session } = useSession();

   const [providers, setProviders] = useState(null);
   const [toggleDropdown, setToggleDropdown] = useState(false);

   useEffect(() => {
      (async () => {
         const res = await getProviders();
         setProviders(res);
      })();
   }, []);

   return (
      <nav className='flex-between w-full mb-16 pt-3'>
         <Link href='/' className='flex gap-2 flex-center'>
            <Image
               src='/assets/images/logo2.png'
               alt='logo'
               width={25}
               height={25}
               className='object-contain'
            />
            <p className='logo_text'>NEXTAI</p>
         </Link>

         {/* Desktop Navigation */}
         <div className='sm:flex hidden'>
            {session?.user ? (
               <div className='flex gap-3 md:gap-5'>
                  <Link href='/create-prompt' className='blue_btn'>
                     Create Post
                  </Link>

                  <button
                     type='button'
                     onClick={signOut}
                     className='outline_btn_blue'
                  >
                     Sign Out
                  </button>

                  <Link href='/profile'>
                     <Image
                        src={session?.user.image}
                        width={37}
                        height={37}
                        className='rounded-full'
                        alt='profile'
                     />
                  </Link>
               </div>
            ) : (
               <>
                  {providers &&
                     Object.values(providers).map((provider) => (
                        <button
                           type='button'
                           key={provider.name}
                           onClick={() => {
                              signIn(provider.id);
                           }}
                           className='blue_btn'
                        >
                           <svg
                              class='mr-2 -ml-1 w-4 h-4'
                              aria-hidden='true'
                              focusable='false'
                              data-prefix='fab'
                              data-icon='google'
                              role='img'
                              xmlns='http://www.w3.org/2000/svg'
                              viewBox='0 0 488 512'
                           >
                              <path
                                 fill='currentColor'
                                 d='M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z'
                              ></path>
                           </svg>
                           Sign in
                        </button>
                     ))}
               </>
            )}
         </div>

         {/* Mobile Navigation */}
         <div className='sm:hidden flex relative'>
            {session?.user ? (
               <div className='flex'>
                  <Image
                     src={session?.user.image}
                     width={37}
                     height={37}
                     className='rounded-full'
                     alt='profile'
                     onClick={() => setToggleDropdown(!toggleDropdown)}
                  />

                  {toggleDropdown && (
                     <div className='dropdown'>
                        <Link
                           href='/profile'
                           className='dropdown_link'
                           onClick={() => setToggleDropdown(false)}
                        >
                           My Profile
                        </Link>
                        <Link
                           href='/create-prompt'
                           className='dropdown_link'
                           onClick={() => setToggleDropdown(false)}
                        >
                           Create Prompt
                        </Link>
                        <button
                           type='button'
                           onClick={() => {
                              setToggleDropdown(false);
                              signOut();
                           }}
                           className='mt-5 w-full blue_btn'
                        >
                           Sign Out
                        </button>
                     </div>
                  )}
               </div>
            ) : (
               <>
                  {providers &&
                     Object.values(providers).map((provider) => (
                        <button
                           type='button'
                           key={provider.name}
                           onClick={() => {
                              signIn(provider.id);
                           }}
                           className='blue_btn'
                        >
                           <svg
                              class='mr-2 -ml-1 w-4 h-4'
                              aria-hidden='true'
                              focusable='false'
                              data-prefix='fab'
                              data-icon='google'
                              role='img'
                              xmlns='http://www.w3.org/2000/svg'
                              viewBox='0 0 488 512'
                           >
                              <path
                                 fill='currentColor'
                                 d='M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z'
                              ></path>
                           </svg>
                           Sign in
                        </button>
                     ))}
               </>
            )}
         </div>
      </nav>
   );
};

export default Nav;
