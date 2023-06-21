"use client";

import Link from "next/link";
import Image from "next/image";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

import { useState, useEffect } from "react";

const Nav = () => {
   const isUserLoggedIn = true; //useSession().data;
   return (
      <nav className='flex-between w-full mb-16 pt-3'>
         <Link href='/' className='flex gap2 flex-center'>
            <Image
               src='/assets/images/logo.svg'
               width={50}
               height={50}
               alt='AI Logo'
            />
            <p className='logo-text'>AI</p>
         </Link>

         {/* Mobile Menu */}
         <div className='sm:flex hidden'>
            {isUserLoggedIn ? (
               <div className='flex gap-3 md:gap-5'>
                  <Link href='/create-prompt' className='black_btn'>
                     Create Post
                  </Link>

                  <button
                     type='button'
                     onClick={signOut}
                     className='outline_btn'
                  >
                     Sign Out
                  </button>
               </div>
            ) : (
               <> </>
            )}
         </div>
      </nav>
   );
};

export default Nav;
