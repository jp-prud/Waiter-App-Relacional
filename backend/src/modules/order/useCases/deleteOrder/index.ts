import OrdersRepository from '../../repositories/OrdersRepository';
import DeleteOrderUseCase from './DeleteOrderUseCase';
import DeleteOrderController from '../../controllers/DeleteOrderController';

const ordersRepository = new OrdersRepository();
const deleteOrderUseCase = new DeleteOrderUseCase(ordersRepository);
const deleteOrderController = new DeleteOrderController(
  deleteOrderUseCase,
);

export default deleteOrderController;
