export type TLoginReq = {
  email: string;
  password: string;
}

export type TRegisterReq = {
  name: string,
  email: string,
  password: string,
  password_confirmation: string,
  education_start_date: string,
  education_end_date: string,
  terms: boolean,
}