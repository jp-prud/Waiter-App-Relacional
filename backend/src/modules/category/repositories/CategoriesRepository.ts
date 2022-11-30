import { Category } from '../model/Category';
import { ICategory } from '../types';

import { query } from '../../../database/';

class CategoriesRepository {
  async index() {
    const rows = await query('SELECT category', 1);
  }

  findByName(name: string) {
    return Category.findOne({ name: name });
  }

  store({ icon, name }: ICategory) {
    return Category.create({
      icon,
      name,
    });
  }

  delete(categoryId: string) {
    return Category.deleteOne({ _id: categoryId });
  }
}

export default CategoriesRepository;
