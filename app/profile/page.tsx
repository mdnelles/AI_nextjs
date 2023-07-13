"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import Profile from "@/components/Profile";
import { setPromptState } from "store/reducer/prompt";
import { useSelector } from "react-redux";
import { Prompt, PromptState } from "types/prompt";

const MyProfile = () => {
   const router = useRouter();
   const { data: session } = useSession();
   const prompts: PromptState = useSelector((state: any) => state.prompt);

   useEffect(() => {
      const fetchPosts = async () => {
         const response = await fetch(`/api/users/${session?.user.id}/posts`);
         const prompts = await response.json();
         console.log("prompts");
         console.log(prompts);
         setPromptState({ arr: prompts });
      };

      if (session?.user.id) fetchPosts();
   }, [session?.user.id]);

   const handleEdit = (post: Prompt) => {
      router.push(`/update-prompt?id=${post._id}`);
      // now update the prompt state arr
      const updatedPosts: Prompt[] = prompts.arr.map((item: any) => {
         if (item._id === post._id) {
            return { ...item, prompt: post.prompt };
         }
         return item;
      });
      setPromptState({ arr: updatedPosts });
   };

   const handleDelete = async (post: any) => {
      const hasConfirmed = confirm(
         "Are you sure you want to delete this prompt?"
      );

      if (hasConfirmed) {
         try {
            await fetch(`/api/prompt/${post._id.toString()}`, {
               method: "DELETE",
            });

            setPromptState({
               ...prompts,
               arr: prompts.arr.filter((item: any) => item._id !== post._id),
            });
         } catch (error) {
            console.log(error);
         }
      }
   };

   return (
      <Profile
         name='My'
         desc='Welcome to your personalized profile page. Here is where we keep track of all your prompts.'
         handleEdit={handleEdit}
         handleDelete={handleDelete}
         data={undefined}
      />
   );
};

export default MyProfile;
