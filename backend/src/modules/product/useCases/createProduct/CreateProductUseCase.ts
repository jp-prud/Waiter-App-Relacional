import ProductsRepository from '../../repositories/ProductsRepository';
import { IProduct } from '../../types';

class CreateProductUseCase {
  productRepository: ProductsRepository;

  constructor(productRepository: ProductsRepository) {
    this.productRepository = productRepository;
  }

  async execute(input: IProduct) {
    return await this.productRepository.store(input);
  }
}

export default CreateProductUseCase;
