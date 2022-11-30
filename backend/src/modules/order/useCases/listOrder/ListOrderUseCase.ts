import OrdersRepository from '../../repositories/OrdersRepository';

class ListOrderUseCase {
  ordersRepository: OrdersRepository;

  constructor(ordersRepository: OrdersRepository) {
    this.ordersRepository = ordersRepository;
  }

  execute() {
    return this.ordersRepository.index();
  }
}

export default ListOrderUseCase;
