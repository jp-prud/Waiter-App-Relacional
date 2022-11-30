import OrdersRepository from '../../repositories/OrdersRepository';
import ListOrderUseCase from './ListOrderUseCase';
import ListOrderController from '../../controllers/ListOrderController';

const ordersRepository = new OrdersRepository();

const listOrderUseCase = new ListOrderUseCase(ordersRepository);

const listOrderController = new ListOrderController(listOrderUseCase);

export default listOrderController;
