import Feed from "@/components/Feed";
import Image from "next/image";

const size = 50;

const Home = () => (
   <section className='w-full flex-center flex-col'>
      <h1 className='head_text text-center mb-4'>
         AI Question Wall
         <br className='max-md:hidden' />
      </h1>
      <div className='flex justify-center gap-2'>
         <div>
            <Image
               src='/assets/images/chatLogo.png'
               alt='logo'
               width={size}
               height={size}
               className='object-contain rounded-full'
            />
         </div>
         <div>
            <Image
               src='/assets/images/react2.png'
               alt='logo'
               width={size}
               height={size}
               className='object-contain rounded-full'
            />
         </div>
         <div>
            <Image
               src='/assets/images/next2.png'
               alt='logo'
               width={size}
               height={size}
               className='object-contain rounded-full'
            />
         </div>
         <div>
            <Image
               src='/assets/images/mongo2.png'
               alt='logo'
               width={size}
               height={size}
               className='object-contain rounded-full'
            />
         </div>
         <div>
            <Image
               src='/assets/images/google.png'
               alt='logo'
               width={size}
               height={size}
               className='object-contain rounded-full'
            />
         </div>
      </div>
      <p className='desc text-center'>
         Please share an insightful question you have posed to AI by asking it
         here.
      </p>

      <Feed />
      <div id='github-link'>
         <a href='https://github.com/mdnelles/AI_nextjs' target='_blank'>
            <Image
               src='/assets/icons/GitHub_Logo.png'
               alt='mdnelles'
               width={80}
               height={40}
               className='object-contain rounded-full'
            />
         </a>
      </div>
   </section>
);

export default Home;
