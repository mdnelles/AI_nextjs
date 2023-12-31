import Prompt from "@/models/prompt";
import { connectToDB } from "@/utils/database";
//import {  NextApiResponse } from "next";

export const GET = async (_: any, params: any): Promise<any> => {
   try {
      await connectToDB();

      const id = params.id || params.params.id;
      const prompt = await Prompt.findById(id).populate("creator");
      if (!prompt) return new Response("Prompt Not Found", { status: 404 });

      return new Response(JSON.stringify(prompt), { status: 200 });
   } catch (error) {
      return new Response("Internal Server Error", { status: 500 });
   }
};

export const PATCH = async (request: any, { params }: any) => {
   try {
      const { prompt, tag } = await request.json();

      await connectToDB();

      // params derived from the URL
      const id = params.id || params.params.id;
      const existingPrompt = await Prompt.findById(id);

      if (!existingPrompt) {
         return new Response("Prompt not found", { status: 404 });
      }

      existingPrompt.prompt = prompt;
      existingPrompt.tag = tag;
      await existingPrompt.save();

      return new Response("Successfully updated the Prompts", { status: 200 });
   } catch (error) {
      //console.log(error);
      return new Response("Error Updating Prompt", { status: 500 });
   }
};

export const DELETE = async (_: any, params: any): Promise<any> => {
   try {
      await connectToDB();

      const id = params.id || params.params.id;

      // Find the prompt by ID and remove it
      await Prompt.findByIdAndRemove(id);

      return new Response("Prompt deleted successfully", { status: 200 });
   } catch (error) {
      return new Response("Error deleting prompt", { status: 500 });
   }
};
