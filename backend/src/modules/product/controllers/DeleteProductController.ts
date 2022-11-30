import { Request, Response } from 'express';
import DeleteProductUseCase from '../useCases/deleteProduct/DeleteProductUseCase';

class DeleteProductController {
  deleteProductUseCase: DeleteProductUseCase;

  constructor(deleteProductUseCase: DeleteProductUseCase) {
    this.deleteProductUseCase = deleteProductUseCase;
  }

  async handle(request: Request, response: Response) {
    try {
      const { productId } = request.params;

      if (!productId) {
        return response.status(400).json({ error: 'Product Id is required' });
      }

      await this.deleteProductUseCase.execute(productId);

      response.sendStatus(202);
    } catch (error) {
      console.log(error);

      response.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

export default DeleteProductController;
