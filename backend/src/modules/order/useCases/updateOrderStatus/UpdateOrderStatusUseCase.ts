import OrdersRepository from '../../repositories/OrdersRepository';
import { IUpdateRequestInput } from '../../types';

class UpdateOrderStatusUseCase {
  ordersRepository: OrdersRepository;

  constructor(ordersRepository: OrdersRepository) {
    this.ordersRepository = ordersRepository;
  }

  execute({ status, orderId }: IUpdateRequestInput) {
    return this.ordersRepository.updateStatus({ status, orderId });
  }
}

export default UpdateOrderStatusUseCase;
