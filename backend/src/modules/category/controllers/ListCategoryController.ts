import { Request, Response } from 'express';
import ListCategoryUseCase from '../useCases/listCategory/ListCategoryUseCase';

class ListCategoryController {
  listCategoryUseCase: ListCategoryUseCase;

  constructor(listCategoryUseCase: ListCategoryUseCase) {
    this.listCategoryUseCase = listCategoryUseCase;
  }

  async handle(request: Request, response: Response) {
    try {
      const categories = await this.listCategoryUseCase.execute();

      return response.json(categories);
    } catch (error) {
      console.log(error);

      response.sendStatus(500).json({ error: 'Internal Server Error' });
    }
  }
}

export default ListCategoryController;
