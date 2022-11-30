import { Product } from '../model/Product';
import { IProduct } from '../types';

class ProductsRepository {
  index() {
    return Product.find();
  }

  listProductsByCategory(categoryId: string) {
    return Product.find().where('category').equals(categoryId);
  }

  store(input: IProduct) {
    return Product.create(input);
  }

  delete(input: string) {
    return Product.findByIdAndDelete(input);
  }
}

export default ProductsRepository;
