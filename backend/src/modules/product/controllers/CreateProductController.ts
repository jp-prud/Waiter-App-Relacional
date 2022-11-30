import { Request, Response } from 'express';
import CreateProductUseCase from '../useCases/createProduct/CreateProductUseCase';

class CreateProductController {
  createProductUseCase: CreateProductUseCase;

  constructor(createProductUseCase: CreateProductUseCase) {
    this.createProductUseCase = createProductUseCase;
  }

  async handle(request: Request, response: Response) {
    try {
      const imagePath = request.file?.filename;
      const { name, description, price, category, ingredients } = request.body;

      if (!name) {
        response.sendStatus(404).json({ error: 'Name is required' });
      }

      if (!description) {
        response.sendStatus(404).json({ error: 'Description is required' });
      }

      if (!price) {
        response.sendStatus(404).json({ error: 'Price is required' });
      }

      if (!category) {
        response.sendStatus(404).json({ error: 'Category is required' });
      }

      const createProduct = await this.createProductUseCase.execute({
        name,
        description,
        price: Number(price),
        category,
        imagePath,
        ingredients: ingredients ? JSON.parse(ingredients) : [],
      });

      response.status(201).json(createProduct);
    } catch (error) {
      console.log(error);

      response.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

export default CreateProductController;
