import "@/styles/globals.css";

import Nav from "@/components/Nav";
import Provider from "@/components/Provider";

export const metadata = {
   title: "NEXTAI",
   description: "Discover & Share AI Prompts",
};

interface RootLayoutProps {
   children: React.ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => (
   <html lang='en'>
      <body>
         <Provider>
            <div className='main'>
               <div className='gradient' />
            </div>

            <main className='app flex flex-col items-center'>
               <Nav />
               <div className='flex flex-col items-center'>{children}</div>
            </main>
         </Provider>
      </body>
   </html>
);

export default RootLayout;
