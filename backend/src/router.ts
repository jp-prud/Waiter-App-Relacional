import path from 'node:path';

import { Router } from 'express';
import multer from 'multer';

import DeleteCategoryController from './modules/category/useCases/deleteCategory';
import CreateCategoryController from './modules/category/useCases/createCategory';
import ListCategoryController from './modules/category/useCases/listCategory';

import ListProductController from './modules/product/useCases/listProduct';
import ListProductsByCategoryController from './modules/product/useCases/listProductsByCategory';
import CreateProductController from './modules/product/useCases/createProduct';
import DeleteProductController from './modules/product/useCases/deleteProduct';

import ListOrderController from './modules/order/useCases/listOrder';
import CreateOrdersController from './modules/order/useCases/createOrder';
import UpdateOrderStatusUseCase from './modules/order/useCases/updateOrderStatus';
import DeleteOrderController from './modules/order/useCases/deleteOrder';

export const router = Router();

const upload = multer({
  storage: multer.diskStorage({
    destination(request, file, callback) {
      callback(null, path.resolve(__dirname, '..', 'uploads'));
    },
    filename(req, file, callback) {
      callback(null, `${Date.now()}-${file.originalname}`);
    },
  }),
});

// List categories
router.get('/categories', (request, response) =>
  ListCategoryController.handle(request, response),
);

// Create categories
router.post('/categories', (request, response) => {
  CreateCategoryController.handle(request, response);
});

// Delete category
router.delete('/categories/:categoryId', (request, response) => {
  DeleteCategoryController.handle(request, response);
});

// List products
router.get('/products', (request, response) => {
  ListProductController.handle(request, response);
});

// Create products
router.post('/products', upload.single('image'), (request, response) => {
  CreateProductController.handle(request, response);
});

// Get products by category
router.get('/categories/:categoryId/products', (request, response) => {
  ListProductsByCategoryController.handle(request, response);
});

// Delete products
router.delete('/products/:productId', (request, response) => {
  DeleteProductController.handle(request, response);
});

// List orders
router.get('/orders', (request, response) => {
  ListOrderController.handle(request, response);
});

// Create order
router.post('/orders', (request, response) => {
  CreateOrdersController.handle(request, response);
});

// Change order status
router.patch('/orders/:orderId', (request, response) => {
  UpdateOrderStatusUseCase.handle(request, response);
});

// Delete or Cancel order
router.delete('/orders/:orderId', (request, response) => {
  DeleteOrderController.handle(request, response);
});
