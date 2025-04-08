import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import {
  addProductController,
  deleteProductController,
  getAllProductsController,
  getProductByIdConstroller,
  patchProductController,
} from '../controllers/products.js';

const productsRouter = Router();

productsRouter.get('/', ctrlWrapper(getAllProductsController));

productsRouter.get('/:id', ctrlWrapper(getProductByIdConstroller));

productsRouter.post('/', ctrlWrapper(addProductController));

productsRouter.patch('/:id', ctrlWrapper(patchProductController));

productsRouter.delete('/:id', ctrlWrapper(deleteProductController));

export default productsRouter;
