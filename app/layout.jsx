import "@styles/globals.css"; // no need to show full path just '@' will do

import Nav from "@components/Nav";
import Provider from "@components/Provider";

export const metadata = {
   title: "AI Next.js application",
   description: "AI Next.js application",
   keywords: "AI Next.js application",
};

const RootLayout = ({ children }) => {
   return (
      <html lang='en'>
         <head>
            <meta charSet='utf-8' />
            <meta name='description' content={metadata.description} />
            <meta name='keywords' content={metadata.keywords} />
         </head>
         <body>
            <div className='main'>
               <div className='gradient' />
            </div>
            <main className='app'>
               <Nav />
               {children}
            </main>
         </body>
      </html>
   );
};

export default RootLayout;
