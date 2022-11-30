import { Request, Response } from 'express';
import ListProductsUseCase from '../useCases/listProduct/ListProductUseCase';

class ListProductController {
  listProductsUseCase: ListProductsUseCase;

  constructor(listProductsUseCase: ListProductsUseCase) {
    this.listProductsUseCase = listProductsUseCase;
  }

  async handle(resquest: Request, response: Response) {
    try {
      const listProducts = await this.listProductsUseCase.execute();

      response.status(200).json(listProducts);
    } catch (error) {
      console.log(error);

      response.sendStatus(500).json({ error: 'Internal Server Error' });
    }
  }
}

export default ListProductController;
