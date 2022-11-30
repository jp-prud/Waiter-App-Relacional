import OrdersRepository from '../../repositories/OrdersRepository';
import { IOrder } from '../../types';

class CreateOrderUseCase {
  ordersRepository: OrdersRepository;

  constructor(ordersRepository: OrdersRepository) {
    this.ordersRepository = ordersRepository;
  }

  async execute(input: IOrder) {
    return this.ordersRepository.store(input);
  }
}

export default CreateOrderUseCase;
