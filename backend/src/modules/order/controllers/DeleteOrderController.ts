import { Request, Response } from 'express';
import DeleteOrderUseCase from '../useCases/deleteOrder/DeleteOrderUseCase';

class DeleteOrderController {
  deleteOrderUseCase: DeleteOrderUseCase;

  constructor(deleteOrderUseCase: DeleteOrderUseCase) {
    this.deleteOrderUseCase = deleteOrderUseCase;
  }

  async handle(request: Request, response: Response) {
    const { orderId } = request.params;

    try {
      if (!orderId) {
        return response.status(400).json({ error: 'Order ID is required' });
      }

      await this.deleteOrderUseCase.execute(orderId);

      response.sendStatus(204);
    } catch (error) {
      console.log(error);

      response.sendStatus(500).json({ error: 'Internal Server Error' });
    }
  }
}

export default DeleteOrderController;
