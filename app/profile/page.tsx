"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import Profile from "@/components/Profile";
import { clearPrompts, setPrompts } from "store/reducer/prompt";
import { useSelector } from "react-redux";
import { Prompt, PromptState } from "types/prompt";
import { dispatch } from "store";
import { setUser } from "store/reducer/user";
import { UserState } from "@/types/user";

const MyProfile = () => {
   const router = useRouter();
   const { data: session } = useSession();
   const user: UserState = useSelector((state: any) => state.user);
   const prompts: PromptState = useSelector((state: any) => state.prompts);

   dispatch(setUser({ ...user, details: session?.user }));

   useEffect(() => {
      const fetchPosts = async () => {
         const response = await fetch(`/api/users/${session?.user.id}/posts`);
         const prompts: Prompt[] = await response.json();
         console.log("prompts ... 333");
         console.log(prompts);
         dispatch(setPrompts(prompts));
      };

      if (session?.user.id) fetchPosts();
   }, [session?.user.id]);

   const handleEdit = (prompt: Prompt) => {
      router.push(`/update-prompt?id=${prompt._id}`);
      // now update the prompt state arr
      const updatedPrompts: Prompt[] = prompts.arr.map((item: any) => {
         return item._id === prompt._id ? prompt : item;
      });
      setPrompts(updatedPrompts);
   };

   const handleDelete = async (prompt: any) => {
      const hasConfirmed = confirm(
         "Are you sure you want to delete this prompt?"
      );

      if (hasConfirmed) {
         try {
            await fetch(`/api/prompt/${prompt._id.toString()}`, {
               method: "DELETE",
            });

            setPrompts(
               prompts.arr.filter((item: any) => item._id !== prompt._id)
            );
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
