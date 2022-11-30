import CreateCategoryController from '../../controllers/CreateCategoryController';
import CategoriesRepository from '../../repositories/CategoriesRepository';
import CreateCategoryUseCase from './CreateCategoryUseCase';

const categoriesRepository = new CategoriesRepository();

const createCategoryUseCase = new CreateCategoryUseCase(categoriesRepository);

const createCategoryController = new CreateCategoryController(
  createCategoryUseCase,
);

export default createCategoryController;
