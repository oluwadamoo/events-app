
export interface UserI{
  id:number;
  userName:string;
  firstName:string;
  lastName:string
}

export interface LoginFormI{
  userName:string;
  password:string;
}

export interface ProfileFormI{
  firstName:string;
  lastName:string;
}

export const loginForm:LoginFormI = {
  userName:'',
  password:''
}
