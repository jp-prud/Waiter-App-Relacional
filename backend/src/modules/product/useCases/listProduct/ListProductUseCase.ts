import ProductsRepository from '../../repositories/ProductsRepository';

class ListProductsUseCase {
  productsRepository: ProductsRepository;

  constructor(productsRepository: ProductsRepository) {
    this.productsRepository = productsRepository;
  }

  execute() {
    return this.productsRepository.index();
  }
}

export default ListProductsUseCase;
