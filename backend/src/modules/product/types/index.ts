export interface IProduct {
  name: string;
  description: string;
  imagePath?: string;
  price: number;
  category: string;
  ingredients: Array<IIngredients>;
}

export interface IIngredients {
  icon: string;
  name: string;
}
