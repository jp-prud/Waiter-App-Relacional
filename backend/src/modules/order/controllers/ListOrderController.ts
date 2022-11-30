import { Request, Response } from 'express';
import ListOrderUseCases from '../useCases/listOrder/ListOrderUseCase';

class ListOrderController {
  listOrderUseCase: ListOrderUseCases;

  constructor(listOrderUseCase: ListOrderUseCases) {
    this.listOrderUseCase = listOrderUseCase;
  }

  async handle(request: Request, response: Response) {
    try {
      const orders = await this.listOrderUseCase.execute();

      return response.json(orders);
    } catch (error) {
      console.log(error);

      response.sendStatus(500).json({ error: 'Internal Server Error' });
    }
  }
}

export default ListOrderController;
