import PromptCard from "./PromptCard";

interface PostCardProps {
   name?: string | any;
   desc: string;
   data: any;
   handleEdit: any;
   handleDelete: any;
}

const Profile = (props: PostCardProps) => {
   const { name, desc, data, handleEdit, handleDelete } = props;

   return (
      <section className='w-full'>
         <h1 className='head_text text-left'>
            <span className='blue_gradient'>{name} Profile</span>
         </h1>
         <p className='desc text-left'>{desc}</p>

         <div className='mt-10 prompt_layout'>
            {data.map((post: any) => (
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
