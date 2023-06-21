import Feed from "@components/Feed";

const Home = () => {
   return (
      <section className='w-full flex-center flex-col'>
         <h1 className='head_text text-center'>
            Welcome
            <br classNAme='max-md:hidden' />
            <span className='orange_gradient text-center'>
               AI powered Promps
            </span>
         </h1>
         <p className='desc text-center'>
            Open source AI sharing application for creative, technical and other
         </p>

         <Feed />
      </section>
   );
};

export default Home;
