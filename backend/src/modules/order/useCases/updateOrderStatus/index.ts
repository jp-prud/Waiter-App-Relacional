import OrdersRepository from '../../repositories/OrdersRepository';
import UpdateOrderStatusUseCase from './UpdateOrderStatusUseCase';
import UpdateOrderStatusController from '../../controllers/UpdateOrderStatus';

const ordersRepository = new OrdersRepository();

const updateOrderStatusUseCase = new UpdateOrderStatusUseCase(ordersRepository);

const updateOrderStatusController = new UpdateOrderStatusController(
  updateOrderStatusUseCase,
);

export default updateOrderStatusController;
