"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import Profile from "@/components/Profile";

const MyProfile = () => {
   const router = useRouter();
   const { data: session } = useSession();

   const [myPosts, setMyPosts] = useState([]);

   useEffect(() => {
      const fetchPosts = async () => {
         const response = await fetch(`/api/users/${session?.user.id}/posts`);
         const data = await response.json();
         console.log(data);
         setMyPosts(data);
      };

      if (session?.user.id) fetchPosts();
   }, [session?.user.id]);

   const handleEdit = (post: { _id: any }) => {
      router.push(`/update-prompt?id=${post._id}`);
   };

   const handleDelete = async (post: { _id: { toString: () => any } }) => {
      const hasConfirmed = confirm(
         "Are you sure you want to delete this prompt?"
      );

      if (hasConfirmed) {
         try {
            await fetch(`/api/prompt/${post._id.toString()}`, {
               method: "DELETE",
            });

            const filteredPosts = myPosts.filter(
               (item: any) => item._id !== post._id
            );

            setMyPosts(filteredPosts);
         } catch (error) {
            console.log(error);
         }
      }
   };

   return (
      <Profile
         name='1234'
         desc='Welcome to your personalized profile page. Here is where we keep track of all your prompts.'
         data={myPosts}
         handleEdit={handleEdit}
         handleDelete={handleDelete}
      />
   );
};

export default MyProfile;
