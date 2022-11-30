import CategoriesRepository from '../../repositories/CategoriesRepository';
import DeleteCategoryUseCase from './deleteCategoryUseCase';
import DeleteCategoryController from '../../controllers/DeleteCategoryController';

const categoriesRepository = new CategoriesRepository();
const deleteCategoryUseCase = new DeleteCategoryUseCase(categoriesRepository);
const deleteCategoryController = new DeleteCategoryController(
  deleteCategoryUseCase,
);

export default deleteCategoryController;
