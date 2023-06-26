"use client";

import React, { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import Form from "@/components/Form";

const CreatePrompt = () => {
   const router = useRouter();
   const { data: session }: { data: any } = useSession();

   const [submitting, setIsSubmitting] = useState(false);
   const [post, setPost] = useState({ prompt: "", tag: "" });

   const createPrompt = async (e: { preventDefault: () => void }) => {
      e.preventDefault();
      setIsSubmitting(true);

      try {
         const response = await fetch("/api/prompt/new", {
            method: "POST",
            body: JSON.stringify({
               prompt: post.prompt,
               userId:
                  session && session.user && session.user.id
                     ? session.user.id
                     : null,
               tag: post.tag,
            }),
         });

         if (response.ok) {
            router.push("/");
         }
      } catch (error) {
         console.log(error);
      } finally {
         setIsSubmitting(false);
      }
   };

   return (
      <Form
         type='Create'
         post={post}
         setPost={setPost}
         submitting={submitting}
         handleSubmit={createPrompt}
      />
   );
};

export default CreatePrompt;
