import ProductsRepository from 'src/modules/product/repositories/ProductsRepository';

class ListProductsByCategoryUseCase {
  productsRepository: ProductsRepository;

  constructor(productsRepository: ProductsRepository) {
    this.productsRepository = productsRepository;
  }

  async execute(input: string) {
    return await this.productsRepository.listProductsByCategory(input);
  }
}

export default ListProductsByCategoryUseCase;
