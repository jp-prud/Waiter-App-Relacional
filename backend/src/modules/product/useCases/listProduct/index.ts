import ProductsRepository from '../../repositories/ProductsRepository';
import ListProductUseCase from './ListProductUseCase';
import ListProductController from '../../controllers/ListProductController';

const productsRepository = new ProductsRepository();
const listProductsUseCase = new ListProductUseCase(productsRepository);
const listProductController = new ListProductController(listProductsUseCase);

export default listProductController;
