import { Request, Response } from 'express';
import { ICategory } from '../types';
import CreateCategoryUseCase from '../useCases/createCategory/CreateCategoryUseCase';

class CreateCategoryController {
  createCategoryUseCase: CreateCategoryUseCase;

  constructor(createCategoryUseCase: CreateCategoryUseCase) {
    this.createCategoryUseCase = createCategoryUseCase;
  }

  async handle(request: Request, response: Response) {
    const { icon, name }: ICategory = request.body;

    try {
      if (!icon) {
        return response.status(400).json({ error: 'Icon is required' });
      }

      if (!name) {
        return response.status(400).json({ error: 'Name is required' });
      }

      const categories = await this.createCategoryUseCase.execute({
        icon,
        name,
      });

      return response.json(categories);
    } catch (error) {
      console.log(error);

      response.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

export default CreateCategoryController;
