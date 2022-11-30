import ProductsRepository from '../../repositories/ProductsRepository';
import CreateProductUseCase from './CreateProductUseCase';
import CreateProductController from '../../controllers/CreateProductController';

const productsRepository = new ProductsRepository();
const createProductUseCase = new CreateProductUseCase(productsRepository);
const createProductController = new CreateProductController(
  createProductUseCase,
);

export default createProductController;
