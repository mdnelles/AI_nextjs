import Prompt from "@/models/prompt";
import { connectToDB } from "@/utils/database";
import { NextApiRequest, NextApiResponse } from "next";

import bodyParser from "body-parser";

const jsonParser = bodyParser.json();

export const GET = async (_: NextApiRequest, params: any): Promise<any> => {
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
   res: NextApiResponse,
   params: any
): Promise<any> => {
   try {
      console.log("PATCH");
      // console.log(req.body);
      // console.log("...req/params");
      // console.log(params);

      // console.log("...req.body");
      // console.log(req.body);

      jsonParser(req, res, (err) => {
         if (err) {
            console.error("Error parsing JSON", err);
            return res.status(400).json({ error: "Invalid JSON" });
         }
      });
      const { prompt, tag } = req.body;

      //const { prompt, tag } = await req.body; //uest.json();
      await connectToDB();
      const id = params.id || params.params.id;

      // Find the existing prompt by ID
      const existingPrompt = await Prompt.findById(id);

      if (!existingPrompt) {
         return new Response("Prompt not found", { status: 404 });
      }
      console.log("....existing prompt");
      console.log(existingPrompt);
      // Update the prompt with new data
      existingPrompt.prompt = prompt;
      existingPrompt.tag = tag;
      await existingPrompt.save();
      console.log("....end saving existing promp");
      return new Response("Successfully updated the Prompts", { status: 200 });
   } catch (error) {
      //console.log(error);
      return new Response("Error Updating Prompt", { status: 500 });
   }
};

export const DELETE = async (_: NextApiRequest, params: any): Promise<any> => {
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
