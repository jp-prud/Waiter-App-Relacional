import CreateOrdersController from '../../controllers/CreateOrder';
import OrdersRepository from '../../repositories/OrdersRepository';
import CreateOrdersUseCase from './CreateOrderUseCase';

const categoriesRepository = new OrdersRepository();

const createOrdersUseCase = new CreateOrdersUseCase(categoriesRepository);

const createOrdersController = new CreateOrdersController(createOrdersUseCase);

export default createOrdersController;
