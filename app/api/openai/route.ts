import { OpenAIApi, Configuration } from "openai";

const configuration = new Configuration({
   apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export const POST = async (req: any) => {
   try {
      const body = await req.json();
      if (body.prompt !== undefined) {
         const completion = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: body.prompt,
            max_tokens: 64,
            temperature: 0.1,
         });
         console.log(completion.data);
         return new Response(`${completion.data.choices[0].text}`);
      } else {
         return new Response("No prompt provided.", { status: 405 });
      }
   } catch (error: any) {
      if (error.response) {
         console.log(error.response.status);
         console.log(error.response.data);
         return new Response(error.response.data, {
            status: 500,
         });
      } else {
         console.log(error.message);
         return new Response(error.message, {
            status: 500,
         });
      }
   }
};
