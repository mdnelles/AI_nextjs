import { OpenAIApi, Configuration } from "openai";

const configuration = new Configuration({
   apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export const POST = async (req) => {
   try {
      const body = await req.json();
      if (body.prompt !== undefined) {
         const completion = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: body.prompt,
         });

         return new Response(`${completion.data.choices[0].text}`);
      } else {
         return new Response("No prompt provided.", { status: 405 });
      }
   } catch (error) {
      return new Response("Failed to fetch prompts created by user", {
         status: 500,
      });
   }
};
