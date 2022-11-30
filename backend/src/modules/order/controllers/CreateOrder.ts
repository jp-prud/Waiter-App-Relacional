import { Request, Response } from 'express';
import { IOrder } from '../types';
import CreateOrderUseCase from '../useCases/createOrder/CreateOrderUseCase';

class CreateOrderController {
  createOrderUseCase: CreateOrderUseCase;

  constructor(createOrderUseCase: CreateOrderUseCase) {
    this.createOrderUseCase = createOrderUseCase;
  }

  async handle(request: Request, response: Response) {
    const { table, products }: IOrder = request.body;

    try {
      const order = await this.createOrderUseCase.execute({
        table,
        products,
      });

      return response.json(order);
    } catch (error) {
      console.log(error);

      response.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

export default CreateOrderController;
