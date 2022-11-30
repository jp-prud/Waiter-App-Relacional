import CategoriesRepository from '../../repositories/CategoriesRepository';

class ListCategoryUseCase {
  categoriesRepository: CategoriesRepository;

  constructor(categoriesRepository: CategoriesRepository) {
    this.categoriesRepository = categoriesRepository;
  }

  execute() {
    return this.categoriesRepository.index();
  }
}

export default ListCategoryUseCase;
