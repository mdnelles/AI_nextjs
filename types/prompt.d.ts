export interface Prompt {
   airesp: String;
   creator: {
      email: String;
      image: String;
      username: String;
      __v: Number;
      _id: String;
   };
   prompt: String;
   tag: String;
   __v: Number;
   _id: String;
}
export interface PromptState {
   arr: Prompt[];
}

export interface PostCardProps {
   name?: string | any;
   desc: string;
   data: any;
   handleEdit: any;
   handleDelete: any;
}
