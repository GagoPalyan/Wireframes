export type TPaginateProduct = {
  data: TProduct[];
  current_page: number;
  last_page: number;
}

export type TProduct = {
  id?: string;
  picture: string;
  name: string;
  price: string;
  description: string;
}