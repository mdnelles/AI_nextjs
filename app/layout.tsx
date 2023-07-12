import "@/styles/globals.css";

import Nav from "@/components/Nav";
import Provider from "@/components/Provider";
import ReduxProvider from "store/ReduxProvider";

export const metadata = {
   title: "NEXTAI",
   description: "Post interesting AI questions and answers",
};

interface RootLayoutProps {
   children: React.ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => (
   <html lang='en'>
      <body>
         <ReduxProvider prompt={undefined}>
            <Provider>
               <div className='main other'>
                  <div className='gradient' />
               </div>

               <main className='app flex flex-col items-center'>
                  <Nav />
                  <div className='flex flex-col items-center'>{children}</div>
               </main>
            </Provider>
         </ReduxProvider>
      </body>
   </html>
);

export default RootLayout;
