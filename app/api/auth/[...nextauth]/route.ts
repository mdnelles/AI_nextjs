import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

import User from "@/models/user";
import { connectToDB } from "@/utils/database";

const handler = NextAuth({
   providers: [
      GoogleProvider({
         clientId: process.env.GOOGLE_ID || "",
         clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
      }),
   ],
   callbacks: {
      async signIn({ account, profile, user, credentials }) {
         // sign in goes first then session
         try {
            await connectToDB();
            console.log("...........profile: ", profile);
            // check if user already exists
            const userExists = await User.findOne({
               email: profile ? profile.email : "w",
            });

            // if not, create a new document and save user in MongoDB
            if (!userExists) {
               await User.create({
                  email: profile ? profile.email : "",
                  username:
                     profile && profile.name
                        ? profile.name.replace(" ", "").toLowerCase()
                        : "",
                  image: profile && profile.image ? profile.image : "",
               });
            }

            return true;
         } catch (error: any) {
            console.log("Error checking if user exists: ", error.message);
            return false;
         }
      },
      async session({ session, token, user }) {
         // store the user id from MongoDB to session
         const sessionUser = await User.findOne({
            email: session.user && session.user.email ? session.user.email : "",
         });

         session.user.id = sessionUser._id.toString();

         console.log(".............session: ", session);

         return session;
      },
   },
});

export { handler as GET, handler as POST };
