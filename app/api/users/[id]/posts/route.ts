import Prompt from "@/models/prompt";
import { connectToDB } from "@/utils/database";
import { NextApiRequest } from "next";

export const GET = async (_: NextApiRequest, params: any) => {
   const creator = params.id || params.params.id;
   try {
      await connectToDB();
      const prompts = await Prompt.find({ creator }).populate("creator");

      return new Response(JSON.stringify(prompts), { status: 200 });
   } catch (error) {
      return new Response("Failed to fetch prompts created by user", {
         status: 500,
      });
   }
};
