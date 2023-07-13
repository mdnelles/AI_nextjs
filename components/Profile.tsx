import { PostCardProps, Prompt, PromptState } from "types/prompt";
import PromptCard from "./PromptCard";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const Profile = (props: PostCardProps) => {
   const { name, desc, handleEdit, handleDelete } = props;
   const prompts: PromptState = useSelector((state: any) => state.prompt);

   useEffect(() => {
      // reload
   }, [prompts]);

   return (
      <section className='w-full'>
         <h1 className='head_text text-left'>
            <span className='blue_gradient'>{name} Profile</span>
         </h1>
         <p className='desc text-left'>{desc}</p>

         <div className='mt-10 prompt_layout'>
            {prompts.arr.map((post: any) => (
               <PromptCard
                  key={post._id}
                  post={post}
                  handleEdit={() => handleEdit && handleEdit(post)}
                  handleDelete={() => handleDelete && handleDelete(post)}
               />
            ))}
         </div>
      </section>
   );
};

export default Profile;
