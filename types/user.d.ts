export interface User {
   name: string;
   email: string;
   image: string;
   id: string;
}

export interface UserState {
   details: User | any;
   init: boolean;
}
