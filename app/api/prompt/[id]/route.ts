import Prompt from "@/models/prompt";
import { connectToDB } from "@/utils/database";
import { NextApiRequest, NextApiResponse } from "next";

interface Params {
   [key: string]: any;
}

export const GET = async (
   request: NextApiRequest,
   { params }: { params: Params }
): Promise<any> => {
   try {
      await connectToDB();

      const prompt = await Prompt.findById(params.id).populate("creator");
      if (!prompt) return new Response("Prompt Not Found", { status: 404 });

      return new Response(JSON.stringify(prompt), { status: 200 });
   } catch (error) {
      return new Response("Internal Server Error", { status: 500 });
   }
};

export const PATCH = async (
   req: NextApiRequest,
   params: Params
): Promise<any> => {
   const { prompt, tag } = await req.body; //uest.json();

   try {
      await connectToDB();

      // Find the existing prompt by ID
      const existingPrompt = await Prompt.findById(params.id);

      if (!existingPrompt) {
         return new Response("Prompt not found", { status: 404 });
      }

      // Update the prompt with new data
      existingPrompt.prompt = prompt;
      existingPrompt.tag = tag;

      await existingPrompt.save();

      return new Response("Successfully updated the Prompts", { status: 200 });
   } catch (error) {
      return new Response("Error Updating Prompt", { status: 500 });
   }
};

export const DELETE = async (
   _: NextApiRequest,
   params: Params
): Promise<any> => {
   try {
      await connectToDB();

      // Find the prompt by ID and remove it
      await Prompt.findByIdAndRemove(params.id);

      return new Response("Prompt deleted successfully", { status: 200 });
   } catch (error) {
      return new Response("Error deleting prompt", { status: 500 });
   }
};
