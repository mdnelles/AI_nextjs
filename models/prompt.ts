import { Schema, model, models } from "mongoose";

const PromptSchema = new Schema({
   creator: {
      type: Schema.Types.ObjectId,
      ref: "User",
   },
   prompt: {
      type: String,
      required: [true, "Prompt is required."],
   },
   airesp: {
      type: String,
      required: [true, "AI response is required."],
   },
   tag: {
      type: String,
      required: [true, "Tag is required."],
   },
});

const Prompt = models.Prompt || model("Prompt", PromptSchema);

export default Prompt;
