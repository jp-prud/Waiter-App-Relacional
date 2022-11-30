import ProductsRepository from '../../repositories/ProductsRepository';
import DeleteProductUseCase from './DeleteProductUseCase';
import DeleteProductController from '../../controllers/DeleteProductController';

const productRepository = new ProductsRepository();
const deleteProductUseCase = new DeleteProductUseCase(productRepository);
const deleteProductController = new DeleteProductController(
  deleteProductUseCase,
);

export default deleteProductController;
