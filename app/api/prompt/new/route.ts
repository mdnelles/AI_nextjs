import Prompt from "@/models/prompt";
import { connectToDB } from "@/utils/database";
import { OpenAIApi, Configuration } from "openai";

const configuration = new Configuration({
   apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export const POST = async (request: any) => {
   const { userId, prompt, tag } = await request.json();

   try {
      const query = await openai.createCompletion({
         model: "text-davinci-003",
         prompt,
         max_tokens: 64,
         temperature: 0.1,
      });
      await connectToDB();
      // remove all \n and \t from prompt
      const airesp = query.data.choices[0].text
         ?.toString()
         .replace(/\n/g, "")
         .replace(/\t/g, "");
      const save = {
         creator: userId,
         prompt,
         airesp,
         tag,
      };
      const newPrompt = new Prompt(save);

      await newPrompt.save();
      return new Response(JSON.stringify(newPrompt), { status: 201 });
   } catch (error) {
      return new Response("Failed to create a new prompt", { status: 500 });
   }
};
