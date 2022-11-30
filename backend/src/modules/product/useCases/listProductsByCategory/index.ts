import ProductsRepository from '../../repositories/ProductsRepository';
import ListProductsByCategoryUseCase from './listProductsByCategoryUseCase';
import ListProductsByCategoryController from '../../controllers/ListProductsByCategory';

const productsRepository = new ProductsRepository();
const listProductsByCategoryUseCase = new ListProductsByCategoryUseCase(
  productsRepository,
);
const listProductsByCategoryController = new ListProductsByCategoryController(
  listProductsByCategoryUseCase,
);

export default listProductsByCategoryController;
