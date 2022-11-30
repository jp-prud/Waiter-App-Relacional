import CategoriesRepository from '../../repositories/CategoriesRepository';

class DeleteCategoryUseCase {
  categoriesRepository: CategoriesRepository;

  constructor(categoriesRepository: CategoriesRepository) {
    this.categoriesRepository = categoriesRepository;
  }

  execute(categoryId: string) {
    return this.categoriesRepository.delete(categoryId);
  }
}

export default DeleteCategoryUseCase;
