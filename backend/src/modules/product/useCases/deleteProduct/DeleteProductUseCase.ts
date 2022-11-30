import ProductsRepository from '../../repositories/ProductsRepository';

class DeleteProductUseCase {
  productsRepository: ProductsRepository;

  constructor(productsRepository: ProductsRepository) {
    this.productsRepository = productsRepository;
  }

  execute(productId: string) {
    return this.productsRepository.delete(productId);
  }
}

export default DeleteProductUseCase;
