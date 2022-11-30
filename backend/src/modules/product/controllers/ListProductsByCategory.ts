import { Request, Response } from 'express';
import ListProductsByCategoryUseCase from '../useCases/listProductsByCategory/listProductsByCategoryUseCase';

class ListProductsByCategory {
  listProductsByCategoryUseCase: ListProductsByCategoryUseCase;

  constructor(listProductsByCategoryUseCase: ListProductsByCategoryUseCase) {
    this.listProductsByCategoryUseCase = listProductsByCategoryUseCase;
  }

  async handle(request: Request, response: Response) {
    try {
      const { categoryId } = request.params;

      if (!categoryId) {
        response.status(400).json({ error: 'Category ID is required' });
      }

      const listProducts = await this.listProductsByCategoryUseCase.execute(
        categoryId,
      );

      response.status(200).json(listProducts);
    } catch (error) {
      console.log(error);

      response.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

export default ListProductsByCategory;
