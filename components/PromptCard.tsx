"use client";

import { useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";

interface PromptCardProps {
   key: string | number;
   post: any;
   handleEdit: any;
   handleDelete: any;
   handleTagClick?: any;
}

const PromptCard = (props: PromptCardProps) => {
   const { post, handleEdit, handleDelete, handleTagClick } = props;
   const { data: session } = useSession();
   const pathName = usePathname();
   const router = useRouter();

   const [copied, setCopied] = useState<boolean>(false);

   const handleProfileClick = () => {
      console.log(post);

      if (post.creator._id === session?.user.id) return router.push("/profile");

      router.push(`/profile/${post.creator._id}?name=${post.creator.username}`);
   };

   const handleCopy = () => {
      setCopied(post.prompt);
      navigator.clipboard.writeText(post.prompt);
      setTimeout(() => setCopied(false), 3000);
   };

   const username =
      post && post.creator && post.creator.username
         ? post.creator.username
         : "Anonymous";
   const email =
      post && post.creator && post.creator.email
         ? post.creator.email
         : "Anonymous";

   const userImage =
      post && post.creator && post.creator.image
         ? post.creator.image
         : "/assets/images/google.png";

   return (
      <div className='prompt_card'>
         <div className='flex justify-between items-start gap-5'>
            <div
               className='flex-1 flex justify-start items-center gap-3 cursor-pointer'
               onClick={handleProfileClick}
            >
               <Image
                  src={userImage}
                  alt='user_image'
                  width={40}
                  height={40}
                  className='rounded-full object-contain'
               />

               <div className='flex flex-col'>
                  <h3 className='font-satoshi font-semibold text-gray-900'>
                     {username}
                  </h3>
                  <p className='font-inter text-sm text-gray-500'>{email}</p>
               </div>
            </div>

            <div className='copy_btn' onClick={handleCopy}>
               <Image
                  src={
                     copied === post.prompt
                        ? "/assets/icons/tick.svg"
                        : "/assets/icons/copy.svg"
                  }
                  alt={copied === post.prompt ? "tick_icon" : "copy_icon"}
                  width={12}
                  height={12}
               />
            </div>
         </div>

         <p className='my-4 font-satoshi text-sm text-gray-700'>
            {post.prompt}
         </p>
         <p className='my-4 font-satoshi text-sm text-gray-500 bg-blue-200 rounded-md p-3'>
            {post.airesp}
         </p>
         <p
            className='font-inter text-sm blue_gradient cursor-pointer'
            onClick={() => handleTagClick && handleTagClick(post.tag)}
         >
            #{post.tag}
         </p>

         {post &&
            post.creator &&
            session?.user.id === post.creator._id &&
            pathName === "/profile" && (
               <div className='mt-5 flex-center gap-4 border-t border-gray-100 pt-3'>
                  <p
                     className='font-inter text-sm green_gradient cursor-pointer'
                     onClick={handleEdit}
                  >
                     Edit
                  </p>
                  <p
                     className='font-inter text-sm orange_gradient cursor-pointer'
                     onClick={handleDelete}
                  >
                     Delete
                  </p>
               </div>
            )}
      </div>
   );
};

export default PromptCard;
