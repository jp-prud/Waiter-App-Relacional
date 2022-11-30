import OrdersRepository from '../../repositories/OrdersRepository';

class DeleteOrderUseCase {
  ordersRepository: OrdersRepository;

  constructor(ordersRepository: OrdersRepository) {
    this.ordersRepository = ordersRepository;
  }

  execute(orderId: string) {
    return this.ordersRepository.delete(orderId);
  }
}

export default DeleteOrderUseCase;
