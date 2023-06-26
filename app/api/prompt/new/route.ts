import Prompt from "@/models/prompt";
import { connectToDB } from "@/utils/database";
import { NextApiRequest } from "next";

export const POST = async (req: NextApiRequest) => {
   const { userId, prompt, tag } = await req.body; //.json();

   try {
      await connectToDB();
      const newPrompt = new Prompt({ creator: userId, prompt, tag });

      await newPrompt.save();
      return new Response(JSON.stringify(newPrompt), { status: 201 });
   } catch (error) {
      return new Response("Failed to create a new prompt", { status: 500 });
   }
};
